// start calendar without api
import React, { useState } from 'react';
import './meeting-shortcut.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FilterListIcon from '@mui/icons-material/FilterList';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import dayjs from "dayjs";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { sampleUsers } from '../../../../../mocks/mocks';
import tasksIcon from '../../../../../assets/images/my-services/tasks.png';





const TasksShortcut = ({ setShortcutPopup, categories }) => {


  const [title, setTitle] = useState('');
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const [description, setDescription] = useState('');
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const [difficulty, setDifficulty] = useState(-1);

  const [members, setMembers] = useState('');
  const handleMembers = (event) => {
    setMembers(event.target.value);
  };

  const [color, setColor] = useState('blue');
  const handleColor = (event) => {
    setColor(event.target.value);
  };

  const [duetDate, setDueDate] = useState(dayjs(new Date()));
  const handleDueDate = (newValue) => {
    setDueDate(newValue);
  };

  const [duetTime, setDueTime] = useState(dayjs(new Date()));
  const handleDueTime = (newValue) => {
    setDueTime(newValue);
  };



  const handleResetEvent = () => {
    setTitle('')
    setDescription('')
    setMembers('')
    setColor('blue')
    setDueDate(dayjs(new Date()));
    setDueTime(dayjs(new Date()));
  }

  const handleSubmitEvent = () => {
    setShortcutPopup(false)
    setTitle('')
    setDescription('')
    setMembers('')
    setColor('blue')
    setDueDate(dayjs(new Date()));
    setDueTime(dayjs(new Date()));
  }


  return (
    <div className='meeting-shortcut'>
      <div className='meeting-shortcut-header'>
      <div className='meeting-shortcut-header-title'>
          {/* <FilterListIcon /> */}
          <img src={tasksIcon} alt='Calendar icon' />
          <p>Add Tasks</p>
        </div>

        <div className='meeting-shortcut-header-btn'>
          <IconButton onClick={() => setShortcutPopup(false)}>
            <CloseIcon />
          </IconButton>
        </div>

      </div>

      <div className='meeting-shortcut-list'>
        <div className='meeting-shortcut-item'>
          <p className="meeting-shortcut-item-title">
              Task
          </p>

          <FormControl fullWidth>
            <TextField className="meeting-shortcut-item-input" value={title} onChange={handleTitle} />
          </FormControl>

        </div>

        <div className='meeting-shortcut-item note'>
          <p className="meeting-shortcut-item-title">
              Description
          </p>

          <FormControl fullWidth>
            <TextField
                className='meeting-shortcut-item-input'
                variant="outlined"
                value={description}
                onChange={handleDescription}
                multiline
                maxRows={5}
            />
          </FormControl>

        </div>

        <div className='meeting-shortcut-item'>
          <div className='meeting-shortcut-item-checkbox'>
            <FormControlLabel checked={difficulty === 0} control={<Checkbox onChange={() => {difficulty === 0 ? setDifficulty(-1) : setDifficulty(0)}} />} label="Easy" />
            <FormControlLabel checked={difficulty === 1} control={<Checkbox onChange={() => {difficulty === 1 ? setDifficulty(-1) : setDifficulty(1)}} />} label="Normal" />
            <FormControlLabel checked={difficulty === 2} control={<Checkbox onChange={() => {difficulty === 2 ? setDifficulty(-1) : setDifficulty(2)}} />} label="Hard" />
            <FormControlLabel checked={difficulty === 3} control={<Checkbox onChange={() => {difficulty === 3 ? setDifficulty(-1) : setDifficulty(3)}} />} label="Jet" />
          </div>
        </div>

        <div className='meeting-shortcut-item'>
          <p className="meeting-shortcut-item-title">
              Assign members
          </p>

          <FormControl fullWidth>
            <Select
              className="meeting-shortcut-item-select"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={members}
              onChange={handleMembers}
            >
              {sampleUsers.map((user) => (
                <MenuItem className='calendar_meeting-shortcut-item-select-item' value={user.name}>{user.name}</MenuItem>  
              ))}
            </Select>
          </FormControl>

        </div>

        <div className='meeting-shortcut-item'>
          <p className="meeting-shortcut-item-title">
              Color
          </p>

          <FormControl fullWidth>
            <Select
              className="meeting-shortcut-item-select"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={color}
              onChange={handleColor}
            >
                <MenuItem className='meeting-shortcut-item-select-item' value='blue'>Blue <span className='color-bullet' style={{backgroundColor: '#4382C4'}}></span></MenuItem>
                <MenuItem className='meeting-shortcut-item-select-item' value='green'>Green <span className='color-bullet' style={{backgroundColor: 'green'}}></span></MenuItem>
                <MenuItem className='meeting-shortcut-item-select-item' value='red'>Red <span className='color-bullet' style={{backgroundColor: 'red'}}></span></MenuItem>
                <MenuItem className='meeting-shortcut-item-select-item' value='yellow'>Yellow <span className='color-bullet' style={{backgroundColor: 'yellow'}}></span></MenuItem>
            </Select>
          </FormControl>

        </div>

        <div className='meeting-shortcut-item'>
          <p className="meeting-shortcut-item-title">
              Due to
          </p>

          <div className='meeting-shortcut-item-double'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                value={duetDate} 
                onChange={handleDueDate}
                // defaultValue={dayjs()}
                // disablePast
              />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={[
                  'DesktopTimePicker',
                ]}
              >
                <DemoItem>
                  <DesktopTimePicker
                    value={duetTime}
                    onChange={handleDueTime}
                    endAdornment ={<InputAdornment position="end"><FilterListIcon /></InputAdornment>}
                    ampm={false}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>


        <div className='meeting-shortcut-btn'>
          <Button className='meeting-shortcut-btn-reset' onClick={handleResetEvent}>Reset</Button>

          <Button className='meeting-shortcut-btn-submit' onClick={handleSubmitEvent}>Save task</Button>
        </div>
      </div>
    </div>
  );
}


export default TasksShortcut;