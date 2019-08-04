import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Nav, Navbar, Image, Container } from 'react-bootstrap';

class Header extends React.Component{

    render(){
        return (
            <Navbar bg="light" variant="dark" className="justify-content-center" sticky="top" expand="lg">
                <Nav>
                    <Nav.Link>
                        <Link to="/stream">Stream</Link>
                    </Nav.Link>
                </Nav>
                <Navbar.Brand>
                    <Link to="/">
                        <Image
                            id="button-logo"
                            src="/nemesis-logo.svg"
                            alt="Accueil"
                            width="32"
                            height="32"
                            roundedCircle>
                        </Image>
                    </Link>
                </Navbar.Brand>
                <Nav>
                    <Nav.Link>
                        <Link to="/contact">Contact</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/testRoom">Test-Room</Link>
                    </Nav.Link>
                </Nav>
            </Navbar>
        )
    }
    
}

export default Header;