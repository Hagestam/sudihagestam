import { profile } from "../data/content.js";
import PillButton from "./PillButton.jsx";
import "./Hero.css";

export default function Hero() {
  const [first, ...rest] = profile.heroTitle;

  return (
    <section id="top" className="hero wrap">
      <h1 className="hero-title">
        <span>
          {first.replace(profile.name, "").replace(/\.\s*$/, "")}
          <span className="hero-name">{profile.name}</span>.
        </span>
        <br />
        <span>{rest.join(" ")}</span>
      </h1>
      <p className="hero-sub">{profile.intro}</p>
      <div className="btn-row">
        <PillButton href="#projects">See the work</PillButton>
        <PillButton href={`mailto:${profile.email}`} variant="ghost">
          Email me
        </PillButton>
      </div>
    </section>
  );
}