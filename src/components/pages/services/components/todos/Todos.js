import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Modal from '@mui/material/Modal';
import { driveData, sampleUsers } from "../../../../../mocks/mocks";
import WorkDrivePage from "../../../work-drive/WorkDrivePage";
import dayjs from 'dayjs';
import { useSelector, useDispatch } from "react-redux";
import { handleOpenWorkDriveWidgetModal, handleCloseWorkDriveWidgetModal } from '../../../../../redux/app/appsModalSlice';
import Avatar from '@mui/material/Avatar';
import CheckIcon from '@mui/icons-material/Check';
import plusIcon from '../../../../../assets/images/my-services/plus.svg';
import moreIcon from '../../../../../assets/images/my-services/workdrive/more.svg';
import shareIcon from '../../../../../assets/images/my-services//workdrive/share.svg';
import uploadIcon from '../../../../../assets/images/my-services/workdrive/upload.svg';
import expandIcon from '../../../../../assets/images/my-services/expand.svg';
import listActiveIcon from '../../../../../assets/images/my-services/notes/list-active.svg';
import listNotIcon from '../../../../../assets/images/my-services/notes/list-not.svg';
import gridActiveIcon from '../../../../../assets/images/my-services/notes/grid-active.svg';
import gridNotIcon from '../../../../../assets/images/my-services/notes/grid-not.svg';
import copyIcon from '../../../../../assets/images/my-services/workdrive/copy.svg';
import duplicateIcon from '../../../../../assets/images/my-services/workdrive/duplicate.svg';
import deleteIcon from '../../../../../assets/images/my-services/workdrive/trash.svg';
import propertiesIcon from '../../../../../assets/images/my-services/workdrive/properties.svg';
import uploadDriveIcon from '../../../../../assets/images/my-services/workdrive/upload-cloud.svg';
import { DropzoneArea } from 'material-ui-dropzone';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import backIcon from '../../../../../assets/images/my-services/workdrive/back.svg';
import fileAudio from '../../../../../assets/images/my-services/workdrive/types/audio.png';
import fileCsv from '../../../../../assets/images/my-services/workdrive/types/csv.png';
import fileDoc from '../../../../../assets/images/my-services/workdrive/types/doc.png';
import fileDocx from '../../../../../assets/images/my-services/workdrive/types/docx.png';
import fileExcel from '../../../../../assets/images/my-services/workdrive/types/excel.png';
import fileGif from '../../../../../assets/images/my-services/workdrive/types/gif.png';
import fileJpg from '../../../../../assets/images/my-services/workdrive/types/jpg.png';
import fileMkv from '../../../../../assets/images/my-services/workdrive/types/mkv.png';
import fileMpu from '../../../../../assets/images/my-services/workdrive/types/mpu.png';
import filePdf from '../../../../../assets/images/my-services/workdrive/types/pdf.png';
import filePng from '../../../../../assets/images/my-services/workdrive/types/png.png';
import filePpt from '../../../../../assets/images/my-services/workdrive/types/ppt.png';
import fileRtf from '../../../../../assets/images/my-services/workdrive/types/rtf.png';
import fileSheets from '../../../../../assets/images/my-services/workdrive/types/sheets.png';
import fileTtf from '../../../../../assets/images/my-services/workdrive/types/ttf.png';
import fileTxt from '../../../../../assets/images/my-services/workdrive/types/txt.png';
import fileWav from '../../../../../assets/images/my-services/workdrive/types/wav.png';
import fileWebp from '../../../../../assets/images/my-services/workdrive/types/webp.png';
import fileWord from '../../../../../assets/images/my-services/workdrive/types/word.png';
import fileXlsx from '../../../../../assets/images/my-services/workdrive/types/xlsx.png';
import fileXml from '../../../../../assets/images/my-services/workdrive/types/xml.png';
import fileZip from '../../../../../assets/images/my-services/workdrive/types/zip.png';
import arrowDownIcon from '../../../../../assets/images/my-services/workdrive/arrow-down.svg';
import checkIcon from '../../../../../assets/images/my-services/workdrive/check.svg';
import removeIcon from '../../../../../assets/images/my-services/workdrive/remove.svg';
import copyLinkIcon from '../../../../../assets/images/my-services/workdrive/copy-link.svg';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';




const Todos = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [viewMode, setViewMode] = useState('list');

  const handleViewMode = (event, newViewMode) => {
    if (newViewMode !== null) {
      setViewMode(newViewMode);
    }
  };


  // setting modals 
  const [anchorElMore, setAnchorElMore] = useState(null);
  const open = Boolean(anchorElMore);
  const handleOpenMore = (event) => {
    setAnchorElMore(event.currentTarget);
  };
  const handleCloseMore = () => {
    setAnchorElMore(null);
  };




  
  const openWorkDriveWidgetModal = useSelector((state) => state.appsModal.openWorkDriveWidgetModal);
  const openCalendarWidgetModal = useSelector((state) => state.appsModal.openCalendarWidgetModal);
  const openTasksWidgetModal = useSelector((state) => state.appsModal.openTasksWidgetModal);
  const openNotesWidgetModal = useSelector((state) => state.appsModal.openNotesWidgetModal);
  const appsModal = useSelector((state) => state.appsModal.openAppsModal);

  const firstPopupTab = useSelector((state) => state.popup.firstPopupTab);
  const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);

  const handleOpenWorkDriveModal = () => {
    dispatch(handleOpenWorkDriveWidgetModal());
  };
  const handleCloseWorkDriveModal = () => {
    dispatch(handleCloseWorkDriveWidgetModal());
  };


  
  // start selected rows
  const [selectedRows, setSelectedRows] = useState([]);

  const handleselectedRows = (item) => {
    setSelectedRows(prevSelectedItems => {
      const itemIndex = prevSelectedItems.findIndex(selectedItem => selectedItem.id === item.id);
      if (itemIndex !== -1) {
        const updatedSelectedRows = [...prevSelectedItems];
        updatedSelectedRows.splice(itemIndex, 1);

        return updatedSelectedRows;
      } else {
        return [...prevSelectedItems, item];
      }
    });
  };
  // end selected rows


  // start upload mode
  const [uploadMode, setUploadMode] = useState(false)

  const handleOpenUploadMode = () => {
    setUploadMode(true)
  }

  const handleCloseUploadMode = () => {
    setUploadMode(false)
  }

  const useStyles = makeStyles(theme => createStyles({
    previewChip: {
      minWidth: 160,
      maxWidth: 210
    },
  }));

  const classes = useStyles();

  const CustomUploadIcon = () => (
    <img src={uploadDriveIcon} />
  );

  const [uploadedFiles, setUploadedFiles] = useState([])

  const handleUploadedFiles = (files) => {
    console.log('files', files)
    setUploadedFiles(files)
    console.log('uploadedFiles',uploadedFiles)
  }
  
  // end upload mode

  

  const handleOpenWorkDrivePopup = () => {
    const workDriveButton = document.querySelector('[aria-label="Work drive"]')  
    workDriveButton.click();

    // const createEventButton = document.querySelector('[aria-label="calendar create event"]')
    // createEventButton.click();

    // const createEventButtonInterval = setInterval(() => {
    //   const createEventButton = document.querySelector('[aria-label="calendar create event"]')

    //   if (createEventButton) {
    //     createEventButton.click();

    //     clearInterval(createEventButtonInterval)
    //   }
    // },500)
  }


// share popup
  const [anchorShareEl, setAnchorShareEl] = useState(null);
  const sharePopup = Boolean(anchorShareEl);
  const handleOpenSharePopup = (event) => {
    setAnchorShareEl(event.currentTarget);
  };
  const handleCloseSharePopup = () => {
    setAnchorShareEl(null);
  };



  const [accessType, setAccessType] = useState('view')
  // access popup
  const [anchorAccessEl, setAnchorAccessEl] = useState(null);
  const openAccess = Boolean(anchorAccessEl);
  const handleOpenAccessPopup = (event) => {
    setAnchorAccessEl(event.currentTarget);
  };
  const handleCloseAccessPopup = () => {
    setAnchorAccessEl(null);
  };


  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
  ]

  
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [users, setUsers] = useState(sampleUsers)



  return (
    <>
      <div className={`my-services__work-drive ${openNotesWidgetModal || appsModal || openCalendarWidgetModal || openTasksWidgetModal || openWorkDriveWidgetModal ? 'back-transparent' : ''}`}>
        <div className="my-services__work-drive_header">
          <div className="my-services__work-drive_header-view">
            {
              uploadMode ? 
                <Button className="my-services__work-drive_header-view-back" onClick={handleCloseUploadMode}>
                  <img src={backIcon} /> Back
                </Button>
              : 
                ''
            }

            <ToggleButtonGroup
              value={viewMode}
              exclusive
              onChange={handleViewMode}
              aria-label="text alignment"
            >
              <ToggleButton value="list" aria-label="list mode">
                <img src={viewMode === 'list' ? listActiveIcon : listNotIcon} />
              </ToggleButton>
              <ToggleButton value="grid" aria-label="grid mode">
                <img src={viewMode === 'grid' ? gridActiveIcon : gridNotIcon} />
              </ToggleButton>
            </ToggleButtonGroup>
          </div>

          <div className="my-services__work-drive_header-more">
            {
              selectedRows.length > 0 ?
                <>
                  <IconButton
                    aria-label="setting"
                    onClick={handleOpenMore}
                  >
                    <img src={moreIcon} />
                  </IconButton>

                  <Menu
                    anchorEl={anchorElMore}
                    open={open}
                    onClose={handleCloseMore}
                    disableScrollLock={true}
                    className="my-services__popup work-drive"
                  >
                    <MenuItem 
                      sx={{minWidth: '130px'}}
                      onClick={handleCloseMore}
                    >
                      <img src={copyIcon} /> Copy
                    </MenuItem>

                    <MenuItem
                      onClick={handleCloseMore}
                    >
                      <img src={duplicateIcon} /> Duplicate
                    </MenuItem>

                    <MenuItem
                      onClick={handleCloseMore}
                    >
                      <img src={deleteIcon} /> Delete
                    </MenuItem>
                    
                    <MenuItem
                      onClick={handleCloseMore}
                    >
                      <img src={propertiesIcon} /> Properties
                    </MenuItem>
                  </Menu>              
                </>
              :
                ''
            }

            <IconButton aria-label="add" onClick={handleOpenWorkDrivePopup}>
              <img src={plusIcon} />
            </IconButton>

            <IconButton aria-label="upload" onClick={handleOpenUploadMode}>
              <img src={uploadIcon} />
            </IconButton>

            <IconButton
              aria-label="share"
              aria-controls={open ? "share-popup" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleOpenSharePopup}
            >
              <img src={shareIcon} />
            </IconButton>

            <Menu
              id="share-popup"
              // MenuListProps={{
              //   "aria-labelledby": "long-button",
              // }}
              anchorEl={anchorShareEl}
              open={sharePopup}
              onClose={handleCloseSharePopup}
              disableScrollLock = {true}
              className="my-services__work-drive_header-more_share-popup"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <div
                // selected={option === "Pyxis"}
                // onClick={handleCloseSharePopup}
                className="my-services__work-drive_header-more_share-popup-container"
              >
                <div className="my-services__work-drive_header-more_share-popup-name">File Name</div>

                <div className="my-services__work-drive_header-more_share-popup-access">
                  <p>Anyone with this link:</p>

                  <Button
                    // aria-label="share"
                    // aria-controls={open ? "share-popup" : undefined}
                    // aria-expanded={open ? "true" : undefined}
                    // aria-haspopup="true"
                    onClick={handleOpenAccessPopup}
                  >
                    {accessType === 'view' ? 'Can view' : 'Can edit'}

                    <img src={arrowDownIcon} />
                  </Button>

                  <Menu
                    id="access-popup"
                    anchorEl={anchorAccessEl}
                    open={openAccess}
                    onClose={handleCloseAccessPopup}
                    disableScrollLock = {true}
                    className="my-services__work-drive_header-more_share-popup-access-popup"
                  >
                    <MenuItem
                      className={accessType === 'view' ? 'selected' : ''}
                      // selected={accessType === 'view'}
                      onClick={() => {
                        setAccessType('view')
                        handleCloseAccessPopup()
                      }}
                    >
                      <span>
                        {
                          accessType === 'view' ? <img src={checkIcon} /> : '' 
                        }
                      </span>

                      <span>
                        Can view
                      </span>
                      
                    </MenuItem>
                    
                    <MenuItem
                      className={accessType === 'edit' ? 'selected' : ''}
                      // selected={accessType === 'edit'}
                      onClick={() => {
                        setAccessType('edit')
                        handleCloseAccessPopup()
                      }}
                    >
                      <span>
                        {
                          accessType === 'edit' ? <img src={checkIcon} /> : '' 
                        }
                      </span>

                      <span>
                        Can Edit
                      </span>
                      
                    </MenuItem>
                  </Menu>
                </div>

                
                <div className="my-services__work-drive_header-more_share-popup-search">
                  <Autocomplete
                    multiple
                    className="my-services__work-drive_header-more_share-popup-search-list"
                    id="checkboxes-users-demo"
                    options={users}
                    disableCloseOnSelect
                    filterSelectedOptions
                    getOptionLabel={(option) => option.name}
                    // getOptionLabel={(option) => (
                    //   <li className="selected-item">
                    //     <div className="selected-item-icon">
                    //       <img src={option.image} />
                    //     </div>

                    //     <div className="selected-item-info">
                    //       {option.name}
                    //     </div>
                    //   </li>
                    // )}

                    // ChipProps={{
                    //   deleteIcon: <img src={removeIcon} alt="Remove" />
                    // }}

                    renderTags={(value, getTagProps) =>
                      value.map((option, index) => (
                        <li key={index} className="selected-item">
                          <div className="selected-item-icon">
                            <img src={option.image} />
                          </div>

                          <div className="selected-item-info">
                            {option.name}
                          </div>

                          <div 
                            className="selected-item-delete"
                            onClick={() => {
                              const updatedUsers = [...selectedUsers];
                              updatedUsers.splice(index, 1); // Remove the selected chip
                              setSelectedUsers(updatedUsers);
                            }}
                          >
                            <img src={removeIcon} alt="Remove" />
                          </div>
                        </li>
                      ))
                    }

                    renderOption={(props, option, { selected }) => (
                      <li {...props} className="my-services__work-drive_header-more_share-popup-search-item">
                        <div className="my-services__work-drive_header-more_share-popup-search-item-icon">
                          <img src={option.image} />
                        </div>

                        <div className="my-services__work-drive_header-more_share-popup-search-item-info">
                          <p className="my-services__work-drive_header-more_share-popup-search-item-info-name">{option.name}</p>
                          <p className="my-services__work-drive_header-more_share-popup-search-item-info-email">{option.email}</p>
                        </div>
                      </li>
                    )}

                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Add an email or name"
                        // placeholder="Type..." 
                        InputLabelProps={{shrink: false}}
                      />
                    )}

                    onChange={(event, newValue) => {
                      setSelectedUsers(newValue);
                      // setUsers(users.filter((user) => user.name === newValue.name));
                    }}
                    
                    value={selectedUsers}
                    // blurOnSelect={true}

                  />
                </div>

                
                <div className="my-services__work-drive_header-more_share-popup-footer">
                  <div className="my-services__work-drive_header-more_share-popup-footer-copy">
                    <a className="my-services__work-drive_header-more_share-popup-footer-copy-link">
                      <img src={copyLinkIcon} />
                      Copy link
                    </a>
                  </div>

                  <div className="my-services__work-drive_header-more_share-popup-footer-share">
                    <Button>
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </Menu>



            <IconButton aria-label="expand" onClick={handleOpenWorkDrivePopup}>
              <img src={expandIcon} />
            </IconButton>

          </div>
        </div>


        <div className="my-services__work-drive_content">
          {
            uploadMode ?
              <div className={`my-services__work-drive_content_upload-mode ${viewMode === 'grid' ? 'grid' : ''}`} style={{paddingTop: uploadedFiles.length === 0 ? '10px' : '0'}}>
                {
                  uploadedFiles.length > 0 ?
                    <div className="my-services__work-drive_content_upload-mode_files">

                      <div className="my-services__work-drive_content_upload-mode_files-header">
                        <div className="my-services__work-drive_content_upload-mode_files-header-icon"></div>

                        <div className="my-services__work-drive_content_upload-mode_files-header-name">Name</div>
                      </div>

                      <div className="my-services__work-drive_content_upload-mode_files-list">
                        {uploadedFiles.map((file) => (
                          <div className="my-services__work-drive_content_upload-mode_files-list-item">
                            <div className="my-services__work-drive_content_upload-mode_files-list-item-icon">
                              {
                                file.name.includes('mp3') ? <img src={fileAudio} /> :
                                file.name.includes('csv') ? <img src={fileCsv} /> :
                                file.name.includes('doc') ? <img src={fileDoc} /> :
                                file.name.includes('docx') ? <img src={fileDocx} /> :
                                file.name.includes('excel') ? <img src={fileExcel} /> :
                                file.name.includes('gif') ? <img src={fileGif} /> :
                                file.name.includes('jpg') ? <img src={fileJpg} /> :
                                file.name.includes('jpeg') ? <img src={fileJpg} /> :
                                file.name.includes('mkv') ? <img src={fileMkv} /> :
                                file.name.includes('mpu') ? <img src={fileMpu} /> :
                                file.name.includes('pdf') ? <img src={filePdf} /> :
                                file.name.includes('png') ? <img src={filePng} /> :
                                file.name.includes('ppt') ? <img src={filePpt} /> :
                                file.name.includes('rtf') ? <img src={fileRtf} /> :
                                file.name.includes('sheets') ? <img src={fileSheets} /> :
                                file.name.includes('ttf') ? <img src={fileTtf} /> :
                                file.name.includes('txt') ? <img src={fileTxt} /> :
                                file.name.includes('wav') ? <img src={fileWav} /> :
                                file.name.includes('webp') ? <img src={fileWebp} /> :
                                file.name.includes('word') ? <img src={fileWord} /> :
                                file.name.includes('xlsx') ? <img src={fileXlsx} /> :
                                file.name.includes('xml') ? <img src={fileXml} /> :
                                file.name.includes('zip') ? <img src={fileZip} /> :
                                <img src={fileTxt} />
                              }
                            </div>
                            
                            <div className="my-services__work-drive_content_upload-mode_files-list-item-name">
                              {file.name}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  : 
                   ''
                }

                <div className="my-services__work-drive_content_upload-mode_input">
                  <DropzoneArea
                    // acceptedFiles={['image/*']}
                    dropzoneClass= {`my-services__work-drive_content_upload-mode_input-attach ${uploadedFiles.length > 1 ? 'selected' : ''}`}
                    dropzoneText={
                      <div>
                        <p className="title">Drop files here, or <span className='blue'>Browse</span></p>
                        <p className="subtitle">Maximum file size 50MB</p>
                      </div>
                    }
                    onChange={(files) => {
                      // console.log('files', files)
                      handleUploadedFiles(files)
                      // console.log('uploadedFiles', uploadedFiles)
                    }}
                    showPreviews={false}
                    showPreviewsInDropzone={false}
                    useChipsForPreview
                    previewGridProps={{container: { spacing: 1, direction: 'row' }}}
                    previewChipProps={{classes: { root: classes.previewChip } }}
                    previewText="Selected files"
                    showAlerts={false}
                    filesLimit={8}
                    maxFileSize= '50000000'
                    Icon= {CustomUploadIcon}
                  />
                </div>
              </div>
             :
              <div className={`my-services__work-drive_content_list ${viewMode === 'grid' ? 'grid' : ''}`}>
                 <div className="my-services__work-drive_content_list-head">
                   <div className="my-services__work-drive_content_list-head-icon">

                   </div>
                   
                   <div className="my-services__work-drive_content_list-head-name">
                     <p>Name</p>
                   </div>
                   
                   <div className="my-services__work-drive_content_list-head-date">
                     <p>Date modified</p>
                   </div>
                   
                   <div className="my-services__work-drive_content_list-head-size">
                     <p>Size</p>
                   </div>

                   <div className="my-services__work-drive_content_list-head-type">
                     <p>Type</p>
                   </div>
                 </div>

                 <div className="my-services__work-drive_content_list-body">
                   {
                     driveData.map((item) => (
                       <div
                         key={item.id}
                         className={`my-services__work-drive_content_list-body-item ${selectedRows.some(selectedItem => selectedItem.id === item.id) ? 'selected' : ''}`}
                         onClick={(e) => {
                           e.stopPropagation();
                           handleselectedRows(item)
                         }}
                         >
                         <div className="my-services__work-drive_content_list-body-item-icon">
                           <img src={item.icon} alt={item.name} />
                         </div>
         
                         <div className="my-services__work-drive_content_list-body-item-name">
                           <p>{item.name}</p>
                         </div>
         
                         <div className="my-services__work-drive_content_list-body-item-date">
                           <p>{item.date}</p>
                         </div>
         
                         <div className="my-services__work-drive_content_list-body-item-size">
                           <p>{item.size}</p>
                         </div>
         
                         <div className="my-services__work-drive_content_list-body-item-type">
                           <p>{item.type}</p>
                         </div>
                       </div>
                     ))
                   }

                 </div>
              </div>
          }
        </div>

        <div className="my-services__work-drive_footer">
          <p>4.7 GB available</p>
        </div>

      </div>


      {/* <Modal
        open={openWorkDriveWidgetModal}
        onClose={handleCloseWorkDriveModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="apps-modal"
        disableEnforceFocus 
      >
        <div className={`apps-modal-container ${firstPopupTab ? 'firstPopupShow' : ''} ${secondPopupTab ? 'secondPopupShow' : ''}`} >
          
          <WorkDrivePage handleCloseWorkDriveModal={handleCloseWorkDriveModal} />
        </div>
      </Modal> */}

    </>
  );
};

export default Todos;
