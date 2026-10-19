import { FiArrowUpRight } from "react-icons/fi";
import { caseStudies, smallerWork, profile } from "../content";

const CaseStudy = ({ cs, flip }) => (
  <article id={cs.id} className="reveal grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
    <div className={`overflow-hidden rounded-3xl border border-line bg-card ${flip ? "lg:order-2" : ""}`}>
      <img
        src={cs.image}
        alt={`${cs.title} preview`}
        loading="lazy"
        className="aspect-[16/10] w-full object-cover"
        style={{ objectPosition: cs.imagePosition || "center" }}
      />
    </div>
    <div>
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="font-semibold uppercase tracking-[0.14em] text-accent">{cs.kind}</span>
        <span className="text-faint">·</span>
        <span className="text-soft">{cs.year}</span>
        <span className="ml-1 rounded-full bg-accent-soft px-2.5 py-1 font-medium text-accent">{cs.status}</span>
      </div>
      <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">{cs.title}</h3>

      <dl className="mt-6 space-y-5 text-[15px] leading-relaxed">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">The brief</dt>
          <dd className="mt-1 text-soft">{cs.brief}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">What I built</dt>
          <dd>
            <ul className="mt-2 space-y-1.5">
              {cs.built.map((b) => (
                <li key={b} className="flex gap-2.5">
                  <span className="mt-2.5 h-1 w-3 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">Result</dt>
          <dd className="mt-1 font-medium">{cs.result}</dd>
        </div>
      </dl>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {cs.stack.map((t) => <span key={t} className="tag">{t}</span>)}
      </div>
      {cs.links.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3">
          {cs.links.map((l, i) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={`${i === 0 ? "btn-dark" : "btn-line"} h-10 px-5`}>
              {l.label} <FiArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
      )}
    </div>
  </article>
);

const Work = () => (
  <section id="work" className="section border-y border-line bg-card/60">
    <div className="wrap">
      <div className="reveal flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <p className="kicker">Selected work</p>
          <h2 className="h2">Projects, start to finish</h2>
          <p className="mt-4 text-lg text-soft">
            What each one needed, what I built and where it stands today.
          </p>
        </div>
        <a href={profile.mainPortfolio} target="_blank" rel="noopener noreferrer" className="btn-line h-10 px-5">
          Full portfolio <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>

      <div className="mt-14 space-y-20 md:space-y-28">
        {caseStudies.map((cs, i) => <CaseStudy key={cs.id} cs={cs} flip={i % 2 === 1} />)}
      </div>

      <div className="reveal mt-24">
        <h3 className="font-display text-2xl font-semibold tracking-tight">Smaller builds</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {smallerWork.map((w) => (
            <a key={w.title} href={w.href} target="_blank" rel="noopener noreferrer" className="group overflow-hidden rounded-2xl border border-line bg-card transition hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5">
              <img src={w.image} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover" />
              <div className="p-4">
                <p className="flex items-center justify-between font-semibold">
                  {w.title}
                  <FiArrowUpRight className="text-faint transition group-hover:rotate-45 group-hover:text-accent" aria-hidden="true" />
                </p>
                <p className="mt-1 text-sm text-soft">{w.note}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Work;
