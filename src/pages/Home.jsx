import { Link } from "react-router-dom";
import "./Home.css";
import GithubActivity from "../components/GithubActivity";

export default function Home() {

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
    <div className="introduction-page">
      <section className="hero-shell" aria-labelledby="intro-title">
        <div className="hero-copy">
          <span className="intro-eyebrow">SOFTWARE ENGINEER · FULL STACK DEVELOPER</span>
          <h1 id="intro-title">Mayank <span>Kumar</span></h1>
          <p className="hero-subtitle">Thoughtful interfaces.<br />Reliable software.</p>
          <p className="hero-lead">I build modern products across frontend and backend with a focus on clean UI, reliable systems, and details that make software feel premium.</p>
          <div className="button-row">
            <a href="https://drive.google.com/file/d/1VyAPpX0a5qW4yDBw5Dvxibu8R75wU2h0/view?usp=sharing" target="_blank" rel="noreferrer" className="intro-button intro-button-primary">Get Resume <span aria-hidden="true">↗</span></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mayankkr4554@gmail.com" target="_blank" rel="noreferrer" className="intro-button intro-button-secondary">Send Email <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-availability"><span aria-hidden="true" />Open to impactful product work</div>
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

      <GithubActivity />

      <section className="intro-expertise" aria-labelledby="expertise-title">
      <div className="intro-section-heading"><span className="intro-eyebrow">FROM IDEA TO IMPLEMENTATION</span><h2 id="expertise-title">What I bring to the build</h2></div>
      <div className="stats-strip">
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
      </div>

      <div className="focus-grid">
        {focusAreas.map((area, index) => (
          <article className="focus-card" key={area.title}>
            <span className="focus-index" aria-hidden="true">0{index + 1}</span>
            <h3>{area.title}</h3>
            <p>{area.text}</p>
          </article>
        ))}
      </div>
      </section>

      <div className="intro-next">
        <div><span className="intro-eyebrow">A LITTLE MORE CONTEXT</span><p>The person behind the code.</p></div>
        <Link to="/about" className="intro-button intro-button-secondary">About me <span aria-hidden="true">→</span></Link>
      </div>
    </div>
  );
}
