import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addSpots, seeSpots, viewOneSpot } from '../../../store/spots'
import './ViewOne.css'

const ViewOne = () => {
    const { spotId } = useParams()
    const spots = useSelector(state => state.spots)
    const spot = Object.values(spots)
    const dispatch = useDispatch()
    console.log(spot)
    useEffect(() => {
        dispatch(viewOneSpot(spotId))
    }, [dispatch])

    return (
        <div className='viewOne__page'>
            {spot.map(loc => (
                <>
                    <div key={loc.id} className='viewOne__card'>
                        <img className='viewOne__image' src={loc.imageLink} alt='' />
                        <div className="viewOne__textInfo">
                            <h2 className='viewOne__title'>{loc.title}</h2>
                            <h3 className='viewOne__country'>{loc.country}</h3>
                            <h3 className='viewOne__city'>{loc.city}</h3>
                            <h3 className='viewOne__address'>{loc.address}</h3>
                        </div>
                    </div>
                </>
            ))}
            <h1>Hey</h1>
        </div>
    )
}

export default ViewOne
