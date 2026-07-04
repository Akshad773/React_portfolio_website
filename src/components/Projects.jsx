import { lazy, Suspense } from 'react';
import './Projects.css';
const ProjectCard = lazy(() => Promise.resolve({
  default: function ProjectCard({ project }) {
    return (
      <div className="project-card">
        <div className="project-header">
          <h3>{project.title}</h3>
          <span className="project-date">{project.date}</span>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.tech.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
              GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link demo">
              Live Demo
            </a>
          )}
        </div>
      </div>
    );
  }
}));

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    date: '2024',
    description: 'Full-stack e-commerce application with product catalog, shopping cart, and order management. Features user authentication, payment integration, and admin dashboard.',
    tech: ['Spring Boot', 'React', 'MySQL', 'REST API', 'JWT'],
    github: 'https://github.com/akshadDambhare',
    demo: '#'
  },
  {
    id: 2,
    title: 'Task Management System',
    date: '2024',
    description: 'A comprehensive task management application with user authentication, task assignment, deadline tracking, and real-time notifications. Built with Spring Boot backend and React frontend.',
    tech: ['Spring Boot', 'React', 'Hibernate', 'SQL', 'RESTful API'],
    github: 'https://github.com/akshadDambhare',
    demo: '#'
  },
  {
    id: 3,
    title: 'Bank Management System',
    date: '2024',
    description: 'A Java-based bank management system with account creation, deposit/withdrawal operations, and transaction history. Features secure login and database persistence.',
    tech: ['Java', 'JDBC', 'MySQL', 'Swing GUI'],
    github: 'https://github.com/akshadDambhare',
    demo: '#'
  },
  {
    id: 4,
    title: 'Student Portal',
    date: '2023',
    description: 'A web-based student portal for viewing grades, course registration, and academic information. Includes admin panel for managing student data and course offerings.',
    tech: ['Spring Boot', 'React', 'Hibernate', 'PostgreSQL'],
    github: 'https://github.com/akshadDambhare',
    demo: '#'
  },
  {
    id: 5,
    title: 'REST API Service',
    date: '2024',
    description: 'Scalable RESTful API built with Spring Boot for managing user data, authentication, and business logic. Includes comprehensive API documentation and error handling.',
    tech: ['Spring Boot', 'Spring Security', 'MySQL', 'Postman', 'Swagger'],
    github: 'https://github.com/akshadDambhare',
    demo: '#'
  },
  {
    id: 6,
    title: 'E-Commerce Cart Application',
    date: '2024',
    description: 'A fully functional shopping cart application with React frontend, featuring add/remove items, quantity adjustment, and persistent cart state management.',
    tech: ['React', 'JavaScript', 'CSS', 'Redux'],
    github: 'https://github.com/akshadDambhare',
    demo: '#'
  }
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <p className="section-subtitle">Here are some of my recent projects</p>
        
        <Suspense fallback={<div className="loading">Loading projects...</div>}>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Suspense>
      </div>
    </section>
  );
}
