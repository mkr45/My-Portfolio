import { useParams } from "react-router";
import { projectsData } from "../components/projectsData";
import PageHeader from "../components/PageHeader";
import ProjectDetailsCard from "../components/Project-Detalis-Card";
import { useSelector } from "react-redux";
import "./Project-Details.css";

export default function ProjectDetails() {
  const { id } = useParams();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const project = projectsData.find((p) => p.heading === id);
  const projectTechStack = project.techstack;

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <>
      <PageHeader
        title={project.heading}
        subtitle=""
        description={project.desc}
      />
      <h3 className="tech-stack-heading">
        Tech Stack
      </h3>
      <div className="tech-stack-container">
        { projectTechStack.map((stack, index)=>(
              <div
          key={index}
          className="tech-chip"
        >
        {stack.techName}
        </div>
        ))
      }
      </div>
        
      <div className="details-section">
        <ProjectDetailsCard projectFeatures={project.features} />
        <ProjectDetailsCard projectFeatures={project.challenges} />
      </div>
      <div className="details-section">
        <ProjectDetailsCard projectFeatures={project.learning} />
        <div className="feedback-section">
          <h3>
            Feedback
          </h3>
          <p>
            For feedback or suggestions, contact me at:
          </p>
          <p className="feedback-email">
            mayankkr4554@gmail.com
          </p>
        </div>
      </div>
      <h3 className="links-heading">
        Links
      </h3>
      <div className="links-container">
        <a
          href={project.links.live}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <div className="link-button link-button-primary">
            <img 
              src="https://img.icons8.com/glyph-neue/64/FFFFFF/link.png" 
              alt="link" 
              style={{ width: "1.2em", height: "1.2em" }}
            />
            Live Demo
          </div>
        </a>
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <div className="link-button link-button-secondary">
            <img 
              src={!isDarkMode 
                ? "https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/FFFFFF/external-github-social-media-tanah-basah-glyph-tanah-basah.png" 
                : "https://img.icons8.com/sf-black-filled/64/1A1A1A/github.png"
              }
              alt="github" 
              style={{ width: "1.2em", height: "1.2em" }}
            />
            GitHub
          </div>
        </a>
      </div>
    </>
  );
}
