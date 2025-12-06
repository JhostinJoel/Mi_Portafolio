import React from 'react';
import { resumeData } from '../data/resume';

const Experience = () => {
    const { experience } = resumeData;

    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="section-title">Experiencia Laboral</h2>
                <div className="timeline">
                    {experience.map((job, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-content">
                                <h3 className="job-role">{job.role}</h3>
                                <h4 className="job-company">{job.company}</h4>
                                <span className="job-period">{job.period}</span>
                                <p className="job-description">{job.description}</p>
                                {job.projects && (
                                    <div className="job-projects">
                                        {job.projects.map((project, pIndex) => (
                                            <div key={pIndex} className="job-project">
                                                <strong>{project.name}:</strong> {project.details}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
