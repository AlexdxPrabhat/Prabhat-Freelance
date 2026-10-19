import { useRef } from "react";
import { FiPlus } from "react-icons/fi";
import { gsap, useGSAP, ScrollTrigger, prefersReducedMotion } from "../../lib/motion";
import { faqs } from "../../constants";
import SectionHeading from "../ui/SectionHeading";

const Faq = () => {
  const root = useRef(null);

  useGSAP(
    () => {
      const rows = gsap.utils.toArray(".fq-row");
      if (prefersReducedMotion()) {
        gsap.set(rows, { autoAlpha: 1 });
        return;
      }
      rows.forEach((row) => {
        gsap
          .timeline({ scrollTrigger: { trigger: row, start: "top 90%", once: true } })
          .set(row, { autoAlpha: 1 })
          .from(row.querySelector(".fq-line"), { scaleX: 0, duration: 1.2, ease: "expo.inOut" })
          .from(row.querySelectorAll(".fq-rise"), { y: 24, autoAlpha: 0, duration: 1, ease: "expo.out", stagger: 0.06 }, "-=0.8");
      });
    },
    { scope: root }
  );

  return (
    <section id="faq" ref={root} className="section">
      <div className="container-x">
        <SectionHeading
          index={8}
          label="FAQ"
          title={
            <>
              Before you <span className="font-serif font-normal italic text-accent">ask</span>
            </>
          }
        />

        <ol>
          {faqs.map((f, i) => (
            <li key={f.q} className="fq-row invisible relative">
              <span className="fq-line absolute inset-x-0 top-0 h-px origin-left bg-line" />
              <details className="group" onToggle={() => ScrollTrigger.refresh()}>
                <summary className="grid cursor-pointer list-none grid-cols-[2.5rem_1fr_auto] items-center gap-4 py-7 md:grid-cols-12 md:gap-8 md:py-9 [&::-webkit-details-marker]:hidden">
                  <span className="fq-rise font-serif text-xl italic text-muted tabular-nums md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                  <span className="fq-rise text-xl font-medium leading-snug tracking-[-0.02em] md:col-span-10 md:text-3xl">{f.q}</span>
                  <span className="fq-rise grid h-9 w-9 place-items-center justify-self-end rounded-full border border-line transition-transform duration-500 ease-expo group-open:rotate-45 md:col-span-1">
                    <FiPlus aria-hidden="true" />
                    <span className="sr-only">Toggle answer</span>
                  </span>
                </summary>
                <p className="max-w-3xl pb-9 leading-relaxed text-paper/65 md:ml-[8.33%] md:pl-8 md:text-lg">{f.a}</p>
              </details>
            </li>
          ))}
        </ol>
        <div className="h-px bg-line" />
      </div>
    </section>
  );
};

export default Faq;
