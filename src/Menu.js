import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Nav, Navbar, Image, Container } from 'react-bootstrap';

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            navExpanded: false
        }
        this.updateNavExpanded = this.updateNavExpanded.bind(this);
    }

    updateNavExpanded() {
        this.setState((state) => ({ navExpanded: !state.navExpanded }));
        let reverse = this.state.navExpanded ? 'reverse' : 'normal';
        let animation = [
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(180deg)' }
        ];
        document.getElementById("button-logo1").animate(animation, {
            duration: 350,
            easing: 'ease-in-out',
            direction: reverse,
            iteration: 1
        }
        );
    }

    render() {
        return (
            <Navbar bg="light" variant="dark" className="justify-content-left" fixed="top"
                expand="lg" onToggle={this.updateNavExpanded} expanded={this.state.navExpanded}>
                <Navbar.Toggle children={<Image
                    id="button-logo1"
                    src="/nemesis-logo.svg"
                    alt="Accueil"
                    width="32"
                    height="32"
                    roundedCircle>
                </Image>} />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link>
                            <Link to="/">Accueil</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/stream">Stream</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/contact">Contact</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Menu;