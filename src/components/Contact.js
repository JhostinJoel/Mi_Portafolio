import React from 'react';
import { resumeData } from '../data/resume';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const { contact } = resumeData.header;

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">Contacto</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-item">
                            <FaMapMarkerAlt className="contact-icon" />
                            <p>{contact.location}</p>
                        </div>
                        <div className="contact-item">
                            <FaEnvelope className="contact-icon" />
                            <a href={`mailto:${contact.email}`}>{contact.email}</a>
                        </div>
                        <div className="contact-item">
                            <FaPhone className="contact-icon" />
                            <p>{contact.phone}</p>
                        </div>
                    </div>
                    <div className="contact-socials">
                        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaLinkedin /> LinkedIn
                        </a>
                        <a href={contact.github} target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaGithub /> GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
