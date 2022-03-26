import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import * as sessionActions from '../../store/session';
import './Navigation.css';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory()

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };

  return (
    <>
      <div className='dropdown__button' onClick={openMenu}>
        <img className='dropdown__image' src={`https://img.favpng.com/25/13/19/samsung-galaxy-a8-a8-user-login-telephone-avatar-png-favpng-dqKEPfX7hPbc6SMVUCteANKwj.jpg`} alt='' />
      </div>
      {showMenu && (
        <div className="profile__dropdown">
          <p>{user.username}</p>
          <p>{user.email}</p>
          <p>
            <button onClick={logout}>Log Out</button>
          </p>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
