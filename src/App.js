import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from './Footer';
import Stream from './Stream';
import Accueil from './Accueil';
import Contact from './Contact';
import './App.css';
import Menu from './Menu';
import MenuSelecter from './MenuSelecter';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Route exact path="/" component={Accueil} />
        <MenuSelecter />

        <Route path="/stream" component={Stream} />
        <Route path="/contact" component={Contact} />
        <Route path="/testRoom" component={Menu} />
      </Router>

      <Footer />
    </div>
  );
}

export default App;