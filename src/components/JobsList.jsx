import React from 'react';

const JobsList = props => (
  <div className='jobs-list'>
    <div className="job-posting">
      <div className="jobs-company-job-title">
        <h2>Acme, Inc.</h2>
        <h3>Web Developer</h3>
      </div>
      <div className="jobs-post-date-description">
        <h3>01-01-1999</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quod error quas, nisi nobis molestias nemo iusto. Cupiditate id aspernatur minus delectus tenetur. Magnam perferendis temporibus consequuntur minus aperiam ad nisi sit vel explicabo mollitia facere repellendus distinctio dicta doloribus tempora dolore architecto, doloremque laudantium laboriosam quo quam ipsa porro.</p>
      </div>
      <div className="jobs-skills">
        <h3>Required Skills</h3>
        <ul>
          <li>JS</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
      </div>
    </div>
  </div>
);

export default JobsList;