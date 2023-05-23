import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CloudBlock from "../cloud-block/CloudBlock";
import TextField from "@mui/material/TextField";
import CopySites from "../../../../copy-sites/CopySites";
import icon from "../../../../../assets/images/my-services/logo-builder-widget.png";

const LogoBuilder = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const content = (
    <div className="my-services__logo-builder">
      <div className="my-services__logo-builder_container">
        <div className="my-services__logo-builder_description">
          <p>{t("SERVICES.LOGO_BUILDER.DESCRIPTON")}</p>
        </div>
        <div className="my-services__logo-builder_form-wrapper">
          <p className="my-services__logo-builder_form_title">
            {t("SERVICES.LOGO_BUILDER.LOGO_NAME")}
          </p>
          <TextField
            className="my-services__logo-builder_form_input"
            id=""
            placeholder={t("SERVICES.LOGO_BUILDER.PLACEHOLDER")}
            variant="outlined"
            size="small"
          />
          {/* <input className="services__logo-builder_form_input" placeholder={t('SERVICES.LOGO_BUILDER.PLACEHOLDER')} /> */}

          <div className="my-services__logo-builder_form_btn">
            <button
              className="btn"
              onClick={() => navigate("/services/copy-sites")}
            >
              {t("SERVICES.LOGO_BUILDER.BUTTON")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <CloudBlock
      title={t("SERVICES.LOGO_BUILDER.TITLE")}
      subtitle={t("SERVICES.LOGO_BUILDER.SUBTITLE")}
      rightButtonAction={() => navigate("/services/copy-sites")}
      content={content}
      directComponent={<CopySites />}
      infoContent="s"
      icon={icon}
    />
  );
};

export default LogoBuilder;
