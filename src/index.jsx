import React from 'react';
import ReactDOM from 'react-dom';
// this should be the only .scss file to import and linting is disabled for this import
import style from '#scss/index.scss'; // eslint-disable-line
import App from './components/App.jsx';
import './style/style.css';
import './style/tabletStyle.css';
import './style/mobileStyle.css';

ReactDOM.render(<App />, document.getElementById('App'));