import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { seeActivity } from '../../store/spots';
import AddSpots from './AddSpots';
import './Spots.css'

const Spots = () => {
    // const { activityId } = useParams();
    const dispatch = useDispatch();
    const activity = useSelector(state => {
        return state.activity.list
    })
    console.log(activity)

    const spot = Object.values(activity);

    useEffect(() => {
        dispatch(seeActivity())
    }, [])


    return (
        <div className='container'>
            <h1 className='recs'>Our recommendations</h1>
            <div className='contain'>{spot.map(({ id, userId, address, city, state, Images, price }) =>
                <div className='lists'>
                    {Images.map(({ url }) =>
                        <div className='tester'>
                            <img className='locPic' src={url}></img>
                        </div>
                    )}
                    <p className='addressBar'>{address}</p>
                    <p className='cityBar'>{city}</p>
                    <p className='stateBar'>{state}</p>
                    <p className='priceBar'>{price}</p>
                </div>
            )}
            </div>
        </div >
    )
};

export default Spots;
