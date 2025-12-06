import React from 'react';
import { resumeData } from '../data/resume';

const About = () => {
    const { summary } = resumeData.profile;

    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="section-title">Sobre Mí</h2>
                <div className="about-content">
                    <p>{summary}</p>
                </div>
            </div>
        </section>
    );
};

export default About;
