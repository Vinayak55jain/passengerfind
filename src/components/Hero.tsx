"use client";

import { useEffect, useState } from "react";
import GlareHover from "./GlareHover";

const achievements = [
  {
    title: "Adobe Hackathon",
    desc: "Qualified for Round 2 of Adobe India Hackathon 2025 - building core systems for document understanding.",
    titleSizeClass: "text-2xl"
  },
  {
    title: "1st Runner-up",
    desc: "Saturnalia Hackathon 2024 among 1,000+ participants, building real-time collaboration tools.",
    titleSizeClass: "text-3xl"
  },
  {
    title: "GSSoC Mentor",
    desc: "Selected as Mentor for GirlScript Summer of Code (GSSoC) 2025, guiding open-source contributions.",
    titleSizeClass: "text-3xl"
  }
];

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [clock, setClock] = useState("--:--");

  useEffect(() => {
    const updateClock = () => {
  setClock(
    new Date().toLocaleTimeString("en-US", {
      timeZone: "UTC",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit"
    })
  );
};

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  const swapAchievements = () => {
    setActiveIdx((prev) => (prev + 1) % achievements.length);
  };

  return (
    <div className="yolo-bento" id="bento">
      {/* Main Identity Card */}
      <div className="col-span-12 lg:col-span-8 row-span-6 bento-card justify-between bg-surface reveal px-12 md:px-16 py-12">
        <div className="flex flex-col h-full justify-between">
          <div className="mb-12">
            <span className="font-montserrat text-primary font-bold text-[10px] tracking-[0.4em] uppercase block mb-4">
              SYSTEM ARCHITECT &amp; CREATIVE DEVELOPER
            </span>
            <h2 className="font-anton text-xl md:text-2xl font-bold uppercase text-primary/80 tracking-[0.2em] opacity-80">
              VINAYAK JAIN
            </h2>
          </div>
          <div className="max-w-3xl flex-grow flex flex-col justify-center">
            <h1 className="font-anton text-5xl md:text-6xl lg:text-[76px] font-black leading-[1.05] tracking-tighter mb-8 hero-title-mask">
            BULIDING DIGITIAL
              <br />
              HIGH-FIDELITY
              <br />
              INFRASTURCTURE
            </h1>
            <p className="font-montserrat text-sm md:text-base text-on-surface-variant max-w-xl mb-12 leading-relaxed uppercase opacity-70">
              Engineering high-performance microservices with a Sahara-inspired minimalist aesthetic.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-auto">
            <a
              href="/Vinayak_Jain_Ai_role.pdf"
              download="Vinayak_Jain_Ai_role.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat inline-flex items-center gap-3 bg-gradient-to-r from-[#0047ff] to-[#8b5cf6] text-white px-10 py-5 rounded-full text-[12px] font-black tracking-widest uppercase hover:scale-105 transition-all shadow-lg shadow-blue-500/20"
            >
              DOWNLOAD RESUME <span className="material-symbols-outlined text-sm">download</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bio Card */}
      <div
        className="col-span-12 lg:col-span-4 row-span-3 bento-card bg-surface-container-high reveal"
        style={{ transitionDelay: "100ms" }}
      >
        <div className="flex-1 flex flex-col justify-center py-4">
          <p className="font-montserrat text-xl md:text-2xl text-on-surface leading-snug">
            B.Tech student at <span className="text-primary font-bold">Thapar Institute</span>. Architecting
            high-performance backends and <span className="italic">AI-integrated</span> infrastructure for the next
            generation of scale.
          </p>
          <p className="font-montserrat mt-4 text-xs text-on-surface-variant uppercase tracking-wider opacity-60">
           The future belongs to those who build it.
          </p>
        </div>
        <div className="mt-4 pt-8 border-t border-white/5">
          <a
            href="#projects"
            className="font-montserrat group inline-flex items-center gap-4 text-[10px] font-black tracking-[0.2em] text-primary hover:gap-6 transition-all uppercase"
          >
            Explore Projects <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </div>

      {/* Achievements Swap Cell */}
      <GlareHover
        width="100%"
        height="100%"
        background="rgba(10, 14, 25, 0.75)"
        borderRadius="24px"
        borderColor="rgba(255,255,255,0.08)"
        glareColor="#60a5fa"
        glareOpacity={0.18}
        glareAngle={-35}
        glareSize={220}
        transitionDuration={650}
        className="col-span-12 md:col-span-6 lg:col-span-4 row-span-3 bento-card reveal"
        style={{ transitionDelay: "200ms" }}
      >
        <div className="flex justify-between items-center mb-10">
          <h3 className="font-montserrat font-bold text-[12px] tracking-[0.3em] uppercase opacity-40">Achievements</h3>
          <button
            className="size-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer"
            onClick={swapAchievements}
          >
            <span className="material-symbols-outlined text-sm opacity-60">swap_horiz</span>
          </button>
        </div>
        <div className="card-swap-container">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className={`card-swap-item ${idx === activeIdx ? "" : "hidden-card"}`}
            >
              <div className={`font-anton ${item.titleSizeClass} font-black mb-3 text-white uppercase`}>
                {item.title}
              </div>
              <p className="font-montserrat text-[14px] text-on-surface-variant leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </GlareHover>

      {/* Status Cell */}
      <div
        className="col-span-6 md:col-span-3 lg:col-span-2 row-span-2 bento-card items-center justify-center text-center reveal"
        style={{ transitionDelay: "300ms" }}
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center relative mb-1">
            <div className="absolute inset-0 rounded-full animate-ping bg-primary/20 scale-150"></div>
            <div className="size-3.5 rounded-full bg-primary"></div>
          </div>
          <div className="space-y-1.5">
            <p className="font-anton font-black text-x uppercase tracking-[0.2em] text-primary">Available</p>
            <p className="font-montserrat text-[10px] opacity-40 uppercase tracking-widest">For New Projects</p>
          </div>
        </div>
      </div>

      {/* Location Cell */}
      <div
        className="col-span-6 md:col-span-3 lg:col-span-2 row-span-2 bento-card items-center justify-center text-center reveal"
        style={{ transitionDelay: "400ms" }}
      >
        <span className="material-symbols-outlined text-5xl mb-4 text-primary opacity-60">location_on</span>
        <p className="font-anton font-black text-base uppercase tracking-widest">Global</p>
        <div>
          <span style={{ fontSize: "1rem", letterSpacing: "0.1em" }}>/</span>
        </div>
        <div>
          <span style={{ fontSize: "1rem", letterSpacing: "0.1em" }}>&nbsp;REMOTE</span>
        </div>
        <p className="font-montserrat text-sm opacity-40 mt-2 uppercase">UTC-{clock}</p>
      </div>

      {/* Connect Cell */}
      <div
        className="col-span-12 md:col-span-6 lg:col-span-4 row-span-2 bento-card flex flex-col items-center justify-center reveal"
        style={{ transitionDelay: "500ms" }}
      >
        <div className="w-full">
          <h3 className="font-montserrat font-bold text-[12px] tracking-[0.3em] uppercase opacity-40 mb-6">Connect</h3>
          <div className="grid grid-cols-2 gap-3 w-full">
            <a
              className="group flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-primary/30 transition-all duration-300"
              href="https://github.com/vinayak-j"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="size-8 rounded-lg bg-surface flex items-center justify-center border border-white/5 group-hover:text-primary transition-colors">
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-montserrat text-[11px] font-bold uppercase tracking-widest text-primary">GitHub</span>
                
              </div>
            </a>
            <a
              className="group flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-secondary/30 transition-all duration-300"
              href="https://linkedin.com/in/vinayak-j"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="size-8 rounded-lg bg-surface flex items-center justify-center border border-white/5 group-hover:text-secondary transition-colors">
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-montserrat text-[11px] font-bold uppercase tracking-widest text-secondary">LinkedIn</span>
              
              </div>
            </a>
            <a
              className="group flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-tertiary/30 transition-all duration-300"
              href="https://twitter.com/vinayak_j"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="size-8 rounded-lg bg-surface flex items-center justify-center border border-white/5 group-hover:text-tertiary transition-colors">
                <svg className="size-3.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-montserrat text-[11px] font-bold uppercase tracking-widest text-tertiary">Twitter</span>
             
              </div>
            </a>
            <a
              className="group flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-primary/30 transition-all duration-300"
              href="mailto:contact@vinayak.dev"
            >
              <div className="size-8 rounded-lg bg-surface flex items-center justify-center border border-white/5 group-hover:text-primary transition-colors">
                <svg
                  className="size-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-montserrat text-[11px] font-bold uppercase tracking-widest text-primary">Email</span>
                
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
