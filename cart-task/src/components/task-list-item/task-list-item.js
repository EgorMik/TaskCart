import React, { Component } from 'react';
import './task-list-item.css';


export default class TodoListItem extends Component{

  render(){
   
    const {onDeleted} = this.props;

    let classNames = 'todo-list-item';

  
return (
  <span className={ classNames }>
  <span
    className="todo-list-item-label">
  </span>
  <button type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}>

    <i className="fa fa-trash-o" />
  </button>
</span>
);
  }
} 
