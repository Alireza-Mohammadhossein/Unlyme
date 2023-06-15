import React from "react";
import Modal from '@mui/material/Modal';




export default function ViewModal({ 
        title,
        description,
        tags,
        imageFile,
        handleCloseViewModal,
        openViewModal,
    }) {



    
  return (

    <Modal
        open={openViewModal}
        onClose={handleCloseViewModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='backlog-modal'
    >
        <div className='backlog-modal_container view-modal'>

            <div className="backlog-modal_item">
                <p className="view-modal_title">{title}</p>
            </div>

            <div className="backlog-modal_item">
                <p className="view-modal_description">{description}</p>
            </div>

            {tags
                ?
                    <div className="backlog-modal_item">
                        <div className="view-modal_tags">
                            {tags.map((tag) => (
                                <span key={tag} className="view-modal_tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                :
                    ''
            }

            {imageFile 
                ?
                    <div className="backlog-modal_item">
                        <img className="view-modal_image" src={imageFile} alt={title} />
                    </div>
                :
                    ''
            }
        </div>
    </Modal>

  );
}