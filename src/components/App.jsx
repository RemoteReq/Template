import React, { Component } from 'react';
import Navigation from './Navigation.jsx';
import ProfileCard from './ProfileCard.jsx';
import JobsList from './JobsList.jsx';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {
    Axios.get('/jobslist')
      .then(res => console.log('hello'))
      .catch(err => console.log('you have an error!', err))
  }

  render() {
    return (
      <Router>
        <div className='dashboard'>
          <Navigation />
          <ProfileCard />
          <Switch>
            <Route
              path='/jobslist'
              render={ props =>
                <JobsList />
              }
            />
          </Switch>
          
        </div>
      </Router>
    );
  }
}

export default App;