import React from 'react';
import Banner from '../Wanderlust/';
import './splashPage.css'
import Explore from '../Explore';

const Splash = () => {
    return (
        <div className='splashPage'>
            <Banner/>
            <Explore />
        </div>
    )
};

export default Splash;
