import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { useTranslation, initReactI18next } from "react-i18next";
// import moment from "moment";
import "./styles/sass/style.scss";
import "swiper/swiper-bundle.min.css";
import "material-icons/iconfont/material-icons.css";
import App from "./components/app/App";
// import {
//   AUTH_USER,
//   HttpClient,
//   setCatchingHttpClientErrors,
//   I18NEXT_LANGUAGE_LOADED,
//   SUPPORTED_LANGUAGES,
//   FALLBACK_LANGUAGE,
//   LOCAL_STORAGE_LOCALE,
//   convertToFormData, ASSETS_URL,
// } from './types';


// Localization
// const fallbackLocale = localStorage.getItem(LOCAL_STORAGE_LOCALE) || FALLBACK_LANGUAGE;
// moment.locale(FALLBACK_LANGUAGE);

i18n
.use(initReactI18next) // passes i18n down to react-i18next
.use(LanguageDetector)
.use(HttpApi)
.init({
  fallbackLng: "en",
  detection: {
    // order and from where user language should be detected
    order: ['htmlTag', 'cookie', 'localStorage', 'querystring', 'path', 'subdomain'],
    caches: ['localStorage', 'cookie'],
  },
  backend: {
    // loadPath: '/public/assets/locales/{{lng}}/translation.json',
    // loadPath: '/assets/translations/{{lng}}.json',
    // loadPath: `${ASSETS_URL}/Unlyme/assets/translations/{{lng}}.json`,
    loadPath: 'Unlyme/assets/translations/{{lng}}.json',
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);

