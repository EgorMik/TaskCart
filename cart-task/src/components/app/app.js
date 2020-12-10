import React, { Component } from 'react';
import './app.css';
import AppHeader from '../app-header';


export default class App extends Component {

  render() {

    return(
      <div className="todo-app">
      <AppHeader />
    </div>
    );
  }

};