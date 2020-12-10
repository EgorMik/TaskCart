import React, { Component } from 'react';
import './app.css';
import AppHeader from '../app-header';
import ItemAddForm from '../item-add-form';
import TaskList from '../task-list/task-list'

export default class App extends Component {
  maxId = 100;
  state = {
    cartTask:[]
  };
  createToDoItem(state) {
    return {
      firstname:state.firstname,
      lastName:state.lastname,
      email:state.email,
      from:state.from,
      to:state.to,
      type:state.type,
      text:state.text,
      check:state.check,
      id: this.maxId++
    }
  }
  addItem = (text) => {
    // generate id
    const newItem = this.createToDoItem(text);
    
    this.setState(({ cartTask}) => {
     const newArr = [
       ... cartTask,
       newItem
     ];
     return {
      cartTask:newArr
     };
    });
      };
  render() {
    const {cartTask} = this.state;
    return(
      <div className="cart-task">
      <AppHeader />
      <TaskList/>
      <ItemAddForm  onItemAdded={this.addItem} />
    </div>
    );
  }

};