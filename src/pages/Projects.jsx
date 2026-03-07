import "./Project.css"
import { Link } from "react-router-dom";
import ProjectCard from "../components/Project-Card"
import NavigationBtnPrev from "../components/Navigation-Btn-Prev"
import NavigationBtn from "../components/Navigation-Btn";
import PageHeader from "../components/PageHeader";

export default function Projects(){
    return (
        <>
      <PageHeader
        title="Projects"
        subtitle="Building ideas, one commit at a time!"
        description=""
      />
      <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", gap:"2em", width: "100%", height: "100%", marginBottom:"1em"}}>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
       <ProjectCard />
      </div>
       <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2em', width: '100%'}}>
               <Link to="/about" style={{textDecoration: 'none'}}>
                 <NavigationBtnPrev text="About" />
               </Link>
               <Link to="/skills-tools" style={{textDecoration: 'none'}}>
                 <NavigationBtn text="Skills & tools" />
               </Link>
             </div>
        </>
    )
}