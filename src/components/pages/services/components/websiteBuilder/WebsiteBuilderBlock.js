import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import TextField from "@mui/material/TextField";
import CloudBlock from "../cloud-block/CloudBlock";
import CopySites from "../../../../copy-sites/CopySites";
import icon from "../../../../../assets/images/my-services/setting.png";

const LogoBuilder = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const content = (
    <div className="my-services__website-builder">
      <div className="my-services__website-builder_container">
        <div className="my-services__website-builder_description">
          <p>{t("SERVICES.WEBSITE_BUILDER.DESCRIPTON")}</p>
        </div>
        <div className="my-services__website-builder_form-wrapper">
          <p className="my-services__website-builder_form_title">
            {t("SERVICES.WEBSITE_BUILDER.ORDER_WEBSITE")}
          </p>

          <TextField
            className="my-services__website-builder_form_input"
            id="website-builder_form_input"
            placeholder={t("SERVICES.WEBSITE_BUILDER.PLACEHOLDER")}
            variant="outlined"
            size="small"
            multiline
            rows={3}
          />

          <div className="my-services__website-builder_form_btn">
            <button
              className="btn"
              onClick={() => navigate("/services/copy-sites")}
            >
              {t("SERVICES.WEBSITE_BUILDER.BUTTON")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <CloudBlock
      title={t("SERVICES.WEBSITE_BUILDER.TITLE")}
      subtitle={t("SERVICES.WEBSITE_BUILDER.SUBTITLE")}
      rightButtonAction={() => navigate("/services/copy-sites")}
      content={content}
      directComponent={<CopySites />}
      infoContent="s"
      icon={icon}
    />
  );
};

export default LogoBuilder;
