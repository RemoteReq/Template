import React, { Component } from 'react';
import Navigation from './Navigation.jsx';
import LPHeader from './LPHeader.jsx';
import AboutHeader from './AboutHeader.jsx';
import AboutMain from './AboutMain.jsx';
import Footer from './Footer.jsx';

class App extends Component {
  render() {
    return (
      <div className='landingPage'>
        <Navigation />
        <LPHeader />
        <AboutHeader />
        <AboutMain />
        <Footer />
      </div>
    );
  }
}

export default App;