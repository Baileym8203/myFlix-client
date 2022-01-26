import react from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
export function RegistrationView(props) {
const [ username, setUsername ] = useState('');
const [ password, setPassword ] = useState('');
// Declare hook for each input
const [ usernameErr, setUsernameErr ] = useState('');
const [ passwordErr, setPasswordErr ] = useState('');

// validate user inputs 
const validate = () => {
 let isReq = true;
 if(!username){
 setUsernameErr('Username Required');
 isReq = false;
 } else if(username.length < 2) {
 setUsernameErr('Username must be 6 characters long');
 isReq = false;
 }
 if(!password) {
 setPasswordErr('password required');
 isReq = false;
 } else if(password.length < 6) {
 setPassword('Password must be 6 characters long');
 isReq = false;
  }

  return isReq;

}

const handleSubmit = (e) => {
e.preventDefault();
const isReq = validate();
if(isReq) {
// send request to the server for authentication 
axios.post('https://bestmoviecentral.herokuapp.com/user', {
Username: username,
Password: password,
Email: email,
Birthday: birthday
})
.then(response => {
const data = response.data;
console.log(data)
window.open('/', '_self'); // the second arugument '_self is necessary so that the page page will open in the current tab  
})
.catch(e => {
console.log('error registering the user')
  });
 }
};

return (
       <Form>
         <Form.Group controlId="formUsername">
           <Form.Label>Username:</Form.Label>
           <Form.Control type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} />
           {/* code added here to display validation error */}
           {usernameErr && <p>{usernameErr}</p>}
   </Form.Group>
   
         <Form.Group controlId="formPassword">
           <Form.Label>Password</Form.Label>
           <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
           {/* code added here to display validation error */}
           {passwordErr && <p>{passwordErr}</p>}
   </Form.Group>
         <Button variant="primary" type="submit" onClick={handleSubmit}>
           Submit
           </Button>
       </Form>
     )
}
/*constructor(props) {
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

*/ //export default RegistrationView 