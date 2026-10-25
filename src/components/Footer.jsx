import { profile } from "../data/content.js";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer wrap">
      <p>
        {profile.name}, {new Date().getFullYear()}
      </p>
      <p className="footer-links">
        <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={`mailto:${profile.email}`}>Email</a>
      </p>
    </footer>
  );
}
