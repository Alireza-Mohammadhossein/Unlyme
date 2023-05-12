import { configureStore } from '@reduxjs/toolkit';
import appReducer from './app/appSlice';
import signinReducer from './signin/signinSlice';
import themeReducer from './app/themeSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    theme: themeReducer,
    signin: signinReducer,
  },
})