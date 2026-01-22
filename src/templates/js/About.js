import React from "react";
import { useLanguage } from "./LanguageContext";

const About = () => {
  const { t } = useLanguage();
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
                <div className="window-title">💻{t("developerPhp")}</div>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="line-number">01</span>
                  <span className="code-text">
                    <span className="comment">{t("backendDeveloper")}</span>
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
                    <span className="string">"Java"</span>]
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
                    <span className="string">"{t("codeGreeting")} "</span> .
                    $name . <span className="string">", {t("codeRole")} "</span>{" "}
                    . $role .{" "}
                    <span className="string">"{t("codeSkills")} "</span> .
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
              <h1 className="section-title">{t("aboutTitle")}</h1>
              <div className="title-decoration"></div>
            </div>

            <div className="about-description">
              <p className="intro-text">{t("aboutDescription")}</p>

              <div className="highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">⚡</div>
                  <div className="highlight-content">
                    <h3>{t("performance")}</h3>
                    <p>{t("performanceDesc")}</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-icon">🔧</div>
                  <div className="highlight-content">
                    <h3>{t("technologiesLabel")}</h3>
                    <p>{t("technologiesDesc")}</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-icon">🎯</div>
                  <div className="highlight-content">
                    <h3>{t("focus")}</h3>
                    <p>{t("focusDesc")}</p>
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
