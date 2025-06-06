import React, { useState, useEffect, useCallback } from "react";
import images from '../../assets/images';
import curriculoPdf from '../../assets/curriculo/currículo.pdf'; // Importar o PDF
import { Icon } from "@iconify/react";

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeItem, setActiveItem] = useState('inicio');
    const [isMobile, setIsMobile] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    // Detectar mobile
    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            
            // No mobile, sempre começar com sidebar escondida
            if (mobile) {
                setIsVisible(false);
                setIsCollapsed(false); // Reset collapsed state no mobile
            } else {
                setIsVisible(true);
                // Manter estado collapsed no desktop
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Função para detectar seção ativa baseada no scroll (CORRIGIDA)
    const handleScroll = useCallback(() => {
        const sections = ['home', 'about', 'projects', 'technologies'];
        const scrollPosition = window.scrollY + 100; // Offset para melhor detecção
        
        // Mapear IDs para os nomes dos itens do menu
        const sectionToMenuItem = {
            'home': 'inicio',
            'about': 'sobre', 
            'projects': 'projetos',
            'technologies': 'tecnologias'
        };

        let currentSection = 'inicio'; // Default para o topo da página

        // Verificar qual seção está visível
        for (let i = 0; i < sections.length; i++) {
            const element = document.getElementById(sections[i]);
            if (element) {
                const rect = element.getBoundingClientRect();
                const elementTop = window.scrollY + rect.top;
                
                // Se a seção está visível na tela (considerando um offset)
                if (scrollPosition >= elementTop - 200) {
                    currentSection = sectionToMenuItem[sections[i]];
                }
            }
        }

        // Só atualizar se mudou
        setActiveItem(prev => prev !== currentSection ? currentSection : prev);
    }, []);

    // Detectar seção ativa baseada no scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Executar uma vez para definir o estado inicial

        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const toggleSidebar = () => {
        if (isMobile) {
            setIsVisible(!isVisible);
        } else {
            setIsCollapsed(!isCollapsed);
        }
    };

    // Função para navegação suave
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    const handleItemClick = (item) => {
        // Mapear itens do menu para IDs das seções
        const menuToSectionId = {
            'inicio': 'home',
            'sobre': 'about',
            'projetos': 'projects',
            'tecnologias': 'technologies'
        };

        const sectionId = menuToSectionId[item];
        if (sectionId) {
            // Definir imediatamente o item ativo para feedback visual instantâneo
            setActiveItem(item);
            scrollToSection(sectionId);
        }
        
        // Fechar sidebar no mobile após clicar
        if (isMobile) {
            setIsVisible(false);
        }
    };

    // Função para download do currículo
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = curriculoPdf;
        link.download = 'Curriculo-Gustavo-Lenni.pdf'; // Nome personalizado para o download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Fechar sidebar quando clicar no overlay
    const handleOverlayClick = () => {
        if (isMobile) {
            setIsVisible(false);
        }
    };

    const menuItems = [
        { id: 'inicio', icon: 'lucide:home', label: 'Início', href: '#home' },
        { id: 'sobre', icon: 'lucide:user', label: 'Sobre', href: '#about' },
        { id: 'projetos', icon: 'lucide:folder-code', label: 'Projetos', href: '#projects' },
        { id: 'tecnologias', icon: 'lucide:code', label: 'Tecnologias', href: '#technologies' }
    ];

    const socialItems = [
        { id: 'linkedin', icon: 'lucide:linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/gustavolenni/' },
        { id: 'github', icon: 'lucide:github', label: 'GitHub', url: 'https://github.com/GustavoLenni' }
    ];

    // Função para links sociais
    const handleSocialClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <>
            {/* Overlay para mobile */}
            {isMobile && isVisible && (
                <div 
                    className="sidebar-overlay"
                    onClick={handleOverlayClick}
                />
            )}

            {/* Toggle button para mobile */}
            {isMobile && !isVisible && (
                <button 
                    className="mobile-toggle"
                    onClick={toggleSidebar}
                    aria-label="Toggle menu"
                >
                    <Icon icon="lucide:menu" size={20} />
                </button>
            )}

            <aside className={`
                sidebar 
                ${!isMobile && isCollapsed ? 'sidebar--collapsed' : ''} 
                ${isMobile ? 'sidebar--mobile' : ''}
                ${isMobile && !isVisible ? 'sidebar--hidden' : ''}
            `}>
                {/* Header */}
                <header className="sidebar__header">
                    {/* Botão de fechar no mobile */}
                    {isMobile && (
                        <button 
                            className="sidebar__close"
                            onClick={() => setIsVisible(false)}
                            aria-label="Fechar menu"
                        >
                            <Icon icon="lucide:x" size={20} />
                        </button>
                    )}

                    {!isMobile && (
                        <button 
                            className="sidebar__toggle"
                            onClick={toggleSidebar}
                            aria-label="Toggle sidebar"
                        >
                            <Icon 
                                icon={isCollapsed ? "lucide:chevron-right" : "lucide:chevron-left"} 
                                size={16}
                            />
                        </button>
                    )}
                    
                    <div className="sidebar__brand">
                        <div className="sidebar__logo">
                            <img src={images.foto} alt="Profile" />
                        </div>
                        {(!isCollapsed || isMobile) && (
                            <div className="sidebar__brand-text">
                                <h2>Portfolio</h2>
                                <span>v2.0</span>
                            </div>
                        )}
                    </div>
                </header>

                {/* Navigation */}
                <nav className="sidebar__nav">
                    <div className="sidebar__section">
                        <ul className="sidebar__menu">
                            {menuItems.map((item) => (
                                <li key={item.id}>
                                    <button 
                                        className={`
                                            sidebar__item 
                                            ${activeItem === item.id ? 'sidebar__item--active' : ''}
                                        `}
                                        onClick={() => handleItemClick(item.id)}
                                        title={item.label}
                                    >
                                        <div className="sidebar__item-icon">
                                            <Icon icon={item.icon} size={18} />
                                        </div>
                                        {(!isCollapsed || isMobile) && (
                                            <span className="sidebar__item-text">{item.label}</span>
                                        )}
                                        {activeItem === item.id && (!isCollapsed || isMobile) && (
                                            <div className="sidebar__item-indicator" />
                                        )}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="sidebar__section">
                        {(!isCollapsed || isMobile) && (
                            <h3 className="sidebar__section-title">Social</h3>
                        )}
                        <ul className="sidebar__menu">
                            {socialItems.map((item) => (
                                <li key={item.id}>
                                    <button 
                                        className="sidebar__item sidebar__item--social"
                                        onClick={() => handleSocialClick(item.url)}
                                        title={item.label}
                                    >
                                        <div className="sidebar__item-icon">
                                            <Icon icon={item.icon} size={18} />
                                        </div>
                                        {(!isCollapsed || isMobile) && (
                                            <span className="sidebar__item-text">{item.label}</span>
                                        )}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                {/* Footer */}
                <footer className="sidebar__footer">
                    <button 
                        className="sidebar__download"
                        onClick={handleDownloadCV}
                        title="Baixar Currículo"
                    >
                        <div className="sidebar__item-icon">
                            <Icon icon="lucide:download" size={18} />
                        </div>
                        {(!isCollapsed || isMobile) && (
                            <span className="sidebar__item-text">Download CV</span>
                        )}
                    </button>
                </footer>
            </aside>
        </>
    );
};

export default Sidebar;