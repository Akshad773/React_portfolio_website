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
    title: 'E-Commerce Cart Application',
    date: '2024',
    description: 'A fully functional shopping cart application with Redux state management, featuring add/remove items, quantity adjustment, and persistent cart state.',
    tech: ['React', 'Redux', 'JavaScript', 'CSS'],
    github: 'https://github.com',
    demo: '#'
  },
  {
    id: 2,
    title: 'Lost & Found Platform',
    date: '2024',
    description: 'A comprehensive platform for reporting lost and found items with search, filter, and real-time updates using Firebase. Users can post, edit, and manage their reports.',
    tech: ['React', 'Firebase', 'Vite', 'Context API'],
    github: 'https://github.com',
    demo: '#'
  },
  {
    id: 3,
    title: 'Mobile Store CRUD App',
    date: '2024',
    description: 'Full-stack mobile store application with complete CRUD operations, JSON Server backend, and responsive design for inventory management.',
    tech: ['React', 'Node.js', 'JSON Server', 'CSS Grid'],
    github: 'https://github.com',
    demo: '#'
  },
  {
    id: 4,
    title: 'Contact Card Component',
    date: '2023',
    description: 'Reusable React component library for displaying contact information with filtering and search capabilities.',
    tech: ['React', 'Component Design', 'Vite'],
    github: 'https://github.com',
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
