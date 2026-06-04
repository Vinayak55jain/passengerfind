import MagicRings from "./MagicRings";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl px-6 md:px-10 py-5 overflow-hidden relative">
      <MagicRings color="#8b5cf6" colorTwo="#22d3ee" opacity={0.18} blur={0} speed={0.6} ringCount={5} />
      <div className="relative z-10 mx-auto flex max-w-[1200px] items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="size-5 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="font-anton text-sm font-bold tracking-widest text-on-surface uppercase" style={{ fontFamily: "Greenback, serif" }}>
            Vinayak<span className="text-[#adc6ff] font-montserrat  text-lg" >11</span>Dev
          </h2>
        </div>
        <div className="hidden md:flex flex-1 justify-center gap-18">
          <a
            className="font-montserrat text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors opacity-90 hover:opacity-100"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="font-montserrat text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors opacity-90 hover:opacity-100"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="font-montserrat text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors opacity-90 hover:opacity-100"
            href="#contact"
          >
            Contact
          </a>
          <a
            className="font-montserrat text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors opacity-90 hover:opacity-100"
            href="#insights"
          >
            Insights
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="font-montserrat flex items-center justify-center rounded-full h-9 px-6 bg-primary text-on-primary text-[10px] font-black tracking-widest hover:scale-105 transition-all"
          >
            HIRE ME
          </a>
        </div>
      </div>
    </header>
  );
}
