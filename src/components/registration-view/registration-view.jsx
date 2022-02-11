import react from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';

import './registration-view.scss'


const mapStateToProps = state => {
 return {users: state.username},
 {users: state.password},
 {users: state.email},
 {users: state.birthday},
 {users: state.usernameErr},
 {users: state.passwordErr},
 {users: state.emailErr},
 {users: state.birthdayErr}
  }


function RegistrationView(props) {
const [ username, setUsername ] = useState('');
const [ password, setPassword ] = useState('');
const [email, setEmail] = useState('')
const [birthday, setBirthday] = useState('');

// Declare hook for each input
const [ usernameErr, setUsernameErr ] = useState('');
const [ passwordErr, setPasswordErr ] = useState('');
const [emailErr, setEmailErr] = useState('');
const [birthdayErr, setBirthdayErr] = useState('');

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
if(!email) {
setEmailErr('Email required');
isReq = false;
}
if(!birthday) {
setBirthdayErr('Birthday required');
isReq = false;
}


  return isReq;

}

const handleSubmit = (e) => {
e.preventDefault();
const isReq = validate();
if(isReq) {
// send request to the server for authentication 
axios.post('https://bestmoviecentral.herokuapp.com/users', {
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
       <Form style={{margin: "7em"}}>
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
       <Form.Group controlId="formEmail">
         <Form.Label>Email</Form.Label>
         <Form.Control type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
       {/* code added here to display validation error */}
       {emailErr && <p>{emailErr}</p>}
       </Form.Group>
       <Form.Group>
        <Form.Label>Birthday</Form.Label>
        <Form.Control type="birthday" placeholder="Enter your birthdate" value={birthday} onChange={e => setBirthday(e.target.value)} />
        {/* code added here to display validation error */}
        {birthdayErr && <p>{birthdayErr}</p>}
       </Form.Group>
         <Button variant="dark" type="submit" onClick={handleSubmit} className="button-one">
           Submit
           </Button>
       </Form>
     )
}

export default connect(mapStateToProps)(RegistrationView);
