// start calendar without api
import React, { useEffect, useState } from 'react';
import './meeting-shortcut.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FormControl from '@mui/material/FormControl';
import notesIcon from '../../../../../assets/images/my-services/notes.png';

import aaIcon from "../../../../../assets/images/notepage/new/Aa.svg";
import bulletIcon from "../../../../../assets/images/notepage/new/bullet-list.svg";
import copyIcon from "../../../../../assets/images/notepage/new/image.svg";
import lockIcon from "../../../../../assets/images/notepage/new/lock.svg";
import shareIcon from "../../../../../assets/images/notepage/new/share.svg";
import tableIcon from "../../../../../assets/images/notepage/new/table.svg";




const NotesShortcut = ({ setShortcutPopup, categories }) => {

  const [title, setTitle] = useState('');
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const [message, setMessage] = useState('');
  const handleMessage = (event) => {
    setMessage(event.target.value);
  }

  const [inputText, setInputText] = useState('');
  const [hasEntered, setHasEntered] = useState(false);


  const handleResetEvent = () => {
    setTitle('')
    setMessage('')
    setInputText('')
  }

  const handleSubmitEvent = () => {
    setShortcutPopup(false)
    setTitle('')
    setMessage('')
    setInputText('')
  }



  // getting title from first enter
  const handleMessageChange = (event) => {
    const newText = event.target.value;
    setInputText(newText);

    const lines = newText.split('\n');
    const firstLine = lines[0];
    const restLines = lines.slice(1).join('\n');

    if (!hasEntered && newText.includes('\n')) {
      setTitle(firstLine);
      setMessage(restLines);
      setHasEntered(true);
    } else if (hasEntered && title !== firstLine) {
      setTitle(firstLine);
      setMessage(restLines);
    } else if (hasEntered && title === firstLine) {
      setMessage(restLines);
    }

    console.log('title', title)
    console.log('message', message)
  };




  return (
    <div className='meeting-shortcut'>
      <div className='meeting-shortcut-header'>
        <div className='meeting-shortcut-header-title'>
          <img src={notesIcon} alt='Calendar icon' />
          <p>Add Note</p>
        </div>

        <div className='meeting-shortcut-header-btn'>
          <IconButton onClick={() => setShortcutPopup(false)}>
            <CloseIcon />
          </IconButton>
        </div>

      </div>

      <div className='meeting-shortcut-list'>
        <div className='meeting-shortcut-item textarea'>
          <div className='meeting-shortcut-item_edit-note'>
            <div className='meeting-shortcut-item_edit-note-actions'>
              <IconButton aria-label="typo">
                <img src={aaIcon} alt='typo' />
              </IconButton>

              <IconButton aria-label="bullet">
                <img src={bulletIcon} alt='bullet' />
              </IconButton>

              <IconButton aria-label="table">
                <img src={tableIcon} alt='table' />
              </IconButton>

              <IconButton aria-label="copy">
                <img src={copyIcon} alt='copy' />
              </IconButton>

              <IconButton aria-label="lock">
                <img src={lockIcon} alt='lock' />
              </IconButton>

              <IconButton aria-label="share">
                <img src={shareIcon} alt='share' />
              </IconButton>
            </div>  
          </div>

          <div className='meeting-shortcut-item_text-note'>
            <FormControl fullWidth>
              <TextField
                className='meeting-shortcut-item_text-note-message'
                multiline
                value={inputText}
                autoFocus
                onChange={handleMessageChange}
              />
            </FormControl>

          </div>
        </div>



        <div className='meeting-shortcut-btn'>
          {/* <Button className='meeting-shortcut-btn-reset' onClick={handleResetEvent}>Reset</Button> */}

          <Button className='meeting-shortcut-btn-submit' onClick={handleSubmitEvent}>Save note</Button>
        </div>
      </div>
    </div>
  );
}


export default NotesShortcut;