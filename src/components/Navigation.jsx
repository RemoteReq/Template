import React from 'react';
import UserImg from '../../assets/img/userimg.png';

const Navigation = props => {
  let menuVisible;

  if (props.LandingPageMenuVisible === false && screen.width < 1366 ) {
      menuVisible = {
      display: 'none'
      }
    } else {
      menuVisible = {
        display: 'block'
    }
  }

  return (
    <nav className='landingPage-navBar'>
      <div className='landingPage-logo-menu'>
        <h2 className='logo'>RemoteReq</h2>
        <div className='search-bar'>
          <input type='text' placeholder='search jobs' />
        </div>
        <div className='landingPage-menu'>
          <label 
            htmlFor='toggle'
            className='hamburgerMenu'
            onClick={() => props.menuClick()}
          >&#9776;</label>
        </div>
      </div>
      <div className='landingPage-navBar-links' style={ menuVisible }>
        <ul>
          <li><a href='/jobslist'>jobs</a></li>
          <li><a href='#'>alerts</a></li>
          <li><a href='#'>messages</a></li>
          {/* <li className='landingPage-signIn-button'><a href='http://localhost:8080/login'>
          sign in
        </a></li> */}
        <div className="user-profile-img">
          <img src={ UserImg } alt='user profile image' />
        </div>
        </ul>
      </div>
    </nav>
  )
};

export default Navigation;