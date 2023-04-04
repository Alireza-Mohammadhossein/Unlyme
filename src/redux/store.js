import { configureStore } from '@reduxjs/toolkit';
import appReducer from './app/appSlice';
import signinReducer from './signin/signinSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    signin: signinReducer,
  },
})