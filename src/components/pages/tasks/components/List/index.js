import React, {useState} from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Title from "../Title";
import Card from "../Card";
import InputContainer from "../InputContainer";
import Collapse from '@mui/material/Collapse';




export default function List({ list, index }) {
  const [collapse, setCollapse] = useState(true);
  const collapseColumns = () => {
    setCollapse(!collapse);
  }


  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided) => (
        <div {...provided.draggableProps} ref={provided.innerRef}>
          <div className="list-cards" {...provided.dragHandleProps}>
            {/* <div className="title-list">
              <Title title={list.title} listId={list.id} collapseColumns={collapseColumns} collapse={collapse} />
            </div> */}

            {list.id === 'list-1' ?
                <InputContainer listId={list.id} type="list" />
              :
              <div className="title-list">
                <Title title={list.title} listId={list.id} collapseColumns={collapseColumns} collapse={collapse} />
              </div>
            }
            <Collapse in={collapse} timeout="auto" unmountOnExit>
              <div className="container-cards">
                <Droppable droppableId={list.id} type="task">
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="card-container"
                    >
                      {list.cards.map((card, index) => (
                        <Card
                          key={card.id}
                          card={card}
                          index={index}
                          listId={list.id}
                        />
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
              
              {/* 
              {list.id === 'list-1' ?
                <InputContainer listId={list.id} type="card" />
              :
                ''
              } */}

              <InputContainer listId={list.id} type="card" />

            </Collapse>
          </div>
        </div>
      )}
    </Draggable>
  );
}