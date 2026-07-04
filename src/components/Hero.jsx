import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm a Full Stack Developer</h1>
        <p className="hero-subtitle">
          Building beautiful, responsive, and performant web applications
        </p>
        <p className="hero-description">
          Specializing in React, Node.js, and modern web technologies
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">View My Work</button>
          <button className="btn btn-secondary">Get In Touch</button>
        </div>
      </div>
      <div className="hero-background">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        <div className="gradient-blob blob-3"></div>
      </div>
    </section>
  );
}
