import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { seeSpots, viewOneSpot } from '../../../store/spots'
import './ViewOne.css'
const ViewOne = () => {
    const { spotId } = useParams()
    const spots = useSelector(state => state.spots)
    const spot = Object.values(spots)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(viewOneSpot(spotId))
    }, [dispatch])

    return (
        <div className='viewOne__page'>
            <h1 className='tester__text'>Hey!</h1>
        </div>
    )
}

export default ViewOne
