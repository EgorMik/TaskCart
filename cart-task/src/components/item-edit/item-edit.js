import React, { useState } from 'react';

import './item-edit.css';


const ItemEditForm = ({onEdit, item}) =>{

    const [firstName, setfirstName] = useState(item.firstName);
    const [lastName, setlastName] = useState(item.lastName);
    const [email, setEmail] = useState(item.email);
    const [from, setFrom] = useState(item.from);
    const [to, setTo] = useState(item.to);
    const [type, setType] = useState(item.type);
    const [comments, setComments] = useState(item.comments);
    const [check, setCheck] = useState(item.check);
    const [show, setShow] = useState(show);
    
    
    
    
    
    const onSubmit = (e) => {

      e.preventDefault(); 
      let newTask = {
        id: item.id,  
        firstName: firstName,
        lastName: lastName,
        email: email,
        from: from,
        to: to,
        type: type,
        comments: comments,
        check: check

      }
      onEdit(newTask);
    }
    
    const handleInputChangefirstname = (e) => { 
      setfirstName(e.target.value)
    }
    
    const handleInputChangelastname = (e) =>{
      setlastName(e.target.value)  
    }
    
    
    const handleInputChangeemail = (e) =>{
      setEmail(e.target.value)
    }
    
    const handleInputChangefrom = (e) =>{
      setFrom(e.target.value)
    }
    
    const handleInputChangetype = (e) =>{
      setType(e.target.value)
    }
    
    const handleInputChangecheckbox = (e) =>{
      setCheck(e.target.type === 'checkbox' ? e.target.checked : e.target.value)
    }
    
    const handleInputChangecomments = (e) =>{
      setComments(e.target.value)
    }
    
    const handleInputChangeto = (e) =>{
      setTo(e.target.value)
    }
    
       return(
                <div  className="container">
                <form className= {show ? "open" : null}
                 onSubmit={onSubmit}>
    
                    <label>First name</label>
                    <input type="text" 
                    id="fname"   
                    placeholder="First name" 
                    value={firstName}   
                    onChange={handleInputChangefirstname} />
    
    
                    <label >Last name</label>
                    <input type="text"
                     id="lname"
                     placeholder="Last name" 
                     value={lastName}   
                     onChange={handleInputChangelastname} />
                  
                    <label>Email</label> 
                    <input type="email"  
                    id="Email"  
                    value={email}   
                    onChange={handleInputChangeemail} 
                    placeholder="Email" />
                  
                  
                    <label>From:</label>
                    <input type="date"  
                    id="from" placeholder="Date"  
                    value={from} 
                    onChange={handleInputChangefrom} required/>
                 
                 
                    <label>To</label>
                    <input type="date"  
                    id="to" 
                    placeholder="Date"    
                    value={to} 
                    onChange={handleInputChangeto} required/>
                 
               
               
                    <label>Type</label>
                    <select id="type" 
                    value={type} 
                    onChange={handleInputChangetype} 
                    className="custom-select custom-select-sm">
                    <option>Open this select menu</option>
                    <option value="Developing">Developing</option>
                    <option value="Testing">Testing</option>
                    <option value="Done">Done</option>
                    </select>
    
    
                    <label className="label"> Make report</label>
                    <input className="check" 
                    id="check" 
                    checked={check}  
                    onChange={handleInputChangecheckbox} 
                    type="checkbox"/>
                 
                  
                    <label>Comments</label>
                    <textarea  id="text" 
                    value={comments}  
                    onChange={handleInputChangecomments} 
                    className="form-control"/>
            
                    <button className="button" 
                    type="submit">Save</button>
                    
              </form>
              <button className ="form" 
              onClick={() => {
              setShow(!show);}}> 
              Edit
              </button>
              </div>
            )
    }
    export default ItemEditForm;