"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "./Logo";

const SLIDE_DURATION_MS = 5000;

export default function HeroCarousel({ className = "" }: { className?: string }) {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((s) => (s === 0 ? 1 : 0));
    }, SLIDE_DURATION_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          slide === 0 ? "opacity-100" : "opacity-0"
        }`}
      >
        <Logo className="h-full w-full shadow-sm" />
      </div>
      <div
        className={`absolute inset-0 flex items-center overflow-hidden rounded-sm border border-mist bg-white shadow-sm transition-opacity duration-700 ${
          slide === 1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src="/coming-soon.jpg"
          alt="Something big is coming soon — a new project by Atlantis Group"
          fill
          sizes="(max-width: 768px) 60vw, 300px"
          className="object-contain"
        />
      </div>
    </div>
  );
}
