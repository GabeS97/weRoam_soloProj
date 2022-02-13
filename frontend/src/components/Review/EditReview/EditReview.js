import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { editReview } from '../../../store/reviews';
import { edit } from '../../../store/spots';

const EditReview = ({ id, userId, reviews, title }) => {
    const dispatch = useDispatch();
    const history = useHistory()
    const [titles, setTitles] = useState(title)
    const [review, setReview] = useState(reviews)
    const user = useSelector(state => state.session.user)
    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            title: titles,
            reviews: review,
            userId: userId,
            id: id
        }

        let reviewUpdate;
        reviewUpdate = await dispatch(editReview(payload))

        if (reviewUpdate) {
                history.push(`/spots/:id`)
        }
    }

    return (
        <form className='formForReviewUpdate' onSubmit={handleSubmit}>
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
