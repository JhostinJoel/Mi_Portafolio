import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="App">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {activeSection === 'hero' && <Hero />}
        {activeSection === 'about' && (
          <>
            <About />
            <Skills />
            <Education />
          </>
        )}
        {activeSection === 'experience' && <Experience />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
