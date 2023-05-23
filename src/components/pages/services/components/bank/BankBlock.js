import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import _ from "lodash";
import { accounts, accountsHistory } from "../../../../../mocks/mocks";
import { useTranslation } from "react-i18next";
import CloudBlock from "../cloud-block/CloudBlock";
import Bank from "../../../../bank/Bank";
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
import icon from "../../../../../assets/images/my-services/bank-widget.png";

const BankBlock = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const ITEM_HEIGHT = 48;

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
    <div className="my-services__bank">
      <div className="my-services__bank_container">
        <List className="my-services__bank_list">
          {accounts.map((card) => (
            <>
              <ListItem key={card.id} className="my-services__bank_item">
                <ListItemIcon>
                  <div
                    className={`my-services__bank_item-currency ${
                      card.currency === "EUR"
                        ? "my-services__bank_item-currency-eur"
                        : card.currency === "USD"
                        ? "my-services__bank_item-currency-usd"
                        : "my-services__bank_item-currency-other"
                    }`}
                  >
                    {card.currency}
                  </div>
                </ListItemIcon>
                <ListItemText
                  className="my-services__bank_item-balance-info"
                  primary={t("SERVICES.BANK.ACCOUNT_BALANCE")}
                  secondary={`${card.balance} ${card.currency}`}
                />
                <ListItemText
                  className="my-services__bank_item-balance-card"
                  primary={card.cardNumber}
                />

                <div className="my-services__bank_item-more">
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
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    disableScrollLock={true}
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
                        selected={option === "Pyxis"}
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
      </div>
    </div>
  );

  return (
    <CloudBlock
      title={t("SERVICES.BANK.TITLE")}
      subtitle={t("SERVICES.BANK.SUBTITLE")}
      // rightButtonAction={() => history.push('/services/bank')}
      // rightButtonAction={() => navigate('/services/bank')}
      iframeUrl="../../../bank/Bank.js"
      directComponent={<Bank />}
      content={content}
      infoContent="s"
      icon={icon}
    />
  );
};

export default BankBlock;
