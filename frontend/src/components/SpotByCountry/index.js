import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom/'
import { seeSpots } from '../../store/spots'
import './SpotByCountry.css'

const SpotByCountry = () => {
    const { country } = useParams()
    const dispatch = useDispatch()
    const spots = Object.values(useSelector(state => state.spots))
    const spot = spots.filter(x => x.country?.toLowerCase() === country)

    useEffect(() => {
        dispatch(seeSpots())
    }, [dispatch])
    return (
        <div className='spotByCountry__page'>
            <div className='spotByCountry__gridContainer'>
                <div className="spotByCountry__imageContainer">
                    {spot?.map(x => (
                        <NavLink
                            key={x?.id}
                            to={`/spots/${x?.id}`}
                            style={{ textDecoration: 'none', color: 'black' }}>
                            <div className='spotByCountry__cardContainer'>
                                <div className='spotByCountry__imgContainer'>
                                    <img className='spotByCountry__image' src={x?.Images?.[0]?.imageUrl} alt='' />
                                </div>
                                <div className='spotByCountry__infoContainer'>
                                    <div className='spotByCountry__label'>
                                        <h2 className='spotByCountry__title'>{x?.title}</h2>
                                        <p className='spotByCountry__address'>{x?.address}</p>
                                        <p className='spotByCountry__price'>{`$${x?.price}`}</p>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SpotByCountry
