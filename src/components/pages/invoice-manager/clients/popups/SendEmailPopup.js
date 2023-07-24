import React, { useState } from 'react';
import './clients-popups.scss';
import Button from '@mui/material/Button';
import { toast } from "react-toastify";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { DropzoneArea } from 'material-ui-dropzone';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import uploadIcon from '../../../../../assets/images/invoice-manager/upload-cloud.png';




const SendEmailPopup = ({ handleCloseSendEmailPopup, data }) => {

  const useStyles = makeStyles(theme => createStyles({
    previewChip: {
      minWidth: 160,
      maxWidth: 210
    },
  }));

  const classes = useStyles();

  const CustomUploadIcon = () => (
    <img src={uploadIcon} />
  );


  const [sendTo, setSendTo] = useState('');
  const handleSendTo = (event) => {
    setSendTo(event.target.value);
  };
  
  const [subject, setSubject] = useState('');
  const handleSubject = (event) => {
    setSubject(event.target.value);
  };

  const [template, setTemplate] = useState('');
  const handleTemplate = (event) => {
    setTemplate(event.target.value);
  };

  const [message, setMessage] = useState('');
  const handleMessage = (event) => {
    setMessage(event.target.value);
  };



  const handleCancelSend = () => {
    handleCloseSendEmailPopup();
  }

  const handleSubmitSend = () => {
    handleCloseSendEmailPopup();
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



  return (
    <div className='clients-sendemailpopup'>
      <div className='clients-sendemailpopup-header'>
        <div className='clients-sendemailpopup-header-title'>
          <p>Send email</p>
        </div>

        <div className='clients-sendemailpopup-header-btn'>
          <IconButton onClick={handleCloseSendEmailPopup}>
            <CloseIcon />
          </IconButton>
        </div>

      </div>



      <div className='clients-sendemailpopup-list'>
        <div className='clients-sendemailpopup-item flex'>
          <p className='clients-sendemailpopup-item-title'>
            To
          </p>

          <FormControl fullWidth>
            <Select
              className="clients-sendemailpopup-item-select"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // defaultValue={data.paymentMethod}
              onChange={handleSendTo}
            >
              <MenuItem value='user1'>User 1</MenuItem>
              <MenuItem value='user2'>User 2</MenuItem>
              <MenuItem value='user3'>User 3</MenuItem>
              <MenuItem value='user4'>User 4</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className='clients-sendemailpopup-item flex'>
          <p className='clients-sendemailpopup-item-title'>
            Subject
          </p>

          <TextField
            className='clients-editinvoicepopup-item-input'
            variant="outlined"
            onChange={handleSubject}
            // multiline
            // maxRows={5}
          />
        </div>

        <div className='clients-sendemailpopup-item flex'>
          <p className='clients-sendemailpopup-item-title'>
            Use a template
          </p>

          <FormControl fullWidth>
            <Select
              className="clients-sendemailpopup-item-select"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // defaultValue={data.paymentMethod}
              onChange={handleTemplate}
            >
              <MenuItem value='template1'>Template 1</MenuItem>
              <MenuItem value='template2'>Template 2</MenuItem>
              <MenuItem value='template3'>Template 3</MenuItem>
              <MenuItem value='template4'>Template 4</MenuItem>
            </Select>
          </FormControl>
        </div>


        <div className='clients-sendemailpopup-item notes'>
          <p className='clients-sendemailpopup-item-title'>
            Message
          </p>
          
          <TextField
              className='clients-sendemailpopup-item-input'
              variant="outlined"
              onChange={handleMessage}
              multiline
              maxRows={6}
          />
        </div>

        <div className='clients-sendemailpopup-item'>
          <DropzoneArea
          //   acceptedFiles={['image/*']}
            dropzoneClass= 'clients-sendemailpopup-item-attach'
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
          
          />
        </div>





        <div className='clients-sendemailpopup-btn'>
          <Button className='clients-sendemailpopup-btn-reset' onClick={handleCancelSend}>Cancel</Button>

          <Button className='clients-sendemailpopup-btn-submit' onClick={handleSubmitSend}>Submit</Button>
        </div>
      </div>

    </div>

  );
}


export default SendEmailPopup;
