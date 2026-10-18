"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#top", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#philosophy", label: "About Us" },
  { href: "#difference", label: "Why Atlantis" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-6 text-white mix-blend-difference md:px-16">
        <a href="#top" className="font-body text-[12px] uppercase tracking-[0.13em] sm:text-[14px]">
          Atlantis Group · Est. 1989
        </a>

        <div className="flex items-center gap-8 md:gap-14">
          <a href="#contact" className="hidden font-body text-[11px] uppercase tracking-[0.13em] sm:block">
            Book a site visit
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="site-menu"
            className="grid grid-cols-[auto,28px] items-center gap-x-3.5 gap-y-[5px] py-2.5 font-body text-[10px] uppercase tracking-[0.18em]"
          >
            <span className="row-span-2">{open ? "Close" : "Menu"}</span>
            <i className={`block h-px w-7 bg-current transition duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <i className={`block h-px w-7 bg-current transition duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      <div
        id="site-menu"
        className={`fixed inset-0 z-40 bg-[#0d0d0d] text-white transition-[clip-path,visibility] duration-700 ease-[cubic-bezier(.76,0,.24,1)] ${
          open ? "visible [clip-path:inset(0)]" : "invisible [clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <div className="mx-auto grid h-full max-w-[1600px] grid-cols-1 content-center gap-12 overflow-y-auto px-6 py-28 md:px-16">
          <nav className="flex flex-col items-start gap-1">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="group flex items-start gap-4 font-body text-5xl font-light leading-tight transition hover:text-gold md:text-7xl"
              >
                <span className="mt-2 font-body text-[11px] tracking-[0.15em] text-white/40">
                  0{i + 1}
                </span>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
