import React from 'react';
import FaceBookIcon from '../../img/facebook.png';
import LinkedinIcon from '../../img/linkedin.png';
import TwitterIcon from '../../img/twitter.png';

const Footer = () => (
  <div className='footer'>
    <ul className='footerLinks'>
      <li>About Us</li>
      <li>|</li>
      <li>Careers</li>
      <li>|</li>
      <li>Terms of Service</li>
      <li>|</li>
      <li>Report Fraud</li>
      <li>|</li>
      <li>Contact</li>
    </ul>
    <div className='socialMedia'>
      <h3>Check Us Out</h3>
      <img src={FaceBookIcon} alt='facebook icon link'/>
      <img src={LinkedinIcon} alt='linkedin icon link'/>
      <img src={TwitterIcon} alt='twitter icon link'/>
    </div>
    <p>&copy; RemoteReq, LLC. Established 2018.</p>
  </div>
);

export default Footer;