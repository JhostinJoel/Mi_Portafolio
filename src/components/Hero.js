import React from 'react';
import { resumeData } from '../data/resume';
import perfilImage from '../assets/perfil.jpg';

const Hero = () => {
    const { name, title, contact } = resumeData.header;

    return (
        <section id="hero" className="hero-section">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-name">{name}</h1>
                    <h2 className="hero-title">{title}</h2>
                    <div className="hero-contact">
                        <p><i className="fas fa-map-marker-alt"></i> {contact.location}</p>
                        <p><i className="fas fa-envelope"></i> {contact.email}</p>
                        <p><i className="fas fa-phone"></i> {contact.phone}</p>
                    </div>
                    <div className="hero-socials">
                        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-primary">LinkedIn</a>
                        <a href={contact.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={perfilImage} alt={name} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
