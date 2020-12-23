import React, { useState } from 'react';
import './item-add-form.css';


const ItemAddForm = ({onItemAdded}) =>{

const [firstName, setfirstName] = useState('');
const [lastName, setlastName] = useState('');
const [email, setEmail] = useState('');
const [from, setFrom] = useState(Date.now());
const [to, setTo] = useState(Date.now());
const [type, setType] = useState('1');
const [comments, setComments] = useState('');
const [check, setCheck] = useState(false);
const [show, setShow] = useState(false);





const onSubmit = (e) => {
  onItemAdded(firstName,lastName,email,from,to,type,check,comments);
  e.preventDefault(); 
  setfirstName('');
  setlastName('');
  setEmail('');
  setFrom(new Date());
  setTo(new Date());
  setType('');
  setComments('');
  setCheck(false);

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
                type="submit">Add</button>
                
          </form>
          <button className ="form" 
          onClick={() => {
          setShow(!show);}}> 
          Form
          </button>
          </div>
        )
}
export default ItemAddForm;