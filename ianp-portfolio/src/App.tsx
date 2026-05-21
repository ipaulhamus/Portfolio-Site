import './App.css'
import NavBar from './components/navbar.tsx'
import Hero from './components/hero.tsx'
import TitleBlock from './components/titleBlock.tsx'
import AboutSection from './components/aboutSection.tsx'
import SkillsSection from './sections/skills.tsx';
import Experience from './components/experience.tsx'

function App() {

  return (
    <>
      <div className="paint-bg" aria-hidden="true">
        <span className="paint-dot" />
        <span className="paint-dot" />
        <span className="paint-dot" />
        <span className="paint-dot" />
        <span className="paint-dot" />
        <span className="paint-dot" />
        <span className="paint-dot" />
        <span className="paint-dot" />
        <span className="paint-dot paint-dot--small" />
        <span className="paint-dot paint-dot--small" />
        <span className="paint-dot paint-dot--small" />
        <span className="paint-dot paint-dot--small" />
        <span className="paint-dot paint-dot--small" />
        <span className="paint-dot paint-dot--small" />
      </div>
      <NavBar />
      <div className="content-container">
      <Hero />
      <TitleBlock title="About"/>
      <AboutSection />
      <SkillsSection />
      <Experience />
      </div>
    </>
  )
}

export default App
