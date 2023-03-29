import React from 'react';

function SigninFormLoginStage() {
  // const dispatch = useDispatch();
  // const login = useSelector(state => state.signin.form.login);
  // const password = useSelector(state => state.signin.form.password);
  // const tokenFetching = useSelector(state => state.signin.tokenFetching);

  // const handleLoginChange = e => {
  //   dispatch(signinActionsList.updateForm({ login: e.target.value }));
  // };

  // const handlePasswordChange = e => {
  //   dispatch(signinActionsList.updateForm({ password: e.target.value }));
  // };

  // const handleLoginClick = () => {
  //   dispatch(signinActionsList.fetchAuthToken());
  // };

  return (
    <>
      <div className="signin__form-group">
        <label className="site-input-label">Username</label>
        <input autoComplete="off" className="site-input" />
      </div>
      <div className="signin__form-group">
        <label className="site-input-label">Password</label>
        <input type="password" autoComplete="off" className="site-input" />
      </div>
      <div className="signin__form-group login-submit">
        <button
          type="button"
          className="btn btn--w-100"
          // onClick={handleLoginClick}
          disabled
        >
          Login
        </button>
      </div>
    </>
  );
}


export default SigninFormLoginStage;
