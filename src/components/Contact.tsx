export default function Contact() {
  return (
    <div
      className="bento-card bg-surface-container-lowest p-12 md:p-32 text-center relative overflow-hidden reveal border-t border-white/5"
      id="contact"
    >
      <div className="absolute -top-40 -right-40 size-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        <div className="lg:col-span-7 text-left">
          <h2 className="font-anton text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] uppercase mb-8">
            Ready to <br /><span className="text-primary">Build</span>
            <br />
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"></span>
              <span className="relative bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
                the Future?
              </span>
            </span>
          </h2>
          <p className="font-montserrat text-xs md:text-sm text-on-surface-variant uppercase tracking-[0.3em] opacity-40">
            Architecture • Performance • Intelligence
          </p>
          
        </div>
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="border p-1 border-white/5">
            <a
              className="group flex items-center justify-between p-8 bg-[#3b82f6] hover:bg-[#2563eb] transition-all duration-500 shadow-[0_0_40px_rgba(59,130,246,0.3)] relative overflow-hidden"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=vinayakjainlife@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col gap-1 text-left">
                <span className="font-montserrat text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                  Direct Communication
                </span>
                <span className="font-anton text-2xl md:text-3xl font-bold tracking-tighter text-white">
                vinayakjainlife@gmail.com
                </span>
                  <p className="font-montserrat text-[10px] font- uppercase tracking-[0.1em] text-white/70">
               The window is open. Make the leap.
          </p>
              </div>
              <div className="relative z-10 flex items-center justify-center size-12 rounded-full bg-white/10 border border-white/20 text-white group-hover:translate-x-2 transition-transform duration-500">
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <div className="border p-1 border-white/5">
              <a
                className="flex flex-col items-center justify-center p-4 h-full bg-white/[0.03] hover:bg-white/[0.08] transition-all group"
                href="https://www.linkedin.com/in/vinayakjain03/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="size-5 text-on-surface-variant group-hover:text-primary transition-colors mb-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
                <span className="font-montserrat text-[8px] font-black uppercase tracking-widest">LinkedIn</span>
              </a>
            </div>
            <div className="border p-1 border-white/5">
              <a
                className="flex flex-col items-center justify-center p-4 h-full bg-white/[0.03] hover:bg-white/[0.08] transition-all group"
                href="https://github.com/Vinayak55jain?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="size-5 text-on-surface-variant group-hover:text-primary transition-colors mb-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
                <span className="font-montserrat text-[8px] font-black uppercase tracking-widest">GitHub</span>
              </a>
            </div>
            <div className="border p-1 border-white/5">
              <a
                className="flex flex-col items-center justify-center p-4 h-full bg-white/[0.03] hover:bg-white/[0.08] transition-all group"
                href="https://x.com/Vinayak72314217"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="size-5 text-on-surface-variant group-hover:text-primary transition-colors mb-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z"></path>
                </svg>
                <span className="font-montserrat text-[8px] font-black uppercase tracking-widest">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
