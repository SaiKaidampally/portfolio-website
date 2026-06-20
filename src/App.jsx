import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div 
        className="min-h-screen flex flex-col text-text-primary transition-colors duration-300"
        style={{ backgroundColor: 'var(--bg-primary)' }}
      >
        <Navbar />
        
        {/* All sections rendered in a single page stack */}
        <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 pt-[100px] pb-16 flex flex-col gap-24 md:gap-32">
          
          <section id="home" className="scroll-mt-[100px]">
            <Home />
          </section>
          
          <section id="about" className="scroll-mt-[100px]">
            <About />
          </section>

          <section id="skills" className="scroll-mt-[100px]">
            <Skills />
          </section>

          <section id="education" className="scroll-mt-[100px]">
            <Education />
          </section>

          <section id="projects" className="scroll-mt-[100px]">
            <Projects />
          </section>

          <section id="experience" className="scroll-mt-[100px]">
            <Experience />
          </section>

          <section id="certifications" className="scroll-mt-[100px]">
            <Certifications />
          </section>

          <section id="contact" className="scroll-mt-[100px]">
            <Contact />
          </section>

        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
