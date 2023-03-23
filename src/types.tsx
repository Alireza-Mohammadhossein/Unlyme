import axios from 'axios';
import _ from 'lodash';

// @ts-ignore
export const BACKEND_URL = window.backend_url;

// @ts-ignore
export const ASSETS_URL = window.assets_url;

export function convertToFormData(data) {
  const formData = new FormData();
  Object.keys(data).forEach(key => {
    formData.append(key, data[key]);
  });
  return formData;
}

// Язык по умолчанию
export const FALLBACK_LANGUAGE = 'en';

// Поддерживаемы языка
export const SUPPORTED_LANGUAGES = ['en', 'ru'];

export const getLangISOFormat = lng => {
  const isoFormats = ['en-EN', 'ru-RU'];
  const index = _.findIndex(SUPPORTED_LANGUAGES, o => o === lng);
  if (index > -1) {
    return isoFormats[index];
  }
  return null;
};

// Создаем экземпляр axios тут, а настройки идут в index.js
export const HttpClient = axios.create({ baseURL: BACKEND_URL });

// Колбэк по загрузке языка
export const I18NEXT_LANGUAGE_LOADED = 'i18next_language_loaded';

/* Авторизация */
export const AUTH_USER = 'auth_user';
export const UNAUTH_USER = 'unauth_user';
export const AUTH_ERROR = 'auth_error';

/* Управление title страницы */
export const SET_PAGE_TITLE = 'set_page_title';

/* Получение информации о пользователе */
export const REQUEST_USER_INFO = 'request_user_info';
export const RECEIVE_USER_INFO = 'receive_user_info';
export const RECEIVE_USER_INFO_ERROR = 'receive_user_info_error';

export const LOCAL_STORAGE_LOCALE = 'locale';

export const SITE_NAME = 'WAYWE';
export const SITE_SUPPORT_NAME = 'WeHelp';

export function setCatchingHttpClientErrors(store, error) {
  if (
    !error.response ||
    ['ECONNABORTED', 'ETIMEDOUT', 'ENETDOWN', 'ENETUNREACH', 'ECONNRESET', 'ECONNREFUSED', 'EHOSTDOWN'].indexOf(error.code) > -1 ||
    (error.response && error.response.status === 408)
  ) {
  } else if (error.response && error.response.status === 500) {
  } else if (error.response && error.response.status === 403) {
  } else if (error.response && error.response.status === 401) {
    localStorage.removeItem('token');
    // window.location.reload(false);
  }

  throw error;
}
