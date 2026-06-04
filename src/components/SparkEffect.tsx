"use client";

import { useEffect } from "react";

export default function SparkEffect() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const spark = document.createElement("div");
      spark.style.position = "fixed";
      spark.style.width = "10px";
      spark.style.height = "10px";
      spark.style.background = "#adc6ff";
      spark.style.borderRadius = "50%";
      spark.style.left = `${e.clientX}px`;
      spark.style.top = `${e.clientY}px`;
      spark.style.pointerEvents = "none";
      spark.style.zIndex = "9999";
      document.body.appendChild(spark);

      const animation = spark.animate(
        [
          { transform: "translate(-50%, -50%) scale(0)", opacity: 1 },
          { transform: "translate(-50%, -50%) scale(8)", opacity: 0 }
        ],
        {
          duration: 600,
          easing: "cubic-bezier(0, .9, .57, 1)"
        }
      );

      animation.onfinish = () => {
        spark.remove();
      };
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
