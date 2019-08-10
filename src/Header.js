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
                    <Nav.Item>
                        <Link to="/stream">Stream</Link>
                    </Nav.Item>
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
                    <Nav.Item>
                        <Link to="/contact">Contact</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/testRoom">Test-Room</Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        )
    }

}

export default Header;