import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CloudBlock from '../../../common/cloud-block/CloudBlock';
import CopySites from '../../../copy-sites/CopySites';
import icon from '../../../../assets/images/services/copy-sites-widget.png';


const LogoBuilder = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const content = (
    <div className='services__sites-copying'>
      <div className="services__sites-copying_container">
        <div className='services__sites-copying_description'>
          <p>{t('SERVICES.SITES_COPYING.DESCRIPTON')}</p>
        </div>
        <div className='services__sites-copying_form-wrapper'>
          <p className='services__sites-copying_form_title'>{t('SERVICES.SITES_COPYING.LOGO_NAME')}</p>

          <input className="services__sites-copying_form_input" placeholder={t('SERVICES.SITES_COPYING.PLACEHOLDER')} />
          
          <div className='services__sites-copying_form_btn'>
            <button className="btn" onClick={() => navigate('/services/copy-sites')}>{t('SERVICES.SITES_COPYING.BUTTON')}</button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <CloudBlock
      title={t('SERVICES.SITES_COPYING.TITLE')}
      subtitle={t('SERVICES.SITES_COPYING.SUBTITLE')}
      rightButtonAction={() => navigate('/services/copy-sites')}
      content={content}
      directComponent={<CopySites />}
      infoContent="s"
      icon={icon}
    />
  );
};

export default LogoBuilder;
