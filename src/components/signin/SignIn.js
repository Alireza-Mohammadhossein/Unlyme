import React, { useEffect } from 'react';
import SigninForm from './components/SigninForm';

function Signin(props) {
  const { signinActions } = props;

  useEffect(() => {
    document.body.classList.add('be-screen-silver');
    return () => {
    //   signinActions.clearSigninForm();
      document.body.classList.remove('be-screen-silver');
    };
  }, [signinActions]);

  return <SigninForm />;
}


export default Signin;
