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
import { driveData } from "../../../../../mocks/mocks";
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

import driveFolder from '../../../../../assets/images/my-services/workdrive/data/folder.svg';
import driveVideoFolder from '../../../../../assets/images/my-services/workdrive/data/video-folder.svg';
import drivePhoto from '../../../../../assets/images/my-services/workdrive/data/photo.svg';
import driveTxt from '../../../../../assets/images/my-services/workdrive/data/txt.svg';
import driveCodeFolder from '../../../../../assets/images/my-services/workdrive/data/code-folder.svg';
import driveExcel from '../../../../../assets/images/my-services/workdrive/data/excel.svg';
import backIcon from '../../../../../assets/images/my-services/workdrive/back.svg';







const WorkDrive = () => {
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

            <IconButton aria-label="add">
              <img src={plusIcon} />
            </IconButton>

            <IconButton aria-label="share">
              <img src={shareIcon} />
            </IconButton>

            <IconButton aria-label="upload" onClick={handleOpenUploadMode}>
              <img src={uploadIcon} />
            </IconButton>

            <IconButton aria-label="expand" onClick={handleOpenWorkDriveModal}>
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
                                file.name.includes('png') ? <img src={drivePhoto} /> :
                                file.name.includes('jpg') ? <img src={drivePhoto} /> :
                                file.name.includes('jpeg') ? <img src={drivePhoto} /> :
                                file.name.includes('xlsx') ? <img src={driveExcel} /> :
                                file.name.includes('zip') ? <img src={driveFolder} /> :
                                file.name.includes('mp4') ? <img src={driveVideoFolder} /> :
                                <img src={driveFolder} />
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
                    showAlerts={true}
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


      <Modal
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
      </Modal>

    </>
  );
};

export default WorkDrive;
