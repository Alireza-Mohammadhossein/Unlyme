import React, { useContext, useState } from "react";
import storeApi from "../../utils/storeApi";
import Modal from '@mui/material/Modal';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Input from '@mui/material/Input';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { SketchPicker } from 'react-color';
import store from "../../utils/store";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import { DropzoneArea } from 'material-ui-dropzone';
import uploadIcon from '../../../../../assets/images/invoice-manager/upload-cloud.png';
import { use } from "i18next";




export default function AddModal({ 
        listId,
        type,
        handleCloseAddModal,
        openAddModal,
        setOpenAddModal,
    }) {

    const [data, setData] = useState(store);


    const { addMoreCard, addMoreList } = useContext(storeApi);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [comments, setComments] = useState([]);
    const [tags, setTags] = useState([]);
    const [members, setMembers] = useState([]);
    const [files, setFiles] = useState([]);
    const [imageFile, setImageFile] = useState(null);
    const [color, setColor] = useState('#4382C4');



    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;
  
    const titleHandler = (e) => {
      setTitle(e.target.value);
    };
  
    const descriptionHandler = (e) => {
      setDescription(e.target.value);
    };

    const tagsHandler = (tag) => {
        setTags([...tags, tag])
    }
    

    const handleFilesUpload = (e) => {
      // const file = e.target.files[0];
      // const file = e[0];
      const uploadedFile = e;
      setFiles(uploadedFile);
    };


    function findImage(files) {
      for (const file of files) {
        if (file.path.toLowerCase().endsWith('.jpg') || file.path.toLowerCase().endsWith('.png') || file.path.toLowerCase().endsWith('.jpeg')) {
          return file;
        }
      }
      return null; // Return null if no matching file is found
    }


    let img;
    const handleImageUploaded = (files) => {
      img = findImage(files)
      // setImageFile(img);

      // console.log('image file', imageFile)
    }; 

    const handleBtnConfirm = () => {
      // if (files.length === 0) {
      //   // Handle case when no files are selected
      //   return;
      // }

    
      const handleConvertedFiles = (convertedFiles) => {

        handleImageUploaded(files);
    
        if (img) {
          const imageIndex = convertedFiles.findIndex(item => item.file === img)
          
          addMoreCard(title, description, comments, tags, members, color, listId, convertedFiles, convertedFiles[imageIndex].dataURL);
          
        } else {
          addMoreCard(title, description, comments, tags, members, color, listId, convertedFiles);
        }
    
        setTitle("");
        setDescription("");
        setOpenAddModal(false);
        setTags([]);
        setMembers([]);
        setColor('#4382C4');
        setFiles([]);
        setImageFile(null);
      };
    
      const convertFilesToBase64 = (files, callback) => {
        const convertedFiles = [];
        let processedCount = 0;
    
        files.forEach((file) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            convertedFiles.push({ file: file, dataURL: reader.result });
    
            processedCount++;
            if (processedCount === files.length) {
              callback(convertedFiles);
            }
          };
          reader.readAsDataURL(file);
        });
      };

      if(files.length > 0) {
        convertFilesToBase64(files, handleConvertedFiles)
      } else {
        addMoreCard(title, description, comments, tags, members, color, listId);

        setTitle("");
        setDescription("");
        setOpenAddModal(false);
        setTags([]);
        setMembers([]);
        setColor('#4382C4');
        setFiles([]);
        setImageFile(null);
      }

      
    };

    // const convertImageToDataURL = (file, callback) => {
    //   if (file) {
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //       callback(reader.result);
    //     };
    //     reader.readAsDataURL(file);
    //   }
    // };


    const handleChangeColor = (event) => {
      setColor(event.target.value);
    };

    const CustomUploadIcon = () => (
      <img src={uploadIcon} />
    );
  

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
                    <FormControlLabel control={<Checkbox />} label="Jet" onChange={() => tagsHandler('Jet')} />
                </div>

                <div className="backlog-modal_item double">
                  <div className="half">
                    <Autocomplete
                      multiple
                      id="checkboxes-tags-demo"
                      onChange={(event, value) => {
                        setMembers(value)
                      }}
                      options={data.members}
                      disableCloseOnSelect
                      getOptionLabel={(option) => option}
                      renderOption={(props, option, { selected }) => (
                        <li {...props}>
                          <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                          />
                          {option}
                        </li>
                      )}
                      
                      renderInput={(params) => (
                        <TextField {...params} label="Assign members" />
                      )}
                    />
                  </div>

                  <div className="half">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Color</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={color}
                        label="Color"
                        onChange={handleChangeColor}
                      >
                        <MenuItem value='#4382C4'><span className="select-color-circle blue"></span>Blue</MenuItem>
                        <MenuItem value='#A23051'><span className="select-color-circle red"></span>Red</MenuItem>
                        <MenuItem value='#008000'><span className="select-color-circle green"></span>Green</MenuItem>
                        <MenuItem value='#ffa500'><span className="select-color-circle orange"></span>Orange</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>

                

                <div className="backlog-modal_item">
                  {/* <input type="file" onChange={handleImageUpload} /> */}
                  {/* <Input type="file" onChange={handleImageUpload} /> */}

                  <DropzoneArea
                      // acceptedFiles={['image/*']}
                      dropzoneClass= 'backlog-modal_item-attach'
                      dropzoneText={"Drop files here, or click to upload"}
                      onChange={handleFilesUpload}
                      // onChange={(e) => handleImageUpload(e)}
                      showPreviews={true}
                      showPreviewsInDropzone={false}
                      // showFileNames={true}
                      // showFileNamesInPreview={true}
                      useChipsForPreview={true}
                      // previewGridProps={{container: { spacing: 1, direction: 'row' }}}
                      // previewChipProps={{classes: { root: classes.previewChip } }}
                      // previewText="Selected files"
                      showAlerts={true}
                      filesLimit={5}
                      Icon= {CustomUploadIcon}
                    
                    />
                </div>



                <div className="backlog-modal_item">
                    <Button
                        className="submit-backlog-btn"
                        // onClick={() => setOpen(!open)}
                        // onClick={handleOpen}
                        onClick={() => {
                          handleBtnConfirm()
                        }}
                    >
                        Add Card
                    </Button>
                </div>

            </FormGroup>
        </div>
    </Modal>

  );
}