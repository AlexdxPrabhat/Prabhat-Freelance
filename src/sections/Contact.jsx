import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FiArrowRight, FiCheck, FiCopy, FiMail, FiMapPin } from "react-icons/fi";
import { profile, projectTypes, budgets, timelines } from "../content";

// Same EmailJS service/template as the main portfolio: it expects
// user_name, user_email, subject and message.
const EMAILJS = { service: "service_hvs2wow", template: "template_d3irp0d", key: "A99nGvsBJ7kR5FVzQ" };

const Chips = ({ name, options, value, onChange }) => (
  <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={name}>
    {options.map((o) => (
      <button
        key={o}
        type="button"
        role="radio"
        aria-checked={value === o}
        onClick={() => onChange(o)}
        className={`rounded-full border px-3.5 py-2 text-sm transition ${value === o ? "border-ink bg-ink text-paper" : "border-line bg-card hover:border-ink/40"}`}
      >
        {o}
      </button>
    ))}
  </div>
);

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", type: "", budget: "", timeline: "", message: "" });
  const [state, setState] = useState("idle"); // idle | sending | sent | error
  const [copied, setCopied] = useState(false);
  const set = (k) => (v) => setForm((f) => ({ ...f, [k]: typeof v === "string" ? v : v.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setState("sending");
    const message = [
      `Project type: ${form.type || "-"}`,
      `Budget: ${form.budget || "-"}`,
      `Timeline: ${form.timeline || "-"}`,
      "",
      form.message,
    ].join("\n");
    emailjs
      .send(EMAILJS.service, EMAILJS.template, {
        user_name: form.name,
        user_email: form.email,
        subject: `Freelance enquiry: ${form.type || "new project"}`,
        message,
      }, EMAILJS.key)
      .then(() => {
        setState("sent");
        setForm({ name: "", email: "", type: "", budget: "", timeline: "", message: "" });
      })
      .catch((err) => {
        console.error("Error sending message:", err);
        setState("error");
      });
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
    <section id="contact" className="section bg-ink text-paper">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <div className="reveal lg:col-span-5">
          <p className="kicker text-[#7fd3a8]">Start a project</p>
          <h2 className="h2">Tell me what you&apos;re building</h2>
          <p className="mt-4 text-lg leading-relaxed text-paper/70">
            Share a few details and I&apos;ll reply with questions or a rough plan. The first call is free.
          </p>
          <ul className="mt-8 space-y-4 text-[15px]">
            <li className="flex items-center gap-3">
              <FiMail className="text-[#7fd3a8]" aria-hidden="true" />
              <a href={`mailto:${profile.email}`} className="underline decoration-paper/30 underline-offset-4 hover:decoration-paper">{profile.email}</a>
              <button type="button" onClick={copyEmail} aria-label="Copy email address" className="grid h-8 w-8 place-items-center rounded-full border border-paper/20 hover:border-paper/60">
                {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
              </button>
            </li>
            <li className="flex items-center gap-3">
              <FiMapPin className="text-[#7fd3a8]" aria-hidden="true" />
              {profile.location} · IST (UTC+5:30) · working with clients worldwide
            </li>
          </ul>
        </div>

        <form onSubmit={submit} className="reveal rounded-3xl bg-paper p-5 text-ink sm:p-8 lg:col-span-7">
          {state === "sent" ? (
            <div className="grid min-h-[420px] place-items-center text-center">
              <div>
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent text-2xl text-paper"><FiCheck aria-hidden="true" /></span>
                <h3 className="mt-5 font-display text-2xl font-semibold">Thanks, message received.</h3>
                <p className="mt-2 text-soft">I&apos;ll get back to you by email.</p>
                <button type="button" onClick={() => setState("idle")} className="btn-line mt-6 h-10 px-5">Send another</button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium">Name</span>
                  <input required autoComplete="name" className="field" value={form.name} onChange={set("name")} placeholder="Your name" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium">Email</span>
                  <input required type="email" autoComplete="email" className="field" value={form.email} onChange={set("email")} placeholder="you@company.com" />
                </label>
              </div>
              <fieldset>
                <legend className="mb-2 text-sm font-medium">What do you need?</legend>
                <Chips name="Project type" options={projectTypes} value={form.type} onChange={set("type")} />
              </fieldset>
              <fieldset>
                <legend className="mb-2 text-sm font-medium">Budget</legend>
                <Chips name="Budget" options={budgets} value={form.budget} onChange={set("budget")} />
              </fieldset>
              <fieldset>
                <legend className="mb-2 text-sm font-medium">Timeline</legend>
                <Chips name="Timeline" options={timelines} value={form.timeline} onChange={set("timeline")} />
              </fieldset>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">Project details</span>
                <textarea required rows={5} className="field resize-y" value={form.message} onChange={set("message")} placeholder="What are you building, who is it for, and is there anything already in place?" />
              </label>
              {state === "error" && (
                <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                  That didn&apos;t send. Please try again or email me at {profile.email}.
                </p>
              )}
              <button type="submit" disabled={state === "sending"} className="btn-dark w-full disabled:opacity-60 sm:w-auto">
                {state === "sending" ? "Sending…" : <>Send enquiry <FiArrowRight aria-hidden="true" /></>}
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
