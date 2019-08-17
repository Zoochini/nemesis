import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Footer from './Footer';
import Stream from './Stream';
import Accueil from './Accueil';
import Contact from './Contact';
import './App.css';
import Menu from './Menu';
import MenuSelecter from './MenuSelecter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight
    }
    this.updateSize = this.updateSize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSize);
  }

  updateSize() {
    this.setState({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight
    })
  }

  render() {
    return (
      <div className="App">
        <Router>

          <MenuSelecter />

          <div id="content">

            <Route exact path="/"
              render={() =>
                <Accueil width={this.state.screenWidth} height={this.state.screenHeight} />} />


            <Route path="/stream/:id" component={Stream} />
            <Route path="/contact" component={Contact} />

          </div>

          <Footer />

        </Router>
      </div>
    );
  }

}

export default App;