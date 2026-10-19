import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import portrait from "../assets/portrait-cutout.webp";
import { experience, proof } from "../content";

const Hero = () => (
  <section id="top" className="pt-28 md:pt-36">
    <div className="wrap grid items-center gap-12 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1.5 text-xs font-medium text-soft">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Available for freelance projects
        </p>
        <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,5.2rem)] font-semibold leading-[0.98] tracking-tight">
          I build apps, websites and <span className="text-accent">ServiceNow</span> solutions that ship.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-soft">
          Freelance developer and former Accenture ServiceNow developer. I take projects from the first call to
          launch: Android apps, full-stack web, serverless backends and AI features.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#contact" className="btn-dark">
            Start a project <FiArrowRight aria-hidden="true" />
          </a>
          <a href="#work" className="btn-line">See my work</a>
        </div>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-soft">
          {["Fixed quotes", "You own the code", "Milestone builds"].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <FiCheckCircle className="text-accent" aria-hidden="true" /> {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
        <div className="relative overflow-hidden rounded-[2rem] bg-accent-soft">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-accent/25 to-transparent" aria-hidden="true" />
          <img src={portrait} alt="Prabhat Bisht" width="880" height="1000" className="relative mx-auto block w-[88%] pt-6" />
        </div>
        <div className="absolute -left-3 bottom-8 flex items-center gap-3 rounded-2xl border border-line bg-card p-3 pr-4 shadow-lg shadow-ink/5 sm:-left-8">
          <img src={experience.logo} alt="" className="h-10 w-10 rounded-lg bg-white object-contain p-1" />
          <div className="text-sm leading-tight">
            <p className="font-semibold">Ex-Accenture</p>
            <p className="text-soft">ServiceNow Developer</p>
          </div>
        </div>
        <div className="absolute -right-2 top-8 rounded-2xl border border-line bg-card px-4 py-3 text-sm shadow-lg shadow-ink/5 sm:-right-6">
          <p className="font-semibold">CSA certified</p>
          <p className="text-soft">ServiceNow, 2026</p>
        </div>
      </div>
    </div>

    <div className="wrap mt-16 md:mt-24">
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
        {proof.map((p) => (
          <div key={p.label} className="flex flex-col-reverse bg-card p-5 md:p-6">
            <dt className="mt-1 text-sm text-soft">{p.label}</dt>
            <dd className="font-display text-3xl font-semibold tracking-tight">{p.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default Hero;
