import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

// Traduções - adicione mais conforme necessário
export const translations = {
  en: {
    // Sidebar
    portfolio: 'Portfolio',
    version: 'v2.0',
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    technologies: 'Technologies',
    social: 'Social',
    downloadCV: 'Download CV',
    
    // About Section
    aboutTitle: 'About Me',
    aboutDescription: 'Backend Developer passionate about creating robust and scalable solutions. With experience in modern technologies, I always seek to deliver clean and efficient code.',
    performance: 'Performance',
    performanceDesc: 'Query optimization and high availability systems',
    technologiesLabel: 'Technologies',
    technologiesDesc: 'PHP, Javascript, Python and RESTful architectures',
    focus: 'Focus',
    focusDesc: 'Development of robust APIs and system integration',
    developerPhp: 'developer.php',
    backendDeveloper: 'Backend Developer',
    codeGreeting: 'Hello! I am',
    codeRole: 'I work as',
    codeSkills: 'and my skills are:',
    
    // Projects Section
    projectsTitle: 'Projects',
    projectsSubtitle: 'Some of my most recent works',
    complete: 'Complete',
    inDevelopment: 'In Development',
    viewProject: 'View Project',
    github: 'GitHub',
    seeMore: 'See More Projects',
    seeLess: 'See Less Projects',
    remaining: 'remaining',
    loading: 'Loading...',
    
    // Project 1
    project1Title: 'RESTful API',
    project1Desc: 'Complete web API that performs CRUD operations (create, read, update and delete) of users, structured with the MVC pattern for efficient organization of logic, routes and models. Features API key authentication system implemented through middlewares, ensuring secure and authorized access.',
    
    // Project 2
    project2Title: 'Rotina.py',
    project2Desc: 'Personal project developed to deepen knowledge in Django, creating a functional system for organizing weekly tasks. Allows defining tasks associated with specific days of the week, automating the management of recurring routines.',
    
    // Project 3
    project3Title: 'Budget Buddy',
    project3Desc: 'Application developed with Node.js and JavaScript to facilitate the control and organization of personal expenses. Allows monitoring purchases, viewing expenses clearly and assisting in financial planning with an intuitive design and practical features for the user.',
    
    // Project 4
    project4Title: 'Cafeteria',
    project4Desc: 'Developed in a group at SENAI for the SESI network in Ferraz, the Cafeteria project facilitates communication between nutritionists and students. The platform allows consultation of the weekly menu and sending messages, improving interaction and can be implemented in SESI units throughout the country.',
    
    // Project 5
    project5Title: 'Social Network Project',
    project5Desc: 'Social network in development that offers a space for users to share their ideas, find collaborators and attract interested parties to support or acquire projects. The goal is to create an engaged community where creativity gains voice and action.',
    
    // Technologies Section
    technologiesTitle: 'Technologies',
    technologiesSubtitle: 'Tools and technologies I use to develop efficient and modern solutions',
    programmingLanguages: 'Programming Languages',
    frameworks: 'Frameworks',
    databases: 'Databases',
    
    // Footer
    footerDescription: 'Developer passionate about creating innovative solutions and exceptional digital experiences.',
    navigation: 'Navigation',
    contact: 'Contact',
    allRightsReserved: 'All rights reserved.',
    madeWith: 'Made with',
    and: 'and',
  },
  pt: {
    // Sidebar
    portfolio: 'Portfólio',
    version: 'v2.0',
    home: 'Início',
    about: 'Sobre',
    projects: 'Projetos',
    technologies: 'Tecnologias',
    social: 'Social',
    downloadCV: 'Baixar CV',
    
    // About Section
    aboutTitle: 'Sobre mim',
    aboutDescription: 'Desenvolvedor Backend apaixonado por criar soluções robustas e escaláveis. Com experiência em tecnologias modernas, busco sempre entregar código limpo e eficiente.',
    performance: 'Performance',
    performanceDesc: 'Otimização de consultas e sistemas de alta disponibilidade',
    technologiesLabel: 'Tecnologias',
    technologiesDesc: 'PHP, Javascript, Python e arquiteturas RESTful',
    focus: 'Foco',
    focusDesc: 'Desenvolvimento de APIs robustas e integração de sistemas',
    developerPhp: 'developer.php',
    backendDeveloper: 'Desenvolvedor Backend',
    codeGreeting: 'Olá! Eu sou',
    codeRole: 'atuo como',
    codeSkills: 'e minhas skills são:',
    
    // Projects Section
    projectsTitle: 'Projetos',
    projectsSubtitle: 'Alguns dos meus trabalhos mais recentes',
    complete: 'Completo',
    inDevelopment: 'Em desenvolvimento',
    viewProject: 'Ver Projeto',
    github: 'GitHub',
    seeMore: 'Ver Mais Projetos',
    seeLess: 'Ver Menos Projetos',
    remaining: 'restantes',
    loading: 'Carregando...',
    
    // Project 1
    project1Title: 'API RESTful',
    project1Desc: 'API web completa que realiza operações CRUD (criar, ler, atualizar e deletar) de usuários, estruturada com o padrão MVC para organização eficiente da lógica, rotas e modelos. Conta com sistema de autenticação via chave de API implementado por middlewares, garantindo acesso seguro e autorizado.',
    
    // Project 2
    project2Title: 'Rotina.py',
    project2Desc: 'Projeto pessoal desenvolvido para aprofundar o conhecimento em Django, criando um sistema funcional para organização de tarefas semanais. Permite definir tarefas associadas a dias específicos da semana, automatizando a gestão das rotinas recorrentes.',
    
    // Project 3
    project3Title: 'Orçamento Amigo',
    project3Desc: 'Aplicativo desenvolvido com Node.js e JavaScript para facilitar o controle e a organização de gastos pessoais. Permite monitorar compras, visualizar despesas de forma clara e auxiliar no planejamento financeiro com um design intuitivo e funcionalidades práticas para o usuário.',
    
    // Project 4
    project4Title: 'Refeitorio',
    project4Desc: 'Desenvolvido em grupo no SENAI para a rede SESI de Ferraz, o projeto Refeitório facilita a comunicação entre nutricionistas e alunos. A plataforma permite consulta ao cardápio semanal e o envio de mensagens, melhorando a interação e podendo ser implementada em unidades SESI em todo o país.',
    
    // Project 5
    project5Title: 'Projeto de Rede Social',
    project5Desc: 'Rede social em desenvolvimento que oferece um espaço para usuários compartilharem suas ideias, encontrarem colaboradores e atrair interessados para apoiar ou adquirir projetos. O objetivo é criar uma comunidade engajada onde a criatividade ganha voz e ações.',
    
    // Technologies Section
    technologiesTitle: 'Tecnologias',
    technologiesSubtitle: 'Ferramentas e tecnologias que utilizo para desenvolver soluções eficientes e modernas',
    programmingLanguages: 'Linguagens de Programação',
    frameworks: 'Frameworks',
    databases: 'Databases',
    
    // Footer
    footerDescription: 'Desenvolvedor apaixonado por criar soluções inovadoras e experiências digitais excepcionais.',
    navigation: 'Navegação',
    contact: 'Contato',
    allRightsReserved: 'Todos os direitos reservados.',
    madeWith: 'Feito com',
    and: 'e',
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('portfolio-language') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'pt' : 'en');
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};