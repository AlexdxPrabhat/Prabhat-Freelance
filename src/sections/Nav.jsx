import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#experience", label: "Experience" },
  { href: "#faq", label: "FAQ" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition ${scrolled || open ? "border-b border-line bg-paper/90 backdrop-blur" : ""}`}>
      <nav className="wrap flex h-16 items-center justify-between" aria-label="Main">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-xs font-bold text-paper">PB</span>
          Prabhat Bisht
        </a>
        <ul className="hidden items-center gap-7 text-sm text-soft md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-ink">{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn-dark hidden h-10 px-5 md:inline-flex">Start a project</a>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-line md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>
      {open && (
        <div className="wrap pb-6 md:hidden">
          <ul className="flex flex-col border-t border-line pt-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-lg">{l.label}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" onClick={() => setOpen(false)} className="btn-dark mt-3 w-full">Start a project</a>
        </div>
      )}
    </header>
  );
};

export default Nav;
