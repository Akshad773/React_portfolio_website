import './Resume.css';

export default function Resume() {
  const experience = [
    {
      role: 'Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2023 - Present',
      responsibilities: [
        'Developed and maintained React-based web applications with 100K+ users',
        'Implemented lazy loading and code splitting, reducing bundle size by 40%',
        'Led performance optimization initiatives resulting in 60% faster page load times',
        'Collaborated with cross-functional teams to deliver 15+ successful projects'
      ]
    },
    {
      role: 'Junior Developer',
      company: 'Creative Designs Co.',
      period: '2022 - 2023',
      responsibilities: [
        'Built responsive web components using React and CSS',
        'Contributed to 8+ client projects with focus on UI/UX improvements',
        'Implemented REST APIs and database optimization',
        'Mentored 2 junior developers in React best practices'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Tech University',
      year: '2022',
      highlights: ['GPA: 3.8/4.0', 'Dean\'s List', 'Web Development Specialization']
    },
    {
      degree: 'Advanced React Specialization',
      institution: 'Online Learning Platform',
      year: '2023',
      highlights: ['Grade: A+', 'Capstone Project: E-Commerce Platform']
    }
  ];

  const certifications = [
    'React Advanced Patterns & Practices',
    'Web Performance Optimization',
    'Full Stack Development Certificate',
    'AWS Certified Associate'
  ];

  return (
    <section className="resume" id="resume">
      <div className="container">
        <h2>Resume & Experience</h2>

        <div className="resume-content">
          {/* Experience Section */}
          <div className="resume-section">
            <h3 className="section-title">
              <span className="icon">💼</span> Experience
            </h3>
            {experience.map((job, index) => (
              <div key={index} className="resume-item">
                <div className="resume-header">
                  <h4>{job.role}</h4>
                  <span className="period">{job.period}</span>
                </div>
                <p className="company">{job.company}</p>
                <ul className="responsibilities">
                  {job.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div className="resume-section">
            <h3 className="section-title">
              <span className="icon">🎓</span> Education
            </h3>
            {education.map((edu, index) => (
              <div key={index} className="resume-item">
                <div className="resume-header">
                  <h4>{edu.degree}</h4>
                  <span className="period">{edu.year}</span>
                </div>
                <p className="company">{edu.institution}</p>
                <ul className="responsibilities">
                  {edu.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="resume-section">
            <h3 className="section-title">
              <span className="icon">🏆</span> Certifications
            </h3>
            <div className="certifications-list">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-badge">
                  ✓ {cert}
                </div>
              ))}
            </div>
          </div>

          {/* Download Resume */}
          <div className="resume-download">
            <a href="#" className="download-btn">
              📥 Download Full Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
