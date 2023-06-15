import React, { useState } from "react";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Button from '@mui/material/Button';
import AddModal from "../Modals/AddModal";




export default function InputContainer({ listId, type }) {
  const [openAddModal, setOpenAddModal] = useState(false);
  const handleOpenAddModal = () => setOpenAddModal(true);
  const handleCloseAddModal = () => setOpenAddModal(false);


  return (
    <div className="input-container">
      {/* <Collapse in={open}>
        <InputCard setOpen={setOpen} listId={listId} type={type} />
      </Collapse> */}
      {/* <Collapse in={!open}> */}
        <div className="input-content">
            {type === "card"
              ? 
                <Button
                  className="add-backlog-btn"
                  startIcon={<AddCircleOutlineOutlinedIcon />}
                  // onClick={() => setOpen(!open)}
                  onClick={handleOpenAddModal}
                >
                  Add Backlog
                </Button>
              : 
                "+ Add List"
            }
        </div>
        
        <AddModal
          listId={listId}
          type={type}
          handleCloseAddModal={handleCloseAddModal} 
          handleOpenAddModal={handleOpenAddModal} 
          openAddModal={openAddModal} 
          setOpenAddModal={setOpenAddModal}
        />
      {/* </Collapse> */}
    </div>
  );
}