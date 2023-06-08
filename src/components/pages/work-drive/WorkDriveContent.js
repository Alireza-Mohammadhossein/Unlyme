import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import "./work-drive-page.scss";
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
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useSelector, useDispatch } from "react-redux";
import { FullFileBrowser } from 'chonky';
import {
  ChonkyActions,
  ChonkyFileActionData,
  FileArray,
  FileBrowser,
  FileContextMenu,
  FileData,
  FileHelper,
  FileList,
  FileNavbar,
  FileToolbar,
} from 'chonky';
import { showActionNotification, useStoryLinks } from './utils';
import DemoFsMap from '../../../mocks/work-drive.json';


// const rootFolderId = DemoFsMap.rootFolderId;
// const fileMap = DemoFsMap.fileMap;

// export const useFiles = (currentFolderId) => {
//     return useMemo(() => {
//         const currentFolder = fileMap[currentFolderId];
//         const files = currentFolder.childrenIds
//             ? currentFolder.childrenIds.map((fileId) => fileMap[fileId] ?? null)
//             : [];
//         return files;
//     }, [currentFolderId]);
// };

// export const useFolderChain = (currentFolderId) => {
//     return useMemo(() => {
//         const currentFolder = fileMap[currentFolderId];

//         const folderChain = [currentFolder];

//         let parentId = currentFolder.parentId;
//         while (parentId) {
//             const parentFile = fileMap[parentId];
//             if (parentFile) {
//                 folderChain.unshift(parentFile);
//                 parentId = parentFile.parentId;
//             } else {
//                 parentId = null;
//             }
//         }

//         return folderChain;
//     }, [currentFolderId]);
// };

// export const useFileActionHandler = (setCurrentFolderId) => {
//     return useCallback((data) => {
//         if (data.id === ChonkyActions.OpenFiles.id) {
//             const { targetFile, files } = data.payload;
//             const fileToOpen = targetFile ?? files[0];
//             if (fileToOpen && FileHelper.isDirectory(fileToOpen)) {
//                 setCurrentFolderId(fileToOpen.id);
//                 return;
//             }
//         }

//         showActionNotification(data);
//     }, [setCurrentFolderId]);
// };

// export const ReadOnlyVFSBrowser = (props) => {
//     const [currentFolderId, setCurrentFolderId] = useState(rootFolderId);
//     const files = useFiles(currentFolderId);
//     const folderChain = useFolderChain(currentFolderId);
//     const handleFileAction = useFileActionHandler(setCurrentFolderId);
//     return (
//         <div style={{ height: 400 }}>
//             <FileBrowser
//                 instanceId={props.instanceId}
//                 files={files}
//                 folderChain={folderChain}
//                 onFileAction={handleFileAction}
//                 thumbnailGenerator={(file) =>
//                     file.thumbnailUrl ? `https://chonky.io${file.thumbnailUrl}` : null
//                 }
//             >
//                 <FileNavbar />
//                 <FileToolbar />
//                 <FileList />
//                 <FileContextMenu />
//             </FileBrowser>
//         </div>
//     );
// };

// const storyName = 'Simple read-only VFS';

  
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
      const [openSubMenu, setOpenSubMenu] = useState(false);

      const handleOpenSubMenu = () => {
        setOpenSubMenu(!openSubMenu);
      };


      // chonky configs
      const files = [
        {
          id: 'nTe',
          name: 'Normal file.yml',
          size: 890,
          modDate: new Date('2012-01-01'),
        },
        {
          id: 'zxc',
          name: 'Hidden file.mp4',
          isHidden: true,
          size: 890,
        },
        {
          id: 'bnm',
          name: 'Normal folder',
          isDir: true,
          childrenCount: 12,
        },
        {
          id: 'vfr',
          name: 'Symlink folder',
          isDir: true,
          isSymlink: true,
          childrenCount: 0,
        },
        {
          id: '7zp',
          name: 'Encrypted file.7z',
          isEncrypted: true,
        },
        {
          id: 'qwe',
          name: 'Not selectable.tar.gz',
          ext: '.tar.gz', // Custom extension
          selectable: false, // Disable selection
          size: 54300000000,
          modDate: new Date(),
        },
        {
          id: 'rty',
          name: 'Not openable.pem',
          openable: false, // Prevent opening
          size: 100000000,
        },
        {
          id: 'btj',
          name: 'Not draggable.csv',
          draggable: false, // Prevent this files from being dragged
        },
        {
          id: 'upq',
          name: 'Not droppable',
          isDir: true,
          droppable: false, // Prevent files from being dropped into this folder
        },
        {
          id: 'mRw',
          name: 'Unknown file name',
        },
        {
          id: 'mEt',
          name: 'Custom icon & color',
          color: '#09f',
        },
        {
          id: 'mRwa',
          name: 'icon.png',
          size: 1000000,
        }
      ]
      const folderChain = [
        { id: 'zxc', name: 'My files' },
        { id: 'fgh', name: 'Documents' },
      ];
  



  
    return (
      <div className="work-drive-page">
        <Grid container spacing={3}>

          <Grid
            item
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
                      PaperProps={{
                        style: {
                          // maxHeight: ITEM_HEIGHT * 4.5,
                          // height: 'auto'
                          width: "30ch",
                        },
                      }}
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
            lg={secondPopupTab ? 12 : 9}
            md={secondPopupTab ? 12 : 9}
            xs={12}
          >
            <div className="work-drive-page_main">
              <div className="work-drive-page_main_notes">
                {/* <FullFileBrowser files={files} folderChain={folderChain} /> */}
                {/* <ReadOnlyVFSBrowser instanceId={storyName} /> */}
                <FileBrowser files={files} folderChain={folderChain}>
                    <FileNavbar />
                    <FileToolbar />
                    <FileList />
                    <FileContextMenu />
                </FileBrowser>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }

  export default WorkDriveContent;