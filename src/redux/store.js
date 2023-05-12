import { configureStore } from '@reduxjs/toolkit';
import appReducer from './app/appSlice';
import signinReducer from './signin/signinSlice';
import themeSlice from './app/themeSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    theme: themeSlice,
    signin: signinReducer,
  },
})