import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom/'
import { editActivity } from '../../store/spots';

const EditSpots = () => {
    // destructure the spot form other component
    // replace activity and spot with, spot prop
    const activity = useSelector(state => state.activity)
    // const id = activity
    const spot = activity.list['2']
    // const spot = useSelector(state => state.activity.list['1'].id)
    console.log('...........', spot)
    const history = useHistory();
    const dispatch = useDispatch()
    const [address, setAddress] = useState(spot?.address)
    const [id, useId] = useState()
    const [city, setCity] = useState(spot?.city)
    const [state, setState] = useState(spot?.state)
    const [country, setCountry] = useState(spot?.country)
    const [price, setPrice] = useState(spot?.price)
    const [name, setName] = useState(spot?.name)
    // const [userId, setUserId] = useState(spot?.userId)

    const handleSubmit = async (e) => {
        e.preventDefault()

        // console.log(handleSubmit)
        const payload = {
            address,
            city,
            state,
            country,
            price,
            name,
            userId: spot?.userId,
            id: spot?.id
        }
        console.log(payload)

        let createdActivity;

        createdActivity = await dispatch(editActivity(payload))
        // console.log(createdActivity)

        // try {
        // } catch (err) {
            // throw new Error("This is not working, try again.")
        // }

        if (createdActivity) {
            history.push(`/recommendations`)
        }
    }

    return (
        <form className='newForm' onSubmit={handleSubmit}>
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
            <input htmlFor='price'
                type='number'
                name='price'
                placeholder='Please include your currency'
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
        <button className='editBtn' type='submit'>Edit</button>
    </form>


    )
}

export default EditSpots
