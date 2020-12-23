import React, { useState } from 'react';
import './app.css';
import AppHeader from '../app-header';
import ItemAddForm from '../item-add-form';
import TaskList from '../task-list/task-list'

const App = () => {
  let maxId = 100;
  const [todoData, setTodoData] = useState([]);
  

  const createToDoItem = (firstname,lastname,email,from,to,type,checkbox,comments) => {
    return {
     firstname,
     lastname,
     email,
     from,
     to,
     type,
     checkbox,
     comments,
     id: maxId++
    }
  };


  const addItem = (firstname,lastname,email,from,to,type,checkbox,comments) => {
  const newItem = createToDoItem(firstname,lastname,email,from,to,type,checkbox,comments);
  let newArr = [...todoData, newItem];
  setTodoData(newArr);
  };
    


  const deleteItem = (id) => {
  const idx = todoData.findIndex((el) => el.id === id);
  const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
  setTodoData(newArray)
  };
       
  return(
    <div className="cart-task">
      <AppHeader />
      <TaskList 
      carttask = {todoData}
      onDeleted={deleteItem} />
      <ItemAddForm  onItemAdded={addItem} />
    </div>
    );
  

};

export default App;