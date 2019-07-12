import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Header() {
    return (
        <ul>
            <li>
                <Link to="/">Accueil</Link>
            </li>
            <li>
                <Link to="/stream">Stream</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    )
}

export default Header;