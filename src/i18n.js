import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from "react-i18next";
import { store } from "./redux/store";
import moment from "moment";
import {
  ASSETS_URL,
  I18NEXT_LANGUAGE_LOADED,
  SUPPORTED_LANGUAGES,
  FALLBACK_LANGUAGE,
  LOCAL_STORAGE_LOCALE,
} from './types';



const fallbackLocale = localStorage.getItem(LOCAL_STORAGE_LOCALE) || FALLBACK_LANGUAGE;
console.log('fallback language', FALLBACK_LANGUAGE);
console.log('fallbacklocale', fallbackLocale);
moment.locale(FALLBACK_LANGUAGE);

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    lng: fallbackLocale,
    supportedLngs: SUPPORTED_LANGUAGES,
    // fallbackLng: "en",
    fallbackLng: fallbackLocale,
    cleanCode: true,
    keySeparator: false,
    detection: {
      // order and from where user language should be detected
      order: ['htmlTag', 'cookie', 'localStorage', 'querystring', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },
    backend: {
      // loadPath: '/public/assets/locales/{{lng}}/translation.json',
      // loadPath: '/assets/translations/{{lng}}.json',
      // loadPath: 'Unlyme/assets/translations/{{lng}}.json',
      
      
      loadPath: `${ASSETS_URL}/assets/translations/{{lng}}.json`,
      // loadPath: './assets/translations/{{lng}}.json',
    },
  });

  i18n.on('loaded', () => {
    store.dispatch({ type: I18NEXT_LANGUAGE_LOADED });
  });

  i18n.on('initialized', options => {
    moment.locale(options.lng);
  });
  i18n.on('languageChanged', lng => {
    moment.locale(lng);
  });



  export default i18n;