import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import dayjs from 'dayjs';




const NotesBlock = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [viewMode, setViewMode] = useState('list');

  const handleViewMode = (event, newViewMode) => {
    setViewMode(newViewMode);
  };


  const [notes, setNotes] = useState([]);

  // start getting notes from localstorage
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) setNotes(storedNotes);
  }, []);



  return (
    <div className='my-services__notes'>
      <div className="my-services__notes_header">
        <div className="my-services__notes_header-view">
          <ToggleButtonGroup
            value={viewMode}
            exclusive
            onChange={handleViewMode}
            aria-label="text alignment"
          >
            <ToggleButton value="list" aria-label="list mode">
              <FormatListBulletedIcon />
            </ToggleButton>
            <ToggleButton value="grid" aria-label="grid mode">
              <GridViewIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>

        <div className="my-services__notes_header-more">
          <IconButton aria-label="add">
            <AddIcon />
          </IconButton>
        </div>
      </div>

      <div className="my-services__notes_content">
        <ul className={`my-services__notes_content_list ${viewMode==='grid' ? 'grid' : ''}`}>
          {
            notes.map((note) => (
              <li className="my-services__notes_content_list-item" key={note.id}>
                <div className="my-services__notes_content_list-item-title">
                  {note.title}
                </div>
    
                <div className="my-services__notes_content_list-item-details">
                  <p className="my-services__notes_content_list-item-details-time">{note.day}/{dayjs(`${note.day}${note.month}${note.year}`).format('MM')}/{note.year}</p>
                  <p className="my-services__notes_content_list-item-details-desctiprion">{note.message}</p>
                </div>
  
              </li>
            ))
          }

        </ul>
      </div>
    </div>
  );
};

export default NotesBlock;
