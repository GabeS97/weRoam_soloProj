import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { addReview, seeReview } from '../../../store/reviews'
import { seeActivity } from '../../../store/spots'

const AddReview = () => {

    const user = useSelector(state => state.session.user)
    const history = useHistory();
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [reviews, setReview] = useState('')

    const activities = useSelector(state => state.activity)

    const { id } = useParams()

    useEffect(() => {
        dispatch(seeActivity())
    }, [dispatch])

    const handleSubmit = async(e) => {
        e.preventDefault();


        const payload = {
            title,
            reviews,
            userId: user?.id,
            activityId : id
        }
        // console.log('&&&&&&&&&&&&&&&&&&&&&&&&', payload)
        console.log('1................... Bread trails for addReviews', payload)

        let createReview = await dispatch(addReview(payload));
        if (createReview) {
            history.push('/spots/id')
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