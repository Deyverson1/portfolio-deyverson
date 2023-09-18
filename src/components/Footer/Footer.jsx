import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./footer.css";

function Footer() {
  const { t } = useTranslation();
  return (
    <section className="content">
      <header className="cabecera">
        <img
          className="imagenSilueta"
          src="/img/silueta.webp"
          alt="imagen silueta"
        />
        <div className="correo">
          <img
            src="/img/correo.webp"
            alt="imagen de correo"
            className="imagen"
          />
          <p className="mail">deyversongp@gmail.com</p>
        </div>
      </header>
      <nav className="sectionEnlaces">
        <h4 className="tittle">{t("Link")}</h4>
        <Link className="enlaces" to="/">
          {t("Home")}
        </Link>
        <Link className="enlaces" to="/Projects">
          {t("Projects")}
        </Link>
        <Link className="enlaces" to="/Contact">
          {t("ContactNav")}
        </Link>
      </nav>
      <section className="socialMedia">
        <h5 className="tittle">{t("SocialMedia")}</h5>
        <div>
          <a href="https://www.instagram.com/its_deyverson/" target="blank">
            <img className="imgContent" src="/img/instagram.webp" alt="Instagram" />
          </a>
          <a href="https://github.com/Deyverson1" target="blank">
            <img className="imgContent" src="/img/github.webp" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/deyverson/" target="blank">
            <img className="imgContent" src="/img/linkedin.webp" alt="Linkedin" />
          </a>
        </div>
      </section>
    </section>
  );
}
export default Footer;
