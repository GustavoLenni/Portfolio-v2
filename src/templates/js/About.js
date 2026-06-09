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
                <div className="window-title">💻{t("developerJava")}</div>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="line-number">01</span>
                  <span className="code-text">
                    <span className="keyword">import</span>{" "}
                    <span className="class">java.util.List</span>;
                  </span>
                </div>

                <div className="code-line">
                  <span className="line-number">02</span>
                  <span className="code-text"></span>
                </div>

                <div className="code-line">
                  <span className="line-number">03</span>
                  <span className="comment">
  {`// ${t("backendDeveloper")}`}
</span>
                </div>

                <div className="code-line">
                  <span className="line-number">04</span>
                  <span className="code-text">
                    <span className="keyword">public class</span>{" "}
                    <span className="class">Developer</span> {"{"}
                  </span>
                </div>

                <div className="code-line">
                  <span className="line-number">05</span>
                  <span className="code-text">
                    &nbsp;&nbsp;
                    <span className="keyword">private final String</span>{" "}
                    <span className="variable">name</span> =
                    <span className="string"> "Gustavo Lenni"</span>;
                  </span>
                </div>

                <div className="code-line">
                  <span className="line-number">06</span>
                  <span className="code-text"></span>
                </div>

                <div className="code-line">
                  <span className="line-number">07</span>
                  <span className="code-text">
                    &nbsp;&nbsp;
                    <span className="keyword">
                      private final List&lt;String&gt;
                    </span>{" "}
                    <span className="variable">stack</span> ={" "}
                    <span className="class">List</span>.
                    <span className="function">of</span>(
                  </span>
                </div>

                <div className="code-line">
                  <span className="line-number">08</span>
                  <span className="code-text">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string">"Java"</span>,
                  </span>
                </div>

                <div className="code-line">
                  <span className="line-number">09</span>
                  <span className="code-text">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string">"Spring Boot"</span>,
                  </span>
                </div>

                <div className="code-line">
                  <span className="line-number">10</span>
                  <span className="code-text">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string">"GraphQL"</span>,
                  </span>
                </div>

                <div className="code-line">
                  <span className="line-number">11</span>
                  <span className="code-text">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string">"Docker"</span>,
                  </span>
                </div>

                <div className="code-line">
                  <span className="line-number">12</span>
                  <span className="code-text">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="string">"PostgreSQL"</span>
                    );
                  </span>
                </div>

                <div className="code-line">
                  <span className="line-number">13</span>
                  <span className="code-text"></span>
                </div>

                <div className="code-line">
                  <span className="line-number">14</span>
                  <span className="code-text">
                    &nbsp;&nbsp;
                    <span className="keyword">public void</span>{" "}
                    <span className="function">developSolutions</span>() {"{"}
                  </span>
                </div>

                <div className="code-line">
                  <span className="line-number">15</span>
                  <span className="code-text">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="class">System</span>.
                    <span className="function">out.println</span>(
                    <span className="string">
                      "Clean code and scalable APIs"
                    </span>
                    );
                  </span>
                </div>

                <div className="code-line">
                  <span className="line-number">16</span>
                  <span className="code-text">&nbsp;&nbsp;{"}"}</span>
                </div>

                <div className="code-line">
                  <span className="line-number">17</span>
                  <span className="code-text">{"}"}</span>
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
