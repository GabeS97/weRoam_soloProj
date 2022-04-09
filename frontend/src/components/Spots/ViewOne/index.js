import React from 'react'
import { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { seeReview } from '../../../store/reviews'
import { viewOneSpot } from '../../../store/spots'
import './ViewOne.css'


const ViewOne = () => {
    const { spotId } = useParams()
    const spots = useSelector(state => state.spots)
    const spot = Object.values(spots)
    const choice = spot.find(location => location?.id === +spotId)
    const reviews = useSelector(state => Object.values(state.review))
    let review = reviews.filter(rates => rates.rating)
    console.log(review);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(viewOneSpot(spotId))
    }, [dispatch])


    useEffect(() => {
        dispatch(seeReview(spotId))
    }, [dispatch])

    return (
        <div className='viewOne'>
            <div className='viewOne__page'>
                <h2 className='viewOne__title'>{choice?.title}</h2>
                <div className="viewOne__labels">
                    <i class="fa-solid fa-star"></i>
                    <h4 className='viewOne__address'>{choice?.address}</h4>
                </div>
                <img src={choice?.imageLink} alt='' />
            </div>

        </div>
    )
}

export default ViewOne
