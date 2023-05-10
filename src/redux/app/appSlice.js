import { createSlice } from '@reduxjs/toolkit';
import * as t from '../../types';



const COMMONS_APP_INITIAL_STATE = {
    authenticated: false,
    token: true,
    user: null,
    userInfoFetching: false,
    userInfoError: null,
    i18nextLanguageLoaded: false,
  };

export const appSlice = createSlice({
  name: 'app',
  initialState: COMMONS_APP_INITIAL_STATE,
  reducers: {
    authError: error => ({
        type: t.AUTH_ERROR,
        payload: error,
    }),
    authUser: token => ({
        type: t.AUTH_USER,
        token,
    }),
    fetchUserInfo: (dispatch, getState) => {
        const appState = getState().app;
        if (!appState.userInfoFetching && appState.userInfoError === null) {
          dispatch({ type: t.REQUEST_USER_INFO });
      
          const request = t.HttpClient.get(`${t.BACKEND_URL}/api/site/me`);
      
          request
            .then(response => {
              dispatch({
                type: t.RECEIVE_USER_INFO,
                data: response.data,
              });
            })
            .catch(error => {
              dispatch({ type: t.RECEIVE_USER_INFO_ERROR, error });
            });
        }
    },
    signoutUser: (dispatch) => {
        console.log('logout clicked', COMMONS_APP_INITIAL_STATE.token); 
        const request = t.HttpClient.post(`${t.BACKEND_URL}/api/site/logout`);
      
        request
          .then(() => {
            localStorage.removeItem('token');
            // dispatch({ type: t.UNAUTH_USER });
          })
          .catch(() => {
            localStorage.removeItem('token');
            // dispatch({ type: t.UNAUTH_USER });
          });

          setTimeout(() => {
            window.location.href = "http://unlyme.com";
          }, 3000);
      },
  },
})

// Action creators are generated for each case reducer function
export const { authError, authUser, fetchUserInfo, signoutUser } = appSlice.actions

export default appSlice.reducer