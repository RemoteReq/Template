import React from 'react';

const AboutHeader = () => (
  <div className='about-header'>
    <div className='step fill-job-req'>
      <div className='outer-circle'>
        <div className='inner-circle'>
          <p>1</p>
        </div>
      </div>
      <h2>Fill out a job req</h2>
      <p>Tell us about the work you need done for your company.</p>
    </div>
    <div className='step get-matched'>
      <div className='outer-circle'>
        <div className='inner-circle'>
          <p>2</p>
        </div>
      </div>
      <h2>Get matched</h2>
      <p>Our recruiting algorithm matches you with three finalist candidates.</p>
    </div>
    <div className='step interview-offer'>
      <div className='outer-circle'>
        <div className='inner-circle'>
          <p>3</p>
        </div>
      </div>
      <h2>Interview and offer</h2>
      <p>Interview and offer to the candidate who is your perfict fit.</p>
    </div>
  </div>
)

export default AboutHeader;