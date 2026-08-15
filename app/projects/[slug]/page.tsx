import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Logo from "../../Logo";
import { projects, getProject } from "../../projects-data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.name} | Atlantis Group`,
    description: project.copy,
  };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <main className="overflow-x-hidden bg-ivory">
      <header className="sticky top-0 z-40 border-b border-mist/80 bg-ivory/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/#projects" className="font-body text-sm text-slate transition hover:text-ink">
            ← Back to projects
          </Link>
          <span className="flex items-center gap-3 font-display text-lg tracking-wide text-ink">
            <Logo className="h-9 w-9 shrink-0" />
            Atlantis Group
          </span>
        </div>
      </header>

      <section className="relative border-b border-mist bg-ink">
        <div className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]">
          <Image
            src={project.cardImage}
            alt={`${project.name} — ${project.type}`}
            fill
            priority
            sizes="100vw"
            className="object-contain"
          />
          <span
            className={`absolute left-6 top-6 rounded-sm px-3 py-1 font-mono text-[11px] uppercase tracking-widest2 ${
              project.status === "Completed" ? "bg-ink text-ivory" : "bg-accent text-ink"
            }`}
          >
            {project.status}
          </span>
        </div>
      </section>

      <section className="border-b border-mist bg-ivory py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 md:grid-cols-[1.2fr,0.8fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest2 text-accent">{project.type}</p>
            <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">{project.name}</h1>
            <p className="mt-2 font-body text-sm text-slate">{project.location}</p>
            <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-slate">
              {project.copy}
            </p>
            {project.brochureUrl && (
              <a
                href={project.brochureUrl}
                download
                className="mt-8 inline-block rounded-sm bg-ink px-6 py-3 font-body text-sm text-ivory transition hover:bg-[#0B1B2E]"
              >
                Download brochure
              </a>
            )}
          </div>
          <div className="rounded-sm border border-mist bg-mist/40 p-8">
            <p className="font-mono text-xs uppercase tracking-widest2 text-accent">Details</p>
            <dl className="mt-4 space-y-4 font-body text-sm">
              <div>
                <dt className="text-slate">Developer</dt>
                <dd className="mt-1 text-ink">{project.developer}</dd>
              </div>
              <div>
                <dt className="text-slate">Address</dt>
                <dd className="mt-1 text-ink">{project.address}</dd>
              </div>
              <div>
                <dt className="text-slate">Type</dt>
                <dd className="mt-1 text-ink">{project.type}</dd>
              </div>
              <div>
                <dt className="text-slate">Status</dt>
                <dd className="mt-1 text-ink">{project.status}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="border-b border-mist bg-mist/40 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-mono text-xs uppercase tracking-widest2 text-accent">Amenities</p>
          <h2 className="mt-3 max-w-xl font-display text-2xl text-ink sm:text-3xl">
            Amenities at a glance.
          </h2>
          <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 font-body text-sm text-slate sm:grid-cols-2 md:grid-cols-3">
            {project.amenities.map((a) => (
              <li key={a} className="border-l-2 border-accent pl-4">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ivory py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-mono text-xs uppercase tracking-widest2 text-accent">Gallery</p>
          <h2 className="mt-3 max-w-xl font-display text-2xl text-ink sm:text-3xl">
            Renders and site plans.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {project.gallery.map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] overflow-hidden rounded-sm border border-mist bg-mist"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-mist bg-ink py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-xl text-ivory">
            Interested in {project.name}?
          </p>
          <Link
            href="/#contact"
            className="rounded-sm bg-accent px-6 py-3 font-body text-sm text-ink transition hover:bg-accent-light"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  );
}
