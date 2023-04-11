import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';


const GuideBlock = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <div className='guide'>
        <div className='guide-container'>
            <div className='guide__header'>
                <h2 className='guide__header-title'>
                    {t('SERVICES.GUIDE.TITLE')}
                </h2>
            </div>

            <div className='guide__list'>

            </div>
        </div>
    </div>
  );
};

export default GuideBlock;
