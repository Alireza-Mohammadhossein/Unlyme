import React, { useState, useMemo, useCallback } from "react";
import workDriveIcon from "../../../assets/images/workDrive.png"
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import "./work-drive-page.scss";
import WorkDriveDetailsBar from './WorkDriveDetailsBar';
import WorkDriveContent from './WorkDriveContent'
import { setChonkyDefaults } from 'chonky';
import { ChonkyIconFA } from 'chonky-icon-fontawesome';
import { useSelector, useDispatch } from "react-redux";
import DemoFsMap from './demoApi.json';
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




const rootFolderId = DemoFsMap.rootFolderId;
const fileMap = DemoFsMap.fileMap;



export const useFiles = (currentFolderId) => {
  return useMemo(() => {
      const currentFolder = fileMap[currentFolderId];
      const files = currentFolder.childrenIds
          ? currentFolder.childrenIds.map((fileId) => fileMap[fileId] ?? null)
          : [];
      return files;
  }, [currentFolderId]);
};

export const useFolderChain = (currentFolderId) => {
  return useMemo(() => {
      const currentFolder = fileMap[currentFolderId];

      const folderChain = [currentFolder];

      let parentId = currentFolder.parentId;
      while (parentId) {
          const parentFile = fileMap[parentId];
          if (parentFile) {
              folderChain.unshift(parentFile);
              parentId = parentFile.parentId;
          } else {
              parentId = null;
          }
      }

      return folderChain;
  }, [currentFolderId]);
};

// export const useFileActionHandler = (setCurrentFolderId) => {
//   return useCallback((data) => {    
//       if (data.id === ChonkyActions.OpenFiles.id) {
//           const { targetFile, files } = data.payload;
//           const fileToOpen = targetFile ?? files[0];
//           if (fileToOpen && FileHelper.isDirectory(fileToOpen)) {
//               setCurrentFolderId(fileToOpen.id);
//               return;
//           }
//       }

//       if (data.id === ChonkyActions.EnableGridView.id) {
//         setListViewActive(false)
//       }

//       if (data.id === ChonkyActions.EnableListView.id) {
//         setListViewActive(true)
//       }

//       // showActionNotification(data);
//   }, [setCurrentFolderId]);
// };





const WorkDrivePage = () => {
  const { t, i18n } = useTranslation();
  const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);
  const [listViewActive, setListViewActive,] = useState(false);



  setChonkyDefaults({
    iconComponent: ChonkyIconFA,
    // disableSelection: true,
    disableDragAndDropProvider: true,
  });

  const useFileActionHandler = (setCurrentFolderId) => {
    return useCallback((data) => {    
        if (data.id === ChonkyActions.OpenFiles.id) {
            const { targetFile, files } = data.payload;
            const fileToOpen = targetFile ?? files[0];
            if (fileToOpen && FileHelper.isDirectory(fileToOpen)) {
                setCurrentFolderId(fileToOpen.id);
                return;
            }
        }
  
        if (data.id === ChonkyActions.EnableGridView.id) {
          setListViewActive(false)
        }
  
        if (data.id === ChonkyActions.EnableListView.id) {
          setListViewActive(true)
        }
  
        // showActionNotification(data);
    }, [setCurrentFolderId]);
  };


    // chonky configs
    const [currentFolderId, setCurrentFolderId] = useState(rootFolderId);
    const files = useFiles(currentFolderId);
    const folderChain = useFolderChain(currentFolderId);
    const handleFileAction = useFileActionHandler(setCurrentFolderId);

    // const files = [
    //   {
    //     id: 'nTe',
    //     name: 'Normal file.yml',
    //     size: 890,
    //     modDate: new Date('2012-01-01'),
    //     color: '#4382C4',
    //     // icon: ChonkyIconName.folder,
    //   },
    //   {
    //     id: 'zxc',
    //     name: 'Hidden file.mp4',
    //     isHidden: true,
    //     size: 890,
    //     color: '#4382C4',
    //   },
    //   {
    //     id: 'bnm',
    //     name: 'Normal folder',
    //     isDir: true,
    //     color: '#4382C4',
    //     icon: ChonkyIconName.folder,
    //     // childrenCount: 12,
    //   },
    //   {
    //     id: 'vfr',
    //     name: 'Symlink folder',
    //     isDir: true,
    //     color: '#4382C4',
    //     // isSymlink: true,
    //     // childrenCount: 0,
    //   },
    //   {
    //     id: '7zp',
    //     name: 'Encrypted file.7z',
    //     isEncrypted: true,
    //     color: '#4382C4',
    //   },
    //   {
    //     id: 'qwe',
    //     name: 'Not selectable.tar.gz',
    //     ext: '.tar.gz', // Custom extension
    //     selectable: false, // Disable selection
    //     size: 54300000000,
    //     modDate: new Date(),
    //     color: '#4382C4',
    //   },
    //   {
    //     id: 'rty',
    //     name: 'Not openable.pem',
    //     openable: false, // Prevent opening
    //     size: 100000000,
    //     color: '#4382C4',
    //   },
    //   {
    //     id: 'btj',
    //     name: 'Not draggable.csv',
    //     draggable: false, // Prevent this files from being dragged
    //     color: '#4382C4',
    //   },
    //   {
    //     id: 'upq',
    //     name: 'Not droppable',
    //     isDir: true,
    //     droppable: false, // Prevent files from being dropped into this folder
    //     color: '#4382C4',
    //   },
    //   {
    //     id: 'mRw',
    //     name: 'file name',
    //     isDir: true,
    //     color: '#4382C4',
    //   },
    //   {
    //     id: 'mEt',
    //     name: 'Custom icon',
    //     isDir: true,
    //     color: '#4382C4',
    //   },
    //   {
    //     id: 'mRwa',
    //     name: 'icon.png',
    //     size: 1000000,
    //     color: '#4382C4',
    //   }
    // ]

    // const folderChain = [
    //   { id: 'zxc', name: 'My files' },
    //   { id: 'fgh', name: 'Documents' },
    // ];


    const ExtraActions = {
      CreateFolder: defineFileAction({
        id: 'create_folder',
        button: {
            name: 'Create folder',
            toolbar: true,
            contextMenu: true,
            group: 'Actions',
            tooltip: 'Create folder',
            icon: ChonkyIconName.folderCreate,
        },  
      })
    }
    
    const myFileActions = [
      // myCustomAction,
      // ChonkyActions.ClearSelection,
      // ChonkyActions.UploadFiles,
      ChonkyActions.DownloadFiles,
      ChonkyActions.DeleteFiles,
      ExtraActions.CreateFolder,
    ];

    const actionsToDisable = [
      // ChonkyActions.EnableListView.id,
      // ChonkyActions.SelectAllFiles.id,
      ChonkyActions.ToggleHiddenFiles.id
    ];


  return (
    <div className="page-container">
      <FileBrowser files={files} folderChain={folderChain}
        // doubleClickDelay={300}
        // disableSelection={true}
        // disableDefaultFileActions={true}
        // onFileAction={() => alert('hi')}
        disableDefaultFileActions={actionsToDisable}
        defaultFileViewActionId={ChonkyActions.EnableGridView.id}
        fileActions={myFileActions}
        onFileAction={handleFileAction}
      > 
        <div className="cloud-page work-drive-cloud-page">
          <div className="cloud-page__header">

          <div className='grid-content'>
            <div className='grid-content_left cloud-page__header_share'>
              <div className='cloud-page__header_share_icon'>
                <img src={workDriveIcon} />
              </div>

              <div className="cloud-page__header_share_title">
                {t("WORK_DRIVE_PAGE.TITLE")}
              </div>
            </div>

            <div className='grid-content_right'>
              <div className='cloud-page__header_work-drive-page-details'>
                <WorkDriveDetailsBar/>
              </div>
            </div>
          </div>

        </div>

      <div className="cloud-page__content">

          <WorkDriveContent listViewActive={listViewActive} />

      </div>
    </div>
      </FileBrowser>
    </div>
  );
};

export default WorkDrivePage;


