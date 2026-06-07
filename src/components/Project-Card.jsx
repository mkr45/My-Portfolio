import "./Project-Card.css";
import { Link } from "react-router-dom";
export default function ProjectCard({ projects }) {
  return (
    <>
      {projects.map((project, index) => (
        <Link
          key={project.id}
          to={`/projects/${project.heading}`}
          className="project-link"
        >
          <article className="box">
            <div
              className={`project-cover project-cover-${(index % 3) + 1}`}
              aria-hidden="true"
            >
              <span className="project-cover-tag">
                {project.category || "Featured project"}
              </span>
              <div className="project-cover-window">
                <span />
                <span />
                <span />
              </div>
              <strong>{project.visualLabel || project.heading}</strong>
            </div>

            <div className="project-body">
              <div className="project-heading-row">
                <div className="heading">{project.heading}</div>
                <span className="project-badge">{project.badge || "Case study"}</span>
              </div>
              <div className="desc">{project.desc}</div>

              <div className="project-meta">
                <span>{project.duration || "Recent build"}</span>
                <span>{project.highlight || "UI + engineering"}</span>
              </div>

              <div className="project-tech-list">
                {project.techstack.slice(0, 3).map((tech) => (
                  <span className="project-tech-chip" key={tech.id}>
                    {tech.techName}
                  </span>
                ))}
              </div>

              <div className="project-cta">View project details</div>
            </div>
          </article>
        </Link>
      ))}
    </>
  );
}
