import React, { useContext, useState } from "react";
import storeApi from "../../utils/storeApi";
import Modal from '@mui/material/Modal';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Input from '@mui/material/Input';





export default function AddModal({ 
        listId,
        type,
        handleCloseAddModal,
        openAddModal,
        setOpenAddModal,
    }) {

    const { addMoreCard, addMoreList } = useContext(storeApi);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState([]);
    const [imageFile, setImageFile] = useState(null);
  
    const titleHandler = (e) => {
      setTitle(e.target.value);
    };
  
    const descriptionHandler = (e) => {
      setDescription(e.target.value);
    };

    const tagsHandler = (tag) => {
        setTags([...tags, tag])
    }

    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      setImageFile(file);
    };

    const handleBtnConfirm = () => {
      if (type === "card") {
        if(imageFile) {
            convertImageToDataURL(imageFile, (dataURL) => {
              addMoreCard(title, description, tags, listId, dataURL);
            });
          } else {
            addMoreCard(title, description, tags, listId);
          }
      } else {
        // addMoreList(title, description);
      }
      setTitle("");
      setDescription("");
      setOpenAddModal(false);
      setTags([]);
      setImageFile(null);
    };

    const convertImageToDataURL = (file, callback) => {
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          callback(reader.result);
        };
        reader.readAsDataURL(file);
      }
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
        className='backlog-modal'
    >
        <div className='backlog-modal_container'>
            <FormGroup>
                <div className="backlog-modal_item">
                    <TextField label='Title' value={title} onChange={titleHandler} />
                </div>

                <div className="backlog-modal_item">
                    <TextField label='Description' value={description} multiline rows={4} onChange={descriptionHandler} />
                </div>

                <div className="backlog-modal_item">
                    <FormControlLabel control={<Checkbox />} label="Easy" onChange={() => tagsHandler('Easy')} />
                    <FormControlLabel control={<Checkbox />} label="Normal" onChange={() => tagsHandler('Normal')} />
                    <FormControlLabel control={<Checkbox />} label="Hard" onChange={() => tagsHandler('Hard')} />
                    <FormControlLabel control={<Checkbox />} label="Webix" onChange={() => tagsHandler('Webix')} />
                    <FormControlLabel control={<Checkbox />} label="Jet" onChange={() => tagsHandler('Jet')} />
                </div>

                <div className="backlog-modal_item">
                  {/* <input type="file" onChange={handleImageUpload} /> */}
                  <Input type="file" onChange={handleImageUpload} />
                </div>

                <div className="backlog-modal_item">
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