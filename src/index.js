import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import enTranslation from './locales/en.json';
import esTranslation from './locales/es.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    es: { translation: esTranslation },
  },
  lng: 'es',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <App/>

  </React.StrictMode>
);

reportWebVitals();
