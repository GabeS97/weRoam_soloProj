import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import reviewReducer, { removeReview, seeReview } from '../../../store/reviews'
import { useState } from 'react'
import EditSpots from '../../Spots/EditSpots/EditSpots'
import EditReview from '../EditReview/EditReview'

const AllReviews = () => {
    const dispatch = useDispatch();
    const [showForm, setShorForm] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const review = useSelector(state => {
        return state.review
        // return state.review.list
    })

    const single = Object.values(review)

    useEffect(() => {
        dispatch(seeReview())
        // showReview()

    }, [dispatch])

    // const showReview = () => {
    //     console.log('single console' , review)
    //     dispatch(seeReview())
    // }


    return (
        <div className='containReview'>{single.map(({ id, reviews, title, userId }) => (
            <div className='comments' key={id}>
                <p className='title'>{title}</p>
                <p className='reviews'>{reviews}</p>
                <button className='editReview' onClick={() => setShowEdit(id)}>Edit</button>
                {showEdit === id ? <EditReview id={id} userId={userId} reviews={reviews} title={title} /> : null}
                <button className='deleteButton'
                    onClick={(e) => { { dispatch(removeReview(id)) } }}
                >
                    Delete
                </button>
            </div>
        ))}
        </div>

    )
}

export default AllReviews
