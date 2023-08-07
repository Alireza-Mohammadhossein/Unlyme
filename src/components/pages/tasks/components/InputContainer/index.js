import React, { useState } from "react";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Button from '@mui/material/Button';
import AddModal from "../Modals/AddModal";
import AddList from "../Modals/AddList";
import AddIcon from "@mui/icons-material/Add";





export default function InputContainer({ listId, type }) {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openAddListModal, setOpenAddListModal] = useState(false);
  const handleOpenAddModal = () => setOpenAddModal(true);
  const handleCloseAddModal = () => setOpenAddModal(false);
  
  const handleOpenAddListModal = () => setOpenAddListModal(true);
  const handleCloseAddListModal = () => setOpenAddListModal(false);


  return (
    <div className="input-container" style={{height: '55px'}}>
      {/* <Collapse in={open}>
        <InputCard setOpen={setOpen} listId={listId} type={type} />
      </Collapse> */}
      {/* <Collapse in={!open}> */}
        <div className="input-content">
            {type === "card"
              ? 
                <Button
                  className="add-backlog-btn"
                  startIcon={<AddIcon />}
                  // onClick={() => setOpen(!open)}
                  onClick={handleOpenAddModal}
                >
                  Add New Card
                </Button>
              : 
                <Button
                  className="add-backlog-btn list"
                  startIcon={<AddIcon />}
                  // onClick={() => setOpen(!open)}
                  onClick={handleOpenAddListModal}
                >
                  Add list
                </Button>
            }
        </div>
        
        <AddModal
          listId={listId}
          // type={type}
          type='card'
          handleCloseAddModal={handleCloseAddModal} 
          handleOpenAddModal={handleOpenAddModal} 
          openAddModal={openAddModal} 
          setOpenAddModal={setOpenAddModal}
        />

        <AddList
          listId={listId}
          // type={type}
          type='list'
          handleCloseAddListModal={handleCloseAddListModal} 
          handleOpenAddListModal={handleOpenAddListModal} 
          openAddListModal={openAddListModal} 
          setOpenAddListModal={setOpenAddListModal}
        />
      {/* </Collapse> */}
    </div>
  );
}