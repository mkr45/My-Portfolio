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
      root.style.setProperty('--bg-color',       'oklch(0.14 0.01 -2 / 1)');
      root.style.setProperty('--text-color',     '#ffffff');
      root.style.setProperty('--border-color',   'rgba(255,255,255,0.1)');
      root.style.setProperty('--nav-bg',         'rgba(20, 20, 20, 0.6)');
      root.style.setProperty('--nav-blur',       'blur(12px)');
      root.style.setProperty('--hover-bg',       '#2a2a2a');
      root.style.setProperty('--time-bg',        '#2a2a2a');
      root.style.setProperty('--muted-text',     '#aaa');
      root.style.setProperty('--card-bg',        '#1e1e1e');
      root.style.setProperty('--card-border',    '#333');
      root.style.setProperty('--secondary-bg',   '#1e1e1e');
      root.style.setProperty('--nav-link-color', '#ccc');
      root.style.setProperty('--chip-bg',        '#e0e0e0');
      root.style.setProperty('--chip-text',      '#111');
      root.style.setProperty('--subtitle-color', '#aaa');
      root.style.setProperty('--stats-heading', '#aaa');
      root.style.setProperty('--hireable-bg',   'oklch(0.3 0.06 152.3)');
    } else {
      root.style.setProperty('--bg-color',       '#ffffff');
      root.style.setProperty('--text-color',     '#000000');
      root.style.setProperty('--border-color',   'hsl(0, 22%, 90%)');
      root.style.setProperty('--nav-bg',         '#ffffff');
      root.style.setProperty('--nav-blur',       'none');
      root.style.setProperty('--hover-bg',       '#f2f2f2');
      root.style.setProperty('--time-bg',        '#fafafa');
      root.style.setProperty('--muted-text',     '#999');
      root.style.setProperty('--card-bg',        '#fff');
      root.style.setProperty('--card-border',    'rgb(226, 224, 224)');
      root.style.setProperty('--secondary-bg',   '#f2f1f2');
      root.style.setProperty('--nav-link-color', 'oklch(42.571% 0.00822 285.966)');
      root.style.setProperty('--chip-bg',        'rgb(0, 0, 0)');
      root.style.setProperty('--chip-text',      'aliceblue');
      root.style.setProperty('--subtitle-color', 'oklch(55.2% .016 285.938)');
      root.style.setProperty('--stats-heading',  'oklch(55.2% .016 285.938)');
      root.style.setProperty('--hireable-bg',    'oklch(0.93 0.06 152.3)');
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
