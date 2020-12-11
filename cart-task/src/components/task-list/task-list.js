import React from 'react';
import './task-list.css';
import TaskListItem from '../task-list-item';

const TaskList = ({carttask}) => { 
     const elements = carttask.map((item) => { 
       const {id, ...itemProps} = item;
    
       return (
        <li key={id} className="list-group-item">
          <TaskListItem {...itemProps}
          />
        </li> 
       );
     });
  return (
     
  <ul className="list-group todo-list">
     
  { elements }
  </ul>
 
      );
      
  };
  export default TaskList;