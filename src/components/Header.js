import React from 'react';

const Header = ({ activeSection, setActiveSection }) => {
    const navItems = [
        { id: 'hero', label: 'Inicio' },
        { id: 'about', label: 'Sobre Mí' },
        { id: 'experience', label: 'Experiencia' },
        { id: 'projects', label: 'Proyectos' },
        { id: 'contact', label: 'Contacto' }
    ];

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo">
                    <h1>JA</h1>
                </div>
                <nav className="nav">
                    <ul>
                        {navItems.map(item => (
                            <li
                                key={item.id}
                                className={activeSection === item.id ? 'active' : ''}
                                onClick={() => setActiveSection(item.id)}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
