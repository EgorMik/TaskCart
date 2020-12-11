import React, { Component } from 'react';
import './app.css';
import AppHeader from '../app-header';
import ItemAddForm from '../item-add-form';
import TaskList from '../task-list/task-list'

export default class App extends Component {
  maxId = 100;
  state = {
    cartTask:[
      // this.createToDoItem('sdlfhksdhfksdf')
    ]
  };
  createToDoItem(firstname,lastname,email,from,to,type,checkbox,comments) {
    
    return {
     firstname,
     lastname,
     email,
     from,
     to,
     type,
     checkbox,
     comments,
       id: this.maxId++
    }
  }
  addItem = (firstname,lastname,email,from,to,type,checkbox,comments) => {
    // generate id
    const newItem = this.createToDoItem(firstname,lastname,email,from,to,type,checkbox,comments);
    
    this.setState(({cartTask}) => {
     const newArr = [
       ...cartTask,
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
      <TaskList carttask = {cartTask} />
      <ItemAddForm  onItemAdded={this.addItem} />
    </div>
    );
  }

};