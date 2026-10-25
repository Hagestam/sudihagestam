import { profile } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import PillButton from "./PillButton.jsx";
import "./Contact.css";

export default function Contact() {
  return (
    <Reveal as="section" className="section wrap contact">
      <h2 id="contact" className="section-title">Get in touch</h2>
      <p className="contact-text">{profile.contactLine}</p>
      <div className="btn-row btn-row--center">
        <PillButton href={`mailto:${profile.email}`}>Email me</PillButton>
        <PillButton href={profile.github} variant="ghost" external>
          GitHub
        </PillButton>
        <PillButton href={profile.linkedin} variant="ghost" external>
          LinkedIn
        </PillButton>
      </div>
    </Reveal>
  );
}
