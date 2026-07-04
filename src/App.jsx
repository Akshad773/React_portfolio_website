import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('About');

  const renderSection = () => {
    switch(activeSection) {
      case 'About':
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Skills':
        return <Skills />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="app">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <main className="main-content">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

