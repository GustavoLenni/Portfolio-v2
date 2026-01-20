import React from "react";
import { Icon } from "@iconify/react";
import images from "../../assets/images";
import { useLanguage } from "./LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const socialLinks = [
    {
      name: "GitHub",
      icon: "mdi:github",
      url: "https://github.com/GustavoLenni",
      color: "#ffffff",
    },
    {
      name: "LinkedIn",
      icon: "mdi:linkedin",
      url: "https://www.linkedin.com/in/gustavolenni/",
      color: "#0077B5",
    },
    {
      name: "Email",
      icon: "mdi:email",
      url: "mailto:gustavolennifarias@gmail.com",
      color: "#EA4335",
    },
  ];

  const quickLinks = [
    { name: t("home"), href: "#home" },
    { name: t("about"), href: "#about" },
    { name: t("projects"), href: "#projects" },
    { name: t("technologies"), href: "#technologies" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="portfolio-footer-container">
        {/* Seção Principal */}
        <div className="portfolio-footer-main">
          <div className="portfolio-footer-brand">
            <div className="portfolio-footer-logo">
              <img
                className="portfolio-footer-logo-icon"
                src={images.logo}
                alt="logo"
              ></img>
              <h3>Gustavo Lenni</h3>
            </div>
            <p className="portfolio-footer-description">
              {t("footerDescription")}
            </p>
            <div className="portfolio-footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-footer-social-link"
                  aria-label={social.name}
                >
                  <Icon
                    icon={social.icon}
                    className="portfolio-footer-social-icon"
                    style={{ color: social.color }}
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="portfolio-footer-links">
            <div className="portfolio-footer-section">
              <h4>{t("navigation")}</h4>
              <ul className="portfolio-footer-list">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="portfolio-footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="portfolio-footer-section">
              <h4>{t("contact")}</h4>
              <ul className="portfolio-footer-list">
                <li>
                  <a
                    href="mailto:seuemail@exemplo.com"
                    className="portfolio-footer-link"
                  >
                    <Icon
                      icon="mdi:email"
                      className="portfolio-footer-link-icon"
                    />
                    gustavolennifarias@gmail.com
                  </a>
                </li>
                <li>
                  <span className="portfolio-footer-link">
                    <Icon
                      icon="mdi:map-marker"
                      className="portfolio-footer-link-icon"
                    />
                    São Paulo, Brasil
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="portfolio-footer-divider"></div>

        {/* Seção de Copyright */}
        <div className="portfolio-footer-bottom">
          <div className="portfolio-footer-copyright">
            <p>
              © {currentYear}{" "}
              <span className="portfolio-footer-highlight">Gustavo Lenni</span>.
              {t("allRightsReserved")}
            </p>
          </div>
          <div className="portfolio-footer-credits">
            <p>
              {t("madeWith")}{" "}
              <Icon icon="mdi:heart" className="portfolio-footer-heart" />
              {t("and")}{" "}
              <Icon icon="mdi:coffee" className="portfolio-footer-coffee" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
