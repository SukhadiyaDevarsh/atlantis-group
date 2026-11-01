"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const DURATION = 7000;

const slides = [
  { id: "future", label: "Building the future" },
  { id: "coming-soon", label: "New launch, coming soon" },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const t = window.setTimeout(() => setActive((a) => (a + 1) % slides.length), DURATION);
    return () => window.clearTimeout(t);
  }, [active, paused, reduceMotion]);

  return (
    <section
      id="top"
      aria-roledescription="carousel"
      aria-label="Highlights"
      // Hold the current slide while a keyboard user is on one of its buttons
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative h-[min(100svh,62.5vw)] min-h-[690px] overflow-hidden bg-black text-white"
    >
      {/* Slide 1 — Building the future */}
      <Slide index={0} active={active}>
        <Image
          src="/projects/the-edge/hero-dusk.png"
          alt="The Edge by Atlantis Group, full frontage at dusk"
          fill
          priority
          sizes="100vw"
          className="hero-img object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.7)_0%,rgba(0,0,0,.26)_48%,rgba(0,0,0,.18)),linear-gradient(0deg,rgba(0,0,0,.55),transparent_54%)]" />
        {/* Fade the photo into the black stats bar below so there is no hard edge */}
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-black" />
        <SlideBody>
          <h1 className="max-w-5xl font-display text-[clamp(44px,6.8vw,110px)] font-normal leading-[0.98]">
            Building the
            <em className="block pl-[0.75em] text-accent-light">future</em>
          </h1>
          <SlideFooter
            copy="Four decades of retail, office, industrial and residential developments across Ahmedabad — with the same people answering the phone as the ones closing the deal."
            primary={{ href: "#projects", label: "Explore projects" }}
            secondary={{ href: "#contact", label: "Book a site visit" }}
          />
        </SlideBody>
      </Slide>

      {/* Slide 2 — teaser for the next launch. The name is not public yet, so keep it out of the page */}
      <Slide index={1} active={active}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,rgba(189,163,112,.24),transparent_60%)]" />
        <span
          aria-hidden
          className="pointer-events-none absolute right-6 top-1/2 md:right-16 -translate-y-1/2 select-none font-display text-[clamp(120px,22vw,360px)] italic leading-none text-white/[0.05]"
        >
          Soon
        </span>
        <SlideBody>
          <p className="eyebrow mb-6 flex items-center gap-3 !text-[14px] text-gold">
            <span className="inline-block h-px w-8 bg-gold" />
            Coming soon · Offices &amp; Shopping
          </p>
          <h2 className="max-w-5xl font-display text-[clamp(44px,6.8vw,110px)] font-normal leading-[0.98]">
            Something new
            <em className="block pl-[0.75em] text-accent-light">is rising</em>
          </h2>
          <SlideFooter
            copy="Premium commercial offices and shopping spaces are coming to Ahmedabad. Register your interest to be the first to hear its name, plans, pricing and launch date."
            primary={{ href: "#contact", label: "Register your interest" }}
            secondary={{ href: "#projects", label: "Explore projects" }}
          />
        </SlideBody>
      </Slide>

    </section>
  );
}

function Slide({ index, active, children }: { index: number; active: number; children: React.ReactNode }) {
  const on = index === active;
  const ref = useRef<HTMLDivElement>(null);
  // Hidden slides can't be tabbed into (React 18 has no typed `inert` prop)
  useEffect(() => {
    if (ref.current) ref.current.inert = !on;
  }, [on]);
  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      aria-label={`${index + 1} of ${slides.length}: ${slides[index].label}`}
      aria-hidden={!on}
      className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${on ? "z-10 opacity-100" : "z-0 opacity-0"}`}
    >
      {children}
    </div>
  );
}

function SlideBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col px-6 pb-16 pt-[clamp(150px,21vh,230px)] md:px-16">
      {children}
    </div>
  );
}

function SlideFooter({
  copy,
  primary,
  secondary,
}: {
  copy: string;
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
}) {
  return (
    <div className="mt-auto flex flex-col justify-between gap-8 md:flex-row md:items-end">
      <p className="max-w-lg font-body text-[18px] font-light leading-relaxed text-white/80">{copy}</p>
      <div className="flex flex-wrap gap-2.5">
        <a href={primary.href} className="btn btn-light">
          {primary.label} <span>↗</span>
        </a>
        <a href={secondary.href} className="btn btn-ghost">
          {secondary.label} <span>↗</span>
        </a>
      </div>
    </div>
  );
}
