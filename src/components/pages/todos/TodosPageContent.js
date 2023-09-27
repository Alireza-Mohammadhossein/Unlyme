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
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';




  
  
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
      setAnchorElMoreOption(event.currentTarget);
    };
    const handleCloseMoreOption = () => {
      setAnchorElMoreOption(null);
    };
    const [selectedMoreOption, setSelectedMoreOption] = useState('');



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

    const [newTaskTitle, setNewTaskTitle] = useState('');



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

    const handleDone = (id) => {
      const updated = todos.map((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
        return todo;
      });
      setTodos(updated);
    };

  
    const [selectedTaskProject, setSelectedTaskProject] = useState('No project');


    const [users, setUsers] = useState(sampleUsers);
    const [userChecked, setUserChecked] = useState([]);

    const handleAssignUser = (value) => () => {
      const currentIndex = userChecked.indexOf(value);
      const newChecked = [...userChecked];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setUserChecked(newChecked);
    };

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
              {
                todos.map((todo) => (
                  <div className="todos-page-main_list-task" key={todo.id}>
                    <Checkbox
                      className="todos-page-main_list-task-checkbox"
                      checked={todo.done}
                      icon={<img src={noCheckedIcon} alt='no checked' />}
                      checkedIcon={<img src={checkedIcon} alt='checked' />}
                      onClick={() => handleDone(todo.id)}
                    />
      
                    <div className="todos-page-main_list-task-title">
                      <p className={`${todo.done ? 'done' : ''}`}>
                        {todo.title}
                      </p>
                    </div>
                    
                    <div className="todos-page-main_list-task-members">
                      <AvatarGroup max={3}>
                          {
                            todo.members ? 
                              todo.members.map((member) => (
                                <Avatar src={member.icon} className="todos-page-main_list-task-members-member" />
                              ))
                            :
                              ''
                          }
                      </AvatarGroup>
                    </div>
      
                    <div className="todos-page-main_list-task-action">
                      <IconButton onClick={handleMoreOptionClick}>
                        <img src={moreIcon} alt="more" />
                      </IconButton>
                    </div>
                  </div>
                ))
              }

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
          <MenuItem onClick={handleCloseMoreOption}>
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

          <MenuItem onClick={handleCloseMoreOption}>
            <Button
              className='todos-page-main_list-task-action-item'
              // onClick={}
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
            </Button>
          </MenuItem>

          <Divider />

          <MenuItem onClick={handleCloseMoreOption}>
            <Button
              className='todos-page-main_list-task-action-item delete'
              // onClick={}
            >
              <span>
                <img src={deleteIcon} alt='Delete' />
                Delete
              </span>
            </Button>
          </MenuItem>

        </Menu>

      </>

    );
  }

  export default TodosPageContent;