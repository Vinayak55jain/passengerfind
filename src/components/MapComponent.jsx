import React, { useState, useEffect, useCallback } from "react";
import { MapContainer, TileLayer, Marker, Circle, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const RecenterMap = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.setView(position, 15);
    }
  }, [map, position]);
  return null;
};

const MapComponent = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [hotspots, setHotspots] = useState([]);
  const [predictedHotspots, setPredictedHotspots] = useState([]);
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [loadingLocation, setLoadingLocation] = useState(true);

  const fetchHotspots = useCallback(async () => {
    try {
      const res = await fetch("/hotspots");
      if (!res.ok) throw new Error("Failed to fetch hotspots");
      const data = await res.json();
      if (Array.isArray(data)) {
        setHotspots(data);
      }
    } catch (err) {
      console.error("Hotspot fetch error:", err);
    }
  }, []);

  const fetchPredictedHotspots = useCallback(async () => {
    try {
      const res = await fetch("/predicted-hotspots");
      if (!res.ok) throw new Error("Failed to fetch predicted hotspots");
      const data = await res.json();
      if (Array.isArray(data)) {
        setPredictedHotspots(data);
      }
    } catch (err) {
      console.error("Predicted hotspot fetch error:", err);
    }
  }, []);

  const requestUserLocation = useCallback((onSuccess) => {
    if (!navigator.geolocation) {
      setPermissionDenied(true);
      setLoadingLocation(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const loc = [pos.coords.latitude, pos.coords.longitude];
        setUserLocation(loc);
        setPermissionDenied(false);
        setLoadingLocation(false);
        if (onSuccess) onSuccess(loc);
      },
      (err) => {
        console.warn("Geolocation error", err);
        setPermissionDenied(true);
        setLoadingLocation(false);
      },
      { enableHighAccuracy: true }
    );
  }, []);

  useEffect(() => {
    requestUserLocation();
    fetchHotspots();
    fetchPredictedHotspots();
    const interval = setInterval(() => {
      fetchHotspots();
      fetchPredictedHotspots();
    }, 5000);
    return () => clearInterval(interval);
  }, [fetchHotspots, fetchPredictedHotspots, requestUserLocation]);

  const generateTestLocations = async () => {
    try {
      const res = await fetch("/generate-test-locations", {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      });
      if (!res.ok) throw new Error("Failed to generate test locations");
      const data = await res.json();
      console.log(data.message);
      // Refresh hotspots immediately
      fetchHotspots();
      fetchPredictedHotspots();
    } catch (err) {
      console.error("Error generating test locations:", err);
    }
  };

  const findAuto = async () => {
    requestUserLocation(async (loc) => {
      const [lat, lng] = loc;
      const signal = { lat, lng };

      try {
        const res = await fetch("/signal", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(signal)
        });
        if (!res.ok) throw new Error("Signal post failed");
        console.log("Demand signal sent successfully");
      } catch (err) {
        console.error("Unable to post signal", err);
      }

      // Refresh hotspots after posting
      fetchHotspots();
      fetchPredictedHotspots();
    });
  };

  const getColorByDensity = (count) => {
    if (count >= 12) return "#FF0000"; // Red - High density (12+ passengers)
    if (count >= 7) return "#FFA500"; // Orange - Medium density (7-11 passengers)
    return "#32CD32"; // Green - Low density (1-6 passengers)
  };

  if (loadingLocation) {
    return (
      <div style={{ height: "100vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div>Requesting location…</div>
      </div>
    );
  }

  if (permissionDenied || !userLocation) {
    return (
      <div style={{ height: "100vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>
        Location access required
      </div>
    );
  }

  return (
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>
      <MapContainer center={userLocation || [30.3398, 76.3869]} zoom={userLocation ? 15 : 13} style={{ height: "100%", width: "100%" }}>
        <TileLayer attribution="&copy; OpenStreetMap contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <RecenterMap position={userLocation} />

        <Marker position={userLocation}>
          <Popup>Your location</Popup>
        </Marker>

        {/* Render real hotspots with counts */}
        {hotspots.map((hotspot, idx) => {
          const color = getColorByDensity(hotspot.count);
          const radius = 30 + hotspot.count * 5; // Size based on count
          const opacity = Math.min(0.4 + (hotspot.count / 10) * 0.3, 0.8);

          return (
            <React.Fragment key={`real-hotspot-${idx}`}>
              <Circle
                center={[hotspot.lat, hotspot.lng]}
                radius={radius}
                pathOptions={{
                  color: color,
                  fillColor: color,
                  fillOpacity: opacity,
                  opacity: 0.7
                }}
              />
              <Marker position={[hotspot.lat, hotspot.lng]}>
                <Popup>
                  <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    <div style={{ fontSize: '20px', color: color, marginBottom: '8px' }}>
                      🚕 {hotspot.count}
                    </div>
                    <div style={{ fontSize: '14px' }}>
                      {hotspot.count} passenger{hotspot.count !== 1 ? 's' : ''} waiting
                    </div>
                    <div style={{ fontSize: '12px', color: '#666' }}>
                      Real-time demand
                    </div>
                  </div>
                </Popup>
              </Marker>
            </React.Fragment>
          );
        })}
        

        {/* Render predicted hotspots */}
        {predictedHotspots.map((hotspot, idx) => {
  const radius = 30 + hotspot.count * 4;

  return (
    <React.Fragment key={`predicted-${idx}`}>
      
      {/* 🔵 Predicted Circle */}
      <Circle
        center={[hotspot.lat, hotspot.lng]}
        radius={radius}
        pathOptions={{
          color: "#0000FF",
          fillColor: "#0000FF",
          fillOpacity: 0.25,
          opacity: 0.6,
          dashArray: "6, 6"
        }}
      />

      {/* 🔢 Number Marker */}
      <Marker
        position={[hotspot.lat, hotspot.lng]}
        icon={createPredictedIcon(hotspot.count)}
      >
        <Popup>
          <div style={{ textAlign: "center", fontWeight: "bold" }}>
            <div style={{ fontSize: "18px", color: "#0000FF" }}>
              🔮 {hotspot.count}
            </div>
            <div style={{ fontSize: "13px" }}>
              Predicted passengers
            </div>
          </div>
        </Popup>
      </Marker>

    </React.Fragment>
  );
})}
      </MapContainer>

      <button
        onClick={findAuto}
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "14px 20px",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "999px",
          zIndex: 1000,
          cursor: "pointer",
          fontWeight: 700,
          boxShadow: "0 3px 10px rgba(0, 0, 0, 0.15)"
        }}
      >
        Find Auto 🚕
      </button>

     
    </div>
  );
};

export default MapComponent;