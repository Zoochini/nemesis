import React from 'react';
import Header from './Header';
import Menu from './Menu';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Nav, Navbar, Image, Container } from 'react-bootstrap';

class MenuSelecter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        }
        this.updateMenu = this.updateMenu.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.updateMenu(),
            10
        );
    }

    updateMenu() {
        this.setState({width : window.innerWidth});
    }


    render() {
        return (
            this.state.width >= 720 ? <Header /> : <Menu />
        )
    }
}

export default MenuSelecter;