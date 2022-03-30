import react from 'react';
import {Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css'
export function MenuBar({user}) {
const onLoggedOut = () => {
localStorage.clear();
window.open("/", "_self");
}

const isAuth = () => {
if(typeof window == "undefined") {
 return false;
}
if (localStorage.getItem("token")) {
 return localStorage.getItem("token");
} else {
 return false;
 }
};


return (
  <Container
    fluid
    style={{
      padding: "0px",
      margin: "0px",
    }}
  >
    <Navbar className="main-nav" sticky="top" variant="light">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          {isAuth() && <Link to={`/users/${user}`}>{user}</Link>}
          {isAuth() && (
            <Button
              variant="link"
              onClick={() => {
                onLoggedOut();
              }}
              style={{ color: "black" }}
            >
              Logout
            </Button>
          )}
          {
            <Button variant="link">
              <Link style={{ color: "black" }} to="/">
                Sign-in
              </Link>
            </Button>
          }
          {
            <Button variant="link">
              <Link style={{ color: "black" }} to="/register">
                Sign-up
              </Link>
            </Button>
          }
          {isAuth() && (
            <Button variant="link">
              <Link style={{ color: "black" }} to="/profile">
                {" "}
                My Profile
              </Link>
            </Button>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Container>
);
}



