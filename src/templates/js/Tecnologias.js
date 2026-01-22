import React from 'react';
import { Icon } from '@iconify/react';
import { useLanguage } from './LanguageContext';

const Tecnologias = () => {
    const { t } = useLanguage();
    const tecnologiasData = {
        linguagens: [
            { nome: 'PHP', icone: 'devicon:php', cor: '#777BB4' },
            { nome: 'Java', icone: 'devicon:java', cor: '#FF2D20' }
        ],
        frameworks: [
            { nome: 'Laravel', icone: 'devicon:laravel', cor: '#FF2D20' },
        ],
        databases: [
            { nome: 'Docker', icone: 'skill-icons:docker', cor: '#4479A1' },
            { nome: 'MySQL', icone: 'devicon:mysql', cor: '#4479A1' },
            { nome: 'Supabase', icone: 'devicon:supabase', cor: '#3ECF8E' }  
        ]
    };

    return (
        <section className="portfolio-tech-section" id='technologies'>
            <div className="portfolio-tech-header">
                <div className="portfolio-tech-title">
                    <Icon icon="lucide:code" className="portfolio-tech-icon" />
                    <h1>{t('technologiesTitle')}</h1>
                </div>
                <p className="portfolio-tech-description">
  {t('technologiesSubtitle')}
</p>
            </div>

            <div className="portfolio-tech-grid">
                <div className="portfolio-tech-card">
                    <div className="portfolio-tech-card-header">
                        <h2>{t('programmingLanguages')}</h2>
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
                        <h2>{t('frameworks')}</h2>
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
                        <h2>{t('databases')}</h2>
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