import * as t from '../../types';

export const authError = error => ({
  type: t.AUTH_ERROR,
  payload: error,
});

export const authUser = token => ({
  type: t.AUTH_USER,
  token,
});

export const fetchUserInfo = () => (dispatch, getState) => {
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
};

// Unauthorize the user
export const signoutUser = () => dispatch => {
  console.log('logout clicked');
  const request = t.HttpClient.post(`${t.BACKEND_URL}/api/site/logout`);

  request
    .then(() => {
      localStorage.removeItem('token');
      dispatch({ type: t.UNAUTH_USER });
    })
    .catch(() => {
      localStorage.removeItem('token');
      dispatch({ type: t.UNAUTH_USER });
    });
};
