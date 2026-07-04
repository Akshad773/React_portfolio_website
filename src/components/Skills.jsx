import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design', 'Vite']
    },
    {
      category: 'Backend',
      skills: ['Java', 'Spring Boot', 'SQL', 'Hibernate', 'REST APIs', 'Database Design']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'VS Code', 'MySQL', 'Postman', 'Linux']
    },
    {
      category: 'Concepts',
      skills: ['Object-Oriented Programming', 'MVC Architecture', 'State Management', 'API Design', 'Database Optimization']
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Skills & Expertise</h2>
        <p className="section-subtitle">Technologies and concepts I work with</p>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="skill-badge">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="proficiency-section">
          <h3>Proficiency Levels</h3>
          <div className="proficiency-grid">
            <div className="proficiency-item">
              <div className="skill-name">Java & Spring Boot</div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '90%' }}></div>
              </div>
              <span className="percentage">90%</span>
            </div>
            <div className="proficiency-item">
              <div className="skill-name">React & JavaScript</div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '90%' }}></div>
              </div>
              <span className="percentage">90%</span>
            </div>
            <div className="proficiency-item">
              <div className="skill-name">SQL & Hibernate</div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '85%' }}></div>
              </div>
              <span className="percentage">85%</span>
            </div>
            <div className="proficiency-item">
              <div className="skill-name">Git & Version Control</div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '85%' }}></div>
              </div>
              <span className="percentage">85%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
