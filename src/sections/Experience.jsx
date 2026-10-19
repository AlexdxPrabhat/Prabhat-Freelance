import { FiArrowUpRight, FiAward } from "react-icons/fi";
import { experience, credentials, profile } from "../content";

const Experience = () => (
  <section id="experience" className="section border-t border-line bg-card/60">
    <div className="wrap">
      <div className="reveal flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <p className="kicker">Experience</p>
          <h2 className="h2">Enterprise-trained, freelance by choice</h2>
          <p className="mt-4 text-lg text-soft">
            Before freelancing I spent two years delivering ServiceNow for a large enterprise client at Accenture.
            Code reviews, change control and production releases are how I already work.
          </p>
        </div>
        <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-line h-10 px-5">
          Résumé <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-12">
        <article className="reveal rounded-3xl border border-line bg-card p-6 md:p-8 lg:col-span-8">
          <div className="flex flex-wrap items-start gap-4">
            <img src={experience.logo} alt="Accenture logo" className="h-14 w-14 rounded-xl border border-line bg-white object-contain p-2" />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-2xl font-semibold tracking-tight">{experience.company}</h3>
                <span className="rounded-full border border-line px-3 py-1 text-sm text-soft">{experience.date}</span>
              </div>
              <p className="mt-1 font-medium">{experience.role}</p>
              <p className="text-sm text-soft">{experience.place}</p>
            </div>
          </div>
          <p className="mt-6 text-[15px] leading-relaxed text-soft">{experience.summary}</p>
          <ul className="mt-5 space-y-3 text-[15px] leading-relaxed">
            {experience.highlights.map((h) => (
              <li key={h} className="flex gap-3">
                <span className="mt-2.5 h-1 w-3 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
        </article>

        <aside className="reveal rounded-3xl border border-line bg-card p-6 md:p-8 lg:col-span-4">
          <h3 className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight">
            <FiAward className="text-accent" aria-hidden="true" /> Credentials
          </h3>
          <ul className="mt-5 divide-y divide-line">
            {credentials.map((c) => {
              const body = (
                <>
                  <p className="font-medium leading-snug">{c.title}</p>
                  <p className="mt-0.5 text-sm text-soft">{c.meta}</p>
                </>
              );
              return (
                <li key={c.title} className="flex items-start gap-3 py-4 first:pt-0 last:pb-0">
                  {c.logo && <img src={c.logo} alt="" className="h-10 w-10 shrink-0 object-contain" />}
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noopener noreferrer" className="group">
                      {body}
                      <span className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-accent">
                        Verify on Credly <FiArrowUpRight aria-hidden="true" />
                      </span>
                    </a>
                  ) : (
                    <div>{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    </div>
  </section>
);

export default Experience;
