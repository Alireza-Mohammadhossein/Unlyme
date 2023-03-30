import * as t from './SigninTypes';

const INITIAL_SIGNIN_STATE = {
  form: {
    login: '',
    password: '',
    errorMessage: null,
  },
  tokenFetching: false,
};

export default function SigninReducer(state = INITIAL_SIGNIN_STATE, action) {
  switch (action.type) {
    case t.SIGNIN_UPDATE_FORM:
      return {
        ...state,
        form: { ...state.form, ...action.payload },
      };
    case t.SIGNIN_REQUEST_LOGIN_TOKEN:
      return {
        ...state,
        form: { ...state.form, errorMessage: null },
        tokenFetching: true,
      };
    case t.SIGNIN_RECEIVE_LOGIN_TOKEN_ERROR: // Ошибка при получении токена
      return {
        ...state,
        form: { ...state.form, errorMessage: action.error },
        tokenFetching: false,
      };
    case t.SIGNIN_CLEAR_FORM:
      return {
        ...INITIAL_SIGNIN_STATE,
      };
    default:
      return state;
  }
}
