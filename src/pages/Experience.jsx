import PageHeader from "../components/PageHeader";
import ExperienceCard from "../components/Experience-Card";
import NavigationBtn from "../components/Navigation-Btn";
import NavigationBtnPrev from "../components/Navigation-Btn-Prev";
import { Link } from "react-router-dom";
import "./Experience.css";

export default function Experience() {
  const experienceStats = [
    {
      title: "Frontend systems",
      text: "Reusable components, layout polish, and user-facing product flows.",
    },
    {
      title: "Backend support",
      text: "Feature wiring, service integration, bug fixing, and stable delivery.",
    },
    {
      title: "Team workflow",
      text: "Agile collaboration, code quality improvements, and maintainable implementation.",
    },
    {
      title: "Growth curve",
      text: "From intern foundations to full-time ownership in a short span.",
    },
  ];

  return (
    <>
      <PageHeader
        title={"Experience"}
        subtitle={"Hands-on product work across frontend, backend, and delivery."}
        description={
          "My experience is less about long timelines and more about fast growth, real shipping work, and learning how to turn requirements into dependable product outcomes."
        }
      />

      <section className="experience-overview">
        <article className="experience-panel hero">
          <span className="experience-kicker">What I bring</span>
          <h3>Execution that connects product ideas to shipped software</h3>
          <p>
            I’ve been working on real product features, production issues, and
            ongoing improvements across the stack. The through-line is simple:
            make the software cleaner, more reliable, and easier to use.
          </p>
        </article>

        <div className="experience-stat-grid">
          {experienceStats.map((item) => (
            <article className="experience-stat" key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-timeline">
        <ExperienceCard
          job="Software Engineer - RSL"
          date="May 2025 - Present"
          badge="Current role"
          summary="Contributing to full-stack product development in an agile team."
          experience="Working on both frontend and backend features, building modules, fixing production issues, and improving application behavior through cleaner implementation and ongoing optimization."
          highlights={[
            "Frontend + backend delivery",
            "Bug fixing and feature work",
            "Code quality improvements",
          ]}
        />
        <ExperienceCard
          job="Software Engineer Intern - RSL"
          date="Jan 2025 - May 2025"
          badge="Internship"
          summary="Built strong engineering fundamentals through live product work."
          experience="Worked on feature development, code migration, and refactoring existing modules while gaining hands-on experience with real-world debugging, maintainability, and team workflows."
          highlights={[
            "Feature implementation",
            "Refactoring and migration",
            "Debugging in production-like systems",
          ]}
        />
      </section>

      <div className="experience-nav">
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
