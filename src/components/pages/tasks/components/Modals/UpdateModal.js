import React, { useContext, useState } from "react";
import Modal from '@mui/material/Modal';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Input from '@mui/material/Input';
import storeApi from "../../utils/storeApi";




export default function UpdateModal({ 
        title: initialTitle,
        description: initialDescription,
        tags: initialTags,
        handleCloseUpdateModal,
        openUpdateModal,
        index,
        listId
    }) {


    const [title, setTitle] = useState(initialTitle);
    const [description, setDescription] = useState(initialDescription);
    const [tags, setTags] = useState(initialTags);
    const [imageFile, setImageFile] = useState(null);
    const { updateCard } = useContext(storeApi);



    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleTagChange = (event, tag) => {
        if (event.target.checked) {
            setTags([...tags, tag]);
        } else {
            setTags(tags.filter((t) => t !== tag));
        }
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setImageFile(file);
      };


      const handleUpdateBacklog = () => {
        if (imageFile) {
          convertImageToDataURL(imageFile, (dataURL) => {
            updateCard(title, description, tags, index, listId, dataURL);
          });
        } else {
          updateCard(title, description, tags, index, listId);
        }
        handleCloseUpdateModal();
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
        open={openUpdateModal}
        onClose={handleCloseUpdateModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='backlog-modal'
    >
        <div className='backlog-modal_container'>
        <FormGroup>
            <div className="backlog-modal_item">
            <TextField
                label='Title'
                value={title}
                onChange={handleTitleChange}
            />
            </div>

            <div className="backlog-modal_item">
            <TextField
                label='Description'
                value={description}
                onChange={handleDescriptionChange}
                multiline
                rows={4}
            />
            </div>

            <div className="backlog-modal_item">
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={tags.includes('Easy')}
                        onChange={(event) => handleTagChange(event, 'Easy')}
                    />
                    }
                    label="Easy"
                />

                <FormControlLabel
                    control={
                    <Checkbox
                        checked={tags.includes('Normal')}
                        onChange={(event) => handleTagChange(event, 'Normal')}
                    />
                    }
                    label="Normal"
                />
                
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={tags.includes('Hard')}
                        onChange={(event) => handleTagChange(event, 'Hard')}
                    />
                    }
                    label="Hard"
                />
                
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={tags.includes('Webix')}
                        onChange={(event) => handleTagChange(event, 'Webix')}
                    />
                    }
                    label="Webix"
                />
                
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={tags.includes('Jet')}
                        onChange={(event) => handleTagChange(event, 'Jet')}
                    />
                    }
                    label="Jet"
                />
                

            </div>

            <div className="backlog-modal_item">
                {/* <input type="file" onChange={handleImageUpload} /> */}
                <Input type="file" onChange={handleImageUpload} />
            </div>

            <div className="backlog-modal_item">
                <Button
                    className="submit-backlog-btn"
                    onClick={() => {
                        handleUpdateBacklog()
                        // updateCard(title, description, tags, index, listId);
                        handleCloseUpdateModal()
                    }}
                >
                    Update Backlog
                </Button>
            </div>
        </FormGroup>
        </div>
    </Modal>

  );
}