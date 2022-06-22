import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeSpots, seeSpots } from '../../../store/spots'
import './ViewSpots.css'
import { Link } from 'react-router-dom'

const ViewSpots = () => {
    const dispatch = useDispatch()
    const views = useSelector(state => state?.spots)
    const viewPage = Object.values(views)


    useEffect(() => {
        dispatch(seeSpots())
    }, [dispatch])

    return (
        <div className='viewSpots__page'>
            <div className='viewSpots__gridContainer'>
                <div className="viewSpots__imageContainer">
                    {viewPage?.map(view => (
                        <Link
                            key={view?.id}
                            to={`/spots/${view?.id}`}
                            style={{ textDecoration: 'none', color: 'black' }}>
                            <div className='viewSpots__cardContainer'>
                                <div className='viewSpots__imgContainer'>
                                    <img className='viewSpots__image' src={view?.Images?.[0]?.imageUrl} alt='' />
                                </div>
                                <div className='viewSpots__infoContainer'>
                                    <div className='viewSpots__label'>
                                        <h2 className='viewSpots__title'>{view?.title}</h2>
                                        <p className='viewSpots__address'>{view?.address}</p>
                                        <p className='viewSpots__price'>{`$${view?.price}`}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ViewSpots
