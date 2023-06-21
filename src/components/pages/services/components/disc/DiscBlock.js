import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CloudBlock from "../cloud-block/CloudBlock";
import CopySites from "../../../../copy-sites/CopySites";
import icon from "../../../../../assets/images/my-services/disc.png";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const DiscBlock = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const totalSpace = 10;
  const usedSpace = 2;
  const value = (usedSpace * 100) / 10;
  const freeSpace = totalSpace - usedSpace;

  const content = (
    <div className="my-services__disc">
      <div className="my-services__disc_container">
        <div className="my-services__disc_form-wrapper">
          <p className="my-services__disc_title">
            {t("SERVICES.DISC.DISC_SPACE")}
          </p>

          <div className="my-services__disc_info">
            <BorderLinearProgress
              className="my-services__disc_info-progress"
              variant="determinate"
              value={value}
            />
            <div className="my-services__disc_info-text">
              {freeSpace} GB {t("SERVICES.DISC.FREESPACE1")} {totalSpace} GB
            </div>
          </div>

          <div className="my-services__disc_btn">
            <button
              className="btn"
              onClick={() => navigate("/services/copy-sites")}
            >
              {t("SERVICES.DISC.BUTTON")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <CloudBlock
      title={t("SERVICES.DISC.TITLE")}
      subtitle={t("SERVICES.DISC.SUBTITLE")}
      rightButtonAction={() => navigate("/services/copy-sites")}
      content={content}
      // directComponent={<CopySites />}
      infoContent="s"
      icon={icon}
    />
  );
};

export default DiscBlock;
