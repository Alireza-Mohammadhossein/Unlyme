import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import { user_info } from '../../../mocks/mocks';
import lightIcon from '../../../assets/images/header/theme_light.svg';
import darkIcon from '../../../assets/images/header/theme_dark.svg';
import autoIcon from '../../../assets/images/header/theme_auto.svg';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';





const HeaderSettingPopup = ({ setSettingPopupToggler }) => {
  const { t } = useTranslation();


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const firstname = user_info.firstname;
  const lastname = user_info.lastname;
  const mail = user_info.mail;
  const avatar = user_info.avatar;

  // start selecting theme
  const [theme, setTheme] = useState('light');
  const handleChangeTheme = (event, newTheme) => {
    if (newTheme !== null) {
      setTheme(newTheme);
    }
  };
  // end selecting theme



  return (
    <div className='setting-popup'>
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
                onClick={() => setSettingPopupToggler(false)}
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
                Select theme
              </div>

              <ToggleButtonGroup
                value={theme}
                exclusive
                onChange={handleChangeTheme}
                aria-label="select theme"
              >
                <ToggleButton className='setting-popup-list__body-content_item-selector' value="light" aria-label="light theme">
                  <img src={lightIcon} />
                  <span>Light</span>
                </ToggleButton>
                <ToggleButton className='setting-popup-list__body-content_item-selector' value="dark" aria-label="dark theme">
                  <img src={darkIcon} />
                  <span>Dark</span>
                </ToggleButton>
                <ToggleButton className='setting-popup-list__body-content_item-selector' value="auto" aria-label="auto theme">
                  <img src={autoIcon} />
                  <span>Auto</span>
                </ToggleButton>
              </ToggleButtonGroup>

            </div>
          </div>
        </div>

        <div className='setting-popup-list__footer'>
          <div className='setting-popup-list__footer-options'>
            <Button className='setting-popup-list__footer-options-setting' startIcon={<SettingsIcon />}>
              Settings
            </Button>
          </div>

          <div className='setting-popup-list__footer-options'>
            <Button className='setting-popup-list__footer-options-logout' startIcon={<LogoutIcon />}>
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default HeaderSettingPopup;