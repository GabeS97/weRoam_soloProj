import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal'
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
      </>
    );
  }

  return (
    <nav className='navBar'>
      {/* <ul> */}
      {/* <li> */}
      {/* </li> */}
      {/* </ul> */}
      <NavLink className="home" exact to="/">
        <img
          className="home_icon"
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt=""
        />
      </NavLink>
      <input
        className='search'
        placeholder='Start your search'
      ></input>
      <div className='buttons'>
          <p className='hosting'>Become a host</p>
        {isLoaded && sessionLinks}
      </div>
    </nav>
  );
}

export default Navigation;
