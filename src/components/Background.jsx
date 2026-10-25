import { education, skills } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import "./Background.css";

// Skills + education, shown under the About block.
export default function Background() {
  return (
    <Reveal className="background">
      <div>
        <h3 className="sub-title">Skills</h3>
        <dl className="skills">
          {skills.map((s) => (
            <div key={s.group}>
              <dt>{s.group}</dt>
              <dd>{s.items}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="background-divider" aria-hidden="true">
        <span className="background-divider__node background-divider__node--start" />
        <span className="background-divider__emblem">✦</span>
        <span className="background-divider__node background-divider__node--end" />
      </div>
      <div>
        <h3 className="sub-title">Education</h3>
        <ul className="edu">
          {education.map((e) => (
            <li key={e.name}>
              <p className="ink">
                {e.name}
                {e.location && <span className="muted"> · {e.location}</span>}
              </p>
              <p><em>{e.detail}</em></p>
              <p className="muted">{e.dates}</p>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
