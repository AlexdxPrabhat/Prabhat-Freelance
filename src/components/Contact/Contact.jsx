import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { FiArrowUpRight, FiCheck, FiCopy } from "react-icons/fi";
import { useGSAP, revealUp, revealText } from "../../lib/motion";
import { profile, socials, projectTypes, budgets, timelines } from "../../constants";
import MagneticButton from "../ui/MagneticButton";

const fields = [
  { name: "user_name", label: "Your name", type: "text", autoComplete: "name" },
  { name: "user_email", label: "Email", type: "email", autoComplete: "email" },
];

const inputClass =
  "peer w-full border-b border-line bg-transparent pb-3 pt-6 text-lg text-paper outline-none transition-colors placeholder-transparent focus:border-accent";
const labelClass =
  "pointer-events-none absolute left-0 top-6 text-lg text-muted transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs";

/** Single-choice pill group; the choice is folded into the email body. */
const Choice = ({ label, options, value, onChange }) => (
  <fieldset>
    <legend className="mb-3 text-xs uppercase tracking-[0.22em] text-muted">{label}</legend>
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          aria-pressed={value === o}
          onClick={() => onChange(value === o ? "" : o)}
          className={`rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${
            value === o ? "border-accent bg-accent font-medium text-ink" : "border-line text-paper/80 hover:border-paper/40 hover:text-paper"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  </fieldset>
);

const Contact = () => {
  const root = useRef(null);
  const form = useRef(null);
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);
  const [brief, setBrief] = useState({ type: "", budget: "", timeline: "" });

  useGSAP(
    () => {
      revealUp(".ct-eyebrow", { trigger: root.current });
      revealText(root.current.querySelector(".ct-title"), { trigger: root.current, stagger: 0.1 });
      revealUp(".ct-reveal", { trigger: ".ct-body", stagger: 0.08 });
    },
    { scope: root }
  );

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    const data = new FormData(form.current);
    const message = [
      `Project type: ${brief.type || "-"}`,
      `Budget: ${brief.budget || "-"}`,
      `Timeline: ${brief.timeline || "-"}`,
      "",
      data.get("message"),
    ].join("\n");
    // Same EmailJS template as the main portfolio: user_name, user_email, subject, message
    emailjs
      .send(
        "service_hvs2wow",
        "template_d3irp0d",
        {
          user_name: data.get("user_name"),
          user_email: data.get("user_email"),
          subject: `Freelance enquiry: ${brief.type || "new project"}`,
          message,
        },
        "A99nGvsBJ7kR5FVzQ"
      )
      .then(
        () => {
          form.current.reset();
          setBrief({ type: "", budget: "", timeline: "" });
          toast.success("Enquiry sent. I'll get back to you by email.");
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Couldn't send that. Please try again or email me directly.");
        }
      )
      .finally(() => setSending(false));
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" ref={root} className="section overflow-hidden">
      <div className="container-x relative">
        <p className="ct-eyebrow eyebrow invisible">
          <span className="tabular-nums">(10)</span> Start a project
        </p>
        <h2 className="ct-title display invisible mt-6 text-[clamp(3.25rem,11vw,11rem)]">
          Let&apos;s build something <span className="font-serif font-normal italic text-accent">that works.</span>
        </h2>

        <div className="ct-body mt-10 grid gap-12 lg:mt-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="ct-reveal invisible max-w-md text-lg leading-relaxed text-paper/70">
              Tell me what you&apos;re building. I&apos;ll reply with questions or a rough plan, and the first call is free. Based in India (IST), working with clients worldwide.
            </p>
            <div className="ct-reveal invisible mt-10 flex flex-wrap items-center gap-3">
              <MagneticButton
                href={`mailto:${profile.email}`}
                data-cursor="Write"
                className="h-14 rounded-full bg-accent px-7 font-semibold text-ink"
              >
                {profile.email}
              </MagneticButton>
              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copy email address"
                className="grid h-14 w-14 place-items-center rounded-full border border-line transition-colors hover:border-paper/40"
              >
                {copied ? <FiCheck aria-hidden="true" className="text-accent" /> : <FiCopy aria-hidden="true" />}
              </button>
            </div>
            <ul className="ct-reveal invisible mt-12 border-t border-line">
              {socials.map((s) => (
                <li key={s.label} className="border-b border-line">
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-4 text-lg transition-[padding] duration-500 ease-expo hover:px-2"
                  >
                    {s.label}
                    <FiArrowUpRight aria-hidden="true" className="transition-transform duration-500 ease-expo group-hover:rotate-45" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form ref={form} onSubmit={sendEmail} className="ct-reveal invisible flex flex-col gap-8 lg:col-span-6 lg:col-start-7">
            {fields.map((f) => (
              <div key={f.name} className="relative">
                <input
                  id={f.name}
                  name={f.name}
                  type={f.type}
                  autoComplete={f.autoComplete}
                  required
                  placeholder={f.label}
                  className={inputClass}
                />
                <label htmlFor={f.name} className={labelClass}>
                  {f.label}
                </label>
              </div>
            ))}
            <Choice label="What do you need?" options={projectTypes} value={brief.type} onChange={(v) => setBrief((b) => ({ ...b, type: v }))} />
            <Choice label="Budget" options={budgets} value={brief.budget} onChange={(v) => setBrief((b) => ({ ...b, budget: v }))} />
            <Choice label="Timeline" options={timelines} value={brief.timeline} onChange={(v) => setBrief((b) => ({ ...b, timeline: v }))} />
            <div className="relative">
              <textarea id="message" name="message" rows="4" required placeholder="Message" className={`${inputClass} resize-none`} />
              <label htmlFor="message" className={labelClass}>
                Tell me about your project
              </label>
            </div>
            <MagneticButton
              type="submit"
              disabled={sending}
              data-cursor="Send"
              className="mt-2 h-16 w-full rounded-full bg-paper text-base font-semibold text-ink disabled:opacity-60 sm:w-auto sm:self-start sm:px-10"
            >
              {sending ? "Sending…" : "Send enquiry"} <FiArrowUpRight aria-hidden="true" />
            </MagneticButton>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
