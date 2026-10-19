import { useRef } from "react";
import { FiCheck } from "react-icons/fi";
import { gsap, useGSAP, revealUp, prefersReducedMotion } from "../../lib/motion";
import { process, promises } from "../../constants";
import SectionHeading from "../ui/SectionHeading";

const Process = () => {
  const root = useRef(null);

  useGSAP(
    () => {
      revealUp(".pc-promise", { trigger: ".pc-promises", stagger: 0.06, y: 20 });
      const rows = gsap.utils.toArray(".pc-row");
      if (prefersReducedMotion()) {
        gsap.set(rows, { autoAlpha: 1 });
        return;
      }
      rows.forEach((row) => {
        gsap
          .timeline({ scrollTrigger: { trigger: row, start: "top 88%", once: true } })
          .set(row, { autoAlpha: 1 })
          .from(row.querySelector(".pc-line"), { scaleX: 0, duration: 1.2, ease: "expo.inOut" })
          .from(row.querySelectorAll(".pc-rise"), { y: 30, autoAlpha: 0, duration: 1, ease: "expo.out", stagger: 0.06 }, "-=0.8");
      });
    },
    { scope: root }
  );

  return (
    <section id="process" ref={root} className="section">
      <div className="container-x">
        <SectionHeading
          index={4}
          label="Process"
          title={
            <>
              No <span className="font-serif font-normal italic text-accent">surprises</span>
            </>
          }
          aside="A clear path from the first call to launch, with something you can try at every step."
        />

        <ol>
          {process.map((p) => (
            <li key={p.step} className="pc-row invisible relative grid gap-4 py-8 md:grid-cols-12 md:gap-8 md:py-12">
              <span className="pc-line absolute inset-x-0 top-0 h-px origin-left bg-line" />
              <span className="pc-rise font-serif text-5xl italic text-accent tabular-nums md:col-span-2 md:text-6xl">{p.step}</span>
              <h3 className="pc-rise text-3xl font-medium leading-tight tracking-[-0.03em] md:col-span-4 md:text-5xl">{p.title}</h3>
              <p className="pc-rise max-w-xl leading-relaxed text-paper/65 md:col-span-6 md:text-lg">{p.text}</p>
            </li>
          ))}
        </ol>
        <div className="h-px bg-line" />

        <ul className="pc-promises mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p) => (
            <li key={p} className="pc-promise invisible flex items-center gap-3 rounded-full border border-line px-5 py-4 text-paper/85">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-xs text-ink">
                <FiCheck aria-hidden="true" />
              </span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Process;
