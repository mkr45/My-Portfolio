import { useParams } from "react-router";
import { projectsData } from "../components/projectsData";
import PageHeader from "../components/PageHeader";
import ProjectDetailsCard from "../components/Project-Detalis-Card";

export default function ProjectDetails() {
  const { id } = useParams();

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
      <h3
        style={{ fontSize: "1.5em", fontWeight: "bold", marginBottom: "0.5em" }}
      >
        Tech Stack
      </h3>
      <div
        style={{ display: "flex", gap: "0.5em", width: "100%", height: "4em", flexWrap: "wrap"}}
      >
        { projectTechStack.map((stack)=>(
              <div
          style={{
            flex: "0 1 auto",
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            padding: "0em 1em 0em 1em",
            borderRadius: "1em",
            height: "2em",
            border: "1px solid rgb(226, 224, 224)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.06)"
          }}
        >
        {stack.techName}
        </div>
        ))

}
      </div>
        
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "2em",
          marginRight: "5em",
        }}
      >
        <ProjectDetailsCard projectFeatures={project.features} />
        <ProjectDetailsCard projectFeatures={project.challenges} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "2em",
          marginRight: "5em",
          marginBottom: "1em",
        }}
      >
        <ProjectDetailsCard projectFeatures={project.learning} />
        <div style={{ marginRight: "6em" }}>
          <h3
            style={{
              fontSize: "1.5em",
              fontWeight: "bold",
              marginBottom: "0.5em",
              marginLeft: "1em",
            }}
          >
            Feedback
          </h3>
          <p
            style={{ fontSize: "1.2em", fontWeight: "400", marginLeft: "2em" }}
          >
            For feedback or suggestions, contact me at:
          </p>
          <p
            style={{
              fontSize: "1.2em",
              fontWeight: "400",
              marginLeft: "2em",
              color: "oklch(60.6% .25 292.717)",
            }}
          >
            mayankkr4554@gmail.com
          </p>
        </div>
      </div>
      <h3
        style={{
          fontSize: "1.5em",
          fontWeight: "bold",
          marginBottom: "0.5em",
          marginLeft: "1em",
        }}
      >
        Links
      </h3>
      <div style={{ display: "flex", gap: "1em", marginLeft: "1em" }}>
        <a
          href={project.links.live}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <div
            style={{
              width: "8em",
              height: "2.5em",
              borderRadius: "0.5em",
              backgroundColor: "oklch(60.6% .25 292.717)",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.4em",
              fontSize: "1em",
              fontWeight: "500",
              cursor: "pointer",
              transition: "transform 220ms",
            }}
          >
            🔗 Live Demo
          </div>
        </a>
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <div
            style={{
              width: "8em",
              height: "2.5em",
              borderRadius: "0.5em",
              backgroundColor: "#1a1a1a",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.4em",
              fontSize: "1em",
              fontWeight: "500",
              cursor: "pointer",
              transition: "transform 220ms",
            }}
          >
            💻 GitHub
          </div>
        </a>
      </div>
    </>
  );
}
