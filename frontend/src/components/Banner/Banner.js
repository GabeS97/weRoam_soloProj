import React from 'react';
import './Banner.css'
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <div className='banner'>
            <div className='sidebar'>
                <div className='info'>
                    <h1>WANDERLUST</h1>
                    <h3>(n.) a strong desire for or impulse to wander or travel and explore the world</h3>
                    <Link to='/spots'>
                        <button className='away' >Take me away</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner;
