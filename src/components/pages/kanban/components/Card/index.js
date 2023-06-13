import React, { useContext, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Draggable } from "react-beautiful-dnd";
import storeApi from "../../utils/storeApi";
import IconButton from "@mui/material/IconButton";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import UpdateModal from "../Modals/UpdateModal";



export default function Card({ card, index, listId }) {
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [newTitle, setNewTitle] = useState(card.title);
  const [newDescription, setNewDescription] = useState(card.description);
  const { removeCard, updateCardTitle, updateCardDescription } =
    useContext(storeApi);

  const handleOpenUpdateModal = () => setOpenUpdateModal(true);
  const handleCloseUpdateModal = () => setOpenUpdateModal(false);

  const handleTitleOnBlur = () => {
    updateCardTitle(newTitle, index, listId);
    setOpenUpdateModal(!openUpdateModal);
  };

  // const handleDescriptionOnBlur = () => {
  //   updateCardDescription(newDescription, index, listId);
  //   setOpen(!open);
  // };

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
              <div className="card-content_title">{card.title}</div>
              {/* <div className="card-content_description">{card.description}</div> */}

              {card.tags ? (
                <div className="card-content_tags">
                  {/* {card.tags} */}
                  {card.tags.map((tag) => (
                    <span key={tag} className="card-content_tag">{tag}</span>
                  ))}
                </div>
              ) : (
                ""
              )}

              <div className="card-content_actions">
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
              </div>

              <UpdateModal
                title={card.title}
                description={card.description}
                tags={card.tags}
                handleCloseUpdateModal={handleCloseUpdateModal}
                handleOpenUpdateModal={handleOpenUpdateModal}
                openUpdateModal={openUpdateModal}
                setOpenUpdateModal={setOpenUpdateModal}
                index={index}
                listId={listId}
              />

              {/*
                <button
                  onClick={() => {
                    removeCard(index, listId);
                  }}
                >
                  <DeleteOutlineIcon />
                </button> */}
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}
