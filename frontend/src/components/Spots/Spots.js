import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { seeActivity } from '../../store/spots';
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
            <div className='contain'>{spot.map(({ id, userId, address, city, state, Images }) =>
                <div className='lists'>'
                    {Images.map(({ url }) =>
                        <img className='locPic' src={url}></img>)}
                    <p className='addressBar'>{address}</p>
                    <p className='cityBar'>{city}</p>
                    <p className='stateBar'>{state}</p>
                </div>
            )}
            </div>
        </div >
    )
};

export default Spots;
