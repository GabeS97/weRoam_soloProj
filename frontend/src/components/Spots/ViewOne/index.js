import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { removeReview, seeReview } from '../../../store/reviews'
import { viewOneSpot } from '../../../store/spots'
import './ViewOne.css'
import CreateReview from '../../Reviews/CreateReview'
import EditReviewDropDown from '../../Reviews/EditReviewDropDown'
import { Modal } from '../../../context/Modal'


const ViewOne = () => {
    const { spotId } = useParams()
    const sessionUser = useSelector(state => state.session.user)
    const spots = useSelector(state => state.spots)
    const spot = Object.values(spots)
    const choice = spot.find(location => location?.id === +spotId)
    const reviews = useSelector(state => Object.values(state.review))
    const [addComment, showAddComment] = useState(false)
    const stars = new Array(5).fill(0)

    const test = choice?.address.split(' ').join('+')

    let sum = 0
    reviews.forEach(ele => {
        sum += ele.rating
    })

    let avg = (sum / reviews.length)

    const dispatch = useDispatch()

    const closeComment = () => showAddComment(false)

    useEffect(() => {
        dispatch(viewOneSpot(spotId))
    }, [dispatch])


    useEffect(() => {
        dispatch(seeReview(spotId))
    }, [dispatch])



    return (
        <div className='viewOne'>
            <div className='viewOne__page'>
                <div className="viewOne__headContainer">

                    <h2 className='viewOne__title'>{choice?.title}</h2>
                    <div className="viewOne__labels">
                        <i className="fa-solid fa-star"></i>
                        <h4 className='viewOne__avg'>{reviews.length > 0 ? avg : null} </h4>
                        <h4 className='viewOne__review'>{reviews.length} reviews </h4>
                        <h4 className='viewOne__address'>{choice?.address}</h4>
                    </div>

                    <div className="viewOne__container">
                        <div className="viewOne__contain__top">
                            <img className='viewOne__contain__top__image' src={choice?.Images?.[0]?.imageUrl} alt='' />
                            <div className="viewOne__contain">
                                {choice?.Images?.map(image => (
                                    <div className="viewOne__contain__bottom" key={image?.id}>
                                        {choice?.Images?.length > 1 && (
                                            <img className='viewOne__contain__image' src={image?.imageUrl} alt='' />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="viewOne__bodyContainer">
                    <div className="viewOne__event__info">
                        <div className="viewOne__event__label">
                            <h3 className='viewOne__event__owner'>{choice?.name} hosted by {choice?.User?.username}</h3>
                            <div className="viewOne__comments">
                                <div className="viewOne__ratings">
                                    <i className="fa-solid fa-star fa-lg star__ratings" style={{ color: 'red' }}></i>
                                    <h3 className='viewOne__avg'>{reviews.length > 0 ? avg : null}</h3>
                                    <h3 className='viewOne__review'>{reviews.length} reviews</h3>
                                </div>
                            </div>
                        </div>

                        <div
                            className="viewOne__add__comment"
                            onClick={() => showAddComment(true)}>
                            Add Comment
                        </div>

                        {addComment && (
                            <Modal onClose={() => showAddComment(false)}>
                                <CreateReview
                                    spotId={spotId}
                                    dispatch={dispatch}
                                    closeComment={closeComment}
                                    stars={stars}
                                />
                            </Modal>
                        )}
                    </div>

                    <div className="viewOne__comment__box">
                        {reviews.map(review => (
                            <div className="viewOne__comment" key={review?.id}>
                                <div className="viewOne__comment__content">
                                    <div className="viewOne__comment__content__left">
                                        <div className="vieOne_comment__left__info">
                                            <h3 className='viewOne__username'>{review?.username}</h3>
                                            <h5 className='viewOne__comment__title'>{review?.title}</h5>
                                            <h5 className='viewOne__comment__createdAt'>{review?.createdAt}</h5>
                                        </div>

                                        <div className="viewOne__comment__content__right">
                                            {stars.map(idx => (
                                                <i
                                                    key={idx}
                                                    className="fa-solid fa-star star__ratings"
                                                    style={{ color: (review?.rating) > idx ? 'red' : 'grey' }}
                                                // color={(hoverValue || currStar) > idx ? 'red' : 'grey'}
                                                ></i>
                                            ))}
                                        </div>

                                        <div className="viewOne__comment__left__options">
                                            {review?.userId === sessionUser?.id && (
                                                <div className="viewOne__comment__editAndDelete">
                                                    <div className="viewOne__comment__dropdown">
                                                        <i className="fa-solid fa-ellipsis-vertical viewOne__comment__options"></i>
                                                    </div>

                                                    <EditReviewDropDown
                                                        dispatch={dispatch}
                                                        removeReview={removeReview}
                                                        review={review}
                                                        spotId={spotId} />
                                                </div>
                                            )}
                                        </div>

                                    </div>
                                </div>

                                <div className="viewOne__comment__rating">
                                    {review?.reviews}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="viewOne__map__comment__divider">
                        
                    </div>

                    <div className="viewOne__google__static__api">
                        <h3>The area you will be in</h3>
                        <img className='viewOne__google__maps' src={`https://maps.googleapis.com/maps/api/staticmap?center=${test}&zoom=14&size=600x300&maptype=roadmap&markers=color:red%7C${test}&size=600x300&key=AIzaSyDu8qWEuIFgYdK54EORgwkxzbXZEGqXsTs`} alt='' />
                    </div>
                </div>
            </div>

        </div >
    )
}

export default ViewOne
