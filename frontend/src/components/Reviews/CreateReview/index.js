import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addReview, seeReview } from '../../../store/reviews'
import '../../Spots/ViewOne/ViewOne.css'

const CreateReview = ({ spotId, dispatch, closeComment }) => {
    const sessionUser = useSelector(state => state.session.user);
    const [currTitle, setCurrTitle] = useState('');
    const [currReview, setCurrReview] = useState('');
    const [currRating, setCurrRating] = useState('---Rate Us---');


    const handleSubmit = async (e) => {
        e.preventDefault()

        const add_review = {
            username: sessionUser?.username,
            userId: sessionUser?.id,
            spotId: +spotId,
            title: currTitle,
            reviews: currReview,
            rating: +currRating
        }

        await dispatch(addReview(add_review))
        setCurrTitle('')
        setCurrReview('')
        setCurrRating('---Rate Us---')
        closeComment()
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='viewOne__comment__form'>
            <div className="viewOne__CreateComment__content">
                <input
                    type='text'
                    value={`@ ${sessionUser?.username}`}
                    disabled></input>
                <input
                    className='viewOne__comment__title'
                    type='text'
                    value={currTitle}
                    onChange={(e) => setCurrTitle(e.target.value)}
                    placeholder='Title'

                ></input>
                <select
                    value={currRating}
                    onChange={(e) => setCurrRating(e.target.value)}
                    className='viewOne__comment__rating__select'
                >
                    <option disabled>{currRating}</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>

                <textarea
                    value={currReview}
                    onChange={(e) => setCurrReview(e.target.value)}
                    className="viewOne__comment__rating">
                </textarea>

                <button type='submit' className='viewOne__submit__createComment'>Submit</button>
            </div>
        </form >
    )
}

export default CreateReview
