import React from 'react';
import { resumeData } from '../data/resume';
import { FaHtml5, FaCss3Alt, FaDatabase, FaGit, FaChartBar, FaFileExcel, FaCode } from 'react-icons/fa';

const Skills = () => {
    const { technical, soft } = resumeData.skills;

    const getIcon = (skillName) => {
        const name = skillName.toLowerCase();
        if (name.includes('html')) return <FaHtml5 />;
        if (name.includes('css')) return <FaCss3Alt />;
        if (name.includes('sql') || name.includes('oracle') || name.includes('database')) return <FaDatabase />;
        if (name.includes('git')) return <FaGit />;
        if (name.includes('power bi')) return <FaChartBar />;
        if (name.includes('excel')) return <FaFileExcel />;
        return <FaCode />;
    };

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2 className="section-title">Habilidades</h2>

                <div className="skills-grid">
                    <div className="skills-category">
                        <h3>Técnicas</h3>
                        <div className="skills-list">
                            {technical.map((skill, index) => (
                                <div key={index} className="skill-item">
                                    <span className="skill-icon">{getIcon(skill)}</span>
                                    <span className="skill-name">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="skills-category">
                        <h3>Blandas</h3>
                        <ul className="soft-skills-list">
                            {soft.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
