import React, { useContext, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Draggable } from "react-beautiful-dnd";

import storeApi from "../../utils/storeApi";


export default function Card({ card, index, listId }) {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(card.title);
  const [newDescription, setNewDescription] = useState(card.description);
  const { removeCard, updateCardTitle, updateCardDescription } = useContext(storeApi);

  const handleTitleOnBlur = () => {
    updateCardTitle(newTitle, index, listId);
    setOpen(!open);
  };

  const handleDescriptionOnBlur = () => {
    updateCardDescription(newDescription, index, listId);
    setOpen(!open);
  };

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <div className="card-content">
            {open ? (
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
              <div
                onClick={() => setOpen(!open)}
                className="card-title-container"
              >
                <p>{card.title}</p>
                <p>{card.description}</p>
                <button
                  onClick={() => {
                    removeCard(index, listId);
                  }}
                >
                  <DeleteOutlineIcon />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
}