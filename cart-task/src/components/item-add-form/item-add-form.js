import React, {Component} from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
state = {
    name:'',
    lastName:'',
    email:'',
    from:'',
    to:'',
    type:'',
    text:'',
    check:false
}
onSubmit = (e) => {
    e.preventDefault();  //браузер не перегружает страницу
    this.props.onItemAdded(this.state);
    this.setState({
     firstname:'',
    lastName:'',
    email:'',
    from:'',
    to:'',
    type:'',
    text:'',
    check:false
    })
}
handleInputChange = (e) =>{
    const target = e.target;
    const firstname = target.firstname;
    const lastName = target.lastName;
    const email = target.email;
    const from = target.from;
    const to = target.to;
   
    this.setState({
        firstname: firstname,
        lastName: lastName,
        email: email,
        from: from,
        to: to
        
    });
}
    render(){ 
        return(
            <form>
          
              <div class="col-sm-8">
                <label for="validationDefault01">First name</label>
                <input type="text" class="form-control" id="validationDefault01" placeholder="First name" value={this.state.firstname}   onChange={this.handleInputChange} required/>
              </div>
              <div class="col-sm-8">
                <label for="validationDefault02">Last name</label>
                <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" value={this.state.lastName}   onChange={this.handleInputChange} required/>
              </div>
              <div class="col-sm-8">
              <label for="inputEmail3" >Email</label> 
             <input type="email" class="form-control" id="inputEmail3"  value={this.state.email}   onChange={this.handleInputChange} placeholder="Email" />
              
              
              </div>
          
              <div class="col-md-3 mb-3">
                <label for="validationDefault03">From:</label>
                <input type="text" class="form-control" id="validationDefault03" placeholder="Date"  value={this.state.from} onChange={this.handleInputChange} required/>
              </div>
              <div class="col-md-3 mb-3">
                <label for="validationDefault04">To</label>
                <input type="text" class="form-control" id="validationDefault04" placeholder="Date"    value={this.state.to} onChange={this.handleInputChange} required/>
              </div>
           
            <div class="col-md-8 mb-3">
            <label for="validationDefault04">Type</label>
            <select  value={this.state.type} class="custom-select custom-select-sm">
            <option selected>Open this select menu</option>
            <option value="1">Developing</option>
            <option value="2">Testing</option>
            <option value="3">Done</option>
            </select>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input"  value={this.state.check} type="checkbox" id="invalidCheck2" required/>
                <label class="form-check-label" for="invalidCheck2">
                 Make report
                </label>
              </div>
            </div>
            <div class="col-md-8 mb-4">
            <label for="validationDefault04">Comments</label>
          <textarea  value={this.state.text} class="form-control"/>
        </div>
            <button class="btn btn-primary" type="submit">Add</button>
          </form>
        )
    }
}