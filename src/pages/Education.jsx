import { Link } from "react-router-dom";
import NavigationBtnPrev from "../components/Navigation-Btn-Prev";
import NavigationBtn from "../components/Navigation-Btn";
import PageHeader from "../components/PageHeader";
import ExperienceCard from "../components/Experience-Card";
import "./Experience.css";

export default function Education() {
  const educationStats = [
    "Computer science foundation",
    "Projects and practical problem-solving",
    "Steady progression through core academics",
  ];

  return (
    <>
      <PageHeader
        title="Education"
        subtitle="Academic foundations that supported hands-on building."
        description="My education gave me the theory, but the most valuable part was connecting that foundation to real projects, development practice, and consistent problem-solving."
      />

      <section className="experience-overview">
        <article className="experience-panel hero">
          <span className="experience-kicker">Learning arc</span>
          <h3>Built fundamentals first, then turned them into practical engineering skills</h3>
          <p>
            My academic path helped me understand core computer science ideas,
            while projects and coding practice helped convert that knowledge into
            real implementation ability.
          </p>
        </article>

        <div className="experience-panel">
          <span className="experience-kicker">Highlights</span>
          <div className="experience-highlights">
            {educationStats.map((item) => (
              <span className="experience-highlight-pill" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="experience-timeline">
        <ExperienceCard
          type="education"
          badge="Degree"
          job="Bachelor of Engineering - Chandigarh University, Mohali, Punjab, India"
          date="May 2021 - May 2025"
          summary="Built a strong academic base in computer science and engineering."
          experience="Completed a bachelor's degree focused on programming, software development, and core computer science concepts while steadily building practical development skills."
          highlights={["Computer science", "Software development", "Applied learning"]}
        />
        <ExperienceCard
          type="education"
          badge="Higher secondary"
          job="Higher Secondary Education - DAV Public School, B.S City, Jharkhand, India"
          date="April 2020 - April 2021"
          summary="Completed 12th in non-medical studies."
          experience="Strengthened analytical thinking and subject fundamentals that supported later technical study."
          highlights={["Analytical foundation", "Academic progression"]}
        />
        <ExperienceCard
          type="education"
          badge="Secondary"
          job="Secondary Education - DAV Public School, B.S City, Jharkhand, India"
          date="April 2018 - April 2019"
          summary="Completed 10th grade."
          experience="Established the broader academic base that led into higher secondary study and later engineering education."
          highlights={["Early foundation", "Core academics"]}
        />
      </section>

      <div className="experience-nav">
        <Link to="/experience" style={{ textDecoration: "none" }}>
          <NavigationBtnPrev text="Experience" />
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <NavigationBtn text="Contact" />
        </Link>
      </div>
    </>
  );
}
