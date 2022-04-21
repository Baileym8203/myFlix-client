import react from 'react';
import { Container, Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useState } from 'react'// this is needed for useState to be defined!
import axios from 'axios';
import { connect } from 'react-redux';

import './login-view.scss'

const mapStateToProps = state => {
  return {users: state.username},
  {users: state.password},
  {users: state.setUsername},
  {users: state.setPassword}
  };
  

 function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

 const handleSubmit = (e) => {
 e.preventDefault();
 /* Send a request to the server for authentication */
 axios.post('https://bestmoviecentral.herokuapp.com/login', {
 Username: username,
 Password: password
 })
 .then(response => {
const data = response.data;
props.onLoggedIn(data);
 })
 .catch(e => {
 console.log('no such user')
 });
};

 return (
   <Container fluid className="container --login-view">
     <Form
       style={{ marginTop: "375px", color: "white" }}
       className="text-center"
     >
       <h1
         style={{
           marginTop: "-110px",
           marginBottom: "110px",
           color: "red",
           fontWeight: "700",
           textShadow: "black 3px 2.5px 3.5px",
           fontSize: "55px",
         }}
       >
         BestMovies
       </h1>
       <Form.Group
         controlId="formUsername"
         style={{
           marginBottom: "25px",
           paddingLeft: "20px",
           paddingRight: "20px",
         }}
       >
         <Form.Control
           type="text"
           placeholder="Enter your Username"
           onChange={(e) => setUsername(e.target.value)}
         />
       </Form.Group>

       <Form.Group
         style={{ paddingLeft: "20px", paddingRight: "20px" }}
         controlId="formPassword"
       >
         <Form.Control
           type="password"
           placeholder="Enter your Password"
           onChange={(e) => setPassword(e.target.value)}
         />
       </Form.Group>
       <br></br>
       <Button
         style={{ width: "110px", marginTop: "15px" }}
         variant="dark"
         type="submit"
         onClick={handleSubmit}
       >
         Sign In
       </Button>
     </Form>
   </Container>
 );
}

export default connect(mapStateToProps)(LoginView);





/*export class LoginView extends react.Component {
 constructor(props) {
 super(props);
 
 this.state = {
  username: '',
  password: ''
 };

 this.onUsernameChange = this.onUsernameChange.bind(this);
 this.onPasswordChange = this.onPasswordChange.bind(this);
 this.handleSubmit = this.handleSubmit.bind(this);
}

onUsernameChange(event) {
 this.setState({
 username: event.target.value
 });
}

onPasswordChange(event) {
 this.setState({
 password: event.target.value
 });
}

handleSubmit() {
const {username, password} = this.state;
console.log(username, password);
//Send a request to the server for authentication
// then call this.props.onloggedIn(username)
this.props.onLoggedIn(username);
}

render() {
return (
 <form>
 <label>
 Username:
 <input type="text" value={this.state.username} onChange={this.onUsernameChange} />
 </label>
 <label>
  Password:
  <input type="text" value={this.state.password} onChange={this.onPasswordChange} />
 </label>
 <button type="button" onClick={this.handleSubmit}>Submit</button>
 <button type="button">Register</button>
 </form>
  );
 }
}*/