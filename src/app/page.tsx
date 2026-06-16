"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Exploring from "@/components/Exploring";
import SystemArchitecture from "@/components/SystemArchitecture";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SparkEffect from "@/components/SparkEffect";

export default function Home() {
  useEffect(() => {
    // Scroll Reveal Observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    // Force run once for elements already in viewport
    setTimeout(() => {
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight) {
          el.classList.add("visible");
        }
      });
    }, 100);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <SparkEffect />
      <div className="aurora-bg"></div>
      <div className="relative flex min-h-screen w-full flex-col">
        <Header />
        <main className="flex-1 pt-32 pb-20 px-6">
          <div className="mx-auto max-w-[1400px]">
            <Hero />
            <Projects />
            <Skills />
            <Exploring />
            <Insights />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
