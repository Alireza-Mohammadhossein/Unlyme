import { createSlice } from '@reduxjs/toolkit';
import * as t from './SigninTypes';
import * as tCommon from "../../types";
import * as actions from "../app/appSlice";


const INITIAL_SIGNIN_STATE = {
    form: {
      login: '',
      password: '',
      errorMessage: null,
    },
    tokenFetching: false,
  };

export const signinSlice = createSlice({
  name: 'signin',
  initialState: INITIAL_SIGNIN_STATE,
  reducers: {
    updateForm: (data) => {
        return {
          type: t.SIGNIN_UPDATE_FORM,
          payload: data,
        };
    },
    clearSigninForm: () => {
        return { type: t.SIGNIN_CLEAR_FORM };
    },
    fetchAuthToken: () => {
        return (dispatch, getState) => {
          dispatch({ type: t.SIGNIN_REQUEST_LOGIN_TOKEN });
      
          const requestData = {};
          requestData["LoginModel[login]"] = getState().signin.form.login;
          requestData["LoginModel[password]"] = getState().signin.form.password;
      
          // If there is a device ID, then we transfer it
          const deviceId = localStorage.getItem("deviceId");
          if (deviceId) {
            requestData["LoginModel[device_id]"] = deviceId;
          }
      
          const request = tCommon.HttpClient.post(
            `${tCommon.BACKEND_URL}/api/site/login`,
            requestData
          );
      
          return request
            .then((response) => {
              localStorage.setItem("token", response.data.token);
              dispatch(actions.authUser(response.data.token));
            })
            .catch((error) => {
              dispatch({
                type: t.SIGNIN_RECEIVE_LOGIN_TOKEN_ERROR,
                error: error.response.data.message,
              });
            });
        };
      },
  },
})

// Action creators are generated for each case reducer function
export const { updateForm, clearSigninForm, fetchAuthToken } = signinSlice.actions

export default signinSlice.reducer