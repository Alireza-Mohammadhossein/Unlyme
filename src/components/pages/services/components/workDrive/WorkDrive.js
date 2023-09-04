import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import IconButton from '@mui/material/IconButton';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { driveData } from "../../../../../mocks/mocks";
import dayjs from 'dayjs';
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from "react-redux";
import { handleOpenNotesWidgetModal, handleCloseNotesWidgetModal } from '../../../../../redux/app/appsModalSlice';
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




  
  // const openNotesWidgetModal = useSelector((state) => state.appsModal.openNotesWidgetModal);
  // const openCalendarWidgetModal = useSelector((state) => state.appsModal.openCalendarWidgetModal);
  // const openTasksWidgetModal = useSelector((state) => state.appsModal.openTasksWidgetModal);
  // const appsModal = useSelector((state) => state.appsModal.openAppsModal);

  // const handleOpenNotesModal = () => {
  //   dispatch(handleOpenNotesWidgetModal());
  // };
  // const handleCloseNotesModal = () => {
  //   dispatch(handleCloseNotesWidgetModal());
  // };

  
  // const firstPopupTab = useSelector((state) => state.popup.firstPopupTab);
  // const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);




  return (
    <>
      <div className='my-services__work-drive'>
        <div className="my-services__work-drive_header">
          <div className="my-services__work-drive_header-view">
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
              >
                <img src={copyIcon} /> Copy
              </MenuItem>

              <MenuItem>
                <img src={duplicateIcon} /> Duplicate
              </MenuItem>

              <MenuItem>
                <img src={deleteIcon} /> Delete
              </MenuItem>
              
              <MenuItem>
                <img src={propertiesIcon} /> Properties
              </MenuItem>
            </Menu>

            <IconButton aria-label="add">
              <img src={plusIcon} />
            </IconButton>

            <IconButton aria-label="share">
              <img src={shareIcon} />
            </IconButton>

            <IconButton aria-label="upload">
              <img src={uploadIcon} />
            </IconButton>

            <IconButton aria-label="expand">
              <img src={expandIcon} />
            </IconButton>

          </div>
        </div>

        <div className="my-services__work-drive_content">
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
                  <div className="my-services__work-drive_content_list-body-item">
                    <div className="my-services__work-drive_content_list-body-item-icon">
                      <img src={item.icon} />
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

            <div className="my-services__work-drive_content_list-footer">
              <p>4.7 GB available</p>
            </div>
          </div>
        </div>
      </div>


      {/* <Modal
        open={openNotesWidgetModal}
        onClose={handleCloseNotesModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="apps-modal"
        disableEnforceFocus 
      >
        <div className={`apps-modal-container ${firstPopupTab ? 'firstPopupShow' : ''} ${secondPopupTab ? 'secondPopupShow' : ''}`} >
          
          <NotesPage handleCloseNotesModal={handleCloseNotesModal} />
        </div>
      </Modal> */}

    </>
  );
};

export default WorkDrive;
