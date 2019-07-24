import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Stream from './Stream';
import Accueil from './Accueil';
import Contact from './Contact';
import './App.css';
import Loading from './Loading';

function App() {
  return (
    <div className="App">
      <Router>

        <Route exact path="/" component={Accueil} />
        <Header />

        <Route path="/stream" component={Stream} />
        <Route path="/contact" component={Contact} />
        <Route path="/testRoom" component={Contact} />
      </Router>

      <Footer />
    </div>
  );
}

export default App;