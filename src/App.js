import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Stream from './Stream';
import './App.css';
import Accueil from './Accueil';

function App() {
  return (
    <div className="App">
      <Header />
      <Accueil />
      <Stream />
      <Footer />
    </div>
  );
}

export default App;