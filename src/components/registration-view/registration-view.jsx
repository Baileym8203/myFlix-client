import react from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { Form, Container, Col } from 'react-bootstrap';
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
  <Container classname="container --registration-view"
    style={{ justifyContent: "center", color: "white", textAlign: "center" }}
  >
    <Col>
      <Form style={{ margin: "7em" }}>
        <h1 style={{ marginBottom: "50px" }}>BestMovies</h1>
        <Form.Group controlId="formUsername">
          <Form.Control
            className="text-center"
            type="text"
            placeholder="Enter Your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* code added here to display validation error */}
          {usernameErr && <p>{usernameErr}</p>}
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Control
            style={{ marginTop: "15px" }}
            className="text-center"
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* code added here to display validation error */}
          {passwordErr && <p>{passwordErr}</p>}
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Control
            style={{ marginTop: "15px" }}
            className="text-center"
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* code added here to display validation error */}
          {emailErr && <p>{emailErr}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Control
            style={{ marginTop: "15px" }}
            className="text-center"
            type="birthday"
            placeholder="Enter your birthdate"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
          {/* code added here to display validation error */}
          {birthdayErr && <p>{birthdayErr}</p>}
        </Form.Group>
        <Button
          style={{ marginTop: "15px", width: "110px"}}
          variant="dark"
          type="submit"
          onClick={handleSubmit}
          className="button-one"
        >
          Register
        </Button>
      </Form>
    </Col>
  </Container>
);
}

export default connect(mapStateToProps)(RegistrationView);
