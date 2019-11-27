import React from 'react';

const Navigation = () => (
  <nav className='landingPage-navBar'>
    <h2>RemoteReq</h2>
    <div className='landingPage-navBar-links'>
      <ul>
        <li>home</li>
        <li>employers</li>
        <li className='job-seekers'>job seekers</li>
      </ul>
      <a href='http://localhost:8080'>
        <button className='landingPage-signIn-button'>sign in</button>
      </a>
    </div>
  </nav>
);

export default Navigation;