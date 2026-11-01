import { Link } from "react-router-dom";
import "./Home.css";
import GithubActivity from "../components/GithubActivity";
import portrait from "../assets/mayank-portrait.png";

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
        <header className="hero-heading">
          <h1 id="intro-title">Mayank <span>Kumar</span></h1>
          <p className="hero-role">SOFTWARE ENGINEER · FULL STACK DEVELOPER</p>
        </header>
        <div className="hero-copy">
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
        <div className="hero-visual">
          <figure className="portrait-panel">
            <div className="portrait-orbit" aria-hidden="true" />
            <span className="portrait-kicker" aria-hidden="true">THE PERSON BEHIND THE CODE</span>
            <span className="portrait-monogram" aria-hidden="true">MK</span>
            <img className="hero-portrait" src={portrait} alt="Mayank Kumar wearing glasses and a black hoodie" width="433" height="577" fetchPriority="high" />
            <figcaption className="portrait-caption">
              <div><span className="portrait-caption-label">HELLO, I’M</span><strong>Mayank Kumar</strong></div>
              <span className="portrait-caption-detail">Engineer by craft.<br />Builder at heart.</span>
            </figcaption>
          </figure>
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
