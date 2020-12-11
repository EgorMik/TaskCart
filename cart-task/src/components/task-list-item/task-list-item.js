import React, { Component } from 'react';
import './task-list-item.css';


export default class TodoListItem extends Component{
state={
    show : true
}
hideText = () =>{
    this.setState({show: !this.state.show});
};
  render(){
   
    const {firstname, lastname, email, from, to, type, checkbox, comments} = this.props;



    let show;
    if (this.state.show) {
         show = {
            display: "none"}
        
    }
 
    let t;
   if (type==='1'){
t = "Developing"
   };
   if (type==='2'){
     t = "Testing"
       };
       if (type==='3'){
         t = "Done"
           };
           let s; 
 if (checkbox){
s = "Make report";
 }
return (
  <span >
      <span><i>Here is task of</i> <b>{ firstname}</b></span>
  <ul classnme="show" style={show}>
  <label><b>First name</b></label>
  <li>  <span
    className="todo-list-item-label">
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
        {t}
   </span>
  </li> 
  <label><b>Checkbox</b></label>
  <li><span
    className="todo-list-item-label">
        {s}
        
  </span>
  </li>
  <label><b>Comments</b></label>
  <li><span
    className="todo-list-item-label">
        {comments}
        
  </span>
  </li>
  <button type="button"
          className="btn btn-outline-danger btn-sm float-right"
          >

    <i className="fa fa-trash-o" />
  </button>
  </ul>
  <button onClick={this.hideText}>Show task</button>
</span>

);
  }
} 
