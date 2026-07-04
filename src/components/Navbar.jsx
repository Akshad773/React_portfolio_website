import { useState } from 'react';
import './Navbar.css';

export default function Navbar({ activeSection, setActiveSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ['About', 'Projects', 'Skills', 'Resume', 'Contact'];

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>Portfolio</h1>
        </div>
        
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {sections.map((section) => (
            <li key={section} className="nav-item">
              <button
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
                onClick={() => handleNavClick(section)}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
