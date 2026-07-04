import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Akshad Dambhare, a passionate full-stack developer specializing in Java, Spring Boot, and React.
              I'm dedicated to building robust backend systems and creating intuitive user interfaces that solve real-world problems.
            </p>
            <p>
              With a strong foundation in Java, Spring Boot, React, and SQL/Hibernate, I've successfully delivered
              multiple projects ranging from e-commerce platforms to enterprise management systems. I'm committed to writing
              clean, maintainable code and staying updated with the latest industry trends and best practices.
            </p>
            <p>
              I specialize in full-stack development using Spring Boot for backend services and React for frontend applications.
              My expertise includes RESTful API design, database optimization with Hibernate, and creating responsive user interfaces.
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
