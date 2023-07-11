import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import "./work-drive-page.scss";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import { useSelector, useDispatch } from "react-redux";
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



  
  const WorkDriveContent = () => {
  
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


    // sidebar section
      // const [openSubMenu, setOpenSubMenu] = useState(false);

      // const handleOpenSubMenu = () => {
      //   setOpenSubMenu(!openSubMenu);
      // };



    

    

  
    return (
      <div className="work-drive-page">
        <Grid container spacing={3}>

          <Grid
            item
            xl={2}
            lg={3}
            md={3}
            xs={12}
            sx={{
              display: {
                lg: secondPopupTab ? "none" : "block",
                md: secondPopupTab ? "none" : "block",
              },
            }}
          >
            <div className="work-drive-page_sidebar">
              <div className="work-drive-page_sidebar_create-event">

                <Button
                  // variant="outlined"
                  startIcon={<AddIcon />}
                  className="work-drive-page_sidebar_create-event_btn"
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
                      className="work-drive-page_sidebar_create-event_list"
                    >

                      <MenuItem onClick={handleCloseAddNew} sx={{ padding: '10px 15px' }} >
                                <ListItemIcon>
                                  <NoteAddOutlinedIcon sx={{ color: '#777777' }} />
                                </ListItemIcon>
                                <ListItemText primary="Add new file" />
                      </MenuItem>

                      <MenuItem onClick={handleCloseAddNew} sx={{ padding: '10px 15px' }} >
                                <ListItemIcon>
                                  <CreateNewFolderOutlinedIcon sx={{ color: '#777777' }} />
                                </ListItemIcon>
                                <ListItemText primary="Add new folder" />
                      </MenuItem>

                      <Divider />

                      <MenuItem onClick={handleCloseAddNew} sx={{ padding: '10px 15px' }} >
                                <ListItemIcon>
                                  <UploadFileOutlinedIcon sx={{ color: '#777777' }} />
                                </ListItemIcon>
                                <ListItemText primary="Upload file" />
                          
                      </MenuItem>

                      <MenuItem onClick={handleCloseAddNew} sx={{ padding: '10px 15px' }} >
                                <ListItemIcon>
                                  <DriveFolderUploadOutlinedIcon sx={{ color: '#777777' }} />
                                </ListItemIcon>
                                <ListItemText primary="Upload folder" />
                      </MenuItem>
                </Menu>


              </div>
  
              <div className="work-drive-page_sidebar-section">
                <TreeView
                  aria-label="file system navigator"
                  defaultCollapseIcon={<ExpandMoreIcon />}
                  defaultExpandIcon={<ChevronRightIcon />}
                  className="work-drive-page_sidebar-section_drive-tree"
                  // sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
                >
                  <TreeItem
                    nodeId="1"
                    label={
                      <div className="work-drive-page_sidebar-section_drive-tree_item">
                        <ListItemIcon>
                          <FolderOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="My files" />
                      </div>
                    }
                  >
                    <TreeItem
                      nodeId="2"
                      label={
                        <div  className="work-drive-page_sidebar-section_drive-tree_item">
                          <ListItemIcon>
                            <FolderOutlinedIcon />
                          </ListItemIcon>
                          <ListItemText primary="Documents" />
                        </div>
                      } 
                    >
                      <TreeItem
                        nodeId="3"
                        label={
                          <div className="work-drive-page_sidebar-section_drive-tree_item">
                            <ListItemIcon>
                              <FolderOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="New Documents" />
                          </div>
                        } 
                      />
                    </TreeItem>

                    <TreeItem
                      nodeId="4"
                      label={
                        <div className="work-drive-page_sidebar-section_drive-tree_item">
                          <ListItemIcon>
                            <FolderOutlinedIcon />
                          </ListItemIcon>
                          <ListItemText primary="Code" />
                        </div>
                      } 
                    />

                    <TreeItem
                      nodeId="5"
                      label={
                        <div className="work-drive-page_sidebar-section_drive-tree_item">
                          <ListItemIcon>
                            <FolderOutlinedIcon />
                          </ListItemIcon>
                          <ListItemText primary="Photos" />
                        </div>
                      } 
                    />

                    <TreeItem
                      nodeId="6"
                      label={
                        <div className="work-drive-page_sidebar-section_drive-tree_item">
                          <ListItemIcon>
                            <FolderOutlinedIcon />
                          </ListItemIcon>
                          <ListItemText primary="Musics" />
                        </div>
                      }
                    >
                      <TreeItem
                        nodeId="7"
                        label={
                          <div className="work-drive-page_sidebar-section_drive-tree_item">
                            <ListItemIcon>
                              <FolderOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="New Documents" />
                          </div>
                        } 
                      />
                    </TreeItem>

                    <TreeItem
                      nodeId="8"
                      label={
                        <div className="work-drive-page_sidebar-section_drive-tree_item">
                          <ListItemIcon>
                            <FolderOutlinedIcon />
                          </ListItemIcon>
                          <ListItemText primary="Videos" />
                        </div>
                      }
                    >
                      <TreeItem
                        nodeId="9"
                        label={
                          <div className="work-drive-page_sidebar-section_drive-tree_item">
                            <ListItemIcon>
                              <FolderOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="New Videos" />
                          </div>
                        } 
                      />
                    </TreeItem>

                  </TreeItem>
                </TreeView>

                <List
                  sx={{ width: '100%'}}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  className="work-drive-page_sidebar-section_drive-actions"
                >
                  <ListItemButton className="work-drive-page_sidebar-section_drive-actions_item">
                    <ListItemIcon>
                      <StarBorderOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Favorite" />
                  </ListItemButton>

                  <ListItemButton className="work-drive-page_sidebar-section_drive-actions_item">
                    <ListItemIcon>
                      <AccessTimeOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Recent" />
                  </ListItemButton>

                  <ListItemButton className="work-drive-page_sidebar-section_drive-actions_item">
                    <ListItemIcon>
                      <ShareOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Shared" />
                  </ListItemButton>

                  <ListItemButton className="work-drive-page_sidebar-section_drive-actions_item">
                    <ListItemIcon>
                      <DeleteOutlineOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Trash" />
                  </ListItemButton>
                </List>
              </div>
            </div>
          </Grid>
  
          <Grid
            item
            xl={secondPopupTab ? 12 : 10}
            lg={secondPopupTab ? 12 : 9}
            md={secondPopupTab ? 12 : 9}
            xs={12}
          >
            <div className="work-drive-page_main">
              <div className="work-drive-page_main_list">
                {/* <FullFileBrowser files={files} folderChain={folderChain} /> */}
                {/* <ReadOnlyVFSBrowser instanceId={storyName} /> */}

                    <FileList />
                    <FileContextMenu />

              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }

  export default WorkDriveContent;