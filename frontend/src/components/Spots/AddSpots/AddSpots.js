import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { addActviity } from '../../../store/spots'
import './AddSpots.css'


const AddSpots = () => {
    const user = useSelector(state => state.session.user);
    const activity = useSelector(state => state.activity);

    console.log(activity)
    const history = useHistory()
    const dispatch = useDispatch();
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [price, setPrice] = useState('')
    const [name, setName] = useState('')
    const [imageLink, setImageLink] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            name,
            price,
            address,
            city,
            state,
            country,
            userId: user?.id,
            imageLink
        }

        // let createActivity
        let createActivity = await dispatch(addActviity(payload))
        if (createActivity) {
            history.push(`/spots`)
        }
        // e.preventDefault()
    }

    return (
        <form className='newForm' onSubmit={handleSubmit} >
            <label htmlFor='name'>
                <input
                    type='text'
                    name='name'
                    placeholder='Name your activity'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                >
                </input>
            </label>

            <label htmlFor='price'>
                <input
                    type='number'
                    name='price'
                    placeholder='Provide price'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                >
                </input>
            </label>

            <label htmlFor='address'>
                <input htmlFor='address'
                    type='text'
                    name='address'
                    placeholder='Enter address'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                >
                </input>
            </label>
            <label htmlFor='city'>
                <input htmlFor='city'
                    type='text'
                    name='city'
                    placeholder='Enter city'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                >
                </input>
            </label>
            <label htmlFor='country'>
                <input htmlFor='country'
                    type='text'
                    name='country'
                    placeholder='Enter country'
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                >
                </input>
            </label>
            <label htmlFor='state'>
                <input htmlFor='state'
                    type='text'
                    name='state'
                    placeholder='Enter state'
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                >
                </input>
            </label>
            <label htmlFor='url'>
                <input htmlFor='url'
                    type='url'
                    name='url'
                    placeholer='Enter image link'
                    value={imageLink}
                    onChange={(e) => setImageLink(e.target.value)}
                    >
                </input>
            </label>
            <button type='submit'>Host Me!</button>
        </form>

    )
}

export default AddSpots
