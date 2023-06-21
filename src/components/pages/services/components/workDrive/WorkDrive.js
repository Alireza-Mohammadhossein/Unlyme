import React from "react";
import { useTranslation } from "react-i18next";
import CloudBlock from "../cloud-block/CloudBlock";
import WorkDrivePage from "../../../work-drive/WorkDrivePage";
import icon from "../../../../../assets/images/my-services/drive.png";
import upload from "../../../../../assets/images/my-services/upload.png";



const WorkDrive = () => {
  const { t, i18n } = useTranslation();

  const content = (
    <div className="my-services__work-drive">
      <div className="my-services__work-drive_container">
        <div className="my-services__work-drive_upload-icon">
          <img src={upload} />
        </div>

        <div className="my-services__work-drive_upload-text">
          <h3>{t("SERVICES.WORKDRIVE.UPLOAD_TEXT")}</h3>
        </div>
      </div>
    </div>
  );

  return (
    <CloudBlock
      title={t("SERVICES.WORKDRIVE.TITLE")}
      subtitle={t("SERVICES.WORKDRIVE.SUBTITLE")}
      content={content}
      directComponent={WorkDrivePage}
      infoContent="s"
      iconName="services/workDrive"
      icon={icon}
    />
  );
};

export default WorkDrive;
