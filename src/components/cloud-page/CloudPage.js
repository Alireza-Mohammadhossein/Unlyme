import React from 'react';
import { useTranslation } from 'react-i18next';
import { ASSETS_URL } from '../../types';


const CloudPage = ({
  title,
  iconContainerColor,
  iconName,
  iconAction,
  content,
  mdiIcon,
  mdiIconColor,
  infoContent,
  rightButtonAction,
  rightButtonTitle,
}) => {

  const { t } = useTranslation();

  return (
    <div className="cloud-page">
      <div className="cloud-page__header">
        {(iconName || mdiIcon) && (
          <div
            className={`cloud-page__header_icon-container cloud-page__header_icon-container--${iconContainerColor}`}
            onClick={iconAction || undefined}
            style={{
              backgroundImage: iconName ? `url(${ASSETS_URL}/images/icons/${iconName}.svg)` : null,
              cursor: iconAction ? 'pointer' : 'default',
            }}
          >
            {/* {mdiIcon && <b className={`mdi mdi-${mdiIcon}`} style={{ color: mdiIconColor || 'white' }} />} */}
            {mdiIcon && <i className="menu__row_icon material-icons" style={{ color: mdiIconColor || 'white' }}>{mdiIcon}</i>}

          </div>
        )}
        <div className="cloud-page__header_title">
          {title}
          {infoContent != null && (
            <span className="cloud-page__header_info" onClick={() => alert('s')}>
              i
            </span>
          )}
        </div>
        {rightButtonAction != null && (
          <div className="btn btn--blue-text cloud-page__header_btn" onClick={rightButtonAction}>
            {rightButtonTitle || 'Open'}
          </div>
        )}
      </div>
      <div className="cloud-page__content">{content}</div>
    </div>
  );
};

export default CloudPage;
