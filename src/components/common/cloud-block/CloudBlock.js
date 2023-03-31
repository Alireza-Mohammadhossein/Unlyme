import React, { useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';


const CloudBlock = ({ 
  title,
  iconContainerColor,
  iconName,
  iconAction,
  content,
  mdiIcon,
  mdiIconColor,
  infoContent,
  rightButtonAction,
  rightButtonTitle,
  directComponent
}) => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    overflowY: 'scroll',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
  };
  

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div className="cloud-block">
      <div className="cloud-block__header">
        {(iconName || mdiIcon) && (
          <div
            className={`cloud-block__header_icon-container cloud-block__header_icon-container--${iconContainerColor}`}
            onClick={iconAction || undefined}
            style={{
              backgroundImage: iconName ? `../../../assets/icons/${iconName}.svg)` : '',
              cursor: iconAction ? 'pointer' : 'default',
            }}
          >
            {mdiIcon && <i className="material-icons" style={{ color: mdiIconColor || 'white' }}>{mdiIcon}</i>}
          </div>
        )}
        <div className="cloud-block__header_title">
          {title}
          {infoContent != null && (
            <span className="cloud-block__header_info" onClick={() => alert('s')}>
              i
            </span>
          )}
        </div>
      
        {directComponent != null && (
          <div className="btn btn--blue-text cloud-block__header_btn" onClick={handleOpen}>
            Open
          </div>
        )}
      </div>
      <div className="cloud-block__content">{content}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ maxHeight: '80%', maxWidth: '80%', m: 'auto' }}
      >
        <Box sx={style}>
          <Button
            onClick={handleClose}
            sx={{position: 'sticky', left: '100%', top: '10px', minWidth: '40px'}}
          >
            <i className='material-icons'>
              close
            </i>
          </Button>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {directComponent}
          </Typography>
        </Box>
      </Modal>
    </div>
  ) 
}

export default CloudBlock;
