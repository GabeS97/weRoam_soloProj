import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import AddSpots from './AddSpots';
import EditSpots from "./EditSpots";

const SpotsDetails = () => {
    const { id } = useParams()
    const spot = useSelector(state => state.activity[0].id)

    const image = useSelector(state => state.activity.Images)

    return (
        <div>
            <AddSpots />
            <EditSpots />
        </div>
    )
}

export default SpotsDetails
