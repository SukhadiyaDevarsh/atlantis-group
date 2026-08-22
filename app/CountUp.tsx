"use client";

import { useEffect, useRef, useState } from "react";

const DURATION_MS = 1400;

export default function CountUp({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  const match = value.match(/^([^\d]*)([\d,]+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const target = match ? parseInt(match[2].replace(/,/g, ""), 10) : 0;
  const suffix = match?.[3] ?? "";
  const hasComma = match?.[2].includes(",") ?? false;

  const ref = useRef<HTMLParagraphElement>(null);
  const [display, setDisplay] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setPlaying(true);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [match]);

  useEffect(() => {
    if (!playing) return;
    const start = performance.now();

    let frame: number;
    function tick(now: number) {
      const progress = Math.min((now - start) / DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [playing, target]);

  if (!match) {
    return <p className={className}>{value}</p>;
  }

  const formatted = hasComma ? display.toLocaleString("en-US") : String(display);

  return (
    <p ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </p>
  );
}
