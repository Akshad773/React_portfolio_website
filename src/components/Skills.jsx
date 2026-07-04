import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite', 'Responsive Design']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'REST APIs', 'JSON Server', 'Database Design']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'VS Code', 'Firebase', 'Netlify', 'Vercel']
    },
    {
      category: 'Concepts',
      skills: ['Component Architecture', 'State Management', 'Lazy Loading', 'Performance Optimization', 'Responsive Design']
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
              <div className="skill-name">React & JavaScript</div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '90%' }}></div>
              </div>
              <span className="percentage">90%</span>
            </div>
            <div className="proficiency-item">
              <div className="skill-name">CSS & Responsive Design</div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '85%' }}></div>
              </div>
              <span className="percentage">85%</span>
            </div>
            <div className="proficiency-item">
              <div className="skill-name">Node.js & APIs</div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '80%' }}></div>
              </div>
              <span className="percentage">80%</span>
            </div>
            <div className="proficiency-item">
              <div className="skill-name">Git & DevOps</div>
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
