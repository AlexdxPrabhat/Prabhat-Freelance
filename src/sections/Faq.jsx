import { FiPlus } from "react-icons/fi";
import { faqs } from "../content";

const Faq = () => (
  <section id="faq" className="section">
    <div className="wrap grid gap-10 lg:grid-cols-12">
      <div className="reveal lg:col-span-4">
        <p className="kicker">FAQ</p>
        <h2 className="h2">Before you ask</h2>
        <p className="mt-4 text-soft">
          Something else on your mind? <a href="#contact" className="font-medium text-ink underline underline-offset-4">Send me a message.</a>
        </p>
      </div>
      <div className="reveal divide-y divide-line border-y border-line lg:col-span-8">
        {faqs.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium [&::-webkit-details-marker]:hidden">
              {f.q}
              <FiPlus className="shrink-0 text-xl text-faint transition group-open:rotate-45 group-open:text-accent" aria-hidden="true" />
            </summary>
            <p className="mt-3 max-w-2xl leading-relaxed text-soft">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default Faq;
