import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./todos-page.scss";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from '@mui/material/Checkbox';
import { sampleTodos, sampleProjectsTodos, sampleUsers } from "../../../mocks/mocks";
import { useSelector, useDispatch } from "react-redux";
import { toggleNotePopup, toggleSecondPopupTab } from '../../../redux/app/popupSlice';
import arrowDownIcon from '../../../assets/images/todos/arrow-down.svg';
import checkIcon from '../../../assets/images/todos/check.svg';
import addIcon from '../../../assets/images/todos/plus.svg';
import addBlueIcon from '../../../assets/images/todos/plus-blue.svg';
import eyeIcon from '../../../assets/images/todos/eye.svg';
import editIcon from '../../../assets/images/todos/edit.svg';
import trashIcon from '../../../assets/images/todos/trash.svg';
import sortIcon from '../../../assets/images/todos/sort.svg';
import editGrayIcon from '../../../assets/images/todos/edit-gray.svg';
import moreIcon from '../../../assets/images/todos/more.svg';
import checkedIcon from '../../../assets/images/todos/checked.svg';
import noCheckedIcon from '../../../assets/images/todos/nochecked.svg';
import upToDownIcon from '../../../assets/images/todos/uptodown.svg';
import downToUpIcon from '../../../assets/images/todos/downtoup.svg';
import dueDateIcon from '../../../assets/images/todos/duedate.svg';

import assignIcon from '../../../assets/images/todos/more/assign.svg';
import calendarIcon from '../../../assets/images/todos/more/calendar.svg';
import copyIcon from '../../../assets/images/todos/more/copy.svg';
import duplicateIcon from '../../../assets/images/todos/more/duplicate.svg';
import folderIcon from '../../../assets/images/todos/more/folder.svg';
import helpIcon from '../../../assets/images/todos/more/help.svg';
import indentIcon from '../../../assets/images/todos/more/indent.svg';
import pasteIcon from '../../../assets/images/todos/more/paste.svg';
import plusIcon from '../../../assets/images/todos/more/plus.svg';
import subtaskIcon from '../../../assets/images/todos/more/subtask.svg';
import deleteIcon from '../../../assets/images/todos/more/trash.svg';
import unindentIcon from '../../../assets/images/todos/more/unindent.svg';
import arrowRightIcon from '../../../assets/images/todos/more/arrow-right.svg';
import calendarArrowRightIcon from '../../../assets/images/todos/more/calendar-arrow-right.svg';
import calendarArrowLeftIcon from '../../../assets/images/todos/more/calendar-arrow-left.svg';
import reloadIcon from '../../../assets/images/todos/more/reload.svg';
import checkedUsersIcon from '../../../assets/images/todos/more/check-user.svg';

import InputAdornment from '@mui/material/InputAdornment';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import {
  usePopupState,
  bindHover,
  bindPopover,
} from 'material-ui-popup-state/hooks';
import HoverPopover from 'material-ui-popup-state/HoverPopover';
import { v4 as uuidv4 } from 'uuid';

import Calendar from 'react-calendar';
import FormControlLabel from '@mui/material/FormControlLabel';
import Modal from '@mui/material/Modal';
import { toast } from "react-toastify";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




  
  
  const TodosPageContent = () => {
    
  
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();
    const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);
    
    const [projects, setProjects] = useState(sampleProjectsTodos)
    const [todos, setTodos] = useState(sampleTodos);


    // handle project popup
    const [anchorElProject, setAnchorElProject] = useState(null);
    const openProject = Boolean(anchorElProject);
    const handleProjectClick = (event) => {
      setAnchorElProject(event.currentTarget);
    };
    const handleCloseProject = () => {
      setAnchorElProject(null);
    };
    const [selectedProject, setSelectedProject] = useState(projects[0].name);



    // handle show all popup
    const [anchorElShow, setAnchorElShow] = useState(null);
    const openShow = Boolean(anchorElShow);
    const handleShowClick = (event) => {
      setAnchorElShow(event.currentTarget);
    };
    const handleCloseShow = () => {
      setAnchorElShow(null);
    };
    const [selectedShow, setSelectedShow] = useState('All');


    // handle sort popup
    const [anchorElSort, setAnchorElSort] = useState(null);
    const openSort = Boolean(anchorElSort);
    const handleSortClick = (event) => {
      setAnchorElSort(event.currentTarget);
    };
    const handleCloseSort = () => {
      setAnchorElSort(null);
    };
    const [selectedSort, setSelectedSort] = useState('');


    // handle more option popup
    const [anchorElMoreOption, setAnchorElMoreOption] = useState(null);
    const openMoreOption = Boolean(anchorElMoreOption);
    const handleMoreOptionClick = (event) => {
      console.log('event',event);

      console.log('event target',event.currentTarget);
      setAnchorElMoreOption(event.currentTarget);
    };
    const handleCloseMoreOption = () => {
      setAnchorElMoreOption(null);
    };



    // handle popover
    const dueDatePopupState = usePopupState({
      variant: 'popover',
      popupId: 'dueDatePopover',
    })

    const priorityPopupState = usePopupState({
      variant: 'popover',
      popupId: 'priorityPopover',
    })

    const assignPopupState = usePopupState({
      variant: 'popover',
      popupId: 'assignPopover',
    })

    const movePopupState = usePopupState({
      variant: 'popover',
      popupId: 'movePopover',
    })

   
    // calendar popover
    const [dueDate, setDueDate] = useState(new Date());

    const onChangeDueDate = (newDueDate) => {
      setDueDate(newDueDate);
      console.log(dueDate)
    }



    const [addTask, setAddTask] = useState(false)
    const [addSubtask, setAddSubtask] = useState(false)

    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [newSubtaskTitle, setNewSubtaskTitle] = useState('');



    const handleSubmitNewTask = (e) => {

      if (e.key === 'Enter') {
        const newTask = {
          id: uuidv4(),
          done: false,
          title: newTaskTitle,
        };

        setTodos([...todos, newTask]);

        setAddTask(false);
        setNewTaskTitle('');
        
      }
    }

    const handleSubmitNewSubtask = (e) => {

      if (e.key === 'Enter' && selectedTask && newSubtaskTitle) {
        const newSubtask = {
          id: uuidv4(),
          done: false,
          title: newSubtaskTitle,
        };

        const updatedTodos = todos.map((todo) => {
          if (todo === selectedTask) {
            return {
              ...todo,
              subtask: [...(todo.subtask || []), newSubtask],
            };
          }
          return todo;
        });

        setTodos(updatedTodos);
        setAddSubtask(false);
        setNewSubtaskTitle('');
        setSelectedTask(null);
        
      }
    }
    
    const handleDone = (id) => {
      todos.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        } else if (todo.subtask && todo.subtask.length > 0) {
          todo.subtask.forEach((subtask) => {
            if (subtask.id === id) {
              subtask.done = !subtask.done;
            } else if (subtask.subtask && subtask.subtask.length > 0) {
              subtask.subtask.forEach((nestedSubtask) => {
                if (nestedSubtask.id === id) {
                  nestedSubtask.done = !nestedSubtask.done;
                } else if (nestedSubtask.subtask && nestedSubtask.subtask.length > 0) {
                  nestedSubtask.subtask.forEach((nestedSubtask2) => {
                    if (nestedSubtask2.id === id) {
                      nestedSubtask2.done = !nestedSubtask2.done
                    }
                  })
                }
              });
            }
          });
        }
      });
    
      setTodos([...todos]);
    };

    const handleSubtaskDone = (taskId, subtaskId) => {
      const updated = todos.map((todo) => {
        if (todo.id === taskId) {
          // If todo id matches, find the subtask with the given subtaskId
          todo.subtask = todo.subtask.map((subtask) => {
            if (subtask.id === subtaskId) {
              // If subtask id matches, toggle the done state
              return { ...subtask, done: !subtask.done };
            }
            return subtask;
          });
        }
        return todo;
      });
      setTodos(updated);
    };

  

    const [selectedTaskProject, setSelectedTaskProject] = useState('No project');

    // start selecting assign user
    const [users, setUsers] = useState(sampleUsers);
    const [userChecked, setUserChecked] = useState([]);

    const handleAssignUser = (user) => () => {
      const isUserChecked = userChecked.some((checkedUser) => checkedUser.id === user.id);
      const newChecked = [...userChecked];
    
      if (!isUserChecked) {
        newChecked.push(user);
      } else {
        const indexToRemove = newChecked.findIndex((checkedUser) => checkedUser.id === user.id);
        newChecked.splice(indexToRemove, 1);
      }
    
      setUserChecked(newChecked);

      console.log('userChecked',userChecked)
    };


    const [selectedTask, setSelectedTask] = useState([]);

    // start delete invoice popup
    const [deleteTaskPopup, setDeleteTaskPopup] = useState(false);
    const handleOpenDeleteTaskPopup = () => {
      // setDeleteTaskId(id);
      setDeleteTaskPopup(true)
    };
    const handleCloseDeleteTaskPopup = () => {
      setSelectedTask([]);
      setDeleteTaskPopup(false)
    };
    // end delete Task popup


    // count number of done subtasks
    function countDoneSubtasks(subtasks) {
      return subtasks.reduce((doneTasksNumber, subtask) => {
        if (subtask.done) {
          return doneTasksNumber + 1;
        }
        return doneTasksNumber;
      }, 0);
    }




    const RenderTodo = ({todos}) => {
      
      return(
        todos.map((todo) => (
          todo.subtask ?
            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<img src={arrowRightIcon} />}
                aria-controls="panel1a-content"
                className="accordion-summary"
                style={{height: 'auto'}}
              >
                <div className="todos-page-main_list-task" key={todo.id} style={{minHeight: todo.duedate ? '68px' : '50px'}}>
                  <div className="todos-page-main_list-task-info">
                    <Checkbox
                      className="todos-page-main_list-task-info-checkbox"
                      checked={todo.done}
                      icon={<img src={noCheckedIcon} alt='no checked' />}
                      checkedIcon={<img src={checkedIcon} alt='checked' />}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDone(todo.id);
                      }}
                    />
      
                    <div className="todos-page-main_list-task-info-title">
                      <p className={`${todo.done ? 'done' : ''}`}>
                        {todo.title}
                      </p>

                      {
                        todo.duedate ?
                          <span className="todos-page-main_list-task-info-title-date">
                            <img src={dueDateIcon} alt='due date' />
                            
                            {todo.duedate.date} at {todo.duedate.time}
                          </span>
                        :
                          ''
                      }


                    </div>

                    <div className="todos-page-main_list-task-info-numbers">
                      {countDoneSubtasks(todo.subtask)} / {todo.subtask.length}
                    </div>
                    
                    {
                      todo.members ?
                        <div className="todos-page-main_list-task-info-members">
                          <AvatarGroup max={3}>
                              {
                                todo.members ? 
                                  todo.members.map((member) => (
                                    <Avatar src={member.icon} className="todos-page-main_list-task-info-members-member" />
                                  ))
                                :
                                  ''
                              }
                          </AvatarGroup>
                        </div>
                      :
                        ''
                    }
      
                    <div className="todos-page-main_list-task-info-action">
                      <IconButton onClick={(e) => {
                        e.stopPropagation();
                        setSelectedTask(todo)
                        handleMoreOptionClick(e)
                      }}>
                        <img src={moreIcon} alt="more" />
                      </IconButton>
                    </div>
                  </div>

                  {
                    addSubtask && selectedTask.id === todo.id ? 
                      <div className="todos-page-main_list-task-input">
                        <TextField
                          autoFocus
                          // onBlur={() => {
                          //   setAddSubtask(false)
                          //   setSelectedTask(null)
                          // }}
                          onClick={(e) => e.stopPropagation()}
                          value={newSubtaskTitle}
                          onKeyDown={handleSubmitNewSubtask}
                          onChange={(e) => setNewSubtaskTitle(e.target.value)}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <img src={editGrayIcon} alt="Edit Icon" />
                              </InputAdornment>
                            ),
                          }}
                          placeholder='Enter a description' />
                      </div>
                    :
                      ''
                  }
                </div>

              </AccordionSummary>
              
              <AccordionDetails className="accordion-details">
                {todo.subtask && todo.subtask.length > 0 && (
                  <RenderTodo todos={todo.subtask} />
                )}
              </AccordionDetails>

              {/* {todo.subtask && todo.subtask.length > 0 && <RenderTask todos={todo.subtask} />} */}
              {/* {todo.subtask.subtask && todo.subtask.subtask.length > 0 && <RenderTask todos={todo.subtask} />} */}

            </Accordion>
          :
            <>
              <div className="todos-page-main_list-task" key={todo.id} style={{minHeight: todo.duedate ? '68px' : '50px'}}>
                <div className="todos-page-main_list-task-info">
                  <Checkbox
                    className="todos-page-main_list-task-info-checkbox"
                    checked={todo.done}
                    icon={<img src={noCheckedIcon} alt='no checked' />}
                    checkedIcon={<img src={checkedIcon} alt='checked' />}
                    onClick={() => handleDone(todo.id)}
                  />
    
                  <div className="todos-page-main_list-task-info-title">
                    <p className={`${todo.done ? 'done' : ''}`}>
                      {todo.title}
                    </p>

                    {
                      todo.duedate ?
                        <span className="todos-page-main_list-task-info-title-date">
                          <img src={dueDateIcon} alt='due date' />

                          {todo.duedate.date} at {todo.duedate.time}
                        </span>
                      :
                        ''
                    }
                  </div>
                  
                  <div className="todos-page-main_list-task-info-members">
                    <AvatarGroup max={3}>
                        {
                          todo.members ? 
                            todo.members.map((member) => (
                              <Avatar src={member.icon} className="todos-page-main_list-task-info-members-member" />
                            ))
                          :
                            ''
                        }
                    </AvatarGroup>
                  </div>
    
                  <div className="todos-page-main_list-task-info-action">
                    <IconButton onClick={(e) => {
                      setSelectedTask(todo)
                      handleMoreOptionClick(e)
                    }}>
                      <img src={moreIcon} alt="more" />
                    </IconButton>
                  </div>
                </div>

                {
                  addSubtask && selectedTask.id === todo.id ? 
                    <div className="todos-page-main_list-task-input">
                      <TextField
                        autoFocus
                        // onBlur={() => {
                        //   setAddSubtask(false)
                        //   setSelectedTask(null)
                        // }}
                        value={newSubtaskTitle}
                        onKeyDown={handleSubmitNewSubtask}
                        onChange={(e) => setNewSubtaskTitle(e.target.value)}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <img src={editGrayIcon} alt="Edit Icon" />
                            </InputAdornment>
                          ),
                        }}
                        placeholder='Enter a description' />
                    </div>
                  :
                    ''
                }

              </div>
            </>  
        ))
      )
    }


    

    return (
      <>
        <div className="todos-page">
          <div className="todos-page-main">
            
            <div className="todos-page-main_header">
              <div className="todos-page-main_header-filter">
                <div className="todos-page-main_header-filter-project">
                  <Button
                    onClick={handleProjectClick}
                    // startIcon={<AddIcon />}
                  >
                    {selectedProject}

                    <img src={arrowDownIcon} alt='arrow down' />
                  </Button>


                  <Menu
                    id="todos-project-popup"
                    anchorEl={anchorElProject}
                    open={openProject}
                    onClose={handleCloseProject}
                    disableScrollLock = {true}
                  >
                    {
                      projects.map((project) => (
                        <MenuItem onClick={handleCloseProject} key={project.id}>
                          <Button
                            className={`todos-page-main_header-filter-project-btn ${selectedProject === project.name ? 'selected' : ''}`}
                            onClick={() => setSelectedProject(project.name)}
                          >
                            {project.name}

                            {
                              selectedProject === project.name ? <img src={checkIcon} /> : ''
                            }
                          </Button>
                        </MenuItem>
                      ))
                    }

                  </Menu>
                </div>
                
                <div className="todos-page-main_header-filter-actions">
                  <Button className="todos-page-main_header-filter-actions-btn">
                    <img src={addIcon} />
                    Add New
                  </Button>

                  <Button className="todos-page-main_header-filter-actions-btn" onClick={handleShowClick}>
                    <img src={eyeIcon} />
                    Show {selectedShow}
                  </Button>

                  <Menu
                    id="todos-show-popup"
                    anchorEl={anchorElShow}
                    open={openShow}
                    onClose={handleCloseShow}
                    disableScrollLock = {true}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                  >
                    <MenuItem onClick={handleCloseShow}>
                      <Button
                        className='todos-page-main_header-filter-project-btn'
                        onClick={() => setSelectedShow('All')}
                      >
                        All
                      </Button>
                    </MenuItem>

                    <MenuItem onClick={handleCloseShow}>
                      <Button
                        className='todos-page-main_header-filter-project-btn'
                        onClick={() => setSelectedShow('Active')}
                      >
                        Active
                      </Button>
                    </MenuItem>
                    
                    <MenuItem onClick={handleCloseShow}>
                      <Button
                        className='todos-page-main_header-filter-project-btn'
                        onClick={() => setSelectedShow('Completed')}
                      >
                        Completed
                      </Button>
                    </MenuItem>
                  </Menu>



                  <Button className="todos-page-main_header-filter-actions-btn">
                    <img src={editIcon} />
                    Rename
                  </Button>

                  <Button className="todos-page-main_header-filter-actions-btn">
                    <img src={trashIcon} />
                    Delete
                  </Button>
                </div>
              </div>

              <div className="todos-page-main_header-task">
                <div className="todos-page-main_header-task-add">
                  <Button className="todos-page-main_header-task-add-btn" onClick={() => setAddTask(!addTask)}>
                    <img src={addBlueIcon} />
                    Add Task
                  </Button>
                </div>

                <div className="todos-page-main_header-task-sort">
                  <Button className="todos-page-main_header-task-sort-btn" onClick={handleSortClick}>
                    <img src={sortIcon} />
                    Sort by
                  </Button>


                  <Menu
                    id="todos-sort-popup"
                    anchorEl={anchorElSort}
                    open={openSort}
                    onClose={handleCloseSort}
                    disableScrollLock = {true}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                  >
                    <MenuItem onClick={handleCloseSort}>
                      <Button
                        className='todos-page-main_header-task-sort-item'
                        onClick={() => setSelectedSort('text a to z')}
                      >
                        <img src={downToUpIcon} alt='down to up' />
                        Text (a-z)
                      </Button>
                    </MenuItem>

                    <MenuItem onClick={handleCloseSort}>
                      <Button
                        className='todos-page-main_header-task-sort-item'
                        onClick={() => setSelectedSort('text z to a')}
                      >
                        <img src={upToDownIcon} alt='down to up' />
                        Text (z-a)
                      </Button>
                    </MenuItem>

                    <MenuItem onClick={handleCloseSort}>
                      <Button
                        className='todos-page-main_header-task-sort-item'
                        onClick={() => setSelectedSort('priority low to high')}
                      >
                        <img src={downToUpIcon} alt='down to up' />
                        Priority (low to high)
                      </Button>
                    </MenuItem>

                    <MenuItem onClick={handleCloseSort}>
                      <Button
                        className='todos-page-main_header-task-sort-item'
                        onClick={() => setSelectedSort('priority high to low')}
                      >
                        <img src={upToDownIcon} alt='up to down' />
                        Priority (high to down)
                      </Button>
                    </MenuItem>

                    <MenuItem onClick={handleCloseSort}>
                      <Button
                        className='todos-page-main_header-task-sort-item'
                        onClick={() => setSelectedSort('due date old to new')}
                      >
                        <img src={downToUpIcon} alt='down to up' />
                        Due date (old to new)
                      </Button>
                    </MenuItem>

                    <MenuItem onClick={handleCloseSort}>
                      <Button
                        className='todos-page-main_header-task-sort-item'
                        onClick={() => setSelectedSort('due date new to old')}
                      >
                        <img src={upToDownIcon} alt='up to down' />
                        Due date (new to old)
                      </Button>
                    </MenuItem>
                  </Menu>
                </div>
              </div>

              {
                addTask ? 
                  <div className="todos-page-main_header-input">
                    <TextField
                      autoFocus
                      // onBlur={() => setAddTask(false)}
                      value={newTaskTitle}
                      onKeyDown={handleSubmitNewTask}
                      onChange={(e) => setNewTaskTitle(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <img src={editGrayIcon} alt="Edit Icon" />
                          </InputAdornment>
                        ),
                      }}
                      placeholder='Enter a description' />
                  </div>
                :
                  ''
              }
            </div>
            
            <div className="todos-page-main_list">
              <RenderTodo todos={todos} />

            </div>
          </div>
        </div>

        <Menu
          id="todos-more-option-popup"
          anchorEl={anchorElMoreOption}
          open={openMoreOption}
          onClose={handleCloseMoreOption}
          disableScrollLock = {true}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={() => {
            handleCloseMoreOption()
          }}>
            <Button
              className='todos-page-main_list-task-action-item'
              // onClick={}
            >
              <span>
                <img src={plusIcon} alt='Add task below' />
                Add task below
              </span>
            </Button>
          </MenuItem>

          <MenuItem>
            <Button
              className='todos-page-main_list-task-action-item'
              onClick={() => {
                handleCloseMoreOption()
                setAddSubtask(!addSubtask)
              }}
            >
              <span>
                <img src={subtaskIcon} alt='Add subtask' />
                Add subtask
              </span>
            </Button>
          </MenuItem>

          <Divider />
          
          <MenuItem onClick={handleCloseMoreOption}>
            <Button
              className='todos-page-main_list-task-action-item'
              // onClick={}
            >
              <span>
                <img src={indentIcon} alt='Indent' />
                Indent
              </span>
            </Button>
          </MenuItem>
          
          <MenuItem onClick={handleCloseMoreOption}>
            <Button
              className='todos-page-main_list-task-action-item'
              // onClick={}
            >
              <span>
                <img src={unindentIcon} alt='Unindent' />
                Unindent
              </span>
            </Button>
          </MenuItem>

          <MenuItem {...bindHover(dueDatePopupState)} disableRipple>
            <Button
              className='todos-page-main_list-task-action-item'
              disableRipple
              // onClick={}
            >
              <span>
                <img src={calendarIcon} alt='Set due date' />
                Set due date
              </span>
              
              <span>
                <img src={arrowRightIcon} />
              </span>
            </Button>

            <HoverPopover
              className="todos-more-option-submenu"
              {...bindPopover(dueDatePopupState)}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <div className="todos-more-option-submenu-calendar">
                <Calendar
                  onChange={onChangeDueDate}
                  value={dueDate}
                  nextLabel= {<img src={calendarArrowRightIcon} />}
                  prevLabel= {<img src={calendarArrowLeftIcon} />}
                  formatShortWeekday={(locale, date) => [ `S`, `M`, `T`, `W`, `T`, `F`, `S` ][date.getDay()]}
                />

                <Divider />

                <div className="todos-more-option-submenu-calendar-actions">
                  <Button className="todos-more-option-submenu-calendar-actions-cancel" onClick={dueDatePopupState.close}>Cancel</Button>
                  <Button className="todos-more-option-submenu-calendar-actions-save" onClick={dueDatePopupState.close}>Save</Button>
                </div>
              </div>
            </HoverPopover>
          </MenuItem>

          <MenuItem {...bindHover(priorityPopupState)} disableRipple>
            <Button
              className='todos-page-main_list-task-action-item'
              disableRipple
              // onClick={}
            >
              <span>
                <img src={helpIcon} alt='Priority' />
                Priority
              </span>

              <span>
                <img src={arrowRightIcon} />
              </span>
            </Button>

            <HoverPopover
              className="todos-more-option-submenu"
              {...bindPopover(priorityPopupState)}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <div className="todos-more-option-submenu-priority">
                <div className="todos-more-option-submenu-priority-item">
                  <Button className="todos-more-option-submenu-priority-item-btn" onClick={priorityPopupState.close} >
                    <span className="circle low"></span>
                    <p>Low</p>
                  </Button>
                </div>
                
                <div className="todos-more-option-submenu-priority-item">
                  <Button className="todos-more-option-submenu-priority-item-btn" onClick={priorityPopupState.close} >
                    <span className="circle medium"></span>
                    <p>Medium</p>
                  </Button>
                </div>
                
                <div className="todos-more-option-submenu-priority-item">
                  <Button className="todos-more-option-submenu-priority-item-btn" onClick={priorityPopupState.close} >
                    <span className="circle high"></span>
                    <p>High</p>
                  </Button>
                </div>

                <Divider />

                <div className="todos-more-option-submenu-priority-item">
                  <Button className="todos-more-option-submenu-priority-item-btn reset" onClick={priorityPopupState.close} >
                    <img src={reloadIcon} alt="reset priority" />
                    <p>Reset priority</p>
                  </Button>
                </div>

              </div>
            </HoverPopover>
          </MenuItem>

          <MenuItem {...bindHover(assignPopupState)} disableRipple>
            <Button
              className='todos-page-main_list-task-action-item'
              disableRipple
              // onClick={}
            >
              <span>
                <img src={assignIcon} alt='Assign to' />
                Assign to
              </span>

              <span>
                <img src={arrowRightIcon} />
              </span>
            </Button>

            <HoverPopover
              className="todos-more-option-submenu"
              {...bindPopover(assignPopupState)}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <div className="todos-more-option-submenu-assign">

                {
                  users.map((user) => (
                    <div
                      className="todos-more-option-submenu-assign-item"
                      key={user.id}
                      style={{backgroundColor: userChecked.findIndex((checkedUser) => checkedUser.id === user.id) !== -1 ? 'rgba(81, 163, 255, 0.05)' : '' }}
                    >
                      <FormControlLabel

                        control={
                          <Checkbox
                            checked={userChecked.findIndex((checkedUser) => checkedUser.id === user.id) !== -1}
                            icon={<></>}
                            checkedIcon={<img src={checkedUsersIcon} alt='checked' />}
                            onChange={handleAssignUser(user)}
                          />
                        }

                        label={
                          <div>
                            <img src={user.image} alt={user.name} />

                            <p>{user.name}</p>
                          </div>
                        }
                      />
                    </div>
                  ))
                }
              </div>
            </HoverPopover>
          </MenuItem>

          <MenuItem {...bindHover(movePopupState)} disableRipple>
            <Button
              className='todos-page-main_list-task-action-item'
              disableRipple
              // onClick={}
            >
              <span>
                <img src={folderIcon} alt='Move to' />
                Move to
              </span>

              <span>
                <img src={arrowRightIcon} />
              </span>
            </Button>

            <HoverPopover
              className="todos-more-option-submenu"
              {...bindPopover(movePopupState)}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <div className="todos-more-option-submenu-move">
                <div className="todos-more-option-submenu-move-item">
                  <Button
                    className={`todos-more-option-submenu-move-item-btn ${selectedTaskProject === 'No project' ? 'active' : ''}`}
                    onClick={() => {
                      movePopupState.close()
                      setSelectedTaskProject('No project')
                    }} 
                  >
                    No project

                    {
                      selectedTaskProject === 'No project' ? <img src={checkIcon} /> : ''
                    }
                  </Button>
                </div>

                <div className="todos-more-option-submenu-move-item">
                  <Button
                    className={`todos-more-option-submenu-move-item-btn ${selectedTaskProject === 'Project one' ? 'active' : ''}`}
                    onClick={() => {
                      movePopupState.close()
                      setSelectedTaskProject('Project one')
                    }}
                  >
                    Project one

                    {
                      selectedTaskProject === 'Project one' ? <img src={checkIcon} /> : ''
                    }
                  </Button>
                </div>

                <div className="todos-more-option-submenu-move-item">
                  <Button
                    className={`todos-more-option-submenu-move-item-btn ${selectedTaskProject === 'Project two' ? 'active' : ''}`}
                    onClick={() => {
                      movePopupState.close()
                      setSelectedTaskProject('Project two')
                    }} 
                  >
                    Project two

                    {
                      selectedTaskProject === 'Project two' ? <img src={checkIcon} /> : ''
                    }
                  </Button>
                </div>

                <div className="todos-more-option-submenu-move-item">
                  <Button
                    className={`todos-more-option-submenu-move-item-btn ${selectedTaskProject === 'Project three' ? 'active' : ''}`}
                    onClick={() => {
                      movePopupState.close()
                      setSelectedTaskProject('Project three')
                    }} 
                  >
                    Project three

                    {
                      selectedTaskProject === 'Project three' ? <img src={checkIcon} /> : ''
                    }
                  </Button>
                </div>
              </div>
            </HoverPopover>
          </MenuItem>

          <MenuItem onClick={handleCloseMoreOption}>
            <Button
              className='todos-page-main_list-task-action-item'
              // onClick={}
            >
              <span>
                <img src={duplicateIcon} alt='Duplicate' />
                Duplicate
              </span>

              <span style={{color: '#B4B4B4'}}>
                Ctrl + D
              </span>
            </Button>
          </MenuItem>
          
          <MenuItem onClick={handleCloseMoreOption}>
            <Button
              className='todos-page-main_list-task-action-item'
              // onClick={}
            >
              <span>
                <img src={copyIcon} alt='Copy' />
                Copy
              </span>

              <span style={{color: '#B4B4B4'}}>
                Ctrl + C
              </span>
            </Button>
          </MenuItem>

          <MenuItem onClick={handleCloseMoreOption}>
            <Button
              className='todos-page-main_list-task-action-item'
              // onClick={}
            >
              <span>
                <img src={pasteIcon} alt='Paste' />
                Paste
              </span>

              <span style={{color: '#B4B4B4'}}>
                Ctrl + V
              </span>
            </Button>
          </MenuItem>

          <Divider />

          <MenuItem onClick={handleCloseMoreOption}>
            <Button
              className='todos-page-main_list-task-action-item delete'
              onClick={(e) => {
                handleOpenDeleteTaskPopup()
              }}
            >
              <span>
                <img src={deleteIcon} alt='Delete' />
                Delete
              </span>
            </Button>
          </MenuItem>

        </Menu>

        <Modal
          open={deleteTaskPopup}
          onClose={() => handleCloseDeleteTaskPopup()}
          className='todos-page-modal'
        >
          <div className='todos-deletepopup'>
            <div className='todos-deletepopup-header'>
              <div className='todos-deletepopup-header-title'>
                <p>Delete Task</p>
              </div>

              <div className='todos-deletepopup-header-subtitle'>
                <p>This task will be deleted permanently. Are you sure?</p>
              </div>
            </div>

            <div className='todos-deletepopup-content'>
              <div className='todos-deletepopup-content-btn'>
                  <Button onClick={() => handleCloseDeleteTaskPopup(false)}>
                      Cancel
                  </Button>
              </div>

              <div className='todos-deletepopup-content-btn'>
                  <Button onClick={() => {
                    toast.error(`You have clicked on Delete invoice by id = ${selectedTask.id}!`, {
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
                    handleCloseDeleteTaskPopup(false);
                    }}>
                      Delete
                  </Button>
              </div>
            </div>
          </div>
        </Modal>
        

      </>

    );
  }

  export default TodosPageContent;