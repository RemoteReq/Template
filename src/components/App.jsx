import React, { Component } from 'react';
import Navigation from './Navigation.jsx';
import ProfileCard from './ProfileCard.jsx';
import JobsList from './JobsList.jsx';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Axios from 'axios';
const jobsData = require('../../server/Jobs-Mock-Data.json');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobListing: []
    }
  }

  componentDidMount() {
    this.setState({ jobListing: jobsData })
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
                <JobsList 
                  jobListing={this.state.jobListing}
                />
              }
            />
          </Switch>
          
        </div>
      </Router>
    );
  }
}

export default App;