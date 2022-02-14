import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {



    return (
        <div className='notFoundContained'>
            <div className='pagenotfoudn'>
                <h1 className='notFOundTitle' >Oops...</h1>
                <h2 className='under'>The page you are looking for is under construction</h2>
                <Link className='redirece' to='/'>Checkout out our other activities though!</Link>
            </div>
        </div>
    )
}

export default NotFound
