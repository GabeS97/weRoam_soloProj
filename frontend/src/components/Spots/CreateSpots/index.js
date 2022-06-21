import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
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
    const [images, setImages] = useState([]);
    const history = useHistory()

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
            price: currPrice,
            images
        }
        await dispatch(addSpots(add_spot))
        history.push('/spots')

    }

    // const updateFile = (e) => {
    //     const file = e.target.files[0]
    //     if (file) {
    //         setImage(file)
    //     }
    // }

    const updateFiles = (e) => {
        const files = e.target.files;
        setImages(files);
    };

    return (
        <div className='createSpot'>
            <div className="createSpot__left">
            </div>

            <div className="createSpot__right">
                <form
                    className='createSpot__form'
                    onSubmit={handleSubmit}>
                    <input
                        value={currAddress}
                        onChange={(e) => setCurrAddress(e.target.value)}
                        type='text'
                        placeholder='Address'
                    >
                    </input>

                    <input
                        value={currTitle}
                        onChange={(e) => setCurrTitle(e.target.value)}
                        type='text'
                        placeholder='Title'
                    >
                    </input>

                    <input
                        value={currCity}
                        onChange={(e) => setCurrCity(e.target.value)}
                        type='text'
                        placeholder='City'
                    >
                    </input>

                    <input
                        value={currState}
                        onChange={(e) => setCurrState(e.target.value)}
                        type='text'
                        placeholder='State'
                    >
                    </input>

                    <input
                        value={currCountry}
                        onChange={(e) => setCurrCountry(e.target.value)}
                        type='text'
                        placeholder='Country'
                    >
                    </input>

                    <input
                        value={currName}
                        onChange={(e) => setCurrName(e.target.value)}
                        type='text'
                        placeholder='Location name'
                    >
                    </input>

                    <input
                        value={currPrice}
                        onChange={(e) => setCurrPrice(e.target.value)}
                        type='text'
                    >
                    </input>

                    <input
                        type="file"
                        multiple
                        onChange={updateFiles}>
                    </input>

                    <button type='submit'>New Post!</button>
                </form>
            </div>
        </div>
    )
}

export default CreateSpot
