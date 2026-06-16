export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1400px] w-full px-6 md:px-10 py-16 mt-32 border-t border-white/5 bg-surface/20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Branding Section */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="size-5 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="font-anton text-lg font-bold tracking-[0.2em] text-on-surface uppercase">Vinayak Jain</h2>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-montserrat text-[12px] font-bold text-primary uppercase tracking-[0.3em]">
              Software Pioneer
            </p>
            <p className="font-montserrat text-xs text-on-surface-variant/40 uppercase tracking-widest leading-relaxed max-w-[240px]">
              EVERY DISCOVERY
              <br/> STARTS WITH
              <br/> A QUESTION.
            </p>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="md:col-span-3 flex flex-col gap-6">
          <h4 className="font-montserrat text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface/30">Navigation</h4>
          <nav className="flex flex-col gap-4">
            <a
              href="#projects"
              className="font-montserrat text-xs text-on-surface-variant hover:text-primary transition-all uppercase tracking-widest flex items-center gap-2 group"
            >
              <span className="size-1 bg-primary/20 group-hover:bg-primary transition-colors"></span> Projects
            </a>
            <a
              href="#skills"
              className="font-montserrat text-xs text-on-surface-variant hover:text-primary transition-all uppercase tracking-widest flex items-center gap-2 group"
            >
              <span className="size-1 bg-primary/20 group-hover:bg-primary transition-colors"></span> Expertise
            </a>
            <a
              href="#exploring"
              className="font-montserrat text-xs text-on-surface-variant hover:text-primary transition-all uppercase tracking-widest flex items-center gap-2 group"
            >
              <span className="size-1 bg-primary/20 group-hover:bg-primary transition-colors"></span> Exploring
            </a>
            <a
              href="#insights"
              className="font-montserrat text-xs text-on-surface-variant hover:text-primary transition-all uppercase tracking-widest flex items-center gap-2 group"
            >
              <span className="size-1 bg-primary/20 group-hover:bg-primary transition-colors"></span> Insights
            </a>
          </nav>
        </div>

        {/* Socials Section */}
        <div className="md:col-span-3 flex flex-col gap-6">
          <h4 className="font-montserrat text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface/30">Connect</h4>
          <div className="flex flex-col gap-4">
            <a
              href="https://www.linkedin.com/in/vinayakjain03/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat text-xs text-on-surface-variant hover:text-secondary transition-all uppercase tracking-widest flex items-center gap-2 group"
            >
              <span className="size-1 bg-secondary/20 group-hover:bg-secondary transition-colors"></span> LinkedIn
            </a>
            <a
              href="https://github.com/Vinayak55jain?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat text-xs text-on-surface-variant hover:text-secondary transition-all uppercase tracking-widest flex items-center gap-2 group"
            >
              <span className="size-1 bg-secondary/20 group-hover:bg-secondary transition-colors"></span> GitHub
            </a>
            <a
              href="https://x.com/Vinayak72314217"
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat text-xs text-on-surface-variant hover:text-secondary transition-all uppercase tracking-widest flex items-center gap-2 group"
            >
              <span className="size-1 bg-secondary/20 group-hover:bg-secondary transition-colors"></span> Twitter / X
            </a>
          </div>
        </div>

        {/* Decorative architectural symbol */}
        <div className="md:col-span-2 flex flex-col items-end">
          <div className="size-16 rounded-full border border-white/5 flex items-center justify-center bg-surface-container/50">
            <span className="material-symbols-outlined text-primary/40">architecture</span>
          </div>
        </div>
      </div>

      <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <p className="font-montserrat text-[9px] text-on-surface-variant/30 uppercase tracking-[0.2em]">
            {" "}
            © 2026 VINAYAK JAIN / PORTFOLIO
          </p>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 py-1.5 px-4 rounded-full bg-white/[0.02] border border-white/5">
            <span className="size-1.5 rounded-full bg-tertiary animate-pulse shadow-[0_0_8px_rgba(60,221,199,0.5)]"></span>
            <p className="font-montserrat text-[9px] text-on-surface-variant/60 uppercase tracking-[0.15em]">
              SYSTEM_STATUS: <span className="text-tertiary">NOMINAL</span>
            </p>
          </div>
          <div className="hidden md:flex items-center gap-3 py-1.5 px-4 rounded-full bg-white/[0.02] border border-white/5">
            <p className="font-montserrat text-[9px] text-on-surface-variant/40 uppercase tracking-[0.15em]">
              LATENCY: <span className="text-on-surface">8ms</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
