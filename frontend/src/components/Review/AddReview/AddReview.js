import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { addReview, seeReview } from '../../../store/reviews'
import { seeActivity } from '../../../store/spots'
import '../AllReview/AllReviews.css'

const AddReview = () => {

    const user = useSelector(state => state.session.user)
    const history = useHistory();
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [reviews, setReview] = useState('')
    const activities = useSelector(state => state.activity)

    const { id } = useParams()
    // console.log('ACTIVITIES..................', id)

    useEffect(() => {
        dispatch(seeActivity())
    }, [dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault();


        const payload = {
            title,
            reviews,
            userId: user?.id,
            activityId: id
        }

        let createReview = await dispatch(addReview(payload));
        if (createReview) {
            history.push(`/spots/${payload.activityId}`)
        }
    }

    return (
        <form className='formForReviewUpdate' onSubmit={handleSubmit}>
            <label htmlFor='review'>
                <input htmlFor='review'
                    type='text'
                    name='name'
                    placeholder='Change your review'
                    value={reviews}
                    onChange={(e) => setReview(e.target.value)}
                    required
                >
                </input>
            </label>
            <label htmlFor='title'>
                <input htmlFor='title'
                    type='text'
                    name='title'
                    placeholder='Set new title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                >
                </input>
            </label>

            <button className='editReviewBtn' type='submit'>Add</button>
        </form>
    )
}

export default AddReview
