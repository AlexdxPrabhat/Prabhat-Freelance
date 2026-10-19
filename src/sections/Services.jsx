import { FiSmartphone, FiGlobe, FiServer, FiCpu, FiPlay, FiLayers, FiArrowUpRight } from "react-icons/fi";
import { services, caseStudies } from "../content";

const icons = { android: FiSmartphone, web: FiGlobe, servicenow: FiLayers, backend: FiServer, ai: FiCpu, games: FiPlay };

const proofLink = (id) => {
  if (id === "accenture") return { href: "#experience", label: "Accenture" };
  const cs = caseStudies.find((c) => c.id === id);
  return cs && { href: `#${cs.id}`, label: cs.title };
};

const Services = () => (
  <section id="services" className="section">
    <div className="wrap">
      <div className="reveal max-w-2xl">
        <p className="kicker">Services</p>
        <h2 className="h2">What I can build for you</h2>
        <p className="mt-4 text-lg text-soft">
          Every service below is backed by something I&apos;ve already built and shipped, linked on each card.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => {
          const Icon = icons[s.id];
          return (
            <article key={s.id} className="reveal flex flex-col rounded-3xl border border-line bg-card p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-xl text-accent">
                <Icon aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-soft">{s.pitch}</p>
              <ul className="mt-5 space-y-2 border-t border-line pt-5 text-sm">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <div className="flex flex-wrap gap-1.5">
                  {s.stack.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
                <p className="mt-4 text-sm text-soft">
                  Proof:{" "}
                  {s.work.map(proofLink).filter(Boolean).map((p, i) => (
                    <span key={p.href}>
                      {i > 0 && ", "}
                      <a href={p.href} className="inline-flex items-center gap-0.5 font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-accent">
                        {p.label}<FiArrowUpRight className="text-xs" aria-hidden="true" />
                      </a>
                    </span>
                  ))}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
