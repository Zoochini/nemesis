import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Nav, Navbar, Image } from 'react-bootstrap';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.updateScrollShadow = this.updateScrollShadow.bind(this);
    }

    updateScrollShadow() {
        document.getElementById("menu").style.boxShadow = window.scrollY !== 0 ? '0px 5px 8px #888888' : '';
    }

    componentDidMount() {
        document.addEventListener('scroll', this.updateScrollShadow);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.updateScrollShadow);
    }

    render() {
        return (
            <Navbar id="menu" bg="light" variant="dark" className="justify-content-center" sticky="top" expand="lg">
                <Nav>
                    <Link to="/stream/nemesisdirect">
                        <Nav.Item>Stream</Nav.Item>
                    </Link>
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
                    <Link to="/contact">
                        <Nav.Item>Contact</Nav.Item>
                    </Link>
                </Nav>
            </Navbar>
        )
    }

}

export default Header;