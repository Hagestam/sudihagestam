import { experience } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section wrap">
      <h2 className="section-title">Experience</h2>
      <ul className="jobs">
        {experience.map((job) => (
          <Reveal as="li" key={job.role} className="job">
            <div>
              <h3 className="job-title">{job.role}</h3>
              <p className="muted-dark">{job.org}</p>
              <p className="muted">{job.dates}</p>
            </div>
            <p className="job-summary">{job.summary}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
