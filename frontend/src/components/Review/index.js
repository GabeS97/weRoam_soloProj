import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { seeReview } from '../../store/reviews'

const Review = () => {
    const { spotId } = useParams()
    const reviews = useSelector(state => state.review)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(seeReview(spotId))
    }, [dispatch])
    return (
        <div>Review</div>
    )
}

export default Review
