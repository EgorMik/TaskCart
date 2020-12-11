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
    check:false
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
    render(){ 
        return(
            <form  onSubmit={this.onSubmit}>
          
              <div className="col-sm-8">
                <label>First name</label>
                <input type="text" className="form-control"  placeholder="First name" value={this.state.firstname}   onChange={this.handleInputChangefirstname} />
              </div>
              <div className="col-sm-8">
                <label >Last name</label>
                <input type="text" className="form-control"  placeholder="Last name" value={this.state.lastname}   onChange={this.handleInputChangelastname} />
              </div>
               <div className="col-sm-8">
              <label>Email</label> 
             <input type="email" className="form-control" id="inputEmail3"  value={this.state.email}   onChange={this.handleInputChangeemail} placeholder="Email" />
              
              
              </div>
          
               <div className="col-md-3 mb-3">
                <label>From:</label>
                <input type="text" className="form-control" id="validationDefault03" placeholder="Date"  value={this.state.from} onChange={this.handleInputChangefrom} required/>
              </div>
              <div className="col-md-3 mb-3">
                <label>To</label>
                <input type="text" className="form-control" id="validationDefault04" placeholder="Date"    value={this.state.to} onChange={this.handleInputChangeto} required/>
              </div>
           
             <div className="col-md-8 mb-3">
            <label>Type</label>
            <select  value={this.state.type} onChange={this.handleInputChangetype} className="custom-select custom-select-sm">
            <option>Open this select menu</option>
            <option value="1">Developing</option>
            <option value="2">Testing</option>
            <option value="3">Done</option>
            </select>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input className="form-check-input"  checked={this.state.checkbox}  onChange={this.handleInputChangecheckbox} type="checkbox" id="invalidCheck2" required/>
                <label className="form-check-label">
                 Make report
                </label>
              </div>
            </div>
            <div className="col-md-8 mb-4">
            <label>Comments</label>
          <textarea  value={this.state.comments}  onChange={this.handleInputChangecomments} className="form-control"/>
        </div> 
            <button className="btn btn-primary" type="submit">Add</button>
          </form>
        )
    }
}