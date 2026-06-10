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

  const profileCards = [
    {
      label: "Current role",
      title: "Software Engineer at RSL",
      text: "Working across frontend and backend features, shipping product improvements and solving real implementation problems.",
    },
    {
      label: "Based in",
      title: "Pune, Maharashtra",
      text: "Building with an eye on product quality, cleaner interfaces, and software that feels reliable in use.",
    },
    {
      label: "Focus area",
      title: "Frontend with full-stack range",
      text: "Strongest in React interfaces, design systems, and product UX, with hands-on backend integration experience too.",
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
        {profileCards.map((card) => (
          <article className="about-card principle-card" key={card.title}>
            <span className="about-label">{card.label}</span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
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
