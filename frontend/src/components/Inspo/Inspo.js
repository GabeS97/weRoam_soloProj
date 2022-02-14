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
                <div className='card1'>
                    <h2>Jakarta</h2>
                </div>

                <Link to='/pagenotfound' className='card2'>
                    <h2>London</h2>
                </Link>
                <div className='card3'>
                    <h2>Paris</h2>
                </div>
                <div className='card4'>
                    <h2>Tokyo</h2>
                </div>
            </div>
        </div>
    )
};

export default inspo;
