import React, { useContext, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Draggable } from "react-beautiful-dnd";
import storeApi from "../../utils/storeApi";
import IconButton from "@mui/material/IconButton";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import ViewModal from "../Modals/ViewModal";
import UpdateModal from "../Modals/UpdateModal";
import VisibilityIcon from '@mui/icons-material/Visibility';
import Avatar from '@mui/material/Avatar';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Popover from '@mui/material/Popover';
import TextField from '@mui/material/TextField';





export default function Card({ card, index, listId }) {
  const [openViewModal, setOpenViewModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [newTitle, setNewTitle] = useState(card.title);
  const { removeCard, updateCardTitle } = useContext(storeApi);

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
  const ITEM_HEIGHT = 48;
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


  

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <div className="card-content">
            {/* {openModal ? (
              <>
                <div>
                  <TextareaAutosize
                    type="text"
                    className="input-card-title"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    onBlur={handleTitleOnBlur}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleTitleOnBlur();
                      }
                      return;
                    }}
                    // autoFocus
                  />
                </div>
                <div>
                  <TextareaAutosize
                    type="text"
                    className="input-card-title"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    onBlur={handleDescriptionOnBlur}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleDescriptionOnBlur();
                      }
                      return;
                    }}
                    // autoFocus
                  />
                </div>
              </>
            ) : (

            )} */}

            <div
              // onClick={() => setOpenModal(!openModal)}
              className="card-content-container"
            >
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
                    <IconButton aria-label="files">
                      <InsertDriveFileOutlinedIcon />
                    </IconButton>
                    1
                  </div>
                  <div className="card-content_details-buttons-comments">
                    <IconButton aria-label="comments" aria-describedby={idComments} onClick={handleOpenComments}>
                      <ChatBubbleOutlineOutlinedIcon />
                    </IconButton>
                    5
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
                      <MenuItem onClick={() => {
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
                <div className="comments_popover-container">
                   <div className="comments_popover-list">
                    <div className="comments_popover-item">
                      <div className="comments_popover-item-avatar">
                        <Avatar>A</Avatar>
                      </div>

                      <div className="comments_popover-item-comment">
                        <div className="comments_popover-item-comment-info">
                          <div className="comments_popover-item-comment-info-name">
                            Elisa Bennet
                          </div>  

                          <div className="comments_popover-item-comment-info-date">
                            09 Mar, 10:01
                          </div>
                        </div>

                        <div className="comments_popover-item-comment-text">
                          Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what.
                        </div>
                      </div>
                    </div>

                    <div className="comments_popover-item">
                      <div className="comments_popover-item-avatar">
                        <Avatar>C</Avatar>
                      </div>

                      <div className="comments_popover-item-comment">
                        <div className="comments_popover-item-comment-info">
                          <div className="comments_popover-item-comment-info-name">
                            Chris Terson
                          </div>  

                          <div className="comments_popover-item-comment-info-date">
                            09 Mar, 10:15
                          </div>
                        </div>

                        <div className="comments_popover-item-comment-text">
                          Hi, let's just do what we are supposed to do to get the result
                        </div>
                      </div>
                    </div>
                   </div>

                   <div className="comments_popover-footer">
                     <TextField
                      className="comments_popover-footer-input"
                      
                      multiline
                      maxRows={4}
                    />
                   </div>
                </div>
              </Popover>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}
