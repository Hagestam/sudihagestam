import Reveal from "./Reveal.jsx";
import Media from "./Media.jsx";
import PillButton from "./PillButton.jsx";

export default function ProjectCard({ project }) {
  return (
    <Reveal as="article" className="project">
      <Media src={project.image} alt={`${project.title} screenshot`} hint="Add project screenshot" />
      <div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-meta">
          <span className="ink">{project.metric}</span> {project.metricLabel}
        </p>
        <p className="body-text">{project.description}</p>
        <p className="stack">{project.stack}</p>
        <PillButton href={project.link} variant="ghost" external>
          View on GitHub
        </PillButton>
      </div>
    </Reveal>
  );
}
