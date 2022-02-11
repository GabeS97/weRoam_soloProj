import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom/'
import { editActivity } from '../../store/spots';

const EditSpots = ({ id, city, state, country, price, name, userId, address }) => {
    // destructure the spot form other component
    // replace activity and spot with, spot prop
    // const activity = useSelector(state => state.activity)
    // const id = activity
    // const spot = activity.list
    // console.log(spot)
    // const spot = useSelector(state => state.activity.list['1'].id)
    // console.log('...........', spot)
    const history = useHistory();
    const dispatch = useDispatch()
    const [addresses, setAddress] = useState(address)
    const [cities, setCity] = useState(city)
    const [states, setState] = useState(state)
    const [countrys, setCountry] = useState(country)
    const [prices, setPrice] = useState(price)
    const [names, setName] = useState(name)
    // const [userId, setUserId] = useState(userId)

    // console.log('.............', spot)
    const handleSubmit = async (e) => {
        e.preventDefault()

        // console.log(handleSubmit)
        const payload = {
            address: addresses,
            city: cities,
            state: states,
            country: countrys,
            price: prices,
            name: names,
            userId: userId,
            id: id
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
                    value={names}
                    onChange={(e) => setName(e.target.value)}
                >
                </input>
            </label>

            <label htmlFor='price'>
                <input htmlFor='price'
                    type='number'
                    name='price'
                    placeholder='Please include your currency'
                    value={prices}
                    onChange={(e) => setPrice(e.target.value)}
                >
                </input>
            </label>

            <label htmlFor='address'>
                <input htmlFor='address'
                    type='text'
                    name='address'
                    placeholder='Enter address'
                    value={addresses}
                    onChange={(e) => setAddress(e.target.value)}
                >
                </input>
            </label>
            <label htmlFor='city'>
                <input htmlFor='city'
                    type='text'
                    name='city'
                    placeholder='Enter city'
                    value={cities}
                    onChange={(e) => setCity(e.target.value)}
                >
                </input>
            </label>
            <label htmlFor='country'>
                <input htmlFor='country'
                    type='text'
                    name='country'
                    placeholder='Enter country'
                    value={countrys}
                    onChange={(e) => setCountry(e.target.value)}
                >
                </input>
            </label>
            <label htmlFor='state'>
                <input htmlFor='state'
                    type='text'
                    name='state'
                    placeholder='Enter state'
                    value={states}
                    onChange={(e) => setState(e.target.value)}
                >
                </input>
            </label>
            <button className='editBtn' type='submit'>Edit</button>
        </form>


    )
}

export default EditSpots
