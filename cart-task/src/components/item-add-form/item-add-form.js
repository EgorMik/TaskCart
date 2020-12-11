import React, {Component} from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
state = {
    firstname:'',
    lastName:'',
    email:'',
    from:'',
    to:'',
    type:'',
    comments:'',
    check:false,
    show : true
}
onSubmit = (e) => {
    this.props.onItemAdded(this.state.firstname,this.state.lastname,this.state.email,this.state.from,this.state.to,this.state.type,this.state.checkbox,this.state.comments,);
    this.setState({
    firstname:'',
     lastname:'',
     email:'',
     from:'',
     to:'',
    type:'',
    comments:'',
    check:false
    })
    e.preventDefault(); 
}
handleInputChangefirstname = (e) =>{
   
    this.setState({
        firstname: e.target.value,
    });
}
handleInputChangelastname = (e) =>{
   
    this.setState({
        lastname: e.target.value,
    
    });
}
handleInputChangeemail = (e) =>{
   
    this.setState({
        email: e.target.value,
    });
}
handleInputChangefrom = (e) =>{
   
    this.setState({
        from: e.target.value,
    });
}
handleInputChangetype = (e) =>{
   
    this.setState({
        type: e.target.value,
    });
}
handleInputChangecheckbox = (e) =>{
   
    this.setState({
        checkbox: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    });
}
handleInputChangecomments = (e) =>{
   
    this.setState({
        comments: e.target.value,
    });
}
handleInputChangeto = (e) =>{
   
    this.setState({
        to: e.target.value,
    });
}
hideText = () =>{
    this.setState({show: !this.state.show});
};
    render(){ 
        let show;
        if (this.state.show) {
             show = {
                display: "none"}
            
        }
        return(
            <div  className="container">
            <form classnme="show" style={show} onSubmit={this.onSubmit}>

                <label>First name</label>
                <input type="text" id="fname"   placeholder="First name" value={this.state.firstname}   onChange={this.handleInputChangefirstname} />

                <label >Last name</label>
                <input type="text" id="lname"  placeholder="Last name" value={this.state.lastname}   onChange={this.handleInputChangelastname} />
              
                <label>Email</label> 
                <input type="email"  id="Email"  value={this.state.email}   onChange={this.handleInputChangeemail} placeholder="Email" />
              
              
                <label>From:</label>
                <input type="text"  id="from" placeholder="Date"  value={this.state.from} onChange={this.handleInputChangefrom} required/>
             
             
                <label>To</label>
                <input type="text"  id="to" placeholder="Date"    value={this.state.to} onChange={this.handleInputChangeto} required/>
             
           
           
            <label>Type</label>
            <select id="type" value={this.state.type} onChange={this.handleInputChangetype} className="custom-select custom-select-sm">
            <option>Open this select menu</option>
            <option value="1">Developing</option>
            <option value="2">Testing</option>
            <option value="3">Done</option>
            </select>
            <label className="label">
                 Make report
                </label>
                <input className="check" id="check" checked={this.state.checkbox}  onChange={this.handleInputChangecheckbox} type="checkbox" required/>
             
              
             <label>Comments</label>
            <textarea  id="text" value={this.state.comments}  onChange={this.handleInputChangecomments} className="form-control"/>
        
            <button className="button" type="submit">Add</button>
            
          </form>
          <button className="button" onClick={this.hideText}>+</button>
          </div>
        )
    }
}