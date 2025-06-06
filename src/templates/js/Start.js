import React, { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import images from '../../assets/images';

const Start = () => {
  const [gridCells, setGridCells] = useState([]);
  const [currentIcon, setCurrentIcon] = useState(0);

  // Ícones das linguagens
  const languageIcons = [
    { icon: 'logos:php', name: 'PHP' },
    { icon: 'logos:javascript', name: 'JavaScript' },
    { icon: 'logos:python', name: 'Python' }
  ];

  // Criar grid com algumas células incompletas/faltando
  const createGrid = () => {
    const grid = [];
    const cellSize = 40;
    const rows = Math.ceil(window.innerHeight / cellSize) + 5;
    const cols = Math.ceil(window.innerWidth / cellSize) + 5;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        // Probabilidade de renderizar a célula (80% chance)
        const shouldRender = Math.random() > 0.2;
        if (shouldRender) {
          // Opacidade variável para criar profundidade
          const opacity = Math.random() * 0.4 + 0.1;
          // Algumas células podem ter bordas incompletas
          const hasTopBorder = Math.random() > 0.2;
          const hasRightBorder = Math.random() > 0.2;
          const hasBottomBorder = Math.random() > 0.2;
          const hasLeftBorder = Math.random() > 0.2;

          grid.push({
            id: `${i}-${j}`,
            left: j * cellSize,
            top: i * cellSize,
            opacity,
            hasTopBorder,
            hasRightBorder,
            hasBottomBorder,
            hasLeftBorder,
          });
        }
      }
    }
    return grid;
  };

  useEffect(() => {
    setGridCells(createGrid());
  }, []);

  // Carrossel de ícones
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % languageIcons.length);
    }, 2500); // Troca a cada 2.5 segundos

    return () => clearInterval(interval);
  }, [languageIcons.length]);

  return (
    <div className="start-container" id="home">
      {/* Grid de quadradinhos */}
      {gridCells.map((cell) => (
        <div
          key={cell.id}
          className="grid-cell"
          style={{
            left: `${cell.left}px`,
            top: `${cell.top}px`,
            borderTop: cell.hasTopBorder
              ? `1px solid rgba(109, 151, 232, ${cell.opacity * 0.5})`
              : "none",
            borderRight: cell.hasRightBorder
              ? `1px solid rgba(109, 151, 232, ${cell.opacity * 0.5})`
              : "none",
            borderBottom: cell.hasBottomBorder
              ? `1px solid rgba(109, 151, 232, ${cell.opacity * 0.5})`
              : "none",
            borderLeft: cell.hasLeftBorder
              ? `1px solid rgba(109, 151, 232, ${cell.opacity * 0.5})`
              : "none",
          }}
        />
      ))}

      {/* Gradient overlay sutil para dar profundidade */}
      <div className="gradient-overlay" />

      {/* Conteúdo centralizado */}
      <div className="Start">
        <div className="Textos">
          <div className="Titulo">
            <h1>
              Hello I am, <span>Gustavo Lenni</span>
            </h1>
          </div>
          <div className="Text">
            <p>Back-End Developer</p>
          </div>
        </div>

        <div className="Perfil">
          <div className="Linguagens">
            <div className="icon-carousel">
              <Icon 
                icon={languageIcons[currentIcon].icon} 
                width="28" 
                height="28"
              />
            </div>
          </div>
          <div className="foto-container">
            <img src={images.foto} alt="Gustavo Lenni" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;