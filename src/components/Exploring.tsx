export default function Exploring() {
  return (
    <div className="yolo-bento mb-24 mt-24" id="exploring">
      <div className="col-span-12 mb-6 ml-3 reveal">
        <h2 className="font-anton text-4xl ml-3px font-black tracking-tight uppercase text-primary/80">Currently Exploring</h2>
      </div>

      <div
        className="col-span-12 md:col-span-4 bento-card bg-surface-container-low reveal"
        style={{ transitionDelay: "0ms" }}
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="material-symbols-outlined text-primary">hub</span>
          <span className="font-montserrat text-[9px] opacity-30 uppercase">Infrastructure</span>
        </div>
        <h3 className="font-anton font-bold text-xl mb-4 tracking-tight">Microservices Governance</h3>
        <p className="font-montserrat text-[14px] text-on-surface-variant leading-relaxed">
          Resilient service meshes using Istio and Envoy optimization for zero-trust environments.
        </p>
      </div>

      <div
        className="col-span-12 md:col-span-4 bento-card bg-surface-container-low reveal"
        style={{ transitionDelay: "100ms" }}
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="material-symbols-outlined text-secondary">terminal</span>
          <span className="font-montserrat text-[9px] opacity-30 uppercase">Standards</span>
        </div>
        <h3 className="font-anton font-bold text-xl mb-4 tracking-tight">MCP Protocol</h3>
        <p className="font-montserrat text-[14px] text-on-surface-variant leading-relaxed">
          Standardizing model context protocol for local dev agents to enable true AI-pair programming.
        </p>
      </div>

      <div
        className="col-span-12 md:col-span-4 bento-card bg-surface-container-low reveal"
        style={{ transitionDelay: "200ms" }}
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="material-symbols-outlined text-tertiary">psychology</span>
          <span className="font-montserrat text-[9px] opacity-30 uppercase">Automation</span>
        </div>
        <h3 className="font-anton font-bold text-xl mb-4 tracking-tight">AI Agents</h3>
        <p className="font-montserrat text-[14px] text-on-surface-variant leading-relaxed">
          Autonomous LLM chains for automated dev workflows to reduce mean-time-to-ship.
        </p>
      </div>
    </div>
  );
}
