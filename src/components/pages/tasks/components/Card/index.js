import React, { useEffect, useContext, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import storeApi from "../../utils/storeApi";
import IconButton from "@mui/material/IconButton";
import ViewModal from "../Modals/ViewModal";
import UpdateModal from "../Modals/UpdateModal";
import Avatar from '@mui/material/Avatar';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Popover from '@mui/material/Popover';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import dayjs from 'dayjs';
import Comments from "../Comments/Comments";







export default function Card({ card, index, listId }) {
  const [openViewModal, setOpenViewModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  // const [newTitle, setNewTitle] = useState(card.title);
  const { removeCard } = useContext(storeApi);
  

  const handleOpenViewModal = () => setOpenViewModal(true);
  const handleCloseViewModal = () => setOpenViewModal(false);

  const handleOpenUpdateModal = () => setOpenUpdateModal(true);
  const handleCloseUpdateModal = () => setOpenUpdateModal(false);

  // const handleTitleOnBlur = () => {
  //   updateCardTitle(newTitle, index, listId);
  //   setOpenUpdateModal(!openUpdateModal);
  // };

  // const handleDescriptionOnBlur = () => {
  //   updateCardDescription(newDescription, index, listId);
  //   setOpen(!open);
  // };

  // setting modals 
  const [anchorElSetting, setAnchorElSetting] = useState(null);
  const open = Boolean(anchorElSetting);
  const handleOpenSetting = (event) => {
    setAnchorElSetting(event.currentTarget);
  };
  const handleCloseSetting = () => {
    setAnchorElSetting(null);
  };



  // comments modal
  const [anchorElComments, setAnchorElComments] = useState(null);
  const handleOpenComments = (event) => {
    setAnchorElComments(event.currentTarget);
  };
  const handleCloseComments = () => {
    setAnchorElComments(null);
  };
  const openComments = Boolean(anchorElComments);
  const idComments = open ? 'comments-popover' : undefined;



  const handleDownloadClick = () => {
    const anchor = document.createElement('a');

    card.files.forEach((file, index) => {
      // const blob = new Blob([file], { type: file.type });

      // anchor.href = URL.createObjectURL(blob);

      // anchor.download = file.name;
      // anchor.click();

      // URL.revokeObjectURL(anchor.href);

      
      // const decodedData = atob(file.dataURL.split('.')[1]);
      const decodedData = file.dataURL.toString('base64'); // Decode base64 data

      console.log('decodedData',decodedData)
      const byteArray = new Uint8Array(decodedData.length);
  
      for (let i = 0; i < decodedData.length; i++) {
        byteArray[i] = decodedData.charCodeAt(i);
      }

      const fileType = file.file.path.split('.')[file.file.path.split('.').length - 1]
  
      const blob = new Blob([byteArray], { type: fileType });
  
      const anchor = document.createElement('a');
      anchor.href = URL.createObjectURL(blob);
      anchor.download = file.file.path;
      anchor.click();
      URL.revokeObjectURL(anchor.href);
    })

  };


  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <div className="card-content" style={{borderLeft: `3px solid ${card.color ? card.color : '#4382C4'}` }}>
            <div className="card-content-container">
                {/* {
                  uploadedImage.path ? 
                    <div>{uploadedImage.path}</div>
                  :
                    ''
                } */}

              {card.imageFile ? (
                <div className="card-content_img">
                  <img src={card.imageFile} alt={card.title} />
                </div>
              ) : (
                ""
              )}
              <div className="card-content_info">
                <div className="card-content_info-title">{card.title}</div>
                
                {card.members ? (
                  <div className="card-content_info-members">
                    {card.members.map((member) => (
                      <Avatar className="card-content_info-members-member">{member[0]}</Avatar>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>


              <div className="card-content_details">
                
                {card.tags ? (
                  <div className="card-content_details-tags">
                    {/* {card.tags} */}
                    {card.tags.map((tag) => (
                      <span key={tag} className="card-content_details-tags-tag">{tag}</span>
                    ))}
                  </div>
                ) : (
                  ""
                )}

                <div className="card-content_details-buttons">
                  <div className="card-content_details-buttons-files">
                    <IconButton aria-label="files" onClick={handleDownloadClick}>
                      <InsertDriveFileOutlinedIcon />
                    </IconButton>
                    {card.files.length}
                  </div>
                  <div className="card-content_details-buttons-comments">
                    <IconButton aria-label="comments" aria-describedby={idComments} onClick={handleOpenComments}>
                      <ChatBubbleOutlineOutlinedIcon />
                    </IconButton>
                    {card.comments ? card.comments.length : '0'}
                  </div>
                  <div className="card-content_details-buttons-setting">
                    <IconButton aria-label="setting" onClick={handleOpenSetting}>
                      <SettingsOutlinedIcon />
                    </IconButton>

                    <Menu
                      anchorEl={anchorElSetting}
                      open={open}
                      onClose={handleCloseSetting}
                      disableScrollLock={true}
                    >
                      <MenuItem 
                        sx={{minWidth: '120px'}}
                        onClick={() => {
                          handleOpenViewModal()
                          handleCloseSetting()
                          }}>
                        View
                      </MenuItem>

                      <MenuItem onClick={() => {
                        handleOpenUpdateModal()
                        handleCloseSetting()
                        }}>
                        Edit
                      </MenuItem>

                      <MenuItem onClick={() => {
                        removeCard(index, listId)
                        handleCloseSetting()
                        }}>
                        Delete
                      </MenuItem>
                    </Menu>
                  </div>
                </div>
              </div>

              {/* {card.tags ? (
                <div className="card-content_tags">
                  {card.tags.map((tag) => (
                    <span key={tag} className="card-content_tag">{tag}</span>
                  ))}
                </div>
              ) : (
                ""
              )} */}

              {/* {card.members ? (
                <div className="card-content_members">
                  {card.members.map((member) => (
                    // <span key={member} className="card-content_tag">{member}</span>
                    <Avatar className="card-content_member">{member[0]}</Avatar>
                  ))}
                </div>
              ) : (
                ""
              )} */}
              

              {/* <div className="card-content_actions">
                <IconButton aria-label="edit" onClick={handleOpenViewModal}>
                  <VisibilityIcon />
                </IconButton>
                
                <IconButton aria-label="edit" onClick={handleOpenUpdateModal}>
                  <ModeEditIcon />
                </IconButton>

                <IconButton
                  aria-label="delete"
                  onClick={() => {
                    removeCard(index, listId);
                  }}
                >
                  <DeleteOutlineIcon />
                </IconButton>
              </div> */}

              <UpdateModal
                title={card.title}
                description={card.description}
                tags={card.tags}
                members={card.members}
                color={card.color}
                imageFile={card.imageFile}
                handleCloseUpdateModal={handleCloseUpdateModal}
                handleOpenUpdateModal={handleOpenUpdateModal}
                openUpdateModal={openUpdateModal}
                setOpenUpdateModal={setOpenUpdateModal}
                index={index}
                listId={listId}
              />

              <ViewModal
                title={card.title}
                description={card.description}
                tags={card.tags}
                members={card.members}
                imageFile={card.imageFile}
                handleCloseViewModal={handleCloseViewModal}
                handleOpenViewModal={handleOpenViewModal}
                openViewModal={openViewModal}
                setOpenViewModal={setOpenViewModal}
                index={index}
                listId={listId}
              />


              <Popover
                id={idComments}
                className="comments_popover"
                open={openComments}
                anchorEl={anchorElComments}
                onClose={handleCloseComments}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <Comments card={card} index={index} listId={listId} />
              </Popover>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}
