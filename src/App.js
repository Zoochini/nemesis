import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Stream from './Stream';
import Accueil from './Accueil';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="NavBar">
          <Header />

          <hr />

          <Route exact path="/" component={Accueil} />
          <Route path="/stream" component={Stream} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>

      <Footer />

    </div>
  );
}

export default App;