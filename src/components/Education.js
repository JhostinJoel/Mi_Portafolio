import React from 'react';
import { resumeData } from '../data/resume';

const Education = () => {
    const { education } = resumeData;

    return (
        <section id="education" className="section education-section">
            <div className="container">
                <h2 className="section-title">Formación Académica</h2>
                <div className="education-grid">
                    {education.map((edu, index) => (
                        <div key={index} className="education-card">
                            <h3 className="degree">{edu.degree}</h3>
                            <h4 className="institution">{edu.institution}</h4>
                            <span className="year">{edu.year}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
