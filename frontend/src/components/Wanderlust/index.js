import React from 'react';
import './Banner.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import { useState } from 'react';
import SignupForm from '../SignupFormModal/SignupForm';

function Banner() {
    const [showModal, setShowModal] = useState(false)
    const user = useSelector(state => state.session.user)

    const hideForm = () => setShowModal(false)
    return (
        <div className='banner'>
            <div className='sidebar'>
                <div className='info'>
                    <h1>WANDERLUST</h1>
                    <h3>(n.) a strong desire for or impulse to wander or travel and explore the world</h3>
                    {user ?
                        <Link to='/spots' >
                            <button className='away'>Take me away</button>
                        </Link> :
                        <button className='away' onClick={() => setShowModal(true)}>Join us to Explore</button>
                    }
                    {showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                            <SignupForm hideForm={hideForm} />
                        </Modal>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Banner;
