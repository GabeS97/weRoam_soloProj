import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import reviewReducer, { removeReview, seeReview } from '../../../store/reviews'
import { useState } from 'react'
import EditSpots from '../../Spots/EditSpots/EditSpots'
import EditReview from '../EditReview/EditReview'
import { seeActivity } from '../../../store/spots'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import './AllReviews.css'

const AllReviews = () => {
    const dispatch = useDispatch();
    const [showForm, setShorForm] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    const { id } = useParams()

    // console.log(activityId)
    const user = useSelector(state => state.session.user);
    const userId = user.id;
    const username = user.username;

    const reviews = useSelector(state => state.review)
    const activities = useSelector(state => state.activity)

    const review = Object.values(reviews)
    const activity = Object.values(activities);


    const filterReview = review?.filter(comment => {
        // console.log(comment,  '....................')
        // console.log(comment.activityId, id, '<<<<<<<<<<<<<<<<<<<<')
        return comment.activityId === +id
    })

    // console.log('///////////////////////', useParams())
    // console.log('....................', filterReview)
    // console.log('....................', review)


    // const allReview = []
    // review.forEach((ele) => {
    //     console.log('this is my console log for my review', ele)
    //     activity.forEach(single => {
    //     // console.log('this is my console log for my activity', single)
    //         if (single.id === ele.activityId) {
    //             allReview.push(ele)
    //         }
    //     })
    // }
    // )


    useEffect(() => {
        dispatch(seeReview())
    }, [dispatch])


    // useEffect(() => {
    //     dispatch(seeActivity())
    // }, dispatch)

    return (
        <div className='containReview'>{filterReview?.map(({ id, reviews, title, userId }) => (
            <div className='comments' key={id}>
                <div>
                    <img className='tokyoPic' src='https://media.istockphoto.com/photos/coming-soon-neon-sign-the-banner-shining-light-signboard-collection-picture-id1332167985?b=1&k=20&m=1332167985&s=170667a&w=0&h=O-084eNJBhGZGJbJvNvUC1P6d4aSo6XkV4Kom7ZZcIQ=' alt=''/>
                </div>
                <p className='title'>{title}</p>
                <p className='reviews'>{reviews}</p>
        <button className='editbuttonForReview' onClick={() => setShowEdit(id)}>Edit</button>
        {showEdit === id ? <EditReview id={id} userId={userId} reviews={reviews} title={title} /> : null}
        <button className='deleteButtonForReview'
            onClick={(e) => { { dispatch(removeReview(id)) } }}
        >
            Delete
        </button>
            </div>
        ))}
        </div>
        // <>
        //     {allReview?.map((comment) => (
        //         <div>
        //             <div className="reviewActivity">
        //                 <div className="user-review">{username}</div>
        //                 <li key={comment?.id} className="review">
        //                     {comment?.review}
        //                     <p className='title'>{comment.title}</p>
        //                     <p className='reviews'>{comment.reviews}</p>
        //                     <button className='editbutton' onClick={() => setShowEdit(comment.id)}>Edit</button>
        //                     {/* <button className='editbutton' onClick={() => setShowEdit(id)}>Edit</button> */}
        //                     {showEdit === comment.id ? <EditReview id={comment.id} userId={userId} reviews={reviews} title={comment.title} /> : null}
        //                     <button className='deleteBtn'
        //                         onClick={(e) => { { dispatch(removeReview(comment.id)) } }}
        //                     >
        //                         Delete
        //                     </button>
        //                 </li>
        //             </div>
        //         </div>
        //     ))}
        // </>
        // <div>
        //     <p>{JSON.stringify(allReview)}</p>
        // </div>

    )
}

export default AllReviews
