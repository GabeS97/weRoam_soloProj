import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom/'
import { add, editActivity } from '../../../store/spots';

const EditSpots = ({ id, city, state, country, price, name, userId, address }) => {
    const history = useHistory();
    const dispatch = useDispatch()
    const [addresses, setAddress] = useState(address ? address : null)
    const [cities, setCity] = useState(city ? city : '')
    const [states, setState] = useState(state ? state : '')
    const [countrys, setCountry] = useState(country ? country : '')
    const [prices, setPrice] = useState(price ? price : '')
    const [names, setName] = useState(name ? name : '')
    const user = useSelector(state => state.session.user);


    const handleSubmit = async (e) => {
        e.preventDefault()

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

        let createdActivity;
        createdActivity = await dispatch(editActivity(payload))

        if (createdActivity) {
            history.push(`/recommendation`)
        }
    }




    return (
        <form className='newForm' onSubmit={handleSubmit}>
            <label htmlFor='name'>
                <input htmlFor='name'
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
