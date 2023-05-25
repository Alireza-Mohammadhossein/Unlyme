import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CloudBlock from "../cloud-block/CloudBlock";
import Domain from "../../../../domains/Domain";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CircleIcon from "@mui/icons-material/Circle";
import icon from "../../../../../assets/images/my-services/domains.png";

const DomainsBlock = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const registeredDomainsCounter = 2;
  const expiredDomainsCounter = 0;
  const expiringDomainsCounter = 1;
  const pendingDomainsCounter = 1;

  const expiringDomainsDayCounter = 7;

  const content = (
    <div className="my-services__domains_container">
      <div className="my-services__domains_header">
        {t("SERVICES.DOMAINS.HEADER1")} {registeredDomainsCounter}{" "}
        {t("SERVICES.DOMAINS.HEADER2")}
      </div>

      <div className="my-services__domains_items">
        <List>
          <ListItem>
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText
              primary={`${expiredDomainsCounter} ${t(
                "SERVICES.DOMAINS.EXPIRED"
              )}`}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText
              primary={`${expiringDomainsCounter} ${t(
                "SERVICES.DOMAINS.EXPIRING"
              )}`}
              secondary={
                expiringDomainsCounter
                  ? `${t(
                      "SERVICES.DOMAINS.SUBEXPIRING1"
                    )} ${expiringDomainsDayCounter} ${t(
                      "SERVICES.DOMAINS.SUBEXPIRING2"
                    )}`
                  : null
              }
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText
              primary={`${pendingDomainsCounter} ${t(
                "SERVICES.DOMAINS.PENDING"
              )}`}
            />
          </ListItem>
        </List>
      </div>
    </div>
  );

  return (
    <CloudBlock
      title={t("SERVICES.DOMAINS.TITLE")}
      subtitle={t("SERVICES.DOMAINS.SUBTITLE")}
      rightButtonAction={() => navigate("/services/domains")}
      infoContent="sd"
      directComponent={<Domain />}
      content={content}
      icon={icon}
    />
  );
};

export default DomainsBlock;
