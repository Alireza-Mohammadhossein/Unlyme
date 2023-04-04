import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as signinActionsList from './SigninActions';
import SigninForm from './components/SigninForm';

function Signin(props) {
  const { signinActions } = props;

  useEffect(() => {
    document.body.classList.add('be-screen-silver');
    return () => {
      signinActions.clearSigninForm();
      document.body.classList.remove('be-screen-silver');
    };
  }, [signinActions]);

  return <SigninForm />;
}

function mapActionsToProps(dispatch) {
  return {
      signinActions: bindActionCreators(signinActionsList, dispatch),
  };
}

export default connect(null, mapActionsToProps)(Signin);
