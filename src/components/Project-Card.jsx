import "./Project-Card.css";
import { Link } from "react-router-dom";
export default function ProjectCard({ projects }) {
  return (
    <>
      {projects.map((project) => (
        <Link
          to={`/projects/${project.heading}`}
          style={{ textDecoration: "none", color: "var(--text-color)" }}
        >
          <div className="box">
            <div className="heading">{project.heading}</div>
            <div className="desc">{project.desc}</div>
            <div className="desc">Learn More...</div>
          </div>
        </Link>
      ))}
    </>
  );
}
