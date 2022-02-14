import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { editReview, seeReview } from '../../../store/reviews';
import { edit, seeActivity } from '../../../store/spots';

const EditReview = ({ userId, reviews, title }) => {
    const dispatch = useDispatch();
    const history = useHistory()
    const [titles, setTitles] = useState(title)
    const [review, setReview] = useState(reviews)
    const user = useSelector(state => state.session.user)
    const activity = useSelector(state => state.activity);
    const reviewId = useSelector(state => state.review)
    const [showForm, setShorForm] = useState(false)
    console.log('this is my activity state for editReviews state ...............', reviewId.id)
    // const activityId = Object.values(activity)
    const { id } = useParams()
    console.log('this is my activity state for editReviews ...............', useParams())


    useEffect(() => {
        dispatch(seeReview())
    }, [dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            title: titles,
            reviews: review,
            userId: userId,
            reviewId: +id
        }

        console.log('1......................', payload)
        let reviewUpdate =await dispatch(editReview(payload))

        if (reviewUpdate) {
                history.push(`/spots/${payload.reviewId}`)
        }
    }

    return (
        <form className='formForReviewUpdate' onSubmit={handleSubmit }>
            <label htmlFor='review'>
                <input htmlFor='review'
                    type='text'
                    name='name'
                    placeholder='Change your review'
                    value={titles}
                    onChange={(e) => setTitles(e.target.value)}
                    required
                >
                </input>
            </label>
            <label htmlFor='title'>
                <input htmlFor='title'
                    type='text'
                    name='title'
                    placeholder='Set new title'
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    required
                >
                </input>
            </label>

            <button className='editReviewBtn' type='submit'>Edit</button>
        </form>

    )
}

export default EditReview
