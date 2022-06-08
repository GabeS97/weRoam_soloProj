import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as sessionActions from '../../store/session';

const LogOut = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        history.push('/')
    };
    return (
        <div>
            <button className="dropdown__logout" onClick={logout}>Log Out</button>
        </div>
    )
}

export default LogOut
