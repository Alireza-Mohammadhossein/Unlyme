import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import { user_info } from '../../../../mocks/mocks';
import lightIcon from '../../../../assets/images/header/theme_light.svg';
import darkIcon from '../../../../assets/images/header/theme_dark.svg';
import autoIcon from '../../../../assets/images/header/theme_auto.svg';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector, useDispatch } from "react-redux";
import { signoutUser } from "../../../../redux/app/appSlice";
import { asyncToggleTheme } from '../../../../redux/app/themeSlice'; 
import { toggleSettingPopup } from '../../../../redux/app/popupSlice';







const HeaderSettingPopup = ({ setSettingPopupToggler }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const settingPopup = useSelector((state) => state.popup.settingPopupToggler);



  const [mode, setMode] = useState(darkMode ? 'dark' : 'light')


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const firstname = user_info.firstname;
  const lastname = user_info.lastname;
  const mail = user_info.mail;
  const avatar = user_info.avatar;

  // start changing theme
  const handleChangeTheme = (event, newTheme) => {
    if (newTheme !== null) {
      dispatch(asyncToggleTheme());
      setMode(newTheme);
    }
  };
  // end changing theme



  return (
    <div className='header-popup setting-popup'>
      <div className='setting-popup-list'>
        <div className='setting-popup-list__header'>
          <div className='setting-popup-list__header_user'>
            <div className='setting-popup-list__header_user-avatar'>
              {
                avatar ?
                  <Avatar src={avatar} />
                :
                  <Avatar>{firstname.split('')[0].toLocaleUpperCase()}{lastname.split('')[0].toLocaleUpperCase()}</Avatar>
              }

            </div>
            
            <div className='setting-popup-list__header_user-info'>
              <p className='setting-popup-list__header_user-info-name'>
                {firstname} {lastname}
              </p>

              <p className='setting-popup-list__header_user-info-mail'>
                {mail}
              </p>
            </div>
          </div>

          <div className='setting-popup-list__header-actions'>
            <div className='setting-popup-list__header-actions_close'>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={() => 
                  // setSettingPopupToggler(false)
                  dispatch(toggleSettingPopup())
                }
              >
                <CloseIcon  sx={{ color: '#000000' }}/>
              </IconButton>

            </div>
          </div>
        </div>

        <div className='setting-popup-list__body'>
          <div className='setting-popup-list__body-content'>
            <div className='setting-popup-list__body-content_item'>
              <div className='setting-popup-list__body-content_item-title'>
                {t('SETTING_POPUP.SELECTING')}
              </div>

              <ToggleButtonGroup
                value={mode}
                exclusive
                onChange={handleChangeTheme}
                aria-label="select theme"
              >
                <ToggleButton className='setting-popup-list__body-content_item-selector' value="light" aria-label="theme light">
                  <img src={lightIcon} />
                  <span>{t('SETTING_POPUP.THEME_LIGHT')}</span>
                </ToggleButton>
                <ToggleButton className='setting-popup-list__body-content_item-selector' value="dark" aria-label="theme dark">
                  <img src={darkIcon} />
                  <span>{t('SETTING_POPUP.THEME_DARK')}</span>
                </ToggleButton>
                {/* <ToggleButton className='setting-popup-list__body-content_item-selector' value="auto" aria-label="theme auto">
                  <img src={autoIcon} />
                  <span>{t('SETTING_POPUP.THEME_AUTO')}</span>
                </ToggleButton> */}
              </ToggleButtonGroup>

            </div>
          </div>
        </div>

        <div className='setting-popup-list__footer'>
          <div className='setting-popup-list__footer-options'>
            <Button className='setting-popup-list__footer-options-setting' startIcon={<SettingsIcon />}>
              {t('SETTING_POPUP.SETTINGS')}
            </Button>
          </div>

          <div className='setting-popup-list__footer-options'>
            <Button 
              className='setting-popup-list__footer-options-logout'
              startIcon={<LogoutIcon />}
              onClick={() => {
                toast.info('You are about to logging out...', {
                  position: "top-center",
                  autoClose: 2000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: false,
                  pauseOnFocusLoss: false,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  });

                dispatch(signoutUser())
              }}   
            >
              {t('SETTING_POPUP.LOGOUT')}
            </Button>

            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  )
}


export default HeaderSettingPopup;