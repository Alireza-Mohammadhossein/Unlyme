import React from 'react';
import { useTranslation } from 'react-i18next';
import { ASSETS_URL } from '../../../types';


const CloudPage = ({
  title,
  iconContainerColor,
  iconName,
  iconAction,
  content,
  icon,
  iconColor,
  infoContent,
  rightButtonAction,
  rightButtonTitle,
}) => {


  const { t } = useTranslation();

  return (
    <div className="cloud-page" id='cloud-page'>
      <div className="cloud-page__header">
        <div className='cloud-page__header_icon'>
          <img src={icon} />
        </div>

        <div className="cloud-page__header_title">
          {title}
          {infoContent != null && (
            <span className="cloud-page__header_info" onClick={() => alert('s')}>
              i
            </span>
          )}
        </div>

      </div>
      <div className="cloud-page__content">{content}</div>
    </div>
  );
};

export default CloudPage;
