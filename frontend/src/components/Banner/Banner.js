import React from 'react';
import './Banner.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginFormModal from '../LoginFormModal';

function Banner() {
    const user = useSelector(state => state.session.user)
    return (
        <div className='banner'>
            <div className='sidebar'>
                <div className='info'>
                    <h1>WANDERLUST</h1>
                    <h3>(n.) a strong desire for or impulse to wander or travel and explore the world</h3>
                    {/* <Link> */}
                    <Link to='/spots' >
                        <button className='away' >Take me away</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner;
