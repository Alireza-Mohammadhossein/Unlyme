import React, { useState } from 'react';
import './invoice-manager-popups.scss';
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
import Switch from '@mui/material/Switch';
import LoopIcon from '@mui/icons-material/Loop';
import Alert from '@mui/material/Alert';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';




const CloneInvoicePopup = ({ handleCloseCloneInvoicePopup }) => {


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
    


    const handleCancelFilters = () => {
        handleCloseCloneInvoicePopup();
        setClient('');
        setProject('');
        setCreateDate(null);
        setDueDate(null);
        setCategory('');
        setAdditionalInfo(false);
      }
    
      const handleSubmitFilters = () => {
        handleCloseCloneInvoicePopup();
        setClient('');
        setProject('');
        setCreateDate(null);
        setDueDate(null);
        setCategory('');
        setAdditionalInfo(false);
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
 

  return (
    <div className='invoice-manager-cloneinvoicepopup'>
      <div className='invoice-manager-cloneinvoicepopup-header'>
        <div className='invoice-manager-cloneinvoicepopup-header-title'>
          <p>Clone invoice</p>
        </div>

        <div className='invoice-manager-cloneinvoicepopup-header-btn'>
          <IconButton onClick={handleCloseCloneInvoicePopup}>
            <CloseIcon />
          </IconButton>
        </div>

      </div>

      <div className='invoice-manager-cloneinvoicepopup-list'>        
        <div className='invoice-manager-cloneinvoicepopup-item flex'>
          <p className="invoice-manager-cloneinvoicepopup-item-title">
              Invoice date
          </p>

          <div className='invoice-manager-cloneinvoicepopup-item-date'>
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

        <div className='invoice-manager-cloneinvoicepopup-item flex'>
          <p className="invoice-manager-cloneinvoicepopup-item-title">
              Due date
          </p>

          <div className='invoice-manager-cloneinvoicepopup-item-date'>
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

        <div className='invoice-manager-cloneinvoicepopup-item flex'>
            <p className='invoice-manager-cloneinvoicepopup-item-title'>
              Client
            </p>

            <FormControl fullWidth>
                <Select
                  className="invoice-manager-cloneinvoicepopup-item-select"
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

        <div className='invoice-manager-cloneinvoicepopup-item flex'>
            <p className='invoice-manager-cloneinvoicepopup-item-title'>
              Project
            </p>

            <FormControl fullWidth>
                <Select
                  className="invoice-manager-cloneinvoicepopup-item-select"
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

        <div className='invoice-manager-cloneinvoicepopup-item tags'>
          <p className='invoice-manager-cloneinvoicepopup-item-title'>
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

        <div className='invoice-manager-cloneinvoicepopup-item flex'>
            <p className='invoice-manager-cloneinvoicepopup-item-title'>
              Category
            </p>

            <FormControl fullWidth>
                <Select
                  className="invoice-manager-cloneinvoicepopup-item-select"
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

        <div className='invoice-manager-cloneinvoicepopup-btn'>
          <Button className='invoice-manager-cloneinvoicepopup-btn-reset' onClick={handleCancelFilters}>Cancel</Button>

          <Button className='invoice-manager-cloneinvoicepopup-btn-submit' onClick={handleSubmitFilters}>Submit</Button>
        </div>
      </div>

    </div>



  );
}


export default CloneInvoicePopup;
