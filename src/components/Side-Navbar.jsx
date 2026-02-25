import "./Side-Navbar.css";
import { Link } from "react-router-dom";

export default function SideNavbar() {
  return (
    <aside className="side-navbar">
      <h4 className="side-title">Sections</h4>

      <div className="sideNav-Links">
        <Link to="/" className="nav-button">
          <span className="nav-text">Introduction</span>
        </Link>

        <Link to="/about" className="nav-button">
          <span className="nav-text">About me</span>
        </Link>

        <Link to="/projects" className="nav-button">
          <span className="nav-text">Projects</span>
        </Link>

        <Link to="/skills-tools" className="nav-button">
          <span className="nav-text">Skills & tools</span>
        </Link>

        <Link to="/experience" className="nav-button">
          <span className="nav-text">Experience</span>
        </Link>

        <Link to="/education" className="nav-button">
          <span className="nav-text">Education</span>
        </Link>

        <Link to="/contact" className="nav-button">
          <span className="nav-text">Contact</span>
        </Link>

        <Link to="/stats" className="nav-button">
          <span className="nav-text">Stats</span>
        </Link>
      </div>
    </aside>
  );
}