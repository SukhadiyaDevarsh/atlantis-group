import Image from "next/image";
import ContactForm from "./ContactForm";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <Projects />
      <WhyUs />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
}

/* ---------- Logo mark ---------- */
function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-full ${className}`}>
      <Image
        src="/logo-mark.jpg"
        alt="Atlantis Group emblem — since 1989, build the future"
        fill
        sizes="(max-width: 768px) 15vw, 300px"
        className="object-cover"
      />
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-mist/80 bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <Logo className="h-10 w-10 shrink-0" />
          <span className="font-display text-lg tracking-wide text-ink">
            Atlantis Group
          </span>
        </a>
        <nav className="hidden gap-8 font-body text-sm text-slate md:flex">
          <a href="#services" className="transition hover:text-ink">Services</a>
          <a href="#projects" className="transition hover:text-ink">Projects</a>
          <a href="#why" className="transition hover:text-ink">Why Us</a>
          <a href="#testimonials" className="transition hover:text-ink">Clients</a>
          <a href="#contact" className="transition hover:text-ink">Contact</a>
        </nav>
        <a
          href="#contact"
          className="rounded-sm border border-ink px-4 py-2 font-body text-sm text-ink transition hover:bg-ink hover:text-ivory"
        >
          Schedule a call
        </a>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative border-b border-mist bg-ivory">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 py-20 md:grid-cols-[1.15fr,0.85fr] md:py-28">
        <div className="fade-up">
          <p className="font-mono text-xs uppercase tracking-widest2 text-accent">
            Real Estate · Est. 1989
          </p>
          <h1 className="mt-5 font-display text-4xl leading-[1.1] text-ink sm:text-5xl md:text-6xl">
            Real estate guided by
            <span className="italic"> four decades</span> of trust.
          </h1>
          <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-slate">
            Atlantis Group has helped families and investors buy, sell, and grow
            property portfolios across the region since 1989 — with the same
            people answering the phone as the ones closing the deal.
          </p>
          <p className="mt-3 font-display text-base italic text-accent">
            …build the future…
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-sm bg-ink px-6 py-3 font-body text-sm text-ivory transition hover:bg-[#0B1B2E]"
            >
              Schedule a consultation
            </a>
            <a
              href="#services"
              className="rounded-sm border border-slate/40 px-6 py-3 font-body text-sm text-ink transition hover:border-ink"
            >
              View our services
            </a>
          </div>
        </div>
        <div className="fade-up flex justify-center md:justify-end">
          <Logo className="h-56 w-56 shadow-sm md:h-72 md:w-72" />
        </div>
      </div>
      <div className="rule" />
    </section>
  );
}

/* ---------- Trust bar ---------- */
function TrustBar() {
  const stats = [
    { value: "1989", label: "Founded" },
    { value: "37", label: "Years in business" },
    { value: "1,200+", label: "Properties closed" },
    { value: "98%", label: "Client satisfaction" },
  ];
  return (
    <section className="border-b border-mist bg-ink">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <p className="font-mono text-2xl text-accent-light sm:text-3xl">{s.value}</p>
            <p className="mt-1 font-body text-xs uppercase tracking-widest2 text-ivory/70">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
function Services() {
  const items = [
    {
      title: "Residential Sales",
      copy: "Buying and selling homes with dedicated, local market expertise from offer to closing.",
    },
    {
      title: "Commercial Real Estate",
      copy: "Office, retail, and industrial properties for businesses and institutional investors.",
    },
    {
      title: "Property Management",
      copy: "Full-service management for owners and landlords — leasing, maintenance, and reporting.",
    },
    {
      title: "Investment Advisory",
      copy: "Portfolio strategy and market analysis for long-term real estate investors.",
    },
  ];
  return (
    <section id="services" className="border-b border-mist bg-ivory py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs uppercase tracking-widest2 text-accent">What we do</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl text-ink sm:text-4xl">
          Services built around a full property lifecycle.
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-mist bg-mist sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="bg-ivory p-8 transition hover:bg-white">
              <h3 className="font-display text-xl text-ink">{item.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-slate">{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Projects ---------- */
function Projects() {
  const projects = [
    {
      name: "Shaligram Homes",
      status: "Completed",
      location: "Nikol, Ahmedabad",
      type: "4 BHK Villas · 47 Units",
      copy: "A 47-unit gated villa community behind Indraprasth Society, near Khodiyar Mandir on Nikol Odhav Road. Built around a decorative main gate, clubhouse, and sprawling central garden, with 24-hour security and water supply, a jogging track, children's play area, and gym.",
    },
  ];
  return (
    <section id="projects" className="border-b border-mist bg-mist/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs uppercase tracking-widest2 text-accent">Our projects</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl text-ink sm:text-4xl">
          Current and completed developments.
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <div key={p.name} className="rounded-sm border border-mist bg-white p-8">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl text-ink">{p.name}</h3>
                <span
                  className={`shrink-0 rounded-sm px-3 py-1 font-mono text-[11px] uppercase tracking-widest2 ${
                    p.status === "Completed"
                      ? "bg-ink text-ivory"
                      : "bg-accent text-ink"
                  }`}
                >
                  {p.status}
                </span>
              </div>
              <p className="mt-2 font-body text-sm text-slate">{p.location}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest2 text-accent">
                {p.type}
              </p>
              <p className="mt-4 font-body text-sm leading-relaxed text-slate">{p.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Why us ---------- */
function WhyUs() {
  const points = [
    {
      title: "Local expertise since 1989",
      copy: "Nearly four decades of reading this market, block by block.",
    },
    {
      title: "One dedicated agent",
      copy: "A single point of contact who knows your file, start to finish.",
    },
    {
      title: "A transparent process",
      copy: "Clear terms and clear timelines. No surprises at the closing table.",
    },
    {
      title: "Full-service, in-house",
      copy: "Search, financing coordination, and management, under one roof.",
    },
  ];
  return (
    <section id="why" className="border-b border-mist bg-mist/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[0.8fr,1.2fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest2 text-accent">Why Atlantis Group</p>
            <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
              A firm built to last as long as its clients need it to.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {points.map((p) => (
              <div key={p.title} className="border-l-2 border-accent pl-5">
                <h3 className="font-display text-lg text-ink">{p.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-slate">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  const quotes = [
    {
      quote:
        "Atlantis Group sold our family home in three weeks and found us the right place to move into. They treated both sides of that like they mattered equally.",
      name: "Placeholder client name",
      role: "Residential seller & buyer",
    },
    {
      quote:
        "We've used their advisory team on four commercial acquisitions. They know the market and they say no to a bad deal, which is worth more than saying yes to a good one.",
      name: "Placeholder client name",
      role: "Commercial investor",
    },
  ];
  return (
    <section id="testimonials" className="border-b border-mist bg-ivory py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs uppercase tracking-widest2 text-accent">Clients</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl text-ink sm:text-4xl">
          What people say after closing.
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
          {quotes.map((q, i) => (
            <blockquote key={i} className="rounded-sm border border-mist bg-white p-8">
              <p className="font-display text-lg italic leading-relaxed text-ink">
                &ldquo;{q.quote}&rdquo;
              </p>
              <footer className="mt-5 font-body text-sm text-slate">
                {q.name} &middot; {q.role}
              </footer>
            </blockquote>
          ))}
        </div>
        <p className="mt-4 font-mono text-xs text-slate/60">
          Placeholder quotes — swap in real client testimonials before launch.
        </p>
      </div>
    </section>
  );
}

/* ---------- Contact CTA ---------- */
function ContactCTA() {
  return (
    <section id="contact" className="border-b border-mist bg-ink py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 md:grid-cols-[0.9fr,1.1fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest2 text-accent-light">Get in touch</p>
          <h2 className="mt-3 font-display text-3xl text-ivory sm:text-4xl">
            Talk to Atlantis Group about your next move.
          </h2>
          <p className="mt-5 max-w-sm font-body text-sm leading-relaxed text-ivory/70">
            Tell us a bit about what you're looking to buy, sell, or manage, and
            a dedicated agent will follow up within one business day.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="bg-ivory py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
        <Logo className="h-16 w-16" />
        <p className="font-display text-lg text-ink">Atlantis Group</p>
        <p className="-mt-4 font-display text-sm italic text-accent">…build the future…</p>
        <nav className="flex flex-wrap justify-center gap-6 font-body text-xs text-slate">
          <a href="#services" className="hover:text-ink">Services</a>
          <a href="#projects" className="hover:text-ink">Projects</a>
          <a href="#why" className="hover:text-ink">Why Us</a>
          <a href="#testimonials" className="hover:text-ink">Clients</a>
          <a href="#contact" className="hover:text-ink">Contact</a>
        </nav>
        <p className="font-mono text-[11px] text-slate/60">
          &copy; {new Date().getFullYear()} Atlantis Group. Serving clients since 1989.
        </p>
      </div>
    </footer>
  );
}
