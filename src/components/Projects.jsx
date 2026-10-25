import { projects } from "../data/content.js";
import ProjectCard from "./ProjectCard.jsx";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section wrap">
      <h2 className="section-title">Projects</h2>
      <div className="project-list">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
