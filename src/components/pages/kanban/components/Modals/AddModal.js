import React, { useContext, useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import storeApi from "../../utils/storeApi";
import InputCard from "../InputCard";
import Modal from '@mui/material/Modal';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';




export default function AddModal({ 
        listId,
        type,
        handleCloseAddModal,
        handleOpenAddModal,
        openAddModal,
        setOpenAddModal,
    }) {

    const { addMoreCard, addMoreList } = useContext(storeApi);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState([]);
  
    const titleHandler = (e) => {
      setTitle(e.target.value);
    };
  
    const descriptionHandler = (e) => {
      setDescription(e.target.value);
    };

    const tagsHandler = (tag) => {
        setTags([...tags, tag])

    }

    const handleBtnConfirm = () => {
      if (type === "card") {
        addMoreCard(title, description, tags, listId);
      } else {
        addMoreList(title, description);
      }
      setTitle("");
      setDescription("");
      setOpenAddModal(false);
      setTags([]);
    };
  

  return (
    <Modal
        open={openAddModal}
        onClose={() => {
            handleCloseAddModal()
            setTitle("");
            setDescription("")
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='add-backlog-modal'
    >
        <div className='add-backlog-modal_container'>
            <FormGroup>
                <div className="add-backlog-modal_item">
                    <TextField label='Title' value={title} onChange={titleHandler} />
                </div>

                <div className="add-backlog-modal_item">
                    <TextField label='Description' value={description} multiline rows={4} onChange={descriptionHandler} />
                </div>

                <div className="add-backlog-modal_item">
                    <FormControlLabel control={<Checkbox />} label="Easy" onChange={() => tagsHandler('Easy')} />
                    <FormControlLabel control={<Checkbox />} label="Normal" onChange={() => tagsHandler('Normal')} />
                    <FormControlLabel control={<Checkbox />} label="Hard" onChange={() => tagsHandler('Hard')} />
                    <FormControlLabel control={<Checkbox />} label="Webix" onChange={() => tagsHandler('Webix')} />
                    <FormControlLabel control={<Checkbox />} label="Jet" onChange={() => tagsHandler('Jet')} />
                </div>

                <div className="add-backlog-modal_item">
                    <Button
                        className="submit-backlog-btn"
                        // onClick={() => setOpen(!open)}
                        // onClick={handleOpen}
                        onClick={handleBtnConfirm}
                    >
                        Add Backlog
                    </Button>
                </div>

            </FormGroup>
        </div>
    </Modal>

  );
}