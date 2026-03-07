import "./About.css"
import { Link } from "react-router-dom";
import NavigationBtn from "../components/Navigation-Btn";
import NavigationBtnPrev from "../components/Navigation-Btn-Prev";
import PageHeader from "../components/PageHeader";

export default function About(){
    return (
        <>
      <PageHeader
        title="About Me"
        subtitle="Beyond the label-let's explore!"
        description="I am a dedicated Software Engineer with experience across frontend and backend development, focused on building scalable, reliable, and user-centric applications. My work spans modern web technologies such as React.js, Ember.js, Java, Node.js, and REST APIs, where I enjoy turning complex requirements into well-structured, maintainable solutions."
      />
      <p className="home-desc">With a strong foundation in frontend engineering, I have worked extensively on reusable component systems, shared UI infrastructure, accessibility improvements, and performance optimization. Alongside this, I contribute to backend services, data workflows, and API development, ensuring systems are robust, testable, and production-ready.</p>
      <p className="home-desc">I thrive in collaborative environments, working closely with product, design, and platform teams to deliver high-impact features end to end. Driven by curiosity and continuous learning, I aim to build software that is not only technically sound but also meaningful and effective for real users.</p>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2em', width: '100%'}}>
        <Link to="/" style={{textDecoration: 'none'}}>
          <NavigationBtnPrev text="Introduction" />
        </Link>
        <Link to="/projects" style={{textDecoration: 'none'}}>
          <NavigationBtn text="Projects" />
        </Link>
      </div>
        </>
    )
}