import { Link } from "react-router-dom";
import "./Home.css";
import NavigationBtn from "../components/Navigation-Btn";
import PageHeader from "../components/PageHeader";
import { useSelector } from "react-redux";

export default function Home() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const focusAreas = [
    {
      title: "Frontend systems",
      text: "Reusable UI, responsive layouts, and accessible interfaces that stay clean under scale.",
    },
    {
      title: "Product engineering",
      text: "Turning vague ideas into polished flows, stable releases, and thoughtful user experiences.",
    },
    {
      title: "Performance mindset",
      text: "Shipping fast pages, simpler architecture, and maintainable code that teams can build on.",
    },
  ];

  return (
    <>
      <PageHeader
        title="Mayank Kumar"
        subtitle="Software engineer crafting sharp, usable web experiences."
        description="I build modern products across frontend and backend with a focus on clean UI, reliable systems, and details that make software feel premium."
      />

      <section className="hero-shell">
        <div className="hero-copy">
          <div className="hero-pill">Open to impactful product work</div>
          <p className="hero-lead">
            I like interfaces with personality, systems with discipline, and
            products that make sense the first time someone uses them.
          </p>
          <div className="button-row">
            <div className="btn-primary">
              <a
                href="https://drive.google.com/file/d/1VyAPpX0a5qW4yDBw5Dvxibu8R75wU2h0/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn-link"
              >
                <span>Get Resume</span>
                <img
                  src="https://img.icons8.com/?size=100&id=60664&format=png&color=FFFFFF"
                  alt="Link"
                />
              </a>
            </div>

            <div className="btn-outline">
              <img
                src={
                  isDarkMode
                    ? "https://img.icons8.com/ios-filled/50/FFFFFF/gmail-new.png"
                    : "https://img.icons8.com/?size=100&id=Y2GfpkgYNp42&format=png&color=1A1A1A"
                }
                alt="Email"
              />
              <a
                href="mailto:mayankkr4554@gmail.com"
                className="btn-link"
                onClick={(e) => {
                  e.preventDefault();
                  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=mayankkr4554@gmail.com`;
                  window.open(gmailUrl, "_blank");
                }}
              >
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <section className="terminal-panel" aria-label="Developer terminal preview">
            <div className="terminal-toolbar">
              <div className="terminal-dots" aria-hidden="true">
                <span className="terminal-dot dot-red" />
                <span className="terminal-dot dot-amber" />
                <span className="terminal-dot dot-green" />
              </div>
              <span className="terminal-title">portfolio-session.sh</span>
            </div>

            <div className="terminal-body">
              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span className="terminal-command">whoami</span>
              </div>
              <div className="terminal-output">Mayank Kumar · Software Engineer</div>

              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span className="terminal-command">stack --current</span>
              </div>
              <div className="terminal-chip-row">
                <span className="terminal-chip">React</span>
                <span className="terminal-chip">JavaScript</span>
                <span className="terminal-chip">Node.js</span>
                <span className="terminal-chip">REST APIs</span>
              </div>

              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span className="terminal-command">status --focus</span>
              </div>
              <div className="terminal-block">
                <span>Building polished frontend systems</span>
                <span>Shipping product-friendly backend integrations</span>
                <span>Keeping UX, performance, and maintainability aligned</span>
              </div>

              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span className="terminal-command">availability</span>
              </div>
              <div className="terminal-output terminal-output-accent">
                Open to impactful product work
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="stats-strip">
        <article className="stat-card">
          <span className="stat-number">Frontend</span>
          <span className="stat-label">Component systems, layouts, motion, accessibility</span>
        </article>
        <article className="stat-card">
          <span className="stat-number">Backend</span>
          <span className="stat-label">APIs, integrations, and maintainable service logic</span>
        </article>
        <article className="stat-card">
          <span className="stat-number">Product</span>
          <span className="stat-label">Clean execution from idea to shipped experience</span>
        </article>
      </section>

      <section className="focus-grid">
        {focusAreas.map((area) => (
          <article className="focus-card" key={area.title}>
            <h3>{area.title}</h3>
            <p>{area.text}</p>
          </article>
        ))}
      </section>

      <Link
        to="/about"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          textDecoration: "none",
          paddingTop: "3em",
        }}
      >
        <NavigationBtn text="About me" />
        </Link>
    </>
  );
}
