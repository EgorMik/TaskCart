import React from 'react';
import './task-list.css';
import TaskListItem from '../task-list-item';



const TaskList = ({carttask, onDeleted, onEdit}) => { 
     const elements = carttask.map((item) => { 
       const {id, ...itemProps} = item;
    
       return (
        <li key={id} className="list-group-item">
          <TaskListItem {...itemProps}
           onDeleted ={() => onDeleted(id)} 
           onEdit ={() => onEdit(id)} 
          />
        </li> 
       );
     });
    
  return (
  
  <ul className="list">
  { elements }
  </ul>

    );
  };
  export default TaskList;

  
