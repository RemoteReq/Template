import React from 'react';

const ProfileCard = props => (
  <div className='profile-card'>
    <div className='profile-name-profession'>
      <h2>John Smith</h2>
      <h3>software engineer</h3>
    </div>
    <div className='profile-jobs-applied'>
      <h3></h3>
    </div>
    <div className='profile-skills'>
      <h3>Skills</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>MySQL</li>
      </ul>
    </div>
  </div>
);

export default ProfileCard