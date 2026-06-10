import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import SkillsTools from "./pages/Skills-Tools";
import Stats from "./pages/Stats";
import ProjectDetails from "./pages/Project-Details";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


export default function App() {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    useEffect(() => {

    const root = document.documentElement;

    if (isDarkMode) {
      root.style.setProperty('--bg-color',       '#0d0d0d');
      root.style.setProperty('--text-color',     '#f3ede2');
      root.style.setProperty('--border-color',   'rgba(243,237,226,0.1)');
      root.style.setProperty('--nav-bg',         'rgba(13, 13, 13, 0.78)');
      root.style.setProperty('--nav-blur',       'blur(12px)');
      root.style.setProperty('--hover-bg',       '#191614');
      root.style.setProperty('--time-bg',        '#171311');
      root.style.setProperty('--muted-text',     '#a79b8d');
      root.style.setProperty('--card-bg',        '#141313');
      root.style.setProperty('--card-border',    '#2c241f');
      root.style.setProperty('--secondary-bg',   '#1a1817');
      root.style.setProperty('--nav-link-color', '#c8beb2');
      root.style.setProperty('--chip-bg',        '#eadfcd');
      root.style.setProperty('--chip-text',      '#171311');
      root.style.setProperty('--subtitle-color', '#b8ac9f');
      root.style.setProperty('--stats-heading',  '#b8ac9f');
      root.style.setProperty('--hireable-bg',    '#231d19');
      root.style.setProperty('--accent-color',   '#b8875e');
      root.style.setProperty('--accent-strong',  '#d7a06c');
      root.style.setProperty('--accent-soft',    'rgba(184, 135, 94, 0.14)');
      root.style.setProperty('--accent-rgb',     '184, 135, 94');
      root.style.setProperty('--hero-surface-start', '#171110');
      root.style.setProperty('--hero-surface-end',   '#35231a');
    } else {
      root.style.setProperty('--bg-color',       '#f3ede2');
      root.style.setProperty('--text-color',     '#161310');
      root.style.setProperty('--border-color',   '#dbcfbe');
      root.style.setProperty('--nav-bg',         'rgba(243, 237, 226, 0.88)');
      root.style.setProperty('--nav-blur',       'none');
      root.style.setProperty('--hover-bg',       '#ebe0d1');
      root.style.setProperty('--time-bg',        '#ece2d4');
      root.style.setProperty('--muted-text',     '#6f6357');
      root.style.setProperty('--card-bg',        '#faf5ec');
      root.style.setProperty('--card-border',    '#dbcfbe');
      root.style.setProperty('--secondary-bg',   '#f1e7da');
      root.style.setProperty('--nav-link-color', '#6a5d50');
      root.style.setProperty('--chip-bg',        '#161310');
      root.style.setProperty('--chip-text',      '#f3ede2');
      root.style.setProperty('--subtitle-color', '#6f6357');
      root.style.setProperty('--stats-heading',  '#6f6357');
      root.style.setProperty('--hireable-bg',    '#efe3d4');
      root.style.setProperty('--accent-color',   '#9a5f32');
      root.style.setProperty('--accent-strong',  '#7d431d');
      root.style.setProperty('--accent-soft',    'rgba(154, 95, 50, 0.12)');
      root.style.setProperty('--accent-rgb',     '154, 95, 50');
      root.style.setProperty('--hero-surface-start', '#1a1412');
      root.style.setProperty('--hero-surface-end',   '#3a2418');
    }

  }, [isDarkMode]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/skills-tools" element={<SkillsTools />} />
      <Route path="/stats" element={<Stats />} />
    </Routes>
  );
}
