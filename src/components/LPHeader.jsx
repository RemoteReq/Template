import React from 'react';

const LPHeader = () => (
  // <div className='charlie'></div>
  <div className='landingPage-header'>
    <div className="landingPage-overlay"></div>
    <div className='landingPage-heading-buttons'>
      <div className='landingPage-heading'>
        <h1>Where digital nomads find work.</h1>
        <p>RemoteReq matches highly-skilled, remote job seekers to the emerging nonprofit and for-profit companies who are hungry for the talent.</p>
      </div>
      <div className='landingPage-buttons'>
        <button className='button landingPage-employerButton'>employers</button>
        <button className='button landingPage-employerButton'>job seekers</button>
      </div>
    </div>
  </div>
);

export default LPHeader;