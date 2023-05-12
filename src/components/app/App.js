import React, { useState, useEffect } from 'react';
import Header from "../common/header/Header";
import Menu from "../common/menu/Menu";
import Switcher from "../../routes";
import Spinner from '../common/spinner/Spinner';
// import { connect } from 'react-redux';
// import { fetchUserInfo } from './AppActions';
import { GetScreenSize } from '../common/getScreenSize/GetScreenSize';
import { fetchUserInfo } from '../../redux/app/appSlice';
import { useSelector, useDispatch } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
import "react-toastify/dist/ReactToastify.css";
import "../../styles/sass/app.scss";


function App() {

  // const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  // // const defaultBrowserDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  

  const [ready, setReady] = useState(false);
  const data = useSelector((state) => state.app)
  const dispatch = useDispatch();

  // const token = localStorage.getItem('token');
  const token = true;

  console.log('app token', token)

  useEffect(() => {
    
    const { user, authenticated, fetchUserInfo, i18nextLanguageLoaded, userInfoFetching } = data;
    // console.log('token', token);
    // console.log('user', user);

    // 1. If the languages are loaded
    // 2. Authorization:
    // a) If the user is authorized and data about him is received
    // b) either unauthorized
    // const readyCurrent = ((authenticated && user != null) || !authenticated) && i18nextLanguageLoaded;


    const readyCurrent = token;
 
    if(!token) {
      setTimeout(() => {
        window.location.href = "http://unlyme.com";
      }, 3000)
    }
    
    if (ready !== readyCurrent) {
      setReady(readyCurrent);
    }

    if (authenticated && user === null && !userInfoFetching) {
      dispatch(fetchUserInfo());
    }
  }, [data]);


  const screenSize = GetScreenSize();


  return (
    <div
      id="siteWrapper"
      className={`
        siteWrapper 

        ${screenSize === 'XL' ? 'siteWrapperXL'
          : screenSize === 'LG' ? 'siteWrapperLG'
          : screenSize === 'MD' ? 'siteWrapperMD'
          : screenSize === 'SM' ? 'siteWrapperSM'
          : 'siteWrapperXS'
        }
          
        ${darkMode ? 'dark' : ''}
      `}
    >
      {!ready && (
        <div className="be-loading be-loading-active be-loading-full-size">
          <Spinner />
        </div>
      )}
      {token && (
          <div id="be-wrapper" className="be-wrapper">
            <Header />
            <Menu />
            <Switcher screenSize={screenSize} />
            {/* <div className="modal-backdrop fade show" style={{ display: "none" }} /> */}
          </div>
      )}
    </div>
  );
}

// const mapStateToProps = state => ({
//   userInfoFetching: state.app.userInfoFetching,
//   i18nextLanguageLoaded: state.app.i18nextLanguageLoaded,
//   authenticated: state.app.authenticated,
//   user: state.app.user,
//   token: state.app.token,
// });

// const mapDispatchToProps = {
//   fetchUserInfoAction: fetchUserInfo,
// };


export default App;
