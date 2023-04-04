// import * as t from '../../types';

// const COMMONS_APP_INITIAL_STATE = {
//   authenticated: false,
//   token: true,
//   user: null,
//   userInfoFetching: false,
//   userInfoError: null,
//   i18nextLanguageLoaded: false,
// };

// const CommonsAppReducer = (state = COMMONS_APP_INITIAL_STATE, action) => {
//   switch (action.type) {
//     case t.AUTH_USER:
//       return {
//         ...state,
//         authenticated: true,
//         token: action.token,
//       };
//     case t.UNAUTH_USER:
//       return {
//         // ...state,
//         ...COMMONS_APP_INITIAL_STATE,
//         i18nextLanguageLoaded: true,
//       };
//     case t.REQUEST_USER_INFO:
//       return {
//         ...state,
//         userInfoFetching: true,
//         userInfoError: null,
//       };
//     case t.RECEIVE_USER_INFO:
//       return {
//         ...state,
//         userInfoFetching: false,
//         userInfoError: null,
//         user: action.data,
//       };
//     case t.RECEIVE_USER_INFO_ERROR:
//       return {
//         ...state,
//         userInfoFetching: false,
//         userInfoError: action.error,
//       };
//     case t.I18NEXT_LANGUAGE_LOADED:
//       return {
//         ...state,
//         i18nextLanguageLoaded: true,
//       };
//     default:
//       return state;
//   }
// };

// export default CommonsAppReducer;
