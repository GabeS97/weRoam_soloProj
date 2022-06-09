import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal'
import './Navigation.css';
import LogOut from './LogOut';

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
    <>
      <nav className='navBar'>
        <NavLink className="home" exact to="/">
          <img
            className="home_icon"
            src='../../../images/weRoam-logos_black.png'
            alt=""
          />
        </NavLink>
        <input
          className='search'
          placeholder='Start your search'
        ></input>
        <div className='buttons'>
          <Link className='hyperlink' to='/spots'>
            {sessionUser && (<p className='host'>Become a host</p>)}
          </Link>
          <div className="navBar__login__signin">
            <i className="fa-solid fa-bars"></i>
            <div className="navBar__avatarDrpdwn">
              <i className="fa-solid fa-user"></i>
            </div>

            <div className="navBar__loginDrpdwn">
              {isLoaded && sessionLinks}
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
