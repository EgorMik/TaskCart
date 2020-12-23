import React, { useState } from 'react';
import './task-list-item.css';

const TodoListItem = ({onDeleted, ...itemProps}) => {
  const [show, setShow] = useState(true);

  const {firstname, lastname, email, from, to, type, checkbox, comments} = itemProps;
 
return (
        <div  className="tasks">
        <span><i>Here is task of</i> <b>{firstname}</b></span>

        <div className= {show ? "open" : null}>
        <ul classnme="show">

        <label><b>First name</b></label>
        <li><span className="todo-list-item-label">
        {firstname}
        </span>
        </li>

        <label><b>Last name</b></label>
        <li><span
        className="todo-list-item-label">
        {lastname}    
        </span>
        </li>

        <label><b>Email</b></label>
        <li><span
        className="todo-list-item-label">
        {email}
        </span>
        </li>

        <label><b>From</b></label>
        <li><span
        className="todo-list-item-label">
        {from}
        </span>
        </li>

        <label><b>To</b></label>
        <li><span
        className="todo-list-item-label">
        {to}
        </span>
        </li>

        <label><b>Type</b></label>
        <li><span 
        className="todo-list-item-label"> 
        {type}
        </span>
        </li> 

        <label><b>Checkbox</b></label>
        <li><span
        className="todo-list-item-label">
        {checkbox}      
        </span>
        </li>

        <label><b>Comments</b></label>
        <li><span
        className="todo-list-item-label">
        {comments}
        </span>
        </li>
        </ul>
        </div>

        <button className="button"
        onClick={onDeleted}> 
        Delete
        </button>

        <button 
        className="button"
        onClick={() => {
        setShow(!show);}}>
        Show task</button>

      </div>
);
  }
 
export default TodoListItem;