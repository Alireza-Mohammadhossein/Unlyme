import React, { useState } from 'react';
import { Link } from "react-router-dom";
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import { ASSETS_URL, LOCAL_STORAGE_LOCALE, SUPPORTED_LANGUAGES } from '../../../types';
import logo from '../../../assets/images/header/logo.png';
// import { connect } from 'react-redux';
// import { signoutUser } from '../../app/AppActions';
import { useSelector, useDispatch } from 'react-redux';
import { signoutUser } from '../../../redux/app/appSlice';
import Tooltip from '@mui/material/Tooltip';
import searchIcon from '../../../assets/images/header/search.gif';
import { styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import HeaderPopup from '../header-popup/HeaderPopup';






const Header = () => {

  const items = [
    { id: 1, title: 'chat', link: '/', img:`${ASSETS_URL}/assets/images/header/icon.png`},
    { id: 2, title: 'mails', link: '/', img:`${ASSETS_URL}/assets/images/header/icon.png`},
    { id: 3, title: 'notes', link: '/', img:`${ASSETS_URL}/assets/images/header/icon.png`},
    { id: 4, title: 'notifications', link: '/', img:`${ASSETS_URL}/assets/images/header/icon.png`},
  ];


  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    color: '#666666',
    marginLeft: 0,
    width: '100%',
    marginRight: '10px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: 0,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    right: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      borderRadius: '25px',
      padding: '8px 6px 6px 0',
      // vertical padding + font size from searchIcon
      paddingLeft: '15px',
      paddingRight: '45px',
      height: '19px',
      position: 'relative',
      // backgroundColor: 'rgba(130, 130, 130, 0.3)',
      backgroundColor: '#FFF',
      // boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
      transition: theme.transitions.create('all'),
      [theme.breakpoints.up('sm')]: {
        right: '40px',
        width: '215px',
        '&:focus': {
          right: 0,
          width: '700px',
        },
      },
    },
  }));

  const userTokenStatus = useSelector((state) => state.app.token)
  const dispatch = useDispatch()

  const { t, i18n } = useTranslation()
  const [chatIsShowed, setChatIsShowed] = useState(false);

  const setLanguage = () => {
    const newLang = _.find(SUPPORTED_LANGUAGES, id => id !== i18n.language);
    i18n.changeLanguage(newLang, () => {
      localStorage.setItem(LOCAL_STORAGE_LOCALE, newLang);
    });
  };


  // popups toggler
  const [chatPopupToggler, setChatPopupToggler] = useState(false);
  const [mailPopupToggler, setMailPopupToggler] = useState(false);
  const [notePopupToggler, setNotePopupToggler] = useState(false);




  return (
    <>
      <div className="header">

        <div className="header__logo-area">
          <Link to="/" className="header__logo-area_link">
            <img src={logo} className="header__logo-area_img" />
          </Link>
        </div>

        <div className="header__details-area">
          <div className="header__details-area_searchbar">
              <SearchIconWrapper>
                <img src={searchIcon} className="header__details-area_searchbar-gif" />
              </SearchIconWrapper>
            <Search>
              <StyledInputBase
                placeholder="Type your question..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </div>

          <div className="header__details-area_items">
            <div className="header__details-area_items-icon" onClick={() => setChatPopupToggler(!chatPopupToggler)}>
              <Tooltip title='Chat' arrow placement="bottom">
                <img src={`${ASSETS_URL}/assets/images/header/chat-icon.png`} alt="chat" />
              </Tooltip>
            </div>
            <div className="header__details-area_items-icon">
              <Tooltip title='Mails' arrow placement="bottom">
                <img src={`${ASSETS_URL}/assets/images/header/mails-icon.png`} alt="mails" />
              </Tooltip>
            </div>
            <div className="header__details-area_items-icon">
              <Tooltip title='Notes' arrow placement="bottom">
                <img src={`${ASSETS_URL}/assets/images/header/notes-icon.png`} alt="notes" />
              </Tooltip>
            </div>
            <div className="header__details-area_items-icon">
              <Tooltip title='Notifications' arrow placement="bottom">
                <img src={`${ASSETS_URL}/assets/images/header/notifications-icon.png`} alt="notifications" />
              </Tooltip>
            </div>
          </div>
          
          <div className="header__details-area_account">
            <div className="header__details-area_account-icon">
              <Link className="header__details-area_account-link" to="/settings">
                <img src={`${ASSETS_URL}/assets/images/header/account.png`} alt="chat" />
              </Link>
            </div>
          </div>

          {chatPopupToggler ? 
            <div className="header__popup-area">
              <HeaderPopup setChatPopupToggler={setChatPopupToggler} />
            </div>
            : ''
          }

        </div>

        {/* <div className="header__search-bar">
          <span className="header__search-bar_title">{t('HEADER.HOW_CAN_UNLYME_HELP_YOU')}</span>
          <div className="header__search-bar_input-container">
            <input className="header__search-bar_input" placeholder={t('HEADER.SEARCH_PLACEHOLDER')} />
            <button onClick={() => alert('s')} className="header__search-bar_button" />
          </div>
          <div
            className="header__search-bar_chat"
            onClick={() => setChatIsShowed(true)} 
          />
        </div>
        <div
          style={{backgroundImage: `url(${ASSETS_URL}/assets/icons/${i18n.language}.svg)`}}
          onClick={setLanguage}
          className="header__language"
        />
        <Link className="header__profile" to="/settings"></Link>
        {/* <div className="header__notifications" onClick={() => alert('notification')} /> */}
        {/* <div className="header__exit" onClick={() => dispatch(signoutUser())} /> */}
      </div>
      {/* <ChatPopup visible={chatIsShowed} onClose={() => setChatIsShowed(false)} /> */}
    </>
  );
};

// const mapStateToProps = state => ({
//   token: state.app.token
// });

// const mapDispatchToProps = dispatch => {
//   return {
//     signoutUser: () => dispatch(signoutUser())
//   }
// };

export default Header;
