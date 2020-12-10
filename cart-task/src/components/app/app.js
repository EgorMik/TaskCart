import React, { Component } from 'react';
import './app.css';
import AppHeader from '../app-header';
import ItemAddForm from '../item-add-form';

export default class App extends Component {
  maxId = 100;
  state = {
    cartTask:[]
  };
  createToDoItem(label) {
    return {
      name:'',
      lastName:'',
      email:'',
      from:'',
      to:'',
      type:'',
      text:'',
      check:false,
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

    return(
      <div className="cart-task">
      <AppHeader />
      <ItemAddForm  onItemAdded={this.addItem} />
    </div>
    );
  }

};