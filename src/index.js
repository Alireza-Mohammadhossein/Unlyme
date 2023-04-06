import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
// import { createStore, applyMiddleware, compose } from 'redux';
// import reduxThunk from 'redux-thunk';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from "react-i18next";
import { store } from "./redux/store";
import { Provider } from "react-redux"  ;
// import store from "./redux/store";
import moment from "moment";
import 'moment/locale/ru';
// import "./styles/sass/style.scss";
import "swiper/swiper-bundle.min.css";
import "material-icons/iconfont/material-icons.css";
import App from "./components/app/App";
// import reducers from './reducers';
// import * as appActions from './components/app/AppActions';
// import queryString from "query-string";
// import { ReactQueryConfigProvider } from 'react-query';
import {
  AUTH_USER,
  HttpClient,
  setCatchingHttpClientErrors,
  I18NEXT_LANGUAGE_LOADED,
  SUPPORTED_LANGUAGES,
  FALLBACK_LANGUAGE,
  LOCAL_STORAGE_LOCALE,
  convertToFormData, ASSETS_URL,
} from './types';


// Localization
// const fallbackLocale = localStorage.getItem(LOCAL_STORAGE_LOCALE) || FALLBACK_LANGUAGE;
// moment.locale(FALLBACK_LANGUAGE);

// i18n
// .use(initReactI18next) // passes i18n down to react-i18next
// .use(LanguageDetector)
// .use(HttpApi)
// .init({
//   fallbackLng: "en",
//   detection: {
//     // order and from where user language should be detected
//     order: ['htmlTag', 'cookie', 'localStorage', 'querystring', 'path', 'subdomain'],
//     caches: ['localStorage', 'cookie'],
//   },
//   backend: {
//     // loadPath: '/public/assets/locales/{{lng}}/translation.json',
//     // loadPath: '/assets/translations/{{lng}}.json',
//     // loadPath: `${ASSETS_URL}/Unlyme/assets/translations/{{lng}}.json`,
//     loadPath: 'Unlyme/assets/translations/{{lng}}.json',
//   },
// });

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </BrowserRouter>
// );

try {
  // const rootEnhancer = () => {
  //   if (window.frontend_env === 'dev' && window.navigator.userAgent.includes('Chrome')) {
  //     if (typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'undefined') {
  //       // eslint-disable-next-line no-console
  //       console.log('__REDUX_DEVTOOLS_EXTENSION__ не установлен.');
  //     }
  //     return compose(
  //       applyMiddleware(reduxThunk),
  //       window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  //     );
  //   }
  //   return compose(applyMiddleware(reduxThunk));
  // };

  // const store = createStore(reducers, rootEnhancer());

  // Global HttpClient settings and behavior when certain errors occur
  // HttpClient.interceptors.request.use(originalConfig => {
  //   const config = { ...originalConfig };

  // // If there is a token, then we add it to any request sent via HttpClient
  //   let token = localStorage.getItem('token');
  //   // If a token is passed in the data, then we take it.
  //   if (config.data != null && config.data.token) {
  //     token = config.data.token;
  //   }

  //   // If a token is passed in the headers, then we take it. If not, then the one received earlier
  //   if (!config.headers.Authorization && token) config.headers.Authorization = `Bearer ${token}`;

  //   // If the locale is saved in the storage, then we take it, otherwise we substitute the default
  //   let locale = localStorage.getItem(LOCAL_STORAGE_LOCALE);
  //   if (locale === null) {
  //     locale = fallbackLocale;
  //   }

  //   // If the methods are POST or PUT, then add the appropriate header
  //   if (config.method === 'post' || config.method === 'put') {
  //     config.headers['Content-Type'] = 'multipart/form-data';
  //     // Here we check that some data has been passed and if it has not yet been converted to FormData, then we will force it
  //     if (config.data != null) {
  //       const own = config.data instanceof FormData;
  //       if (!own) {
  //         config.data = convertToFormData(config.data);
  //       }
  //     }
  //   }



  //   // Some more headlines
  //   config.headers.Accept = 'application/json';
  //   config.headers['Access-Control-Allow-Origin'] = '*';
  //   config.headers['Accept-Language'] = locale;
  //   config.headers['X-Requested-With'] = 'XMLHttpRequest';

  //   if (!config.params) config.params = {};

  //   return config;
  // });

  // const httpClients = [HttpClient];

  // for (let i = 0; i < httpClients.length; i += 1) {
  //   httpClients[i].interceptors.response.use(
  //     response => {
  //       // if the Http request was completed without an error, then if necessary, update the flag
  //       const netErrorCurrent = store.getState().app.netError;
  //       if (netErrorCurrent) {
  //         // store.dispatch(appActions.setNetError(false));
  //       }
  //       return response;
  //     },
  //     error => {
  //       setCatchingHttpClientErrors(store, error);
  //     }
  //   );
  // }

  //   // We take the token from localStorage
    // let token = localStorage.getItem('token');
    // console.log('index token', token)

  //   // If the token is passed through the URL, then we will change it
  //   const parsedGetParams = queryString.parse(window.location.search);
  //   if (parsedGetParams._token) {
  //     token = parsedGetParams._token;
  //     localStorage.setItem('token', token);
  //   }
  
  //   // Authorize the user and request data
  //   if (token) {
  //     store.dispatch({ type: AUTH_USER, token });
  //     store.dispatch(appActions.fetchUserInfo());
  //   }


    const fallbackLocale = localStorage.getItem(LOCAL_STORAGE_LOCALE) || FALLBACK_LANGUAGE;
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
          // loadPath: `${ASSETS_URL}/Unlyme/assets/translations/{{lng}}.json`,
          loadPath: 'Unlyme/assets/translations/{{lng}}.json',
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


      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );


} catch(e) {
  // TraceKit.report(e);
}

