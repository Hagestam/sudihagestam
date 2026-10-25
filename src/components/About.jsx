import { profile } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import Media from "./Media.jsx";
import PillButton from "./PillButton.jsx";
import Background from "./Background.jsx";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section wrap">
      <Reveal className="about">
        <Media src={profile.photo} alt={`Photo of ${profile.name}`} hint="Your photo" portrait />
        <div>
          <h2 className="section-title">About me</h2>
          {profile.about.map((p, i) => (
            <p key={i} className="body-text">
              {p}
            </p>
          ))}
          <div className="btn-row">
            <PillButton href="#contact">Get in touch</PillButton>
          </div>
        </div>
      </Reveal>
      <Background />
    </section>
  );
}
