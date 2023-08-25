import React, { useState } from 'react';
import './money-popups.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import Switch from '@mui/material/Switch';
import InputAdornment from '@mui/material/InputAdornment';
import { toast } from "react-toastify";
import dayjs, { Dayjs } from 'dayjs';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { DropzoneArea } from 'material-ui-dropzone';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import uploadIcon from '../../../../../assets/images/invoice-manager/upload-cloud.png'
import { styled } from '@mui/material/styles';





const EditExpensesPopup = ({ handleCloseEditExpensesPopup, data}) => {

  const useStyles = makeStyles(theme => createStyles({
    previewChip: {
      minWidth: 160,
      maxWidth: 210
    },
  }));

  const classes = useStyles();



  const [description, setDescription] = useState(data.description);
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const [amount, setAmount] = useState(data.amount);
  const handleAmount = (event) => {
    setAmount(event.target.value);
  };

  const [date, setDate] = useState(dayjs(data.date));
  const handleDate = (newValue) => {
    setDate(newValue);
  };

  const [category, setCategory] = useState(data.category);
  const handleCategory = (event) => {
      setCategory(event.target.value);
  };
  
  const [client, setClient] = useState('');
  const handleClient = (event) => {
      setClient(event.target.value);
  };
  
  const [project, setProject] = useState('');
  const handleProject = (event) => {
      setProject(event.target.value);
  };

  const [additionalInfo, setAdditionalInfo] = useState(false);
  const handleAdditionalInfo = () => {
      setAdditionalInfo(!additionalInfo);
  };


  const TemaMembers = [
    'Team member 1',
    'Team member 2',
    'Team member 3',
    'Team member 4',
    'Team member 5',
    'Team member 6',
    'Team member 7',
  ];

  const [member, setMember] = useState([]);
  const handleMember = (event) => {
    const {
      target: { value },
    } = event;
    setMember(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleCancelEdit = () => {
    handleCloseEditExpensesPopup();
    setAdditionalInfo(false);
  }

  const handleSubmitEdit = () => {
    handleCloseEditExpensesPopup();
    setAdditionalInfo(false);
    toast.success('You have clicked on Submit edits', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const CustomUploadIcon = () => (
    <img src={uploadIcon} />
  );



  const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 31,
    height: 18,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      height: '100%',
      marginTop: 0 ,
      marginBottom: 0 ,
      marginRight: 0 ,
      marginLeft: 2 ,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        marginTop: 0 ,
        marginBottom: 0 ,
        marginRight: 2 ,
        marginLeft: 0 ,
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#767680E5',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 13,
      height: 13,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#c4bfd2' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));

 

  return (
    <div className='money-editinvoicepopup'>
      <div className='money-editinvoicepopup-header'>
        <div className='money-editinvoicepopup-header-title'>
          <p>Edit expenses</p>
        </div>

        <div className='money-editinvoicepopup-header-btn'>
          <IconButton onClick={handleCloseEditExpensesPopup}>
            <CloseIcon />
          </IconButton>
        </div>

      </div>

      <div className='money-editinvoicepopup-list'>

        <div className='money-addnewexpenses-item notes'>
          <p className='money-addnewexpenses-item-title'>
            Description*
          </p>

          <TextField
              className='money-addnewexpenses-item-input'
              variant="outlined"
              value={description}
              onChange={handleDescription}
              multiline
              maxRows={5}
          />
        </div>
        
        <div className='money-addnewexpenses-item flex'>
          <p className="money-addnewexpenses-item-title">
              Date*
          </p>

          <div className='money-addnewexpenses-item-date'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                slotProps={{ textField: { placeholder: '' } }}
                value={date} 
                onChange={handleDate}
                // defaultValue={dayjs()}
                // disablePast
              />
            </LocalizationProvider>
          </div>
        </div>

        <div className='money-addnewexpenses-item flex'>
          <p className="money-addnewexpenses-item-title">
              Amount*
          </p>

          <div className='money-addnewexpenses-item-number'>
            <TextField
              placeholder=""
              value={amount}
              onChange={handleAmount}
              className="money-addnewexpenses-item-number-input"
              type="number"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />
          </div>
        </div>

        <div className='money-addnewexpenses-item flex'>
            <p className='money-addnewexpenses-item-title'>
              Category*
            </p>

            <FormControl fullWidth>
                <Select
                  className="money-addnewexpenses-item-select"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  onChange={handleCategory}
                >
                  <MenuItem value='Category 1'>Category 1</MenuItem>
                  <MenuItem value='category2'>Category 2</MenuItem>
                  <MenuItem value='category3'>Category 3</MenuItem>
                  <MenuItem value='category4'>Category 4</MenuItem>
                </Select>
            </FormControl>
        </div>

        <div className='money-addnewexpenses-item flex'>
            <p className='money-addnewexpenses-item-title'>
              Client
            </p>

            <FormControl fullWidth>
                <Select
                  className="money-addnewexpenses-item-select"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={client}
                  onChange={handleClient}
                >
                  <MenuItem value='client1'>Client 1</MenuItem>
                  <MenuItem value='client2'>Client 2</MenuItem>
                  <MenuItem value='client3'>Client 3</MenuItem>
                  <MenuItem value='client4'>Client 4</MenuItem>
                </Select>
            </FormControl>
        </div>

        <div className='money-addnewexpenses-item flex'>
            <p className='money-addnewexpenses-item-title'>
              Project
            </p>

            <FormControl fullWidth>
                <Select
                  className="money-addnewexpenses-item-select"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={project}
                  onChange={handleProject}
                >
                  <MenuItem value='project1'>Project 1</MenuItem>
                  <MenuItem value='project2'>Project 2</MenuItem>
                  <MenuItem value='project3'>Project 3</MenuItem>
                  <MenuItem value='project4'>Project 4</MenuItem>
                </Select>
            </FormControl>
        </div>

        <div className='money-addnewexpenses-item tags'>
            <p className='money-addnewexpenses-item-title'>
              Team member
            </p>

            <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={member}
                onChange={handleMember}
              >
                {TemaMembers.map((member) => (
                  <MenuItem
                    key={member}
                    value={member}
                  >
                    {member}
                  </MenuItem>
                ))}
              </Select>
        </div>

        <div className='money-addnewexpenses-item flex'>
          <FormControlLabel control={<Checkbox sx={{color: '#3089dc'}} defaultChecked />} label="Billable" sx={{color: '#888888'}} />
        </div>

        <div className='money-addnewexpenses-item switch'>
            <p className='money-addnewexpenses-item-title' onClick={handleAdditionalInfo}>
              Attach a receipt
            </p>

            {/* <Switch
                checked={additionalInfo}
                onChange={handleAdditionalInfo}
                // inputProps={{ 'aria-label': 'controlled' }}
            /> */}

            
            <IOSSwitch
              checked={additionalInfo}
              onChange={handleAdditionalInfo}
            />
        </div>

        {
          additionalInfo ? 
              <>
                <div className='money-addnewexpenses-item'>
                    <DropzoneArea
                    //   acceptedFiles={['image/*']}
                      dropzoneClass= 'money-addnewexpenses-item-attach'
                      dropzoneText={"Drop files here, or click to upload"}
                      onChange={(files) => console.log('Files:', files)}
                      showPreviews={true}
                      showPreviewsInDropzone={false}
                      useChipsForPreview
                      previewGridProps={{container: { spacing: 1, direction: 'row' }}}
                      previewChipProps={{classes: { root: classes.previewChip } }}
                      previewText="Selected files"
                      showAlerts={true}
                      filesLimit={3}
                      Icon= {CustomUploadIcon}
                    //   alertSnackbarProps={{horizontal: 'center'}}
                      
                    />

                </div>
              </>
            :
              ''
        }


        <div className='money-addnewexpenses-item flex'>
          <p className='money-addnewexpenses-item-title'>
            * Required
          </p>
        </div>


        <div className='money-editinvoicepopup-btn'>
          <Button className='money-editinvoicepopup-btn-reset' onClick={handleCancelEdit}>Cancel</Button>

          <Button className='money-editinvoicepopup-btn-submit' onClick={handleSubmitEdit}>Submit</Button>
        </div>
      </div>

    </div>



  );
}


export default EditExpensesPopup;
