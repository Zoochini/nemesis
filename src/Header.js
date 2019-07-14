import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';


function Header() {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand>
                <Link to="/">Accueil</Link>
            </Navbar.Brand> 
            <Nav className="mr-auto">
                <Link to="/stream">Stream</Link>
                <Link to="/contact">Contact</Link>
            </Nav>
        </Navbar>
    )
}

export default Header;