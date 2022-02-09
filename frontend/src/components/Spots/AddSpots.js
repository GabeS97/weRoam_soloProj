import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { addActviity } from '../../store/spots'
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
    // const [display, setDisplay] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            name,
            price,
            address,
            city,
            state,
            country,
            userId: user?.id
        }

        let createActivity = await dispatch(addActviity(payload))
        if (createActivity) {
            history.push(`/spots/${createActivity.id}`)
            // hideForm()
        }
    }

    const cancelClick = (e) => {
        e.preventDefault();
        // hideForm()
    }



    return (
            <form className='newForm'>
                <label htmlFor='name'>
                    <input
                        type='text'
                        name='name'
                        placeholder='name your activity'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    >
                    </input>
                </label>

                <label htmlFor='price'>
                    <input
                        type='number'
                        name='price'
                        placeholder='please also include your currency'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    >
                    </input>
                </label>

                <label htmlFor='address'>
                    <input htmlFor='address'
                        type='text'
                        name='address'
                        placeholder='enter address'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    >
                    </input>
                </label>
                <label htmlFor='city'>
                    <input htmlFor='city'
                        type='text'
                        name='city'
                        placeholder='enter city'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    >
                    </input>
                </label>
                <label htmlFor='country'>
                    <input htmlFor='country'
                        type='text'
                        name='country'
                        placeholder='enter country'
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    >
                    </input>
                </label>
                <label htmlFor='state'>
                    <input htmlFor='state'
                        type='text'
                        name='state'
                        placeholder='enter state'
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    >
                    </input>
                </label>
                <button onClick={handleSubmit}>Host Me!</button>
            </form>

    )
}

export default AddSpots
