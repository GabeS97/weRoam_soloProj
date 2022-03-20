import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeSpots, seeSpots } from '../../../store/spots'
import './ViewSpots.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom'

const ViewSpots = () => {
    const dispatch = useDispatch()
    const views = useSelector(state => state.spots)
    const viewPage = Object.values(views)
    console.log(views, '<<<<<<<<<,'
    )
    useEffect(() => {
        dispatch(seeSpots())
    }, [dispatch])
    return (
        <div className='viewSpots__page'>
            <h1>Developers picks</h1>
            <div className='viewSpots__imageContainer'>
                {viewPage.map(view => (
                    <Link key={view.id} to={`/spots/${view.id}`}>
                        <div className='viewSpots__cardContainer'>
                            <div className='viewSpots__imgContainer'>
                                <img className='viewSpots__image' src={view.imageLink} alt='' />
                            </div>

                            <div className='viewSpots__infoContainer'>
                                <h2 className='viewSpots__city'>{view.city}</h2>
                                <p className='viewSpots__address'>{view.address}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ViewSpots