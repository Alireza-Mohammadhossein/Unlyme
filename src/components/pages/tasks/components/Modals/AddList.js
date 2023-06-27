import React, { useContext, useState } from "react";
import storeApi from "../../utils/storeApi";
import Modal from '@mui/material/Modal';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Input from '@mui/material/Input';





export default function AddList({ 
        listId,
        type,
        handleCloseAddListModal,
        openAddListModal,
        setOpenAddListModal,
    }) {

    const { addMoreCard, addMoreList } = useContext(storeApi);
    const [title, setTitle] = useState("");
  
    const titleHandler = (e) => {
      setTitle(e.target.value);
    };
  
    const handleBtnConfirm = () => {
      if (type === "list") {
          addMoreList(title);
      } else {
      }
      setTitle("");
      setOpenAddListModal(false);
    };

  

  return (
    <Modal
        open={openAddListModal}
        onClose={() => {
            handleCloseAddListModal()
            setTitle("");
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='backlog-modal'
    >
        <div className='backlog-modal_container'>
            <FormGroup>
                <div className="backlog-modal_item">
                    <TextField label='Title' value={title} onChange={titleHandler} />
                </div>

                <div className="backlog-modal_item">
                    <Button
                        className="submit-backlog-btn"
                        // onClick={() => setOpen(!open)}
                        // onClick={handleOpen}
                        onClick={handleBtnConfirm}
                    >
                        Add List
                    </Button>
                </div>

            </FormGroup>
        </div>
    </Modal>

  );
}