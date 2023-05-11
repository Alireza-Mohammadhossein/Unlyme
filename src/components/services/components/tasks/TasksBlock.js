import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CloudBlock from "../cloud-block/CloudBlock";
import TabToolbar from "../tab-toolbar/TabToolbar";
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
import icon from "../../../../assets/images/my-services/tasks-widget.png";
import {
  backlogLists,
  inprogressLists,
  doneLists,
  closedLists,
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

const TasksBlock = () => {
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
    <div className="my-services__tasks">
      <div className="my-services__tasks_container">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="my-services__tasks_tab"
        >
          <Tab label={t("SERVICES.TASKS.TAB_BACKLOG")} />
          <Tab label={t("SERVICES.TASKS.TAB_INPROGRESS")} />
          <Tab label={t("SERVICES.TASKS.TAB_DONE")} />
          <Tab label={t("SERVICES.TASKS.TAB_CLOSED")} />
        </Tabs>

        <TabPanel value={value} index={0}>
          <List className="my-services__tasks_list">
            {backlogLists.map((item) => (
              <>
                <ListItem key={item.id} className="my-services__tasks_item">
                  <ListItemIcon className="my-services__tasks_item-icon">
                    <CircleIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    secondary={item.description ? item.description : null}
                  />

                  <div className="my-services__tasks_item-more">
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? "long-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MoreHorizIcon />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      disableScrollLock = {true}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "20ch",
                        },
                      }}
                    >
                      {options.map((option) => (
                        <MenuItem
                          key={option}
                          onClick={handleClose}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </Menu>
                  </div>
                </ListItem>
              </>
            ))}
          </List>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <List className="my-services__tasks_list">
            {inprogressLists.map((item) => (
              <>
                <ListItem key={item.id} className="my-services__tasks_item">
                  <ListItemIcon className="my-services__tasks_item-icon">
                    <CircleIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    secondary={item.description ? item.description : null}
                  />

                  <div className="my-services__tasks_item-more">
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? "long-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MoreHorizIcon />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      disableScrollLock = {true}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "20ch",
                        },
                      }}
                    >
                      {options.map((option) => (
                        <MenuItem
                          key={option}
                          onClick={handleClose}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </Menu>
                  </div>
                </ListItem>
              </>
            ))}
          </List>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <List className="my-services__tasks_list">
            {doneLists.map((item) => (
              <>
                <ListItem key={item.id} className="my-services__tasks_item">
                  <ListItemIcon className="my-services__tasks_item-icon">
                    <CircleIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    secondary={item.description ? item.description : null}
                  />

                  <div className="my-services__tasks_item-more">
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? "long-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MoreHorizIcon />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      disableScrollLock = {true}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "20ch",
                        },
                      }}
                    >
                      {options.map((option) => (
                        <MenuItem
                          key={option}
                          onClick={handleClose}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </Menu>
                  </div>
                </ListItem>
              </>
            ))}
          </List>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <List className="my-services__tasks_list">
            {closedLists.map((item) => (
              <>
                <ListItem key={item.id} className="my-services__tasks_item">
                  <ListItemIcon className="my-services__tasks_item-icon">
                    <CircleIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    secondary={item.description ? item.description : null}
                  />

                  <div className="my-services__tasks_item-more">
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? "long-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MoreHorizIcon />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      disableScrollLock = {true}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "20ch",
                        },
                      }}
                    >
                      {options.map((option) => (
                        <MenuItem
                          key={option}
                          onClick={handleClose}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </Menu>
                  </div>
                </ListItem>
              </>
            ))}
          </List>
        </TabPanel>
      </div>
    </div>
  );

  return (
    <CloudBlock
      title={t("SERVICES.TASKS.TITLE")}
      subtitle={t("SERVICES.TASKS.SUBTITLE")}
      content={content}
      infoContent="s"
      iconName="services/tasks"
      icon={icon}
    />
  );
};

export default TasksBlock;
