import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://vinayakjainlife:suddendeath123%40@cluster0.efw6gnu.mongodb.net/automap');

// ─── Schemas ────────────────────────────────────────────────────────────────

const locationSchema = new mongoose.Schema({
  lat: Number,
  lng: Number,
  timestamp: { type: Date, default: Date.now, expires: 60 }
});
const Location = mongoose.model('automap', locationSchema);

const historicalSchema = new mongoose.Schema({
  lat: Number,
  lng: Number,
  timestamp: { type: Date, default: Date.now },
  gridId: String,
  hour: Number
});
const HistoricalData = mongoose.model('historicaldata', historicalSchema);

// ─── Helpers ─────────────────────────────────────────────────────────────────

const generateRandomLocation = (centerLat, centerLng, spread) => ({
  lat: centerLat + (Math.random() - 0.5) * spread,
  lng: centerLng + (Math.random() - 0.5) * spread
});

const getGridId = (lat, lng) =>
  `${Math.floor(lat * 100)}_${Math.floor(lng * 100)}`;

const gridIdToLatLng = (gridId) => {
  const [gLat, gLng] = gridId.split('_').map(Number);
  return { lat: (gLat + 0.5) / 100, lng: (gLng + 0.5) / 100 };
};

const getTier = (count) => {
  if (count >= 20) return 'red';
  if (count >= 10) return 'orange';
  if (count >= 5)  return 'yellow';
  return 'green';
};

// ─── IN-MEMORY GRID SNAPSHOT ──────────────────────────────────────────────────

const gridSnapshot = {};

const decayGridSnapshot = () => {
  for (const gid of Object.keys(gridSnapshot)) {
    gridSnapshot[gid].count *= 0.75;
    if (gridSnapshot[gid].count < 0.5) delete gridSnapshot[gid];
  }
};

const syncSnapshotFromDB = async () => {
  try {
    const signals = await Location.find({
      timestamp: { $gt: new Date(Date.now() - 60000) }
    });
    decayGridSnapshot();
    signals.forEach(sig => {
      const gid = getGridId(sig.lat, sig.lng);
      if (!gridSnapshot[gid]) {
        const c = gridIdToLatLng(gid);
        gridSnapshot[gid] = { count: 0, lat: c.lat, lng: c.lng, lastSeen: sig.timestamp };
      }
      gridSnapshot[gid].count += 1;
      if (new Date(sig.timestamp) > new Date(gridSnapshot[gid].lastSeen))
        gridSnapshot[gid].lastSeen = sig.timestamp;
    });
    console.log(`Snapshot: ${signals.length} signals → ${Object.keys(gridSnapshot).length} grids`);
  } catch (err) {
    console.error('Snapshot sync error:', err.message);
  }
};

setInterval(syncSnapshotFromDB, 30 * 1000);

const pushToSnapshot = (lat, lng) => {
  const gid = getGridId(lat, lng);
  if (!gridSnapshot[gid]) {
    const c = gridIdToLatLng(gid);
    gridSnapshot[gid] = { count: 0, lat: c.lat, lng: c.lng, lastSeen: new Date() };
  }
  gridSnapshot[gid].count += 1;
  gridSnapshot[gid].lastSeen = new Date();
};

// ─── Clustering ───────────────────────────────────────────────────────────────

const clusterSignals = (signals, distanceThreshold = 0.0018) => {
  const clusters = [];
  const used = new Set();
  signals.forEach((signal, i) => {
    if (used.has(i)) return;
    const cluster = [signal];
    used.add(i);
    signals.forEach((other, j) => {
      if (used.has(j)) return;
      if (Math.hypot(signal.lat - other.lat, signal.lng - other.lng) <= distanceThreshold) {
        cluster.push(other); used.add(j);
      }
    });
    const lat = cluster.reduce((s, c) => s + c.lat, 0) / cluster.length;
    const lng = cluster.reduce((s, c) => s + c.lng, 0) / cluster.length;
    clusters.push({ lat, lng, count: cluster.length, tier: getTier(cluster.length) });
  });
  return clusters;
};

// ─── Prediction ───────────────────────────────────────────────────────────────

const buildPredictions = (liveHotspots) => {
  const MERGE_DIST = 0.002;
  const predictions = [];
  for (const grid of Object.values(gridSnapshot)) {
    const score = Math.round(grid.count);
    if (score < 2) continue;
    if (liveHotspots.some(live => Math.hypot(live.lat - grid.lat, live.lng - grid.lng) < MERGE_DIST)) continue;
    const secsAgo = (Date.now() - new Date(grid.lastSeen).getTime()) / 1000;
    const recency = Math.max(0.1, 1 - secsAgo / 120);
    const predictedCount = Math.round(score * recency);
    if (predictedCount < 2) continue;
    predictions.push({
      lat: grid.lat, lng: grid.lng,
      count: predictedCount, rawScore: score,
      tier: getTier(predictedCount),
      type: 'predicted', secsAgo: Math.round(secsAgo)
    });
  }
  return predictions.sort((a, b) => b.count - a.count).slice(0, 25);
};

// ─── HOTSPOT ZONES — spread across ALL of Patiala ────────────────────────────
//
// Patiala city spans roughly:
//   North–South: 30.295  (Sanaur / Rajpura Road south) → 30.395 (Tripuri / Urban Estate north)
//   East–West:   76.330  (Nabha Road / Civil Lines west) → 76.460 (Sirhind Road / NRI Colony east)
//
// Zones are placed at real locality centres verified against OpenStreetMap
// and Wikipedia. Spread (radius) is tuned to match the physical size of
// each area so signals land on roads, not in fields.

const HOTSPOT_ZONES = [
  // ── CORE CITY (high density) ─────────────────────────────────────────────
  {
    name: 'Qila Mubarak / Old City',
    lat: 30.3350, lng: 76.4002,           // historical walled-city centre
    points: 55, spread: 0.0020,            // 🔴 red
    desc: 'Dense old-city market activity'
  },
  {
    name: 'Adalat Bazaar / Sheranwala Gate',
    lat: 30.3370, lng: 76.3968,           // main bazaar strip
    points: 48, spread: 0.0018,            // 🔴 red
    desc: 'Crowded market & court complex'
  },
  {
    name: 'New Grain Market (Anaj Mandi)',
    lat: 30.3420, lng: 76.3885,           // grain market, western core
    points: 38, spread: 0.0022,            // 🔴 red
    desc: 'High-turnover wholesale market'
  },

  // ── TRANSPORT HUBS ──────────────────────────────────────────────────────
  {
    name: 'Patiala Railway Station',
    lat: 30.3477, lng: 76.3942,           // actual station coords
    points: 32, spread: 0.0020,            // 🔴 red
    desc: 'Major rail terminus'
  },
  {
    name: 'New Bus Stand',
    lat: 30.3300, lng: 76.4060,           // ISBT-style bus terminal east side
    points: 30, spread: 0.0022,            // 🟠 orange
    desc: 'Inter-city bus depot'
  },

  // ── COMMERCIAL CORRIDORS ────────────────────────────────────────────────
  {
    name: 'Leela Bhawan / The Mall Road',
    lat: 30.3290, lng: 76.3840,           // Mall Road corridor west
    points: 22, spread: 0.0025,            // 🟠 orange
    desc: 'Shopping & hospitality strip'
  },
  {
    name: 'Sirhind Road Market',
    lat: 30.3580, lng: 76.4120,           // Sirhind Road commercial belt NE
    points: 18, spread: 0.0030,            // 🟠 orange
    desc: 'North-east arterial market'
  },
  {
    name: 'Nabha Road Market',
    lat: 30.3200, lng: 76.3780,           // Nabha Road, south-west
    points: 12, spread: 0.0028,            // 🟠 orange
    desc: 'South-west road commercial zone'
  },

  // ── INSTITUTIONAL / RESIDENTIAL ─────────────────────────────────────────
  {
    name: 'Punjabi University Campus',
    lat: 30.3560, lng: 76.3760,           // campus NW
    points: 6, spread: 0.0035,            // 🟡 yellow
    desc: 'University & surrounding hostels'
  },
  {
    name: 'Urban Estate Phase I & II',
    lat: 30.3490, lng: 76.3660,           // planned township west
    points: 11, spread: 0.0040,            // 🟡 yellow
    desc: 'Residential planned township'
  },
  {
    name: 'Tripuri Town',
    lat: 30.3720, lng: 76.3940,           // north Patiala suburb
    points: 10, spread: 0.0035,            // 🟡 yellow
    desc: 'Dense northern suburb'
  },
  {
    name: 'Civil Lines / Rose Avenue',
    lat: 30.3610, lng: 76.3830,           // administrative NW sector
    points: 4,  spread: 0.0040,            // 🟡 yellow
    desc: 'Government offices & bungalows'
  },

  // ── PERIPHERAL / LOW DENSITY ────────────────────────────────────────────
  {
    name: 'Baradari Gardens',
    lat: 30.3260, lng: 76.4080,           // heritage garden SE
    points: 3,  spread: 0.0050,            // 🟡→🟢
    desc: 'Historic garden leisure zone'
  },
  {
    name: 'Sanaur Road (south)',
    lat: 30.3060, lng: 76.3950,           // outer south toward Sanaur
    points: 2,  spread: 0.0060,            // 🟢 green
    desc: 'Southern approach road activity'
  },
  {
    name: 'Rajpura Road / Focal Point',
    lat: 30.3150, lng: 76.4160,           // industrial focal point SE
    points: 2,  spread: 0.0055,            // 🟢 green
    desc: 'Industrial estate, SE fringe'
  },
  {
    name: 'Model Town / Heera Bagh',
    lat: 30.3660, lng: 76.4020,           // model town NE residential
    points: 1,  spread: 0.0045,            // 🟢 green
    desc: 'Upscale residential area'
  },
];

// ─── Test data generation ─────────────────────────────────────────────────────

const generateHotspots = async () => {
  await Location.deleteMany({});
  const now = Date.now();
  const locations = [];

  HOTSPOT_ZONES.forEach(zone => {
    const burst = zone.points * 3;
    for (let i = 0; i < burst; i++) {
      const loc = generateRandomLocation(zone.lat, zone.lng, zone.spread);
      locations.push({
        lat: loc.lat,
        lng: loc.lng,
        timestamp: new Date(now - Math.floor(Math.random() * 55000))
      });
    }
  });

  await Location.insertMany(locations);
  locations.forEach(loc => pushToSnapshot(loc.lat, loc.lng));

  console.log(`Generated ${locations.length} signals across ${HOTSPOT_ZONES.length} zones`);
  return locations.length;
};

// ─── Routes ───────────────────────────────────────────────────────────────────

app.get('/signals', async (req, res) => {
  try {
    const signals = await Location.find({ timestamp: { $gt: new Date(Date.now() - 60000) } });
    res.json(signals);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/hotspots', async (req, res) => {
  try {
    const signals = await Location.find({ timestamp: { $gt: new Date(Date.now() - 60000) } });
    res.json(clusterSignals(signals));
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/combined-hotspots', async (req, res) => {
  try {
    const signals = await Location.find({ timestamp: { $gt: new Date(Date.now() - 60000) } });
    const live      = clusterSignals(signals).map(h => ({ ...h, type: 'live' }));
    const predicted = buildPredictions(live);
    res.json({
      live, predicted,
      meta: {
        liveCount:      live.length,
        predictedCount: predicted.length,
        snapshotGrids:  Object.keys(gridSnapshot).length,
        liveSignals:    signals.length,
        hour:           new Date().getHours(),
        timestamp:      new Date().toISOString()
      }
    });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/predicted-hotspots', async (req, res) => {
  try { res.json(buildPredictions([])); }
  catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/signal', async (req, res) => {
  try {
    const { lat, lng } = req.body;
    await new Location({ lat, lng }).save();
    pushToSnapshot(lat, lng);
    const gid = getGridId(lat, lng);
    await new HistoricalData({ lat, lng, gridId: gid, hour: new Date().getHours() }).save();
    res.status(201).json({ message: 'Signal saved', gridId: gid });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/generate-test-locations', async (req, res) => {
  try {
    const count = await generateHotspots();
    res.json({
      message: `Generated ${count} signals across ${HOTSPOT_ZONES.length} zones`,
      count,
      zones: HOTSPOT_ZONES.map(z => ({
        name: z.name, signals: z.points * 3, tier: getTier(z.points * 3)
      }))
    });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ─── Auto simulation ──────────────────────────────────────────────────────────
// Weighted so high-traffic zones emit proportionally more signals

const PATIALA_BOUNDS = { north: 30.400, south: 30.290, east: 76.470, west: 76.320 };

const startAutoSimulation = () => {
  // Weight each zone by its relative importance
  const weightedZones = HOTSPOT_ZONES.flatMap(z => Array(Math.max(1, Math.ceil(z.points / 8))).fill(z));

  setInterval(async () => {
    try {
      const useZone = Math.random() < 0.80; // 80% stay within known zones
      let loc;

      if (useZone) {
        const zone = weightedZones[Math.floor(Math.random() * weightedZones.length)];
        loc = generateRandomLocation(zone.lat, zone.lng, zone.spread * 1.5);
      } else {
        // Random anywhere in the city bounds (background noise)
        loc = {
          lat: PATIALA_BOUNDS.south + Math.random() * (PATIALA_BOUNDS.north - PATIALA_BOUNDS.south),
          lng: PATIALA_BOUNDS.west  + Math.random() * (PATIALA_BOUNDS.east  - PATIALA_BOUNDS.west)
        };
      }

      loc.lat = Math.max(PATIALA_BOUNDS.south, Math.min(PATIALA_BOUNDS.north, loc.lat));
      loc.lng = Math.max(PATIALA_BOUNDS.west,  Math.min(PATIALA_BOUNDS.east,  loc.lng));

      await new Location(loc).save();
      pushToSnapshot(loc.lat, loc.lng);

      const gid  = getGridId(loc.lat, loc.lng);
      const hour = new Date().getHours();
      await new HistoricalData({ ...loc, gridId: gid, hour }).save();
    } catch (err) {
      console.error('Auto sim error:', err.message);
    }
  }, 1500);
};

// ─── Startup ──────────────────────────────────────────────────────────────────

const init = async () => {
  const count = await Location.countDocuments();
  if (count === 0) {
    console.log('No existing data — generating initial hotspots across Patiala...');
    await generateHotspots();
  } else {
    console.log(`Found ${count} existing signals — syncing snapshot...`);
    await syncSnapshotFromDB();
  }
};

init().catch(console.error);
startAutoSimulation();

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`\n✅  AutoMap server on port ${PORT}`);
  console.log(`📍  ${HOTSPOT_ZONES.length} zones across Patiala:`);
  HOTSPOT_ZONES.forEach(z =>
    console.log(`    [${getTier(z.points * 3).padEnd(6)}] ${z.name} @ ${z.lat.toFixed(4)},${z.lng.toFixed(4)}`)
  );
  console.log(`\n🔄  Snapshot sync every 30s | Auto-sim every 1.5s\n`);
});