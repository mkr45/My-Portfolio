import { useParams } from "react-router";
import { projectsData } from "../components/projectsData";
import PageHeader from "../components/PageHeader";

export default function ProjectDetails() {
  const { id } = useParams();

  const project = projectsData.find((p) => p.heading === id);

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
    </>
  );
}
