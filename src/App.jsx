import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Education from './pages/Education'
import Experience from './pages/Experience'
import SkillsTools from './pages/Skills-Tools'
import Stats from'./pages/Stats'

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />}  />
        <Route path="/education" element={<Education />}  />
        <Route path="/experience" element={<Experience />}  />
        <Route path="/skills-tools" element={<SkillsTools />}  />
        <Route path="/stats" element={<Stats />}  />
      </Routes>
  )
}
