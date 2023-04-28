import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CloudBlock from "../cloud-block/CloudBlock";
import TextField from "@mui/material/TextField";
import CopySites from "../../../copy-sites/CopySites";
import icon from "../../../../assets/images/my-services/copy-sites-widget.png";

const LogoBuilder = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const content = (
    <div className="my-services__sites-copying">
      <div className="my-services__sites-copying_container">
        <div className="my-services__sites-copying_description">
          <p>{t("SERVICES.SITES_COPYING.DESCRIPTON")}</p>
        </div>
        <div className="my-services__sites-copying_form-wrapper">
          <p className="my-services__sites-copying_form_title">
            {t("SERVICES.SITES_COPYING.WEBSITE_ADDRESS")}
          </p>
          <TextField
            className="my-services__sites-copying_form_input"
            id=""
            placeholder={t("SERVICES.SITES_COPYING.PLACEHOLDER")}
            variant="outlined"
            size="small"
          />

          <div className="my-services__sites-copying_form_btn">
            <button
              className="btn"
              onClick={() => navigate("/services/copy-sites")}
            >
              {t("SERVICES.SITES_COPYING.BUTTON")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <CloudBlock
      title={t("SERVICES.SITES_COPYING.TITLE")}
      subtitle={t("SERVICES.SITES_COPYING.SUBTITLE")}
      rightButtonAction={() => navigate("/services/copy-sites")}
      content={content}
      directComponent={<CopySites />}
      infoContent="s"
      icon={icon}
    />
  );
};

export default LogoBuilder;
