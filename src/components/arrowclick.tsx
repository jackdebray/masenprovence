"use client";
import { ArrowDown } from "lucide-react";

function scrollDown() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
}

export default function ArrowClick() {
  return (
    <div
      className="z-10 flex flex-col items-center justify-center my-auto text-center cursor-pointer animate-bounce"
      onClick={scrollDown}
    >
      <svg width="0" height="0">
        <filter id="glow">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </svg>
      <ArrowDown
        className="h-6 w-6 text-white"
        style={{ filter: "url(#glow)" }}
      />
    </div>
  );
}
