import { profile, socials } from "../content";

const Footer = () => (
  <footer className="border-t border-paper/10 bg-ink py-8 text-sm text-paper/60">
    <div className="wrap flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} {profile.name} · Freelance developer</p>
      <ul className="flex flex-wrap gap-5">
        {socials.map((s) => (
          <li key={s.label}>
            <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-paper">{s.label}</a>
          </li>
        ))}
        <li>
          <a href={profile.mainPortfolio} target="_blank" rel="noopener noreferrer" className="hover:text-paper">Main portfolio</a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
