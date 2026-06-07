import "./About.css"
import { Link } from "react-router-dom";
import NavigationBtn from "../components/Navigation-Btn";
import NavigationBtnPrev from "../components/Navigation-Btn-Prev";
import PageHeader from "../components/PageHeader";

export default function About() {
  const strengths = [
    "Reusable design systems",
    "Responsive frontend architecture",
    "API integration and product delivery",
  ];

  const values = [
    {
      title: "Build with clarity",
      text: "I prefer interfaces that feel obvious, fast, and intentional instead of overloaded.",
    },
    {
      title: "Collaborate deeply",
      text: "My best work happens with strong product, design, and engineering feedback loops.",
    },
    {
      title: "Polish the details",
      text: "Accessibility, consistency, and performance are part of the feature, not extras.",
    },
  ];

  return (
    <>
      <PageHeader
        title="About Me"
        subtitle="Product-minded engineer with a frontend core."
        description="I work across UI, backend integrations, and delivery systems, but I care most about making complex software feel simple and confident to use."
      />

      <section className="about-grid">
        <article className="about-spotlight">
          <div className="about-avatar">MK</div>
          <div>
            <span className="about-label">Quick snapshot</span>
            <h3>Frontend-first, full-stack capable</h3>
            <p>
              I enjoy shaping design systems, refining UX, and connecting it all
              to backend services that stay stable in production.
            </p>
          </div>
        </article>

        <article className="about-card">
          <span className="about-label">Strengths</span>
          <div className="strength-list">
            {strengths.map((strength) => (
              <span className="strength-pill" key={strength}>
                {strength}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className="principles-grid">
        {values.map((value) => (
          <article className="about-card principle-card" key={value.title}>
            <span className="about-label">Approach</span>
            <h3>{value.title}</h3>
            <p>{value.text}</p>
          </article>
        ))}
      </section>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "2em",
          width: "100%",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <NavigationBtnPrev text="Introduction" />
        </Link>
        <Link to="/projects" style={{ textDecoration: "none" }}>
          <NavigationBtn text="Projects" />
        </Link>
      </div>
    </>
  );
}
