import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { seeSpots } from '../../../store/spots'

const ViewOne = () => {
    const { spotId } = useParams()
    const images = useSelector(state => console.log(state))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(seeSpots())
    }, [dispatch])
    return (
        <div>ViewOne</div>
    )
}

export default ViewOne
