import React, { useContext, useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import storeApi from "../../utils/storeApi";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';



export default function Title({ title, listId, collapseColumns, collapse }) {
  const [open, setOpen] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const { updateListTitle, deleteList } = useContext(storeApi);

  const handleOnBlur = () => {
    updateListTitle(newTitle, listId);
    setOpen(!open);
  };


  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = useState(null);
  const openActions = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {open ? (
        <div>
          <input
            type="text"
            className="input-title"
            value={newTitle}
            onChange={(e) => {
              setNewTitle(e.target.value);
            }}
            onBlur={handleOnBlur}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleOnBlur();
              }
              return;
            }}
            autoFocus
          />
        </div>
      ) : (
        <div className="editable-title-container">
          <h2 onClick={() => setOpen(!open)} className="editable-title">
            {title}
          </h2>
          <IconButton
            aria-label="more"
            className="editable-title-actions"
            // aria-controls={openActions ? "long-menu" : undefined}
            // aria-expanded={openActions ? "true" : undefined}
            // aria-haspopup="true"
            onClick={() => setOpen(!open)}
          >
            <EditIcon />
          </IconButton>

          <IconButton
            aria-label="more"
            className="editable-title-actions"
            // aria-controls={openActions ? "long-menu" : undefined}
            // aria-expanded={openActions ? "true" : undefined}
            // aria-haspopup="true"
            onClick={() => deleteList(listId)}
          >
            <DeleteOutlineOutlinedIcon />
          </IconButton>

          <IconButton
            aria-label="more"
            className="editable-title-actions"
            // aria-controls={openActions ? "long-menu" : undefined}
            // aria-expanded={openActions ? "true" : undefined}
            // aria-haspopup="true"
            onClick={collapseColumns}
          >
            {collapse ? <ExpandLess /> : <ExpandMore />}
            {/* <ArrowDropDownOutlinedIcon /> */}
          </IconButton>
          {/* <button
            className="list-button"
            onClick={() => setOpenOptions(!openOptions)}
          >
            <MoreVertIcon />
          </button> */}
          {/* {openOptions && (
            // <ClickOutHandler
            //   onClickOut={(e) => {
            //     setOpenOptions(!openOptions);
            //   }}
            // >
              <ul className="menu-card">
                <li
                  onClick={() => {
                    setOpenOptions(!openOptions);
                    deleteList(listId);
                  }}
                >
                  Delete list
                </li>
                <li
                  onClick={() => {
                    setOpenOptions(!openOptions);
                    setOpen(!open);
                  }}
                >
                  Edit card title
                </li>
              </ul>
            // </ClickOutHandler>
          )} */}
        </div>
      )}
    </>

    // <div className="editable-title-container">
    //   <h2 className="editable-title">
    //     {title}
    //   </h2>
    // </div>
  );
}