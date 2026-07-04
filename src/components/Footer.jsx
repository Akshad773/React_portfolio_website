import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Portfolio</h3>
          <p>Building amazing web experiences, one project at a time.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Social</h4>
          <div className="social-links">
            <a href="https://github.com/Akshad773" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/akshadDambhare" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:akshaddambhare773@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}
