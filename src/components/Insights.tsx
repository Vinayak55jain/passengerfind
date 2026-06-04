const articles = [
  {
    date: "3 Days Ago",
    title: "Everyone talks about AI. Few talk about the infrastructure powering it.",
    desc: "AI grabs the headlines, but distributed systems do the heavy lifting. A look at the architectures that power modern intelligent applications.",
    link: "https://www.linkedin.com/posts/vinayakjain03_systemdesign-backendengineering-distributedsystems-ugcPost-7412796647035985920-QOYF/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEf5XncBBsINRGWPZmODY07rM4ZXS-5Al6k",
    gradientClass: "from-primary to-secondary",
    hoverColorClass: "group-hover:text-primary",
    delay: "0ms"
  },
  {
  
  date: "3 Weeks Ago",
  title: "The Hidden Reason Production Systems Fail Under Load ",
  desc: "Most outages aren't caused by broken code—they're caused by exhausted resources. Explore how pool saturation, retry storms, and dependency isolation shape the reliability of modern backend systems.",

    link: "https://www.linkedin.com/posts/vinayakjain03_systemdesign-backendengineering-distributedsystems-ugcPost-7418757289479811072-b_zD/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEf5XncBBsINRGWPZmODY07rM4ZXS-5Al6k",
    gradientClass: "from-tertiary to-primary",
    hoverColorClass: "group-hover:text-tertiary",
    delay: "100ms"
  },
  {
   
  date: "2 Weeks Ago",
  title: "The Scaling Trick Behind Netflix's Distributed Databases ",
  desc: "What happens when new database nodes are added to a system serving millions of users? Consistent hashing ensures only a fraction of data moves, enabling predictable scaling and high availability.",

    link: "https://www.linkedin.com/posts/vinayakjain03_systemdesign-distributedsystems-consistenthashing-share-7432499631898419201-fD01/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEf5XncBBsINRGWPZmODY07rM4ZXS-5Al6k",
    gradientClass: "from-secondary to-tertiary",
    hoverColorClass: "group-hover:text-secondary",
    delay: "200ms"
  }
];

const keywords = ["Kubernetes", "Rust", "Microservices", "Distributed Systems", "Terraform","Kafka","Docker","EDA"];

export default function Insights() {
  return (
    <>
      {/* Scroll Velocity Tech Keywords */}
      <section className="velocity-container" id="velocity">
        <div className="velocity-track">
          {/* Duplicate keywords to create seamless infinite loop */}
          {[...keywords, ...keywords].map((keyword, index) => (
            <span
              key={index}
              className="font-anton text-7xl font-black mx-12 text-white/5 uppercase tracking-tighter"
            >
              {keyword}
            </span>
          ))}
        </div>
      </section>

      {/* Insights Bento Section */}
      <div className="yolo-bento mb-24" id="insights">
        <div className="col-span-12 mb-6 ml-3 reveal">
          <h2 className="font-anton text-4xl font-black uppercase tracking-tight">Latest Insights</h2>
        </div>

        {articles.map((art, idx) => (
          <div
            key={idx}
            className="col-span-12 md:col-span-4 bento-card group cursor-pointer hover:bg-surface-container-high reveal"
            style={{ transitionDelay: art.delay }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className={`size-6 rounded-full bg-gradient-to-br ${art.gradientClass}`}></div>
              <span className="font-montserrat text-[9px] font-black tracking-widest opacity-40 uppercase">
                {art.date}
              </span>
            </div>
            <h3 className={`font-anton font-bold text-xl mb-4 ${art.hoverColorClass} transition-colors`}>
              {art.title}
            </h3>
            <p className="font-montserrat text-[14px] text-on-surface-variant mb-8 line-clamp-3 leading-relaxed">
              {art.desc}
            </p>
            <a
              href={art.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat mt-auto flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 text-[9px] font-black tracking-[0.2em] text-white opacity-70 transition-all duration-300 hover:bg-white/10 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary/60"
            >
              <span className="shiny-text">READ ARTICLE</span>
              <span className="material-symbols-outlined text-sm">north_east</span>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
