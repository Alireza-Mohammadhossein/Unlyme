import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import InputContainer from "./components/InputContainer";
import List from "./components/List";
import { v4 as uuid } from "uuid";


import { toast } from "react-toastify";
import store from "./utils/store";
import StoreApi from "./utils/storeApi";



// Sample data for columns and tasks
const dataStorage = JSON.parse(window.localStorage.getItem("tasks"));

const initialState = () => {
  if (dataStorage) {
    return dataStorage;
  } else {
    window.localStorage.setItem("tasks", JSON.stringify(store));
    return store;
  }
};

  
const TasksContent = () => {

  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);



  const [data, setData] = useState(initialState);

  const addMoreCard = (title, description, tags, members, color, listId, imageFile) => {
    if (!title) {
      toast.error('Please write a title!', {
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
      return;
    }
    if (!description) {
      toast.error('Please write description', {
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
      return;
    }

    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
      description,
      tags,
      members,
      color,
      imageFile,
    };

    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
    window.localStorage.setItem("tasks", JSON.stringify(newState));
    
    console.log('data', newState)
  };
  
  const removeCard = (index, listId) => {
    const list = data.lists[listId];

    list.cards.splice(index, 1);

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
    window.localStorage.setItem("tasks", JSON.stringify(newState));
  };

  const updateCard = (title, description, tags, members, color, index, listId, imageFile) => {
    const list = data.lists[listId];
    list.cards[index].title = title;
    list.cards[index].description = description;
    list.cards[index].tags = tags;
    list.cards[index].members = members;
    list.cards[index].color = color;
    list.cards[index].imageFile = imageFile;

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
    window.localStorage.setItem("tasks", JSON.stringify(newState));
  };

  const updateCardDescription = (description, index, listId) => {
    const list = data.lists[listId];
    list.cards[index].description = description;

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
    window.localStorage.setItem("tasks", JSON.stringify(newState));
  };

  const addMoreList = (title) => {
    if (!title) {
      return;
    }

    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: [],
    };
    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    };
    setData(newState);
    window.localStorage.setItem("tasks", JSON.stringify(newState));
  };

  const updateListTitle = (title, listId) => {
    const list = data.lists[listId];
    list.title = title;

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };

    setData(newState);
    window.localStorage.setItem("tasks", JSON.stringify(newState));
  };

  const deleteList = (listId) => {
    const lists = data.lists;
    const listIds = data.listIds;

    delete lists[listId];

    listIds.splice(listIds.indexOf(listId), 1);

    const newState = {
      lists: lists,
      listIds: listIds,
    };

    setData(newState);
    window.localStorage.setItem("tasks", JSON.stringify(newState));
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (type === "list") {
      const newListIds = data.listIds;

      newListIds.splice(source.index, 1);
      newListIds.splice(destination.index, 0, draggableId);

      const newState = {
        ...data,
        listIds: newListIds,
      };
      setData(newState);
      window.localStorage.setItem("tasks", JSON.stringify(newState));

      return;
    }

    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0];

    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      };
      setData(newState);
      window.localStorage.setItem("tasks", JSON.stringify(newState));
    } else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
        },
      };

      setData(newState);
      window.localStorage.setItem("tasks", JSON.stringify(newState));
    }
  };



  return (
    <div className="tasks-page">
      <Grid container spacing={3}>

        <Grid
          item
          // lg={secondPopupTab ? 12 : 9}
          // md={secondPopupTab ? 12 : 9}
          xs={12}
        >
          <div className="tasks-page_main">
            <div className="tasks-page_main_list">

              <StoreApi.Provider
                value={{
                  addMoreCard,
                  addMoreList,
                  updateListTitle,
                  removeCard,
                  updateCard,
                  updateCardDescription,
                  deleteList,
                }}
              >
                <div className="tasks-page_main_list-actions">
                  {/* <InputContainer type="list" /> */}
                  {/* <InputContainer  listId='list-1' type="card" /> */}
                </div>
                
                <DragDropContext onDragEnd={onDragEnd}>
                  <Droppable droppableId="app" type="list" direction="horizontal">
                    {(provided) => (
                      <div
                        className="wrapper"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                        {data.listIds.map((listId, index) => {
                          const list = data.lists[listId];

                          return (
                              <List list={list} key={listId} index={index} />
                          )
                        })}

                        {/* <div>
                          <InputContainer type="list" />
                        </div> */}
                        
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              </StoreApi.Provider>

            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default TasksContent;