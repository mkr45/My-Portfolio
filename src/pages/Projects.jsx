import "./Projects.css";
import { Link } from "react-router-dom";
import ProjectCard from "../components/Project-Card";
import NavigationBtnPrev from "../components/Navigation-Btn-Prev";
import NavigationBtn from "../components/Navigation-Btn";
import PageHeader from "../components/PageHeader";
import { projectsData } from "../components/projectsData";

export default function Projects() {
  return (
    <>
      <PageHeader
        title="Projects"
        subtitle="Selected builds with product feel and engineering depth."
        description="A tighter look at the work: cleaner cards, faster scanning, and the most important details up front."
      />
      <div className="projects-grid">
        <ProjectCard projects={projectsData} />
      </div>
      <div className="projects-nav">
        <Link to="/about" style={{ textDecoration: "none" }}>
          <NavigationBtnPrev text="About" />
        </Link>
        <Link to="/skills-tools" style={{ textDecoration: "none" }}>
          <NavigationBtn text="Skills & tools" />
        </Link>
      </div>
    </>
  );
}
