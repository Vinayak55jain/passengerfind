"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

import design1 from "@/assest/design.png";
import design2 from "@/assest/desgin2.png";
import design3 from "@/assest/desgin3.png";
import design4 from "@/assest/desgin4.png";
import design5 from "@/assest/desgin5.png";

const architectureCards = [
  {
    id: 0,
    label: "LivePulse",
    image: design1,
  },
  {
    id: 1,
    label: "Ingestion Bus",
    image: design2,
  },
  {
    id: 2,
    label: "Data Pipeline",
    image: design4,
  },
  {
    id: 3,
    label: "Night Permi",
    image: design5,
  },
  {
    id: 4,
    label: "Service Mesh",
    image: design3,
  },
];

export default function SystemArchitecture() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [modalCard, setModalCard] = useState<number | null>(null);

  const labels = architectureCards.map((c) => c.label);

  const updateScroll = useCallback(() => {
    const track = trackRef.current;
    const slider = sliderRef.current;
    const ghost = ghostRef.current;
    const progressBar = progressRef.current;
    const label = labelRef.current;

    if (!track || !slider) return;

    const rect = track.getBoundingClientRect();
    const viewHeight = window.innerHeight;
    let progress = -rect.top / (rect.height - viewHeight);
    progress = Math.max(0, Math.min(1, progress));

    // 5 cards → translate across 400vw total
    const translateX = progress * 300;
    slider.style.transform = `translateX(-${translateX}vw)`;

    if (ghost) ghost.style.transform = `translateX(-${translateX * 0.15}vw)`;
    if (progressBar) progressBar.style.width = `${progress * 100}%`;

    // Determine active stage — nearest card center so label is always in sync
    const stage = Math.min(
      Math.max(0, Math.round(progress * (architectureCards.length - 1))),
      architectureCards.length - 1
    );

    if (label && label.innerText !== labels[stage]) label.innerText = labels[stage];
    dotRefs.current.forEach((dot, i) => {
      if (dot) dot.style.opacity = i === stage ? "1" : "0.2";
    });

    requestAnimationFrame(updateScroll);
  }, []);

  useEffect(() => {
    requestAnimationFrame(updateScroll);
  }, [updateScroll]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalCard(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* Section container */}
      <section className="relative -mx-6 mt-24" id="architecture">
        {/* Section Header */}
        <div className="px-6 mb-6 reveal">
          <h2 className="font-anton text-4xl font-black tracking-tight uppercase text-primary/80">
            System Architecture
          </h2>
        
        </div>

        {/* Scroll Track — 600vh for 5 cards */}
        <div className="h-[400vh] w-[400vw]  ml-5px mr-5px" ref={trackRef}>
          <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
            {/* Blueprint dot-grid background */}
            <div
              className="absolute inset-0 z-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, rgba(173, 198, 255, 0.06) 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* Gradient fade edges */}
            <div
              className="absolute inset-0 z-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, #0D0D0D, transparent 20%, transparent 80%, #0D0D0D)",
              }}
            />

            {/* Ghost background parallax */}
            <div
              ref={ghostRef}
              className="absolute inset-0 z-0 flex items-center opacity-[0.02] scale-150 blur-sm pointer-events-none"
              style={{ transition: "transform 100ms ease-out" }}
            >
              <div className="flex gap-[40vw] pl-[20vw]">
                <div className="w-[80vw] h-[60vh] border border-primary/20 rounded-full" />
                <div className="w-[80vw] h-[60vh] border border-secondary/20 rounded-lg rotate-12" />
                <div className="w-[80vw] h-[60vh] border border-tertiary/20 rounded-3xl -rotate-12" />
                <div className="w-[80vw] h-[60vh] border border-primary/20 rounded-full" />
                <div className="w-[80vw] h-[60vh] border border-secondary/20 rounded-lg -rotate-6" />
              </div>
            </div>

            {/* Active Label */}
            <div className="absolute top-16 left-6 z-20 space-y-1">
              <p
                ref={labelRef}
                className="text-[10px] font-black uppercase bg-primary text-on-primary px-3 py-1 inline-block rounded font-montserrat tracking-widest"
              >
                {labels[0]}
              </p>
            </div>

            {/* Horizontal Slider */}
            <div
              ref={sliderRef}
              className="flex items-center h-full relative z-10"
              style={{
                transition: "transform 75ms ease-out",
                willChange: "transform",
              }}
            >
              <div className="h-full flex items-center" style={{ width: `${architectureCards.length * 30}vw` }}>
                {architectureCards.map((card) => (
                  <div
                    key={card.id}
                    className="flex-shrink-0 h-full flex items-center"
                    style={{ width: "100vw", paddingLeft: "20vw", paddingRight: "20vw", boxSizing: "border-box" }}
                  >
                  <div
                    className="w-full bento-card p-0 relative cursor-pointer group/card overflow-hidden"
                    style={{
                      boxShadow: "0 0 30px rgba(173, 198, 255, 0.1)",
                      borderColor: "rgba(173, 198, 255, 0.2)",
                    }}
                    onClick={() => setModalCard(card.id)}
                  >
                    {/* Overlay label — fades on hover */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center rounded-3xl bg-surface/90 backdrop-blur-sm transition-opacity duration-400 group-hover/card:opacity-0 group-hover/card:pointer-events-none">
                      <div className="bg-primary text-on-primary px-5 py-2.5 font-black text-xs uppercase tracking-widest font-montserrat rounded-lg shadow-xl">
                        {card.label}
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative w-full" style={{ height: "60vh" }}>
                      <Image
                        src={card.image}
                        alt={card.label}
                        fill
                        className="object-cover rounded-3xl"
                        sizes="(max-width: 768px) 85vw, 512px"
                        placeholder="blur"
                      />
                    </div>
                  </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center items-center gap-8 px-6">
              <div className="flex-1 h-[1px] bg-white/5 relative overflow-hidden max-w-xs">
                <div
                  ref={progressRef}
                  className="absolute top-0 left-0 h-full bg-primary w-0"
                  style={{ transition: "width 75ms ease-out" }}
                />
              </div>
              <div className="flex gap-2">
                {architectureCards.map((_, i) => (
                  <div
                    key={i}
                    ref={(el) => {
                      dotRefs.current[i] = el;
                    }}
                    className="w-1.5 h-1.5 rounded-full bg-primary"
                    style={{
                      opacity: i === 0 ? 1 : 0.2,
                      transition: "opacity 300ms",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {modalCard !== null && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-6"
          style={{ animation: "fadeIn 300ms ease-out forwards" }}
          onClick={() => setModalCard(null)}
        >
          <button
            className="absolute top-8 right-8 text-on-surface hover:text-primary transition-colors z-10"
            onClick={() => setModalCard(null)}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
          <div
            className="w-full max-w-3xl rounded-3xl overflow-hidden border border-primary/20"
            style={{
              animation: "scaleIn 300ms ease-out forwards",
              boxShadow: "0 0 60px rgba(173, 198, 255, 0.15)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={architectureCards[modalCard].image}
              alt={architectureCards[modalCard].label}
              className="w-full h-auto"
              placeholder="blur"
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}
