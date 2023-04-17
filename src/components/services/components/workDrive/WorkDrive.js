import React from 'react';
import { useTranslation } from 'react-i18next';
import CloudBlock from '../../../common/cloud-block/CloudBlock';
import icon from '../../../../assets/images/services/drive-widget.png';
import upload from '../../../../assets/images/services/upload.png';




const WorkDrive = () => {
  const { t, i18n } = useTranslation();

  const content = (
    <div className='services__work-drive'>
      <div className='services__work-drive_container'>
        <div className='services__work-drive_upload-icon'>
            <img src={upload} />
        </div>
        
        <div className='services__work-drive_upload-text'>
            <h3>{t('SERVICES.WORKDRIVE.UPLOAD_TEXT')}</h3>
        </div>
      </div>
    </div>
  );

  return (
    <CloudBlock
      title={t('SERVICES.WORKDRIVE.TITLE')}
      subtitle={t('SERVICES.WORKDRIVE.SUBTITLE')}
      content={content}
      infoContent="s"
      iconName="services/workDrive"
      icon={icon}
    />
  );
};

export default WorkDrive;
