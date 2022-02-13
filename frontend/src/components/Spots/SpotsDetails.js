import React from 'react'
import { useSelector } from 'react-redux';
import AllReviews from '../Review/AllReview/AllReviews';
import AddSpots from './AddSpots/AddSpots';
import EditSpots from './EditSpots/EditSpots';

const SpotsDetails = () => {
    const { id } = useSelector(state => state.session.user.id)
    return (
        <div>
            <h1>Anything</h1>
            <AllReviews />
        </div>
    )
}

export default SpotsDetails
