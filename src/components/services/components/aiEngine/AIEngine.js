import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CloudBlock from "../cloud-block/CloudBlock";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CircleIcon from "@mui/icons-material/Circle";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import icon from "../../../../assets/images/header/search.gif";
import {
  all,
  important,
  payment,
  report,
} from "../../../../mocks/mocks";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

const AIEngine = () => {
  const ITEM_HEIGHT = 48;
  const { t, i18n } = useTranslation();
  const [value, setValue] = useState(0);

  const options = ["Edit", "Add description", "Delete"];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const content = (
    <div className="my-services__ai">
      <div className="my-services__ai_container">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="my-services__ai_tab"
        >
          <Tab label={t('SERVICES.AI_ENGINE.TAB.ALL')} />
          <Tab label={t('SERVICES.AI_ENGINE.TAB.IMPORTANT')} />
          <Tab label={t('SERVICES.AI_ENGINE.TAB.PAYMENT')} />
          <Tab label={t('SERVICES.AI_ENGINE.TAB.REPORT')} />
        </Tabs>

        <TabPanel value={value} index={0}>
          <List className="my-services__ai_list">
            {all.map((item) => (
              <ListItem key={item.id} className="my-services__ai_item">
                  <div className="my-services__ai_item-time">
                      <p>
                          {item.time}
                      </p>
                  </div>
                  <div className="my-services__ai_item-log">
                      <p>
                          {item.description}
                      </p>
                  </div>
              </ListItem>
            ))}
          </List>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <List className="my-services__ai_list">
            {important.map((item) => (
              <ListItem key={item.id} className="my-services__ai_item">
              <div className="my-services__ai_item-time">
                  <p>
                      {item.time}
                  </p>
              </div>
              <div className="my-services__ai_item-log">
                  <p>
                      {item.description}
                  </p>
              </div>
            </ListItem>
            ))}
          </List>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <List className="my-services__ai_list">
            {payment.map((item) => (
              <ListItem key={item.id} className="my-services__ai_item">
                <div className="my-services__ai_item-time">
                    <p>
                        {item.time}
                    </p>
                </div>
                <div className="my-services__ai_item-log">
                    <p>
                        {item.description}
                    </p>
                </div>
            </ListItem>
            ))}
          </List>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <List className="my-services__ai_list">
            {report.map((item) => (
              <ListItem key={item.id} className="my-services__ai_item">
                <div className="my-services__ai_item-time">
                    <p>
                        {item.time}
                    </p>
                </div>
                <div className="my-services__ai_item-log">
                    <p>
                        {item.description}
                    </p>
                </div>
            </ListItem>
            ))}
          </List>
        </TabPanel>
      </div>
    </div>
  );

  return (
    <CloudBlock
      title={t("SERVICES.AI_ENGINE.TAB.TITLE")}
    //   subtitle={t("SERVICES.TASKS.SUBTITLE")}
      content={content}
      infoContent="s"
      iconName="services/ai"
      icon={icon}
    />
  );
};

export default AIEngine;
