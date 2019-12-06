import React, { Component } from 'react';
import Navigation from './Navigation.jsx';
import ProfileCard from './ProfileCard.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <ProfileCard />
      </div>
    );
  }
}

export default App;