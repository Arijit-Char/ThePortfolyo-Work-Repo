import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../App.scss';

function Projects({ projects }) {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };
    const projectsContainerStyle = {
        height: showMore ? '250vh' : 'auto',
    };
    return (
        <div className="projects" style={projectsContainerStyle}>
            <h2 className="projects-heading">Projects</h2>

            <div className="projects-container">
                {projects.slice(0, showMore ? projects.length : 4).map((project) => (
                    <motion.div
                        key={project._id}
                        className="project"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <img src={project.image.url} alt={project.title} />
                        <div className="project-details">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tech-stack">
                                {project.techStack.map((tech, index) => (
                                    <span key={index}>{tech}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.liveurl} target="_blank" rel="noopener noreferrer">
                                    Live Demo
                                </a>
                                <a href={project.githuburl} target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {!showMore && (
                <button className="more-projects-button" onClick={toggleShowMore}>
                    More Projects
                </button>
            )}
        </div>
    );
}

export default Projects;
