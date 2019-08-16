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
        this.updateScrollShadow = this.updateScrollShadow.bind(this);
    }

    updateNavExpanded() {
        this.setState((prevState, props) => ({ navExpanded: !prevState.navExpanded}));
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
        //Ici on inverse la valeur de this.state à cause du caractère asynchrone de l'appel de setState() en début de fonction
        document.getElementById("menu").style.boxShadow = !this.state.navExpanded ? '0px 0px 0px 100vmax rgba(89, 89, 89, 0.20)' : window.scrollY !== 0 ? '0px 5px 8px #888888' : '';
    }

    updateScrollShadow(){
        if(!this.state.navExpanded){
            document.getElementById("menu").style.boxShadow = window.scrollY !== 0 ? '0px 5px 8px #888888' : '';
        }else{
            document.getElementById("menu").style.boxShadow = '0px 0px 0px 100vmax rgba(89, 89, 89, 0.20)';
        }
    }

    componentDidMount(){
        document.addEventListener('scroll', this.updateScrollShadow);
    }

    componentWillUnmount(){
        document.removeEventListener('scroll', this.updateScrollShadow);
    }

    render() {
        return (
            <Navbar id="menu" bg="light" variant="dark" className="justify-content-left" sticky="top"
                expand="lg" onToggle={this.updateNavExpanded} expanded={this.state.navExpanded}
                onSelect={this.updateNavExpanded}>
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
                        <Nav.Item>
                            <Link to="/">Accueil</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/stream/nemesisdirect">Stream</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/contact">Contact</Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                <Nav></Nav>
                <Navbar.Brand>
                    <Image
                        src="/nemesis-ban.svg"
                        width="80"
                        height="auto">
                    </Image>
                </Navbar.Brand>
            </Navbar>
        )
    }
}

export default Menu;