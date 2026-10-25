import { navLinks, profile } from "../data/content.js";
import "./Header.css";

export default function Header() {
  return (
    <header className="site-header wrap">
      <a href="#top" className="logo" aria-label={profile.name}>
        {profile.name[0]}
      </a>
      <nav className="nav">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
