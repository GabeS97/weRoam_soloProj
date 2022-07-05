import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { seeSpots } from '../../store/spots'
import './Explore.css'

const Explore = () => {
    const spots = Object.values(useSelector(state => state.spots))
    const dispatch = useDispatch()

    const countries = new Set()

    spots.forEach(ele => {
        if (!countries.has(ele.country)) {
            countries.add(ele.country)
        }
    })
    const countryArr = [...countries]
    console.log(countryArr)

    useEffect(() => {
        dispatch(seeSpots())
    }, [dispatch])
    console.log(spots);
    return (
        <div className='explore'>
            <div className="get__inspired">
                <h1>Inspiration for your next trip</h1>
            </div>

            <div className="country__container">
                <div>
                    {countryArr.slice(0, 3).map(country => (
                        <div className="explore__country">
                            hey
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Explore
