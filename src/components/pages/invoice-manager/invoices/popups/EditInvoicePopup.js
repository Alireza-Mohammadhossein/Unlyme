import React, { useState } from 'react';
import './invoices-popups.scss';
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
import LoopIcon from '@mui/icons-material/Loop';
import Alert from '@mui/material/Alert';
import { toast } from "react-toastify";
import { styled } from '@mui/material/styles';






const EditInvoicePopup = ({ handleCloseEditInvoicePopup, data}) => {

    const [savedData, setSavedData] = useState(data.data ? data.data : data)


    const [client, setClient] = useState('');
    const handleClient = (event) => {
      setClient(event.target.value);
    };
  
    const [project, setProject] = useState('');
    const handleProject = (event) => {
      setProject(event.target.value);
    };

    const [companyName, setCompanyName] = useState('');
    const handleCompanyName = (event) => {
      setCompanyName(event.target.value);
    };

    const [firstName, setFirstName] = useState('');
    const handleFirstName = (event) => {
      setFirstName(event.target.value);
    };
    
    
    const [lastName, setLastName] = useState('');
    const handleLastName = (event) => {
      setLastName(event.target.value);
    };

    
    const [email, setEmail] = useState('');
    const handleEmail = (event) => {
      setEmail(event.target.value);
    };

    const [clientExistance, setClientExistance] = useState('existing');
    const handleClientExistance = (event, newAlignment) => {
        setClientExistance(newAlignment);
    };

    const [createDate, setCreateDate] = useState(null);
    const handleCreateDate = (newValue) => {
      setCreateDate(newValue);
    };

    const [dueDate, setDueDate] = useState(null);
    const handleDueDate = (newValue) => {
      setDueDate(newValue);
    };

    const [category, setCategory] = useState('');
    const handleCategory = (event) => {
      setCategory(event.target.value);
    };


    const [additionalInfo, setAdditionalInfo] = useState(false);
    const handleAdditionalInfo = () => {
        setAdditionalInfo(!additionalInfo);
    };
    


    const handleCancelEdit = () => {
        handleCloseEditInvoicePopup();
        setClient('');
        setProject('');
        setCreateDate(null);
        setDueDate(null);
        setCategory('');
        setAdditionalInfo(false);
      }
    
      const handleSubmitEdit = () => {
        handleCloseEditInvoicePopup();
        setClient('');
        setProject('');
        setCreateDate(null);
        setDueDate(null);
        setCategory('');
        setAdditionalInfo(false);
        toast.error(`You have clicked on Edit invoice by id = ${savedData.id}!`, {
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


      const tags = [
        'Tag 1',
        'Tag 2',
        'Tag 3',
        'Tag 4',
        'Tag 5',
        'Tag 6',
        'Tag 7',
      ];

      const [tag, setTag] = useState([]);
      const handleTag = (event) => {
        const {
          target: { value },
        } = event;
        setTag(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };


      const [notes, setNotes] = useState('');
      const handleNotes = (event) => {
          setNotes(event.target.value);
      };

      const [terms, setTerms] = useState('');
      const handleTerms = (event) => {
          setTerms(event.target.value);
      };


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
    <div className='invoices-editinvoicepopup'>
      <div className='invoices-editinvoicepopup-header'>
        <div className='invoices-editinvoicepopup-header-title'>
          <p>Edit invoice</p>
        </div>

        <div className='invoices-editinvoicepopup-header-btn'>
          <IconButton onClick={handleCloseEditInvoicePopup}>
            <CloseIcon />
          </IconButton>
        </div>

      </div>

      <div className='invoices-editinvoicepopup-info'>
        <div className='invoices-editinvoicepopup-info-creator'>
          <span>Created by:</span> {savedData.creator}
        </div>

        <div className='invoices-editinvoicepopup-info-date'>
          {savedData.date}
        </div>
      </div>

      <div className='invoices-editinvoicepopup-list'>
        <div className='invoices-editinvoicepopup-item flex'>
          <p className="invoices-editinvoicepopup-item-title">
              Invoice date*
          </p>

          <div className='invoices-editinvoicepopup-item-date'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                slotProps={{ textField: { placeholder: '' } }}
                value={createDate} 
                onChange={handleCreateDate}
                // defaultValue={dayjs()}
                // disablePast
              />
            </LocalizationProvider>
          </div>
        </div>

        <div className='invoices-editinvoicepopup-item flex'>
          <p className="invoices-editinvoicepopup-item-title">
              Due date*
          </p>

          <div className='invoices-editinvoicepopup-item-date'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                slotProps={{ textField: { placeholder: '' } }}
                value={dueDate} 
                onChange={handleDueDate}
                // defaultValue={dayjs()}
                // disablePast
              />
            </LocalizationProvider>
          </div>
        </div>

        <div className='invoices-editinvoicepopup-item flex'>
            <p className='invoices-editinvoicepopup-item-title'>
              Category*
            </p>

            <FormControl fullWidth>
                <Select
                  className="invoices-editinvoicepopup-item-select"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  onChange={handleCategory}
                >
                  <MenuItem value='category1'>Category 1</MenuItem>
                  <MenuItem value='category2'>Category 2</MenuItem>
                  <MenuItem value='category3'>Category 3</MenuItem>
                  <MenuItem value='category4'>Category 4</MenuItem>
                </Select>
            </FormControl>
        </div>

        <div className='invoices-editinvoicepopup-item switch'>
            <p className='invoices-editinvoicepopup-item-title' onClick={handleAdditionalInfo}>
              Additional information
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
                <div className='invoices-editinvoicepopup-item tags'>
                  <p className='invoices-editinvoicepopup-item-title'>
                    Tags
                  </p>

                  <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={tag}
                    onChange={handleTag}
                  >
                    {tags.map((tag) => (
                      <MenuItem
                        key={tag}
                        value={tag}
                      >
                        {tag}
                      </MenuItem>
                    ))}
                  </Select>
                </div>

                <div className='invoices-editinvoicepopup-item notes'>
                  <p className='invoices-editinvoicepopup-item-title'>
                    Notes
                  </p>

                  <TextField
                      className='invoices-editinvoicepopup-item-input'
                      variant="outlined"
                      onChange={handleNotes}
                      multiline
                      maxRows={5}
                  />
                </div>

                <div className='invoices-editinvoicepopup-item terms'>
                  <p className='invoices-editinvoicepopup-item-title'>
                    Terms and conditions
                  </p>

                  <TextField
                      className='invoices-editinvoicepopup-item-input'
                      variant="outlined"
                      onChange={handleTerms}
                      multiline
                      maxRows={5}
                  />
                </div>
              </>
            :
              ''
        }

        <div className='invoices-editinvoicepopup-item flex'>
            <Alert variant="outlined" severity="warning" icon={<LoopIcon sx={{color: "#93742A"}} />}>
                Recurring invoice options are available after an invoice has been created
            </Alert>
        </div>

        <div className='invoices-editinvoicepopup-item flex'>
            <p className='invoices-editinvoicepopup-item-title'>
              * Required
            </p>
        </div>

        <div className='invoices-editinvoicepopup-btn'>
          <Button className='invoices-editinvoicepopup-btn-reset' onClick={handleCancelEdit}>Cancel</Button>

          <Button className='invoices-editinvoicepopup-btn-submit' onClick={handleSubmitEdit}>Submit</Button>
        </div>
      </div>

    </div>



  );
}


export default EditInvoicePopup;
