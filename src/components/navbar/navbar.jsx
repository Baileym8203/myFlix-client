import react from 'react';
import {Navbar, Container, Nav, Button } from 'react-bootstrap';

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
<Nav.Link href={`/users/${user}`}>{user}</Nav.Link>
)}
{isAuth() && (
<Button variant="link" onClick={() => { onLoggedOut() }}>Logout</Button>
)}
{
<Nav.Link href="/">Sign-in</Nav.Link>
}
{
<Nav.Link href="/register">Sign-up</Nav.Link>
}
{isAuth() && (
<Nav.Link href="/profile"> My Profile</Nav.Link>
)}
</Nav>
</Navbar.Collapse>
</Container>
</Navbar>
   );
}



