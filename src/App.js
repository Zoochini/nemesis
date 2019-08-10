import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
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
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateSize(), 200);
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

          <Route exact path="/"
            render={() =>
              <Accueil width={this.state.screenWidth} height={this.state.screenHeight} />} />
          <MenuSelecter />

          <Route path="/stream" component={Stream} />
          <Route path="/contact" component={Contact} />
          <Route path="/testRoom" component={Menu} />
        </Router>

        <Footer />
      </div>
    );
  }

}

export default App;