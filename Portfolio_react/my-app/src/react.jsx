const projects = [
  { 
    id: 'etodo', 
    title: 'E-TODO', 
    desc: 'App de gestion de tâches avec stockage local.',
    techs: ['React', 'CSS3']
  },
  { 
    id: 'hack', 
    title: 'HACK AND JUICE', 
    desc: 'Projet de cybersécurité et interface de monitoring.',
    techs: ['Node.js', 'Express', 'JWT']
  },

];

import { useState } from 'react';

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="portfolio-container">
      {/* Tes titres */}
      <nav className="project-titles">
        {projects.map((project) => (
          <h2 
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="neon-text"
          >
            {project.title}
          </h2>
        ))}
      </nav>

      {/* La fiche projet qui n'apparaît que si selectedProject n'est pas nul */}
      {selectedProject && (
        <div className="project-card">
          <h3>{selectedProject.title}</h3>
          <p>{selectedProject.desc}</p>
          <div className="tech-list">
             {selectedProject.techs.map(t => <span key={t}>{t}</span>)}
          </div>
          <div className="buttons">
             <button className="neon-button">GITHUB</button>
             <button className="neon-button">DEMO</button>
          </div>
        </div>
      )}
    </div>
  );
}