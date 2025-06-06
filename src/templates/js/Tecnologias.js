import React from 'react';
import { Icon } from '@iconify/react';

const Tecnologias = () => {
    const tecnologiasData = {
        linguagens: [
            { nome: 'PHP', icone: 'devicon:php', cor: '#777BB4' },
            { nome: 'JavaScript', icone: 'devicon:javascript', cor: '#F7DF1E' },
            { nome: 'Python', icone: 'devicon:python', cor: '#3776AB' }
        ],
        frameworks: [
            { nome: 'Laravel', icone: 'devicon:laravel', cor: '#FF2D20' },
            { nome: 'Node.js', icone: 'devicon:nodejs', cor: '#339933' },
            { nome: 'Django', icone: 'skill-icons:django', cor: '#092E20' }
        ],
        databases: [
            { nome: 'MySQL', icone: 'devicon:mysql', cor: '#4479A1' },
            { nome: 'Supabase', icone: 'devicon:supabase', cor: '#3ECF8E' },
            { nome: 'SQLite', icone: 'devicon:sqlite', cor: '#003B57' }
        ]
    };

    return (
        <section className="portfolio-tech-section" id='technologies'>
            <div className="portfolio-tech-header">
                <div className="portfolio-tech-title">
                    <Icon icon="lucide:code" className="portfolio-tech-icon" />
                    <h1>Tecnologias</h1>
                </div>
                <p className="portfolio-tech-description">
                    Ferramentas e tecnologias que utilizo para desenvolver soluções eficientes e modernas
                </p>
            </div>

            <div className="portfolio-tech-grid">
                <div className="portfolio-tech-card">
                    <div className="portfolio-tech-card-header">
                        <h2>Linguagens de Programação</h2>
                    </div>
                    <div className="portfolio-tech-list">
                        {tecnologiasData.linguagens.map((tech, index) => (
                            <div key={index} className="portfolio-tech-item">
                                <div className="portfolio-tech-item-icon">
                                    <Icon 
                                        icon={tech.icone} 
                                        className="portfolio-tech-svg"
                                        style={{ color: tech.cor }}
                                    />
                                </div>
                                <span className="portfolio-tech-name">{tech.nome}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="portfolio-tech-card">
                    <div className="portfolio-tech-card-header">
                        <h2>Frameworks</h2>
                    </div>
                    <div className="portfolio-tech-list">
                        {tecnologiasData.frameworks.map((tech, index) => (
                            <div key={index} className="portfolio-tech-item">
                                <div className="portfolio-tech-item-icon">
                                    <Icon 
                                        icon={tech.icone} 
                                        className="portfolio-tech-svg"
                                        style={{ color: tech.cor }}
                                    />
                                </div>
                                <span className="portfolio-tech-name">{tech.nome}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="portfolio-tech-card">
                    <div className="portfolio-tech-card-header">
                        <h2>Databases</h2>
                    </div>
                    <div className="portfolio-tech-list">
                        {tecnologiasData.databases.map((tech, index) => (
                            <div key={index} className="portfolio-tech-item">
                                <div className="portfolio-tech-item-icon">
                                    <Icon 
                                        icon={tech.icone} 
                                        className="portfolio-tech-svg"
                                        style={{ color: tech.cor }}
                                    />
                                </div>
                                <span className="portfolio-tech-name">{tech.nome}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tecnologias;