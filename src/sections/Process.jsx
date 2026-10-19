import { FiCheck } from "react-icons/fi";
import { process, promises } from "../content";

const Process = () => (
  <section id="process" className="section">
    <div className="wrap">
      <div className="reveal max-w-2xl">
        <p className="kicker">How we&apos;ll work</p>
        <h2 className="h2">A clear process, no surprises</h2>
      </div>

      <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {process.map((p) => (
          <li key={p.step} className="reveal relative rounded-3xl border border-line bg-card p-6">
            <span className="font-display text-5xl font-semibold tracking-tight text-line">{p.step}</span>
            <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">{p.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-soft">{p.text}</p>
          </li>
        ))}
      </ol>

      <div className="reveal mt-8 flex flex-col gap-5 rounded-3xl bg-ink p-6 text-paper md:flex-row md:items-center md:justify-between md:p-8">
        <p className="font-display text-xl font-semibold tracking-tight md:text-2xl">Every project comes with</p>
        <ul className="grid gap-3 sm:grid-cols-2 md:gap-x-8">
          {promises.map((p) => (
            <li key={p} className="flex items-center gap-2.5 text-[15px]">
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-[11px]"><FiCheck aria-hidden="true" /></span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Process;
