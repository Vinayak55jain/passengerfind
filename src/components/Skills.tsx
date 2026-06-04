export default function Skills() {
  return (
    <div className="grid grid-cols-12 gap-6 mt-6" id="skills">
       <div className="col-span-12 mb-6 mt-10 ml-5 reveal">
          <h2 className="font-anton text-4xl font-black tracking-tight">SKILL SET</h2>
        </div>
      {/* Arsenal List Cell */}
      <div className="col-span-12 md:col-span-4 lg:col-span-4 bento-card bg-surface-container reveal">
        <h4 className="font-bold text-[10px] tracking-[0.4em] uppercase opacity-40 mb-10 font-montserrat">
          Languages & Proficiency
        </h4>
        <div className="grid grid-cols-1 gap-4 flex-1">
          <div className="group relative p-4 rounded-xl bg-surface-container-high border border-white/5 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(173,198,255,0.1)] transition-all duration-300 cursor-default flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary/60 group-hover:text-primary transition-colors">
                code
              </span>
              <span className="font-bold text-sm tracking-tight">Go (Golang)</span>
            </div>
            <span className="font-montserrat text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">
              Expert
            </span>
          </div>

          <div className="group relative p-4 rounded-xl bg-surface-container-high border border-white/5 hover:border-secondary/40 hover:shadow-[0_0_20px_rgba(208,188,255,0.1)] transition-all duration-300 cursor-default flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary/60 group-hover:text-secondary transition-colors">
                javascript
              </span>
              <span className="font-bold text-sm tracking-tight">JavaScript / TS</span>
            </div>
            <span className="font-montserrat text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded bg-secondary/10 text-secondary border border-secondary/20">
              Expert
            </span>
          </div>

          <div className="group relative p-4 rounded-xl bg-surface-container-high border border-white/5 hover:border-tertiary/40 hover:shadow-[0_0_20px_rgba(60,221,199,0.1)] transition-all duration-300 cursor-default flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-tertiary/60 group-hover:text-tertiary transition-colors">
                terminal
              </span>
              <span className="font-bold text-sm tracking-tight">Python (Async)</span>
            </div>
            <span className="font-montserrat text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded bg-tertiary/10 text-tertiary border border-tertiary/20">
              Expert
            </span>
          </div>

          <div className="group relative p-4 rounded-xl bg-surface-container-high border border-white/5 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(173,198,255,0.1)] transition-all duration-300 cursor-default flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary/60 group-hover:text-primary transition-colors">
                settings_ethernet
              </span>
              <span className="font-bold text-sm tracking-tight">C / C++</span>
            </div>
            <span className="font-montserrat text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded bg-white/5 text-on-surface-variant border border-white/10">
              Advanced
            </span>
          </div>

          <div className="group relative p-4 rounded-xl bg-surface-container-high border border-white/5 hover:border-secondary/40 hover:shadow-[0_0_20px_rgba(208,188,255,0.1)] transition-all duration-300 cursor-default flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary/60 group-hover:text-secondary transition-colors">
                html
              </span>
              <span className="font-bold text-sm tracking-tight">HTML / CSS</span>
            </div>
            <span className="font-montserrat text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded bg-secondary/10 text-secondary border border-secondary/20">
              Expert
            </span>
          </div>
        </div>
      </div>

      {/* Arsenal List Cell 2 */}
      <div className="col-span-12 md:col-span-8 lg:col-span-8 bento-card reveal">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
          {/* Core Tech & Databases */}
          <div className="flex flex-col h-full">
            <h4 className="font-bold text-[10px] tracking-[0.4em] uppercase opacity-40 mb-8 font-montserrat">
              Core Tech & Databases
            </h4>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-montserrat uppercase tracking-widest text-primary/60 mb-3">
                  Frontend / Backend
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white/5 border border-white/10 text-[12px] font-montserrat rounded">
                    React.js
                  </span>
                  <span className="px-2 py-1 bg-white/5 border border-white/10 text-[12px] font-montserrat rounded">
                    Node.js
                  </span>
                  <span className="px-2 py-1 bg-white/5 border border-white/10 text-[12px] font-montserrat rounded">
                    Express.js
                  </span>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-montserrat uppercase tracking-widest text-primary/60 mb-3">
                  Databases
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white/5 border border-white/10 text-[12px] font-montserrat rounded">
                    MongoDB
                  </span>
                  <span className="px-2 py-1 bg-white/5 border border-white/10 text-[12px] font-montserrat rounded">
                    PostgreSQL
                  </span>
                  <span className="px-2 py-1 bg-white/5 border border-white/10 text-[12px] font-montserrat rounded">
                    MySQL
                  </span>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-montserrat uppercase tracking-widest text-primary/60 mb-3">
                  Real-time
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white/5 border border-white/10 text-[12px] font-montserrat rounded">
                    Redis
                  </span>
                  <span className="px-2 py-1 bg-white/5 border border-white/10 text-[12px] font-montserrat rounded">
                    WebSockets
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Cloud & AI */}
          <div className="flex flex-col h-full border-l border-white/5 md:pl-8">
            <h4 className="font-bold text-[10px] tracking-[0.4em] uppercase opacity-40 mb-8 font-montserrat">
              Cloud & AI
            </h4>
            <div className="space-y-6">
              <div className="group cursor-default">
                <div className="flex items-center gap-2 mb-3">
                  <span className="size-1.5 rounded-full bg-primary animate-pulse"></span>
                  <p className="text-[10px] font-montserrat uppercase tracking-widest text-primary/60">
                    Cloud Infrastructure
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 border border-primary/20 text-[12px] font-montserrat rounded text-primary">
                    AWS Ecosystem
                  </span>
                  <span className="px-2 py-1 bg-white/5 border border-white/10 text-[12px] font-montserrat rounded">
                    Docker
                  </span>
                </div>
              </div>
              <div className="group cursor-default">
                <div className="flex items-center gap-2 mb-3">
                  <span className="size-1.5 rounded-full bg-tertiary animate-pulse"></span>
                  <p className="text-[10px] font-montserrat uppercase tracking-widest text-tertiary/60">
                    Intelligence
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-tertiary/10 border border-tertiary/20 text-[12px] font-montserrat rounded text-tertiary">
                    OpenAI API
                  </span>
                  <span className="px-2 py-1 bg-white/5 border border-white/10 text-[12px] font-montserrat rounded">
                    LLM Architecture
                  </span>
                </div>
              </div>
              <div className="group cursor-default">
                <div className="flex items-center gap-2 mb-3">
                  <span className="size-1.5 rounded-full bg-secondary animate-pulse"></span>
                  <p className="text-[10px] font-montserrat uppercase tracking-widest text-secondary/60">
                    Methodology
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-secondary/10 border border-secondary/20 text-[12px] font-montserrat rounded text-secondary">
                    Prompt Engineering
                  </span>
                  <span className="px-2 py-1 bg-white/5 border border-white/10 text-[12px] font-montserrat rounded">
                    Git Flow
                  </span>
                </div>
              </div>
              <div className="group cursor-default">
                <div className="flex items-center gap-2 mb-3">
                  <span className="size-1.5 rounded-full bg-red-500 animate-pulse"></span>
                  <p className="text-[10px] font-montserrat uppercase tracking-widest text-red-300/60">
                    Exploring
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-red-500/10 border border-red-300/20 text-[12px] font-montserrat rounded text-red-300/60">
                    MCPs
                  </span>
                  <span className="px-2 py-1 bg-white/5 border border-white/10 text-[12px] font-montserrat rounded">
                    AI Workflow
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
