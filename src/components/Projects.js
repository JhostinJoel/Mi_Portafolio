import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const [projects] = useState([
        {
            id: 1,
            name: 'Sistema de Inventarios',
            description: 'Sistema completo de gestión de inventarios, clientes, rutas y préstamos',
            details: 'Este sistema actúa como un puente entre la gestión física y digital, permitiendo a los administradores **controlar el inventario en tiempo real**, gestionar **ventas y pedidos**, y ofrecer a los clientes una experiencia de compra moderna y fluida. Es la herramienta ideal para negocios que buscan digitalizar sus operaciones sin complicaciones, centralizando la administración de productos, categorías y flujo de caja en una sola plataforma robusta y segura.',
            tech: ['Node.js', 'Express', 'MySQL', 'EJS', 'Bootstrap'],
            github: 'https://github.com/JhostinJoel/Sistema-de-Inventarios',
            demo: 'https://sistema-de-inventarios-2.onrender.com/'
        },
        {
            id: 2,
            name: 'Portafolio Personal',
            description: 'Portafolio profesional con React y diseño moderno',
            details: 'Portafolio profesional desarrollado con React que muestra experiencia, habilidades y proyectos. Diseño moderno con tema oscuro, componentes modulares, navegación dinámica y completamente responsive. Incluye secciones de Hero, Sobre Mí, Experiencia, Educación, Habilidades, Proyectos y Contacto.',
            tech: ['React', 'CSS3', 'React Icons', 'Font Awesome'],
            github: 'https://github.com/JhostinJoel/Mi_Portafolio',
            demo: 'https://portafoliojoela.netlify.app/'
        },
        {
            id: 3,
            name: 'WebApp Moderna',
            description: 'Aplicación web con interfaz moderna y funcionalidades avanzadas',
            details: 'Aplicación web moderna desarrollada con las últimas tecnologías. Incluye diseño responsive, componentes reutilizables y optimización de rendimiento. Implementa mejores prácticas de desarrollo y patrones de diseño modernos.',
            tech: ['React', 'JavaScript', 'HTML5', 'CSS3'],
            github: 'https://github.com/JhostinJoel/webapp',
            demo: 'https://webappp-6oo8.onrender.com/'
        }
    ]);

    const [activeProject, setActiveProject] = useState(null);

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title">Proyectos</h2>
                <div className="projects-grid">
                    {projects.map(project => (
                        <div
                            key={project.id}
                            className={`project-card ${activeProject === project.id ? 'active' : ''}`}
                        >
                            <div className="project-header" onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}>
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                            </div>
                            <div className="project-tags">
                                {project.tech.map((t, i) => <span key={i} className="tag">{t}</span>)}
                            </div>
                            {activeProject === project.id && (
                                <div className="project-details">
                                    <p>{project.details}</p>
                                    <div className="project-links">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <FaGithub /> Ver Código
                                        </a>
                                        {project.demo && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                                                <FaExternalLinkAlt /> Ver Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
