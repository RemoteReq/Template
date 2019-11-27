import React from 'react';
import imgOne from '../../img/woman-lying-and-typing-on-laptop-6249.jpg';
import imgTwo from '../../img/three-persons-sitting-on-the-stairs-talking-with-each-other-1438072.jpg';

const AboutMain = () => (
  <div className='about-main'>
    <div className='block about-main-block-one'>
      <div className='work-from-anywhere'>
        <h2>Work from anywhere.</h2>
        <p>Our network of digital nomads span the globe. Career freelancers, former corporate professionals, developers and more. Brave souls who chose to explore the world, and embrace a new beginning.</p>
        <button>find a remote job</button>
      </div>
      <img src={imgOne} alt='woman lying and working on laptop'/>
    </div>

    <div className='block about-main-block-two'>
      <img className ='imgTwo' src={imgTwo} alt='three people sitting on stairs talking'/>
      <div className='build-your-team'>
        <h2>Build your remote team.</h2>
        <p>When so much depends on hiring the best, why limit your pool of talent? It's time to think differently. We match companies with qualified professionals from around the globe.</p>
        <button>hire talent</button>
      </div>
    </div>
  </div>
);

export default AboutMain;