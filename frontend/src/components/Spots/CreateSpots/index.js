import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSpots } from '../../../store/spots'

import './CreateSpot.css'
const CreateSpot = () => {
    const sessionUser = useSelector(state => state.session.user)
    const [currAddress, setCurrAddress] = useState('')
    const [currTitle, setCurrTitle] = useState('')
    const [currCity, setCurrCity] = useState('')
    const [currState, setCurrState] = useState('')
    const [currCountry, setCurrCountry] = useState('')
    const [currName, setCurrName] = useState('')
    const [currPrice, setCurrPrice] = useState(5)
    const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault()

        const add_spot = {
            userId: sessionUser?.id,
            address: currAddress,
            title: currTitle,
            city: currCity,
            state: currState,
            country: currCountry,
            name: currName,
            price: currPrice
        }
        await dispatch(addSpots(handleSubmit))
    }

    return (
        <div className='createSpot'>
            <div className="createSpot__left">

            </div>

            <div className="createSpot__right">
                <form className='createSpot__form'>
                </form>
            </div>
        </div>
    )
}

export default CreateSpot
