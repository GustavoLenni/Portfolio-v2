import React from "react";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Main content layout */}
        <div className="about-content">
          {/* Code Window */}
          <div className="code-section">
            <div className="code-window">
              <div className="window-header">
                <div className="window-controls">
                  <span className="control-btn close"></span>
                  <span className="control-btn minimize"></span>
                  <span className="control-btn maximize"></span>
                </div>
                <div className="window-title">💻developer.php</div>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="line-number">01</span>
                  <span className="code-text">
                    <span className="comment">Desenvolvedor Backend</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">02</span>
                  <span className="code-text">
                    <span className="keyword">$name</span> ={" "}
                    <span className="string">"Gustavo Lenni"</span>;
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">03</span>
                  <span className="code-text">
                    <span className="keyword">$role</span> ={" "}
                    <span className="string">"Backend Developer"</span>;
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">04</span>
                  <span className="code-text">
                    <span className="keyword">$skills</span> = [
                    <span className="string">"PHP"</span>,{" "}
                    <span className="string">"JavaScript"</span>,{" "}
                    <span className="string">"Python"</span>];
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">05</span>
                  <span className="code-text"></span>
                </div>
                <div className="code-line">
                  <span className="line-number">06</span>
                  <span className="code-text">
                    <span className="keyword">echo</span>{" "}
                    <span className="string">"Olá! Eu sou "</span> . $name .{" "}
                    <span className="string">", atuo como "</span> . $role .{" "}
                    <span className="string">" e minhas skills são: "</span> .
                    implode(<span className="string">", "</span>, $skills) .{" "}
                    <span className="string">"."</span>;
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* About Text Section */}
          <div className="text-section">
            <div className="section-header">
              <h1 className="section-title">Sobre mim</h1>
              <div className="title-decoration"></div>
            </div>

            <div className="about-description">
              <p className="intro-text">
                Desenvolvedor Backend apaixonado por criar soluções robustas e
                escaláveis. Com experiência em tecnologias modernas, busco
                sempre entregar código limpo e eficiente.
              </p>

              <div className="highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">⚡</div>
                  <div className="highlight-content">
                    <h3>Performance</h3>
                    <p>
                      Otimização de consultas e sistemas de alta disponibilidade
                    </p>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-icon">🔧</div>
                  <div className="highlight-content">
                    <h3>Tecnologias</h3>
                    <p>PHP, Javascript, Python e arquiteturas RESTful</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-icon">🎯</div>
                  <div className="highlight-content">
                    <h3>Foco</h3>
                    <p>
                      Desenvolvimento de APIs robustas e integração de sistemas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
