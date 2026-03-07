import PageHeader from "../components/PageHeader";
import ExperienceCard from "../components/Experience-Card";
import NavigationBtn from "../components/Navigation-Btn";
import NavigationBtnPrev from "../components/Navigation-Btn-Prev";
import { Link } from "react-router-dom";

export default function Experience() {
  return (
    <>
      <PageHeader
        title={"Experience"}
        subtitle={"Experience opens doors, but work builds it!"}
        description={
          "Throughout my journey as a developer, I’ve had the opportunity to work with modern technologies while learning the art of solving real-world engineering problems. From building scalable web applications and reusable UI components to debugging tricky production issues, my experience has been a balance of structured development and hands-on problem solving. Working across technologies like React.js, Ember.js, Java, and REST APIs has strengthened my ability to write clean, maintainable code, collaborate effectively with teams, and continuously improve the performance and reliability of the systems I build"
        }
      />
      <ExperienceCard
        job="Software Engineer - RSL"
        date="May 2025 - Present"
        experience="Working on full-stack web development tasks, contributing to both frontend and backend features. Assisting in building new modules, fixing bugs, and optimizing application functionality. Continuously improving code quality while collaborating within an agile development team."
      />
      <ExperienceCard
        job="Software Engineer Intern - RSL"
        date="Jan 2025 - May 2025"
        experience="Completed a 4-month internship where I worked on building project features, migrating code, and refactoring existing modules. Gained hands-on experience with real-world development practices, debugging, and improving code structure and maintainability."
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "2em",
          width: "100%",
        }}
      >
        <Link to="/skills-tools" style={{ textDecoration: "none" }}>
          <NavigationBtnPrev text="Skills & tools" />
        </Link>
        <Link to="/education" style={{ textDecoration: "none" }}>
          <NavigationBtn text="Education" />
        </Link>
      </div>
    </>
  );
}
