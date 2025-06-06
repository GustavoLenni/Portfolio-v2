import { useState } from 'react';
import images from "../../assets/images";

const Projetos = () => {
    const [mostrarTodos, setMostrarTodos] = useState(false);
    const [carregando, setCarregando] = useState(false);

    const projetos = [
        {
            id: 1,
            titulo: "API RESTful",
            descricao: "API web completa que realiza operações CRUD (criar, ler, atualizar e deletar) de usuários, estruturada com o padrão MVC para organização eficiente da lógica, rotas e modelos. Conta com sistema de autenticação via chave de API implementado por middlewares, garantindo acesso seguro e autorizado.",
            banner: images.bannerapi,
            contribuidores: [
                { nome: "Você", foto: images.foto }
            ],
            tecnologias: ["Javascript","Node.js", "Express"],
            githubUrl: "https://github.com/GustavoLenni/WebAPI",
            deployUrl: "https://www.linkedin.com/posts/gustavolenni_api-backend-dev-activity-7334255933591539712-wKPF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE42sNcBE867rzuYuoT7mtNAqxx_W-kBpCA",
            status: "Completo"
        },
        {
            id: 2,
            titulo: "Rotina.py",
            descricao: "Projeto pessoal desenvolvido para aprofundar o conhecimento em Django, criando um sistema funcional para organização de tarefas semanais. Permite definir tarefas associadas a dias específicos da semana, automatizando a gestão das rotinas recorrentes.",
            banner: images.bannerrotinapy,
            contribuidores: [
                { nome: "Você", foto: images.foto }
            ],
            tecnologias: ["Python", "Django", "PostgreSQL"],
            githubUrl: "https://github.com/GustavoLenni/Rotinapy",
            deployUrl: "https://rotinapy.onrender.com/",
            status: "Completo"
        },
        {
            id: 3,
            titulo: "Orçamento Amigo",
            descricao: "Aplicativo desenvolvido com Node.js e JavaScript para facilitar o controle e a organização de gastos pessoais. Permite monitorar compras, visualizar despesas de forma clara e auxiliar no planejamento financeiro com um design intuitivo e funcionalidades práticas para o usuário.",
            banner: images.bannerorcamento,
            contribuidores: [
                { nome: "Você", foto: images.foto },
                { nome: "Felipe Luz", foto: images.felipeluz },
            ],
            tecnologias: ["JavaScript","React Native"],
            githubUrl: "https://github.com/GustavoLenni/Orcamento",
            deployUrl: "https://www.mediafire.com/file/ekzt02njqh4820v/orcamento-app.apk/file",
            status: "Completo"
        },
        {
            id: 4,
            titulo: "Refeitorio",
            descricao: "Desenvolvido em grupo no SENAI para a rede SESI de Ferraz, o projeto Refeitório facilita a comunicação entre nutricionistas e alunos. A plataforma permite consulta ao cardápio semanal e o envio de mensagens, melhorando a interação e podendo ser implementada em unidades SESI em todo o país.",
            banner: images.bannerrefeitorio,
            contribuidores: [
                { nome: "Você", foto: images.foto },
                { nome: "Felipe Luz", foto: images.felipeluz },
                { nome: "Andrey Hiago", foto: images.andrey },
                { nome: "João Gimenez", foto: images.joao },
                { nome: "Heitor Aredes", foto: images.heitor }
            ],
            tecnologias: ["Javascript","React Native", "Supabase","Figma"],
            githubUrl: "https://github.com/joaopbg06/semestral",
            deployUrl: "#",
            status: "Completo"
        },
        {
            id: 5,
            titulo: "Projeto de Rede Social",
            descricao: "Rede social em desenvolvimento que oferece um espaço para usuários compartilharem suas ideias, encontrarem colaboradores e atrair interessados para apoiar ou adquirir projetos. O objetivo é criar uma comunidade engajada onde a criatividade ganha voz e ações.",
            banner: images.redesocial,
            contribuidores: [
                { nome: "Você", foto: images.foto },
                { nome: "Felipe Luz", foto: images.felipeluz },
                { nome: "Murilo", foto: images.murilo },
                { nome: "João Gimenez", foto: images.joao },
                { nome: "Matheus Lucindo", foto: images.mateus }
            ],
            tecnologias: ["PHP","React","MySQL","Figma"],
            githubUrl: "#",
            deployUrl: "#",
            status: "Em desenvolvimento"
        } 
    ];

    const projetosVisiveis = mostrarTodos ? projetos : projetos.slice(0, 4);

    const handleVerMais = () => {
        setCarregando(true);
        setTimeout(() => {
            setMostrarTodos(true);
            setCarregando(false);
        }, 500);
    };

    const handleVerMenos = () => {
        setMostrarTodos(false);
        // Scroll suave para o início da seção
        document.getElementById('projetos').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
        <div className="projetos" id="projetos">
            <div className="projetos-container" id='projects'>
                <div className="projetos-header">
                    <h2 className="projetos-title">Projetos</h2>
                    <p className="projetos-subtitle">
                        Alguns dos meus trabalhos mais recentes
                    </p>
                </div>

                <div className="projetos-grid">
                    {projetosVisiveis.map((projeto, index) => (
                        <div 
                            key={projeto.id} 
                            className="projeto-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="projeto-banner">
                                <img 
                                    src={projeto.banner} 
                                    alt={`Banner do ${projeto.titulo}`}
                                    className="banner-image"
                                />
                                <div className="banner-overlay">
                                    <div className="projeto-status">
                                        <span className={`status-badge ${projeto.status === 'Completo' ? 'status-complete' : 'status-development'}`}>
                                            {projeto.status}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="projeto-content">
                                <div className="projeto-header">
                                    <div className="projeto-info">
                                        <h3 className="projeto-titulo">{projeto.titulo}</h3>
                                        <p className="projeto-descricao">{projeto.descricao}</p>
                                    </div>
                                    
                                    <div className="contribuidores">
                                        {projeto.contribuidores.map((contribuidor, index) => (
                                            <div 
                                                key={index}
                                                className="contribuidor-wrapper"
                                                title={contribuidor.nome}
                                            >
                                                <img 
                                                    src={contribuidor.foto} 
                                                    alt={`${contribuidor.nome}`}
                                                    className="contribuidor-avatar"
                                                />
                                            </div>
                                        ))}
                                        {projeto.contribuidores.length > 3 && (
                                            <div className="contribuidores-extra">
                                                +{projeto.contribuidores.length - 3}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="tecnologias">
                                    {projeto.tecnologias.map((tech, index) => (
                                        <span key={index} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="projeto-actions">
                                    <a 
                                        href={projeto.githubUrl}
                                        className="btn btn-secondary"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                        GitHub
                                    </a>
                                    <a 
                                        href={projeto.deployUrl}
                                        className="btn btn-primary"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                                        </svg>
                                        Ver Projeto
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Botão Ver Mais / Ver Menos */}
                <div className="ver-mais-container">
                    {!mostrarTodos ? (
                        <button 
                            className="btn-ver-mais"
                            onClick={handleVerMais}
                            disabled={carregando}
                        >
                            {carregando ? (
                                <>
                                    <div className="loading-spinner"></div>
                                    Carregando...
                                </>
                            ) : (
                                <>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                                    </svg>
                                    Ver Mais Projetos ({projetos.length - 4} restantes)
                                </>
                            )}
                        </button>
                    ) : (
                        <button 
                            className="btn-ver-menos"
                            onClick={handleVerMenos}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 20l1.41-1.41L7.83 13H20v-2H7.83l5.58-5.59L12 4l-8 8z"/>
                            </svg>
                            Ver Menos Projetos
                        </button>
                    )}
                </div>
                </div>
            </div>
    );
};

export default Projetos;