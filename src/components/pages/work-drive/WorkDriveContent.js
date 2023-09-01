import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./work-drive-page.scss";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { useSelector, useDispatch } from "react-redux";
import LinearProgress from '@mui/material/LinearProgress';
import folderGrayIcon from '../../../assets/images/work-drive/folder-gray.svg';
import folderBlueIcon from '../../../assets/images/work-drive/folder-blue.svg';
import starIcon from '../../../assets/images/work-drive/star.svg';
import recentIcon from '../../../assets/images/work-drive/recent.svg';
import shareIcon from '../../../assets/images/work-drive/share.svg';
import trashIcon from '../../../assets/images/work-drive/trash.svg';
import filePlusIcon from '../../../assets/images/work-drive/file-plus.svg';
import folderPlusIcon from '../../../assets/images/work-drive/folder-plus.svg';
import fileAddIcon from '../../../assets/images/work-drive/file-add.svg';
import folderAddIcon from '../../../assets/images/work-drive/folder-add.svg';
import refreshIcon from '../../../assets/images/work-drive/refresh.svg';
import {
  ChonkyActions,
  ChonkyFileActionData,
  defineFileAction,
  FileArray,
  FileBrowser,
  FileContextMenu,
  ChonkyIconName,
  FileData,
  FileHelper,
  FileList,
  FileNavbar,
  FileToolbar,
} from 'chonky';
import CustomListHeader from "./CustomListHeader";



  
  const WorkDriveContent = ({listViewActive}) => {
  
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();
    const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);


    // add new popup
    const options = ["Edit", "Add description", "Delete"];
    const [anchorEl, setAnchorEl] = useState(null);
    const openAddNewPopup = Boolean(anchorEl);
    const handleAddNewBtn = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleCloseAddNew = () => {
      setAnchorEl(null);
    };



    // get value of progressbar
    const totalSpace = 1000;
    const usedSpace = 586;
    const freeSpace = totalSpace - usedSpace;
    const value = calculatePercentageBetweenNumbers(usedSpace, totalSpace)
    
    function calculatePercentageBetweenNumbers(usedSpace, totalSpace) {
      // Calculate the difference between the two numbers
      const difference = totalSpace - usedSpace;
    
      // Calculate the percentage increase or decrease
      const percentage = (difference / usedSpace) * 100;
    
      return percentage;
    }


    // sidebar section
      // const [openSubMenu, setOpenSubMenu] = useState(false);

      // const handleOpenSubMenu = () => {
      //   setOpenSubMenu(!openSubMenu);
      // };


    

  
    return (
      <div className="work-drive-page">


        <div className='grid-content'>
          <div className='grid-content_left'>
            <div className="work-drive-page_sidebar">
              <div className="work-drive-page_sidebar_actions">
                <div className="work-drive-page_sidebar_actions_create-event">

                  <Button
                    // variant="outlined"
                    // startIcon={<AddIcon />}
                    className="work-drive-page_sidebar_actions_create-event_btn"
                    aria-label="more"
                    id="long-button"
                    aria-controls={openAddNewPopup ? "long-menu" : undefined}
                    aria-expanded={openAddNewPopup ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleAddNewBtn}
                    // onClick={handleCreateNote}
                  >
                    {t("WORK_DRIVE_ADD.NEW")}
                  </Button>
                  <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        open={openAddNewPopup}
                        onClose={handleCloseAddNew}
                        disableScrollLock = {true}
                        // PaperProps={{
                        //   style: {
                        //     // maxHeight: ITEM_HEIGHT * 4.5,
                        //     // height: 'auto'
                        //     width: "30ch",
                        //   },
                        // }}
                        className="work-drive-page_sidebar_actions_create-event_list"
                      >

                        <MenuItem onClick={handleCloseAddNew} sx={{ padding: '10px 15px' }} >
                          <ListItemIcon>
                            <img src={filePlusIcon} />
                            {/* <NoteAddOutlinedIcon sx={{ color: '#777777' }} /> */}
                          </ListItemIcon>
                          <ListItemText primary="Add new file" />
                        </MenuItem>

                        <MenuItem onClick={handleCloseAddNew} sx={{ padding: '10px 15px' }} >
                          <ListItemIcon>
                            <img src={folderPlusIcon} />
                            {/* <CreateNewFolderOutlinedIcon sx={{ color: '#777777' }} /> */}
                          </ListItemIcon>
                          <ListItemText primary="Add new folder" />
                        </MenuItem>

                        <Divider />

                        <MenuItem onClick={handleCloseAddNew} sx={{ padding: '10px 15px' }} >
                          <ListItemIcon>
                            <img src={fileAddIcon} />

                            {/* <UploadFileOutlinedIcon sx={{ color: '#777777' }} /> */}
                          </ListItemIcon>
                          <ListItemText primary="Upload file" />
                            
                        </MenuItem>

                        <MenuItem onClick={handleCloseAddNew} sx={{ padding: '10px 15px' }} >
                          <ListItemIcon>
                            <img src={folderAddIcon} />

                            {/* <DriveFolderUploadOutlinedIcon sx={{ color: '#777777' }} /> */}
                          </ListItemIcon>
                          <ListItemText primary="Upload folder" />
                        </MenuItem>
                  </Menu>


                </div>

                <div className="work-drive-page_sidebar_actions-section">
                  <TreeView
                    aria-label="file system navigator"
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    className="work-drive-page_sidebar_actions-section_drive-tree"
                    // sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
                  >
                    <TreeItem
                      nodeId="1"
                      label={
                        <div className="work-drive-page_sidebar_actions-section_drive-tree_item">
                          <ListItemIcon>
                            {/* <FolderOutlinedIcon /> */}
                            <img src={folderGrayIcon} className="gray-icon"/>
                            <img src={folderBlueIcon} className="blue-icon"/>
                          </ListItemIcon>
                          <ListItemText primary="My Files" />
                        </div>
                      }
                    >
                      <TreeItem
                        nodeId="2"
                        label={
                          <div  className="work-drive-page_sidebar_actions-section_drive-tree_item">
                            <ListItemIcon>
                              <img src={folderGrayIcon} className="gray-icon"/>
                              <img src={folderBlueIcon} className="blue-icon"/>
                            </ListItemIcon>
                            <ListItemText primary="Documents" />
                          </div>
                        } 
                      >
                        {/* <TreeItem
                          nodeId="3"
                          label={
                            <div className="work-drive-page_sidebar_actions-section_drive-tree_item">
                              <ListItemIcon>
                                <img src={folderGrayIcon} className="gray-icon"/>
                                <img src={folderBlueIcon} className="blue-icon"/>
                              </ListItemIcon>
                              <ListItemText primary="New Documents" />
                            </div>
                          } 
                        /> */}
                      </TreeItem>

                      <TreeItem
                        nodeId="4"
                        label={
                          <div className="work-drive-page_sidebar_actions-section_drive-tree_item">
                            <ListItemIcon>
                              <img src={folderGrayIcon} className="gray-icon"/>
                              <img src={folderBlueIcon} className="blue-icon"/>
                            </ListItemIcon>
                            <ListItemText primary="Code" />
                          </div>
                        } 
                      />

                      <TreeItem
                        nodeId="5"
                        label={
                          <div className="work-drive-page_sidebar_actions-section_drive-tree_item">
                            <ListItemIcon>
                              <img src={folderGrayIcon} className="gray-icon"/>
                              <img src={folderBlueIcon} className="blue-icon"/>
                            </ListItemIcon>
                            <ListItemText primary="Photos" />
                          </div>
                        } 
                      />

                      <TreeItem
                        nodeId="6"
                        label={
                          <div className="work-drive-page_sidebar_actions-section_drive-tree_item">
                            <ListItemIcon>
                              <img src={folderGrayIcon} className="gray-icon"/>
                              <img src={folderBlueIcon} className="blue-icon"/>
                            </ListItemIcon>
                            <ListItemText primary="Musics" />
                          </div>
                        }
                      >
                        {/* <TreeItem
                          nodeId="7"
                          label={
                            <div className="work-drive-page_sidebar_actions-section_drive-tree_item">
                              <ListItemIcon>
                                <img src={folderGrayIcon} className="gray-icon"/>
                                <img src={folderBlueIcon} className="blue-icon"/>
                              </ListItemIcon>
                              <ListItemText primary="New Documents" />
                            </div>
                          } 
                        /> */}
                      </TreeItem>

                      <TreeItem
                        nodeId="8"
                        label={
                          <div className="work-drive-page_sidebar_actions-section_drive-tree_item">
                            <ListItemIcon>
                              <img src={folderGrayIcon} className="gray-icon"/>
                              <img src={folderBlueIcon} className="blue-icon"/>
                            </ListItemIcon>
                            <ListItemText primary="Videos" />
                          </div>
                        }
                      >
                        {/* <TreeItem
                          nodeId="9"
                          label={
                            <div className="work-drive-page_sidebar_actions-section_drive-tree_item">
                              <ListItemIcon>
                                <img src={folderGrayIcon} className="gray-icon"/>
                                <img src={folderBlueIcon} className="blue-icon"/>
                              </ListItemIcon>
                              <ListItemText primary="New Videos" />
                            </div>
                          } 
                        /> */}
                      </TreeItem>

                    </TreeItem>
                  </TreeView>

                  <List
                    sx={{ width: '100%'}}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    className="work-drive-page_sidebar_actions-section_drive-actions"
                  >
                    <ListItemButton className="work-drive-page_sidebar_actions-section_drive-actions_item">
                      <ListItemIcon>
                        <img src={starIcon} />
                        {/* <StarBorderOutlinedIcon /> */}
                      </ListItemIcon>
                      <ListItemText primary="Favorite" />
                    </ListItemButton>

                    <ListItemButton className="work-drive-page_sidebar_actions-section_drive-actions_item">
                      <ListItemIcon>
                        <img src={recentIcon} />
                        {/* <AccessTimeOutlinedIcon /> */}
                      </ListItemIcon>
                      <ListItemText primary="Recent" />
                    </ListItemButton>

                    <ListItemButton className="work-drive-page_sidebar_actions-section_drive-actions_item">
                      <ListItemIcon>
                        <img src={shareIcon} />
                        {/* <ShareOutlinedIcon /> */}
                      </ListItemIcon>
                      <ListItemText primary="Shared" />
                    </ListItemButton>

                    <ListItemButton className="work-drive-page_sidebar_actions-section_drive-actions_item">
                      <ListItemIcon>
                        <img src={trashIcon} />
                        {/* <DeleteOutlineOutlinedIcon /> */}
                      </ListItemIcon>
                      <ListItemText primary="Trash" />
                    </ListItemButton>
                  </List>
                </div>
              </div>

              <div className="work-drive-page_sidebar_space">
                <LinearProgress  className="work-drive-page_sidebar_space-progressbar" variant="determinate" value={value} />

                <div className="work-drive-page_sidebar_space-text">
                  <b>{freeSpace} Mb</b> / {totalSpace} Mb
                </div>
              </div>
            </div>
          </div>

          <div className='grid-content_right'>
            <div className="work-drive-page_main">
              <div className="work-drive-page_main_list">
                {/* <FullFileBrowser files={files} folderChain={folderChain} /> */}
                {/* <ReadOnlyVFSBrowser instanceId={storyName} /> */}
                <div className="work-drive-page_main_list-filters">
                  {/* <FileNavbar /> */}
                  <div className="work-drive-page_main_list-filters-refresh">
                    <img src={refreshIcon} />

                    <span>My Files</span>
                  </div>
                  <FileToolbar />
                </div>
                {
                  listViewActive ? <CustomListHeader /> : ''
                }
                  <FileList />
                  <FileContextMenu />
              </div>
            </div>
          </div>
        </div>


      </div>
    );
  }

  export default WorkDriveContent;