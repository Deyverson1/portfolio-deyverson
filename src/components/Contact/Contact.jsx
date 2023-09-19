import React from "react";
import FormSignUp from ".";
import { useTranslation } from 'react-i18next';
import './style.css'
function Contact() {
  const { t } = useTranslation();
  return (
    <section className="Box">
      <section className="aclaracion">
        <header>
         <h2 className="tittleContact">{t('Contact')}</h2>
         </header>
        <p className="contactoInfo">
        {t('ContactDescripcion')} <br />
        {t('ContactSubDescripcion')} <br />
        </p>
        <FormSignUp/>
      </section>
    </section>
  );
}
export default Contact;
