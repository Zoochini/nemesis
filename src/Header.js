import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Nav, Navbar, Image, Col, Container, Row } from 'react-bootstrap';


function Header() {
    return (
        <Navbar bg="light" variant="dark" className="justify-content-center">
            <Navbar.Brand>
                <Link to="/"><Image id="button-logo" src="/nemesis-logo.svg" alt="Accueil" width="32" height="32"></Image></Link>
            </Navbar.Brand>
            <Nav>
                <Nav.Link>
                    <Link to="/stream" className="text-danger">Stream</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/contact" className="text-danger">Contact</Link>
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Header;