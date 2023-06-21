import { configureStore } from '@reduxjs/toolkit';
import appReducer from './app/appSlice';
import signinReducer from './signin/signinSlice';
import themeReducer from './app/themeSlice';
import popupReducer from './app/popupSlice';
import appsModalReducer from './app/appsModalSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    theme: themeReducer,
    popup: popupReducer,
    signin: signinReducer,
    appsModal: appsModalReducer,
  },
})