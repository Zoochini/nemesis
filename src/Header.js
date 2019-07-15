import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Nav, Navbar, NavLink } from 'react-bootstrap';


function Header() {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand>
                <Link to="/">Accueil</Link>
            </Navbar.Brand>
            <Nav justify="true">
                <Nav.Link>
                    <Link to="/stream">Stream</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/contact">Contact</Link>
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Header;