import { combineReducers } from 'redux';
import { ToastContainer, toast } from 'react-toastify';
// import {toastsReducer as toasts} from 'react-toasify-redux';
import { toastsReducer } from 'react-toastify-redux';
import CommonsAppReducer from './components/app/AppReducer';
import SigninReducer from './components/signin/SigninReducer';

import { UNAUTH_USER } from './types';

/* Reducer, in which we collect all reducers from modules */
const appReducers = combineReducers({
  toastsReducer,
  toast,
  app: CommonsAppReducer,
  signin: SigninReducer,
});

const rootReducer = (state, action) => {
  // If we are logging out, then we reset all states in this way
  return appReducers(action.type === UNAUTH_USER ? undefined : state, action);
};

const reducers = (state, action) => rootReducer(state, action);

export default reducers;
