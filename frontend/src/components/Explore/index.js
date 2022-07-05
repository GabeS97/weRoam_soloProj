import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { seeSpots } from '../../store/spots'
import './Explore.css'

const Explore = () => {
    const spots = Object.values(useSelector(state => state.spots))
    const dispatch = useDispatch()

    const countries = {}
    const uniqueCountries = new Set()
    spots.forEach(ele => {
        if (!countries[ele.country]) {
            countries[ele.country] = ele?.Images?.[0]?.imageUrl
        }
    })

    spots.forEach(ele => {
        if (!uniqueCountries.has(ele.country)) {
            uniqueCountries.add(ele.country)
        }
    })

    const countryArr = [...uniqueCountries]
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
                    {countryArr.slice(0, 4).map(country => (
                        <div className="explore__country" key={country.id}>
                            <div className="explore__country__img">
                                <img src={countries[country]} alt='' />
                            </div>

                            <div className="explore__country__name">
                                <div>{country.toUpperCase()}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Explore
