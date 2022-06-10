import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editReview } from '../../../../store/reviews';

const EditReview = ({ spotId, review, hideForm }) => {
  const sessionUser = useSelector(state => state.session.user);
  const [currTitle, setCurrTitle] = useState(review?.title ? review?.title : '');
  const [currReview, setCurrReview] = useState(review?.reviews ? review?.reviews : '');
  const [currRating, setCurrRating] = useState(review?.rating ? review?.rating : 1);

  const dispatch = useDispatch()


  const handleSubmit = async (e) => {
    e.preventDefault()

    const edit_review = {
      username: sessionUser?.username,
      reviewId: review?.id,
      userId: sessionUser?.id,
      spotId: +spotId,
      title: currTitle,
      reviews: currReview,
      rating: +currRating
    }
    await dispatch(editReview(edit_review))
    hideForm()
  }
  return (
    <div>
      <div className="viewOne__editComment">
        <div>{sessionUser?.username}</div>
        <form onSubmit={handleSubmit}>
          <div className="viewOne__editComment__content">
            <div className="viewOne__editComment__content__left">
              <input
                className='viewOne__editComment__title'
                type='text'
                value={currTitle}
                onChange={(e) => setCurrTitle(e.target.value)}
                placeholder='Title'

              ></input>
              <select
                value={currRating}
                onChange={(e) => setCurrRating(e.target.value)}
                className='viewOne__editComment__rating__select'
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>
          </div>

          <textarea
            value={currReview}
            onChange={(e) => setCurrReview(e.target.value)}
            className="viewOne__editComment__rating">
          </textarea>

          <button type='submit'>Submit</button>
        </form >
      </div>
    </div>
  )
}

export default EditReview
