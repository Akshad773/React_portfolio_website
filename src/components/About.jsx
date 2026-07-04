import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm a passionate full-stack developer with expertise in building modern web applications.
              I love creating intuitive user interfaces and robust backend systems that solve real-world problems.
            </p>
            <p>
              With a strong foundation in React, Node.js, and database design, I've successfully delivered
              multiple projects that improved user experiences and business outcomes. I'm committed to continuous
              learning and staying updated with the latest industry trends.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or sharing knowledge with the developer community.
            </p>
          </div>
          <div className="about-highlights">
            <div className="highlight-card">
              <h3>🎯 Focus</h3>
              <p>User-centric design and scalable solutions</p>
            </div>
            <div className="highlight-card">
              <h3>💡 Philosophy</h3>
              <p>Clean code and continuous improvement</p>
            </div>
            <div className="highlight-card">
              <h3>🚀 Goal</h3>
              <p>Build products that make a difference</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
