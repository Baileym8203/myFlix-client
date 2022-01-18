import react from 'react';
import axios from 'axios';
export class RegistrationView extends react.Component {

constructor(props) {
super(props);

this.state = {
username: '',
password: '',
passwordConfirmation: '',
email: '',
birthdate: '',
RegistrationErrors: ''
 }

this.handleSubmit = this.handleSubmit.bind(this);
this.handleChange = this.handleChange.bind(this);
}

handleSubmit(event) {
 axios.post('https://bestmoviecentral.herokuapp.com/users', {
  user: {
  Username: this.state.username,
  Password: this.state.password,
  PasswordConfirmation: this.state.passwordConfirmation,
  email: this.state.email,
  bithdate: this.state.birthdate
  }

}, {withCredentials: true}).then(Response => {
  console.log("registration res", Response);
}).catch(error => {
  console.log("registration error", error)
}) // don't forget withCredentials for cookie authentication!
 event.preventDefault();
}

handleChange(event) {
  this.setState({
  [event.target.name]: event.target.value
  })
}

render() {
return (
<div>
<form onSubmit={this.handleSubmit}>
<input type="email" 
       name="email" 
       placeholder="email" 
       value={this.state.email} 
       onChange={this.handleChange} required/>

<input type="username" 
       name="username" 
       placeholder="username" 
       value={this.state.username} 
       onChange={this.handleChange} required/>

<input type="password" 
       name="password" 
       placeholder="password" 
       value={this.state.password} 
       onChange={this.handleChange} required/>
  
<input type="password" 
       name="passwordConfirmation" 
       placeholder="password confirmation" 
       value={this.state.passwordConfirmation} 
       onChange={this.handleChange} required/>

<input type="birthdate" 
       name="birthdate" 
       placeholder="birthdate" 
       value={this.state.birthdate} 
       onChange={this.handleChange} required/>
</form>
<button type="submit">Register</button>
</div>
  );
 }
}

export default RegistrationView