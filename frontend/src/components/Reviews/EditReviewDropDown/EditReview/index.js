import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editReview } from '../../../../store/reviews';

const EditReview = ({ spotId, review, hideForm, stars }) => {
  const sessionUser = useSelector(state => state.session.user);
  const [currTitle, setCurrTitle] = useState(review?.title ? review?.title : '');
  const [currReview, setCurrReview] = useState(review?.reviews ? review?.reviews : '');
  const [currRating, setCurrRating] = useState(review?.rating ? review?.rating : 1);
  const [currStar, setCurrStar] = useState(review?.rating ? review?.rating : 1);
  const [hoverValue, setHoverValue] = useState(undefined);
  const dispatch = useDispatch()


  const handleClick = (val) => setCurrStar(val);
  const handleHover = (val) => setHoverValue(val);
  const handleMouseLeave = () => setHoverValue(undefined);

  const handleSubmit = async (e) => {
    e.preventDefault()

    const edit_review = {
      username: sessionUser?.username,
      reviewId: review?.id,
      userId: sessionUser?.id,
      spotId: +spotId,
      title: currTitle,
      reviews: currReview,
      // rating: +currRating,
      rating: +currStar

    }
    await dispatch(editReview(edit_review))
    hideForm()
  }
  return (
    // <div>
    //   <div className="viewOne__editComment">
    //     <div>{sessionUser?.username}</div>
    //     <form onSubmit={handleSubmit}>
    //       <div className="viewOne__editComment__content">
    //         <div className="viewOne__editComment__content__left">
    //           <input
    //             className='viewOne__editComment__title'
    //             type='text'
    //             value={currTitle}
    //             onChange={(e) => setCurrTitle(e.target.value)}
    //             placeholder='Title'

    //           ></input>
    //           <select
    //             value={currRating}
    //             onChange={(e) => setCurrRating(e.target.value)}
    //             className='viewOne__editComment__rating__select'
    //           >
    //             <option value={1}>1</option>
    //             <option value={2}>2</option>
    //             <option value={3}>3</option>
    //             <option value={4}>4</option>
    //             <option value={5}>5</option>
    //           </select>
    //         </div>
    //       </div>

    //       <textarea
    //         value={currReview}
    //         onChange={(e) => setCurrReview(e.target.value)}
    //         className="viewOne__editComment__rating">
    //       </textarea>

    //       <button type='submit'>Submit</button>
    //     </form >
    //   </div>
    // </div>
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
        <div className="viewOne__Create__starRatings">
          {stars.map((_, idx) => (
            <i
              key={idx}
              className="fa-solid fa-star fa-lg star__ratings"
              style={{ color: (hoverValue || currStar) > idx ? 'red' : 'grey' }}
              // color={(hoverValue || currStar) > idx ? 'red' : 'grey'}

              onClick={() => handleClick(idx + 1)}
              onMouseOver={() => handleHover(idx + 1)}
              onMouseLeave={(handleMouseLeave)}

            ></i>
          ))}
        </div>

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

export default EditReview
