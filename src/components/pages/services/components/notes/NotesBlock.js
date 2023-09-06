import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import IconButton from '@mui/material/IconButton';
import dayjs from 'dayjs';
import NotesPage from "../../../notes/NotesPage";
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from "react-redux";
import { handleOpenNotesWidgetModal, handleCloseNotesWidgetModal } from '../../../../../redux/app/appsModalSlice';
import plusIcon from '../../../../../assets/images/my-services/plus.svg';
import expandIcon from '../../../../../assets/images/my-services/expand.svg';
import listActiveIcon from '../../../../../assets/images/my-services/notes/list-active.svg';
import listNotIcon from '../../../../../assets/images/my-services/notes/list-not.svg';
import gridActiveIcon from '../../../../../assets/images/my-services/notes/grid-active.svg';
import gridNotIcon from '../../../../../assets/images/my-services/notes/grid-not.svg';





const NotesBlock = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [viewMode, setViewMode] = useState('list');

  const handleViewMode = (event, newViewMode) => {
    if (newViewMode !== null) {
      setViewMode(newViewMode);
    }
  };


  // const [notes, setNotes] = useState([]);

  // // start getting notes from localstorage
  // useEffect(() => {
  //   const storedNotes = JSON.parse(localStorage.getItem('notes'));
  //   if (storedNotes) setNotes(storedNotes.reverse());
  // }, []);


  const notes = [
    {
      id: 1,
      title: "Lorem ipsum Note title",
      message:
        "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test descriptionLorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test descriptionLorem ipsum test description Lorem ipsum test descriptionLorem ipsum test description Lorem ipsum test descriptionLorem ipsum test description Lorem ipsum test descriptionLorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description",
      year: "2023",
      month: "October",
      day: "15",
      time: "14:25",
    },
    {
      id: 2,
      title: "Lorem ipsum Note title",
      message:
        "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description ",
      year: "2023",
      month: "April",
      day: "10",
      time: "10:25",
    },
    {
      id: 3,
      title: "Lorem ipsum Note title",
      message: "Lorem ipsum test description Lorem ipsum test description",
      year: "2023",
      month: "March",
      day: "15",
      time: "14:25",
    },
    {
      id: 4,
      title: "Lorem ipsum Note title",
      message:
        "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description ",
      year: "2023",
      month: "April",
      day: "10",
      time: "10:25",
    },
    {
      id: 5,
      title: "Lorem ipsum Note title",
      message:
        "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description ",
      year: "2023",
      month: "March",
      day: "15",
      time: "14:25",
    },
    {
      id: 6,
      title: "Lorem ipsum Note title",
      message: "Lorem ipsum test description Lorem ipsum test description",
      year: "2023",
      month: "April",
      day: "10",
      time: "10:25",
    },
    {
      id: 7,
      title: "Lorem ipsum Note title",
      message:
        "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description ",
      year: "2023",
      month: "March",
      day: "15",
      time: "14:25",
    },
    {
      id: 8,
      title: "Lorem ipsum Note title",
      message:
        "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description ",
      year: "2023",
      month: "April",
      day: "10",
      time: "10:25",
    },
    {
      id: 9,
      title: "Lorem ipsum Note title",
      message: "Lorem ipsum test description Lorem ipsum test description",
      year: "2023",
      month: "March",
      day: "15",
      time: "14:25",
    },
    {
      id: 10,
      title: "Lorem ipsum Note title",
      message:
        "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description ",
      year: "April",
      month: "04",
      day: "10",
      time: "10:25",
    },
    {
      id: 11,
      title: "Lorem ipsum Note title",
      message:
        "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description ",
      year: "2023",
      month: "March",
      day: "15",
      time: "14:25",
    },
    {
      id: 12,
      title: "Lorem ipsum Note title",
      message: "Lorem ipsum test description Lorem ipsum test description",
      year: "2023",
      month: "April",
      day: "10",
      time: "10:25",
    },
  ];


  
  const openNotesWidgetModal = useSelector((state) => state.appsModal.openNotesWidgetModal);
  const openCalendarWidgetModal = useSelector((state) => state.appsModal.openCalendarWidgetModal);
  const openTasksWidgetModal = useSelector((state) => state.appsModal.openTasksWidgetModal);
  const openWorkDriveWidgetModal = useSelector((state) => state.appsModal.openWorkDriveWidgetModal);
  const appsModal = useSelector((state) => state.appsModal.openAppsModal);

  const handleOpenNotesModal = () => {
    dispatch(handleOpenNotesWidgetModal());
  };
  const handleCloseNotesModal = () => {
    dispatch(handleCloseNotesWidgetModal());
  };

  
  const firstPopupTab = useSelector((state) => state.popup.firstPopupTab);
  const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);


  function getMonthNumber(monthStr){
    const monthNum = new Date(monthStr+'-1-01').getMonth()+1

    if(monthNum < 10) {
      return `0${monthNum}`
    } else {
      return monthNum;
    }
  }



  const handleOpenNotesPopup = () => {
    const notesButton = document.querySelector('[aria-label="Notes"]')  
    notesButton.click();

    // const createEventButton = document.querySelector('[aria-label="calendar create event"]')
    // createEventButton.click();

    // const createEventButtonInterval = setInterval(() => {
    //   const createEventButton = document.querySelector('[tabindex="0"] [aria-label="add new card"]')

    //   if (createEventButton) {
    //     createEventButton.click();

    //     clearInterval(createEventButtonInterval)
    //   }
    // },500)
  }



  return (
    <>
      <div className={`my-services__notes ${openNotesWidgetModal || appsModal || openCalendarWidgetModal || openTasksWidgetModal || openWorkDriveWidgetModal ? 'back-transparent' : ''}`}>
        <div className="my-services__notes_header">
          <div className="my-services__notes_header-view">
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

          <div className="my-services__notes_header-more">
            <IconButton aria-label="add" onClick={handleOpenNotesPopup}>
              <img src={plusIcon} />
            </IconButton>

            <IconButton aria-label="expand" onClick={handleOpenNotesPopup}>
              <img src={expandIcon} />
            </IconButton>

          </div>
        </div>

        <div className="my-services__notes_content">
          <ul className={`my-services__notes_content_list ${viewMode==='grid' ? 'grid' : ''}`}>
            {
              notes.map((note) => (
                <li className="my-services__notes_content_list-item" key={note.id} onClick={handleOpenNotesPopup}>
                  <div className="my-services__notes_content_list-item-title">
                    {note.title}
                  </div>
      
                  <div className="my-services__notes_content_list-item-details">
                    {/* <p className="my-services__notes_content_list-item-details-time">{note.day}/{dayjs(`${note.day}${note.month}${note.year}`).format('MM')}/{note.year}</p> */}
                    <p className="my-services__notes_content_list-item-details-time">{note.day}/{getMonthNumber(note.month)}/{note.year}</p>
                    <p className="my-services__notes_content_list-item-details-desctiprion">{note.message}</p>
                  </div>
                </li>
              ))
            }

          </ul>
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

export default NotesBlock;
