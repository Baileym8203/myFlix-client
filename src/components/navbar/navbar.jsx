import react from 'react';
import {Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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

<Navbar className="main-nav" sticky="top" bg="dark" expand="lg" variant="dark">
<Container>
<Navbar.Brand className="navbar-logo" href="/">BestMovies</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
<Nav className="ml-auto">
{isAuth() && (
<Link to={`/users/${user}`}>{user}</Link>
)}
{isAuth() && (
<Button variant="link" onClick={() => { onLoggedOut() }}>Logout</Button>
)}
{
<Link to="/">Sign-in</Link>
}
{
<Link to="/register">Sign-up</Link>
}
{isAuth() && (
<Link to="/profile"> My Profile</Link>
)}
</Nav>
</Navbar.Collapse>
</Container>
</Navbar>

   );
}



