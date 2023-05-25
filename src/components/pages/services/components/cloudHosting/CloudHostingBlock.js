import React from "react";
import { useTranslation } from "react-i18next";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CircleIcon from "@mui/icons-material/Circle";
import CloudBlock from "../cloud-block/CloudBlock";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import icon from "../../../../../assets/images/my-services/cloud.png";

const CloudHostingBlock = () => {
  const { t, i18n } = useTranslation();
  const totalStorage = 3072;
  const usedStorage = 372;
  const freeStorage = totalStorage - usedStorage;

  const totalSitesCounter = 3;
  const usedSitesCounter = 1;
  const availableSitesCounter = totalSitesCounter - usedSitesCounter;

  const content = (
    <div className="my-services__cloud-hosting">
      <div className="my-services__cloud-hosting_container">
        <div className="my-services__cloud-hosting_storage">
          <p className="my-services__cloud-hosting_storage-heading">
            {t("SERVICES.CLOUDHOSTING.YOURSTORAGE")}
          </p>
          <div className="my-services__cloud-hosting_storage_ring">
            <CircularProgressbarWithChildren
              value={usedStorage}
              minValue={0}
              maxValue={totalStorage}
            >
              <p className="my-services__cloud-hosting_storage_ring-title">
                {freeStorage}Mb
              </p>
              <span className="my-services__cloud-hosting_storage_ring-subtitle">
                {t("SERVICES.CLOUDHOSTING.FREEOF")} {totalStorage}
              </span>
            </CircularProgressbarWithChildren>
          </div>
        </div>
        <div className="my-services__cloud-hosting_site">
          <p className="my-services__cloud-hosting_site-heading">
            {t("SERVICES.CLOUDHOSTING.SITES")}
          </p>
          <div className="my-services__cloud-hosting_site-list">
            <List
              sx={{
                "& .MuiListItem-root": { padding: 0, alignItems: "center" },
                "& .MuiListItemIcon-root": {
                  minWidth: "unset",
                  marginRight: "10px",
                },
                "& .MuiListItemText-root": { margin: 0 },
                "& .MuiSvgIcon-root": { fontSize: "15px", color: "#74BA6A" },
              }}
            >
              <ListItem>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText
                  primary={`${availableSitesCounter} ${t(
                    "SERVICES.CLOUDHOSTING.AVAILABLESITES"
                  )}`}
                  secondary={
                    totalSitesCounter
                      ? `${usedSitesCounter} ${t(
                          "SERVICES.CLOUDHOSTING.USEDSITES1"
                        )} ${totalSitesCounter} ${t(
                          "SERVICES.CLOUDHOSTING.USEDSITES2"
                        )}`
                      : null
                  }
                />
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <CloudBlock
      title={t("SERVICES.CLOUDHOSTING.TITLE")}
      subtitle={t("SERVICES.CLOUDHOSTING.SUBTITLE")}
      // rightButtonAction={() => alert('s')}
      // rightButtonAction={(e) => e.preventDefault()}
      content={content}
      iconName="services/cloud-hosting"
      icon={icon}
    />
  );
};

export default CloudHostingBlock;
