import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import SiteHeader from "./SiteHeader";
import { projects } from "./projects-data";

/* Wide renders used for the full-bleed project panels. Some brochure renders
   carry a thin white strip on the right edge, which the panel scale crops out. */
const panelImages: Record<string, string> = {
  "the-edge": "/projects/the-edge/aerial-night.jpg",
  "raspan-arcade": "/projects/raspan/hero-sunset.png",
  "atlantis-industrial-park": "/projects/atlantis-industrial-park/entrance-gate.png",
  "shaligram-homes": "/projects/shaligram/villas-sunset.png",
  "satvat-residency": "/projects/satvat/entrance-dusk.png",
};

/* Crop focus for panel images much wider than the screen (default: center) */
const panelPositions: Record<string, string> = {
  "raspan-arcade": "25% center",
};

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <SiteHeader />
      <Hero />
      <TrustBar />
      <Projects />
      <Philosophy />
      <Services />
      <Difference />
      <Testimonials />
      <ContactCTA />
    </main>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative h-[min(100svh,62.5vw)] min-h-[690px] overflow-hidden bg-black text-white">
      <Image
        src="/projects/the-edge/hero-dusk.png"
        alt="The Edge by Atlantis Group, full frontage at dusk"
        fill
        priority
        sizes="100vw"
        className="hero-img object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.7)_0%,rgba(0,0,0,.26)_48%,rgba(0,0,0,.18)),linear-gradient(0deg,rgba(0,0,0,.55),transparent_54%)]" />
      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col px-6 pb-16 pt-[clamp(150px,21vh,230px)] md:px-16">
        <h1 className="fade-up max-w-5xl font-display text-[clamp(52px,8.6vw,140px)] font-normal leading-[0.98]">
          Building the
          <em className="block pl-[0.75em] text-accent-light">future</em>
        </h1>
        <div className="mt-auto flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <p className="max-w-md font-body text-[15px] font-light leading-relaxed text-white/75">
            Four decades of retail, office, industrial and residential
            developments across Ahmedabad — with the same people answering the
            phone as the ones closing the deal.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <a href="#projects" className="btn btn-light">
              Explore projects <span>↗</span>
            </a>
            <a href="#contact" className="btn btn-ghost">
              Book a site visit <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Trust bar ---------- */
function TrustBar() {
  const stats = [
    { value: "37", label: "Years in Business" },
    { value: "3,000+", label: "Happy Clients" },
    { value: "1,171", label: "Commercial Units Sold" },
    { value: "25", label: "Landmark Projects" },
  ];
  return (
    <section id="stats" className="bg-black text-white">
      <Reveal className="mx-auto grid max-w-[1600px] grid-cols-2 gap-y-10 px-6 py-16 md:grid-cols-4 md:px-16">
        {stats.map((s) => (
          <div key={s.label} className="border-l border-white/15 pl-6">
            <CountUp value={s.value} className="font-display text-4xl text-accent-light sm:text-5xl" />
            <p className="eyebrow mt-3 text-white/55">{s.label}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

/* ---------- Projects ---------- */
function Projects() {
  const total = String(projects.length).padStart(2, "0");
  return (
    <section id="projects" className="bg-ivory">
      <Reveal className="mx-auto grid max-w-[1600px] grid-cols-1 items-end gap-8 px-6 pb-24 pt-28 md:grid-cols-[0.7fr,1.4fr,0.7fr] md:px-16 md:pb-40 md:pt-48">
        <p className="eyebrow self-start pt-2 text-slate">Our projects</p>
        <h2 className="font-display text-[clamp(44px,7vw,110px)] font-normal leading-[1.08]">
          Landmarks <em className="text-accent">across</em> Ahmedabad.
        </h2>
        <p className="font-body text-[13px] leading-[1.8] text-slate">
          Ongoing and delivered developments — high-street retail, offices,
          industrial parks, villas and apartments.
        </p>
      </Reveal>

      {projects.map((p, i) => {
        const [first, ...rest] = p.name.split(" ");
        return (
          <article key={p.slug} className="relative overflow-hidden bg-[#111] text-white md:h-[min(100svh,62.5vw)] md:min-h-[620px]">
            {/* Phones: full photo on top, text below. Larger screens: text over a full-screen photo */}
            <div className="relative aspect-[16/10] w-full overflow-hidden md:absolute md:inset-0 md:aspect-auto">
              <Image
                src={panelImages[p.slug] ?? p.cardImage}
                alt={`${p.name} — ${p.type}`}
                fill
                sizes="100vw"
                className="origin-left scale-[1.04] object-cover"
                style={{ objectPosition: panelPositions[p.slug] ?? "center" }}
              />
              <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(0,0,0,.6),rgba(0,0,0,0)_55%),linear-gradient(0deg,rgba(0,0,0,.5),transparent_40%)] md:block" />
            </div>
            <Reveal className="relative z-10 px-6 pb-16 pt-8 md:absolute md:bottom-[clamp(70px,10vh,120px)] md:left-16 md:max-w-xl md:p-0 md:pr-6">
              <div className="mb-6 md:mb-[clamp(40px,8vh,100px)]">
                <span className="font-display text-5xl">{String(i + 1).padStart(2, "0")}</span>
                <span className="ml-2 font-body text-[11px] tracking-[0.15em] text-white/45">/ {total}</span>
              </div>
              <p className="eyebrow mb-5 text-white/65">{p.status}</p>
              <h3 className="font-display text-[clamp(56px,8vw,128px)] font-normal leading-[0.94]">
                {first}
                {rest.length > 0 && (
                  <em className="block pl-[0.6em] text-accent-light">{rest.join(" ")}</em>
                )}
              </h3>
              <ul className="mb-7 mt-9 flex flex-wrap gap-x-6 gap-y-2 font-body text-[11px] text-white/75">
                <li>{p.location}</li>
                <li>· {p.type}</li>
              </ul>
              <Link href={`/projects/${p.slug}`} className="text-link border-white/55">
                Explore project <span>↗</span>
              </Link>
            </Reveal>
          </article>
        );
      })}
    </section>
  );
}

/* ---------- Philosophy ---------- */
function Philosophy() {
  return (
    <section id="philosophy" className="bg-ivory py-28 md:py-44">
      <Reveal className="mx-auto max-w-[1600px] px-6 md:px-16">
        <p className="eyebrow text-slate">Our philosophy</p>
        <h2 className="mt-8 max-w-6xl font-display text-[clamp(36px,5.2vw,84px)] font-normal leading-[1.1]">
          A firm built to last as long as its clients
          <em className="text-accent"> need it to.</em>
        </h2>
        {/* Panorama of all five projects; its soft edges fade into the page, so it runs edge to edge */}
        <div className="relative -mx-6 mt-16 aspect-[2/1] overflow-hidden md:-mx-16 md:aspect-[6000/1884]">
          <Image
            src="/projects/projects-skyline.jpg"
            alt="Skyline of Atlantis Group projects: Atlantis Industrial Park, Raspan Arcade, The Edge, Satvat Residency and Shaligram Homes"
            fill
            sizes="100vw"
            className="object-cover [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]"
          />
        </div>
        <p className="ml-auto mt-10 max-w-md font-body text-[15px] font-light leading-[1.8] text-slate">
          Atlantis Group has helped families and investors buy, sell, and grow
          property portfolios across the region since 1989. Every project is
          planned for the people who will use it for decades — not just for
          the day it is handed over.
        </p>
      </Reveal>
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
    <section id="services" className="bg-mist py-28 md:py-40">
      <Reveal className="mx-auto max-w-[1600px] px-6 md:px-16">
        <div className="mb-16 md:mb-20">
          <p className="eyebrow mb-5 text-slate">What we do</p>
          <h2 className="max-w-3xl font-display text-[clamp(40px,6vw,92px)] font-normal leading-[1.08]">
            The full property <em className="text-accent">lifecycle.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 border-t border-black/15 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div key={item.title} className="border-b border-black/15 py-10 sm:pr-10 lg:border-b-0">
              <p className="font-body text-[11px] tracking-[0.15em] text-slate">0{i + 1}</p>
              <h3 className="mt-8 font-display text-2xl">{item.title}</h3>
              <p className="mt-4 font-body text-sm leading-relaxed text-slate">{item.copy}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- The Atlantis difference ---------- */
function Difference() {
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
    <section id="difference" className="bg-ivory py-28 md:py-40">
      <Reveal className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 px-6 md:grid-cols-[0.8fr,1.2fr] md:px-16">
        <div>
          <p className="eyebrow mb-5 text-slate">The Atlantis difference</p>
          <h2 className="font-display text-[clamp(40px,5vw,80px)] font-normal leading-[1.08]">
            Designed around what <em className="text-accent">endures.</em>
          </h2>
        </div>
        <ol className="border-t border-black/15">
          {points.map((p, i) => (
            <li
              key={p.title}
              className="grid grid-cols-[48px,1fr,auto] items-baseline gap-4 border-b border-black/15 py-8"
            >
              <span className="font-body text-[11px] tracking-[0.15em] text-slate">0{i + 1}</span>
              <div>
                <h3 className="font-display text-2xl md:text-3xl">{p.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-slate">{p.copy}</p>
              </div>
              <span className="text-slate">↗</span>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  const quotes = [
    {
      quote:
        "Atlantis Group found the right retail space for our business and had the deal closed in three weeks. They looked after our interests as if they were their own.",
      role: "Commercial investor",
    },
    {
      quote:
        "We've used their advisory team on four commercial acquisitions. They know the market and they say no to a bad deal, which is worth more than saying yes to a good one.",
      role: "Commercial investor",
    },
  ];
  return (
    <section id="testimonials" className="bg-mist py-28 md:py-40">
      <Reveal className="mx-auto max-w-[1600px] px-6 md:px-16">
        <p className="eyebrow mb-5 text-slate">Clients</p>
        <h2 className="max-w-3xl font-display text-[clamp(40px,5vw,80px)] font-normal leading-[1.08]">
          What people say <em className="text-accent">after closing.</em>
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
          {quotes.map((q, i) => (
            <blockquote key={i} className="border-t border-black/15 pt-8">
              <p className="font-display text-xl italic leading-relaxed md:text-2xl">
                &ldquo;{q.quote}&rdquo;
              </p>
              <footer className="eyebrow mt-6 text-slate">
                {q.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- Contact CTA + footer ---------- */
function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-black text-white">
      <Image
        src="/projects/the-edge/street-dusk.jpg"
        alt=""
        fill
        sizes="100vw"
        className="origin-left scale-[1.04] object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 pt-32 md:px-16 md:pt-44">
        <Reveal className="grid grid-cols-1 gap-14 md:grid-cols-[0.9fr,1.1fr]">
          <div>
            <p className="eyebrow text-white/60">Get in touch</p>
            <h2 className="mt-6 font-display text-[clamp(44px,6vw,96px)] font-normal leading-[1.02]">
              Ready to own a <em className="text-accent-light">landmark?</em>
            </h2>
            <p className="mt-6 max-w-sm font-body text-sm font-light leading-relaxed text-white/70">
              Tell us a bit about what you're looking to buy, sell, or manage, and
              a dedicated agent will follow up within one business day.
            </p>
          </div>
          <ContactForm />
        </Reveal>

        <footer className="mt-28 grid grid-cols-1 gap-8 border-t border-white/20 py-8 sm:grid-cols-2 md:grid-cols-4 md:items-end">
          <p className="font-display text-lg italic text-accent-light">…build the future…</p>
          <div className="font-body text-[10px] uppercase leading-[1.8] tracking-[0.09em] text-white/55">
            <p>Email</p>
            <a href="mailto:atlantisbuildcon@gmail.com" className="text-white">
              atlantisbuildcon@gmail.com
            </a>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 font-body text-[10px] uppercase tracking-[0.09em] text-white/55">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#philosophy" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <p className="font-body text-[10px] uppercase tracking-[0.09em] text-white/55 md:text-right">
            &copy; {new Date().getFullYear()} Atlantis Group · Since 1989
          </p>
        </footer>
      </div>
    </section>
  );
}
