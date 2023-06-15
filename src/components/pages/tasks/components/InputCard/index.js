import React, { useContext, useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import storeApi from "../../utils/storeApi";



export default function InputCard({ setOpen, listId, type }) {
  const { addMoreCard, addMoreList } = useContext(storeApi);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const handleBtnConfirm = () => {
    if (type === "card") {
      addMoreCard(title, description, listId);
    } else {
      addMoreList(title, description);
    }
    setOpen(false);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="input-card">
      <div className="input-card-container">
        <textarea
          onChange={titleHandler}
          value={title}
          className="input-text"
          placeholder={
            type === "card"
              ? "Enter a title of this card..."
              : "Enter list title"
          }
          autoFocus
        />
        <textarea
          onChange={descriptionHandler}
          value={description}
          className="input-text"
          placeholder={
            type === "card"
              ? "Enter a title of this card..."
              : "Enter list title"
          }
          autoFocus
        />
      </div>
      <div className="confirm">
        <button className="button-confirm" onClick={handleBtnConfirm}>
          {type === "card" ? "Add Card" : "Add List"}
        </button>
        <button
          className="button-cancel"
          onClick={() => {
            setTitle("");
            setDescription("")
            setOpen(false);
          }}
        >
          <DeleteOutlineIcon />
        </button>
      </div>
    </div>
  );
}