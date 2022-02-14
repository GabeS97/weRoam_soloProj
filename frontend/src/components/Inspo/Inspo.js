import React from 'react';
import { Link } from 'react-router-dom';


import './Inspo.css'

const inspo = () => {
    return (
        <div className='inspiration'>
            <div className='textdiv'>
                <h1 className='where'>Inspiration for your next trip</h1>
            </div>
            <div className='cards'>
                <Link to='/pagenotfound'className='card1'>
                    <h2>Jakarta</h2>
                </Link>
                <Link to='/pagenotfound' className='card2'>
                    <h2>London</h2>
                </Link>
                <Link to='/pagenotfound' className='card3'>
                    <h2>Paris</h2>
                </Link>
                <Link to='/pagenotfound'className='card4'>
                    <h2>Tokyo</h2>
                </Link>
            </div>
        </div>
    )
};

export default inspo;
