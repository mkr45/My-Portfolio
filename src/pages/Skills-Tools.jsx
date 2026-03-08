import "./Skills-Tools";
import TechChips from "../components/TechChips";
import NavigationBtn from "../components/Navigation-Btn";
import NavigationBtnPrev from "../components/Navigation-Btn-Prev";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import emberIcon from "../assets/icons8-ember-96.png";



export default function SkillsTools() {
  const items = [
    { id: 1,
      name: "HTML",
      icon: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
    },
    {id: 2,
      name: "CSS",
      icon: "https://img.icons8.com/?size=100&id=AY9OsTxmB7MH&format=png&color=000000",
    },
    {
      id: 3,
      name: "JavaScript",
      icon: "https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000",
    },
    { 
      id: 4,
      name: "NodeJS",
      icon: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
    },
    {
      id: 5,
      name: "MongoDB",
      icon: "https://img.icons8.com/?size=100&id=cREyrHivHRHF&format=png&color=000000",
    },
    { id: 6, name: "EmberJS", icon: emberIcon },
    {
      id: 7,
      name: "ReactJS",
      icon: "https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000",
    },
    {
      id: 8,
      name: "Redux",
      icon: "https://img.icons8.com/?size=100&id=jD-fJzVguBmw&format=png&color=000000",
    },
    {
      id: 9,
      name: "ExpressJS",
      icon: "https://img.icons8.com/?size=100&id=9Gfx4Dfxl0JK&format=png&color=000000",
    },
    {
      id: 10,
      name: "Vercel",
      icon: "https://img.icons8.com/?size=100&id=NJKamAy8tnNG&format=png&color=000000",
    },
    {
      id: 11,
      name: "Git",
      icon: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
    },
    {
      id: 12,
      name: "GitHub",
      icon: "https://img.icons8.com/?size=100&id=62856&format=png&color=000000",
    },
    {
      id: 13,
      name: "Postman",
      icon: "https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000",
    },
    {
      id : 14,
      name: "npm",
      icon: "https://img.icons8.com/?size=100&id=24895&format=png&color=000000",
    },
  ];

  return (
    <>
      <PageHeader
        title="Skills & Tools"
        subtitle="Built through practice, sharpened by debugging"
        description="As a Software Engineer, I build scalable and reliable web applications using technologies like React.js, Ember.js, Java, Node.js, and REST APIs. I enjoy working across frontend and backend systems, focusing on clean architecture, performance, accessibility, and maintainability to deliver robust, production-ready solutions."
      />
      <TechChips items={items} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "2em",
          width: "100%",
        }}
      >
        <Link to="/projects" style={{ textDecoration: "none" }}>
          <NavigationBtnPrev text="Projects" />
        </Link>
        <Link to="/experience" style={{ textDecoration: "none" }}>
          <NavigationBtn text="Experience" />
        </Link>
      </div>
    </>
  );
}
