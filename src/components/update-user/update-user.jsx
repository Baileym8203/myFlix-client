import React, {useState} from 'react';
import {Button} from 'react-bootstrap/';
import {Form} from 'react-bootstrap/';
import axios from 'axios';

import './update-user.scss'

 function UpdateUser({handleUpdate, user}){
  const [userName, setUsername] = useState(user.Username) ;
  const [email, setEmail] = useState(user.Email);
  const [password, setPassword] = useState(user.Password);

  const handleSubmit = (e) => {
  e.preventDefault();
  let token = localStorage.getItem('token');
  console.log(token);
  
  if (token && userName && userName !== "") {
  axios.put("https://bestmoviecentral.herokuapp.com/users/" + user.Username, 
  {
  Username: userName,
  Email: email,
  Password: password,
  },
  {
  headers: {Authorization: `bearer ${token}`},
   }
  )
  .then((response => {
  handleUpdate(response.data);
  }))
  .catch(function (error){
   console.log(error);
  });
  
 }

};
        
        
if (!user) return <p>Not user data</p>;
        
        return (
          <>
            <Form
              className="text-center"
              style={{ backgroundColor: "white", paddingBottom: "104px", paddingLeft: "25px", paddingRight: "25px", paddingTop: "20px"}}
            >
              <h4 className="text-center">Update</h4>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={user.Username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="Enter a username"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  defaultValue=""
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength="8"
                  placeholder="your password must be 8 or more characters"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  defaultValue={user.Email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email address"
                />
              </Form.Group>
              <Button
                variant="dark"
                type="submit"
                onClick={handleSubmit}
                className="button-submit"
              >
                Update
              </Button>
            </Form>
          </>
        );
    
}
export default UpdateUser;
