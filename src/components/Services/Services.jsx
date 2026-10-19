import { useRef } from "react";
import { FiSmartphone, FiGlobe, FiServer, FiCpu, FiPlay, FiLayers, FiArrowUpRight } from "react-icons/fi";
import { useGSAP, revealUp, trackSpotlight, scrollToSection } from "../../lib/motion";
import { services, projects } from "../../constants";
import SectionHeading from "../ui/SectionHeading";

const icons = { android: FiSmartphone, web: FiGlobe, servicenow: FiLayers, backend: FiServer, ai: FiCpu, games: FiPlay };

// Service `work` ids map to project titles; "accenture" points at the Experience section.
const workTitles = { quizly: "Quizly", ukd: "UKD Youth Dehradun", househelp: "HouseHelp", ukexam: "Uttarakhand Exam Prep", rps: "Rock Paper Scissors 3D" };

const Services = ({ onOpenProject }) => {
  const root = useRef(null);

  useGSAP(
    () => {
      revealUp(".sv-card", { trigger: ".sv-grid", stagger: 0.08, y: 50 });
    },
    { scope: root }
  );

  const openProof = (id) => {
    if (id === "accenture") return scrollToSection("#experience");
    const p = projects.find((x) => x.title === workTitles[id]);
    if (p) onOpenProject(p);
  };

  return (
    <section id="services" ref={root} className="section">
      <div className="container-x">
        <SectionHeading
          index={2}
          label="Services"
          title={
            <>
              What I can <span className="font-serif font-normal italic text-accent">build</span> for you
            </>
          }
          aside="Every service is backed by something I've already shipped. Open the proof on each card."
        />

        <div className="sv-grid grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.id];
            return (
              <article
                key={s.id}
                onPointerMove={trackSpotlight}
                className="sv-card spotlight invisible flex flex-col rounded-3xl border border-line bg-surface/60 p-6 md:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-paper/[0.06] text-xl text-accent">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="text-xs text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-8 text-2xl font-medium tracking-[-0.02em] md:text-3xl">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-paper/65">{s.pitch}</p>
                <ul className="mt-6 space-y-2 border-t border-line pt-6 text-sm text-paper/80">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <ul className="flex flex-wrap gap-2">
                    {s.stack.map((t) => (
                      <li key={t} className="chip">{t}</li>
                    ))}
                  </ul>
                  <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
                    Proof
                    {s.work.map((id) => (
                      <button
                        key={id}
                        type="button"
                        onClick={() => openProof(id)}
                        data-cursor="Open"
                        className="group inline-flex items-center gap-1 text-paper"
                      >
                        <span className="link-underline">{id === "accenture" ? "Accenture" : workTitles[id]}</span>
                        <FiArrowUpRight aria-hidden="true" className="transition-transform duration-500 ease-expo group-hover:rotate-45" />
                      </button>
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
};

export default Services;
