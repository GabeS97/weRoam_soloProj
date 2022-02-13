import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import AddReview from '../Review/AddReview/AddReview';
import AllReviews from '../Review/AllReview/AllReviews';
import AddSpots from './AddSpots/AddSpots';
import EditSpots from './EditSpots/EditSpots';

const SpotsDetails = () => {
    const { id } = useSelector(state => state.session.user.id)
    const [showForm, setShorForm] = useState(false);

    return (
        <div>
            <nav className='navigateAdd'>
                <h2 className='addBtn' onClick={() => setShorForm(!showForm)} >Add</h2>
                {showForm ?  <AddReview /> : null}
            </nav>
            <AllReviews />
        </div>
    )
}

export default SpotsDetails
