import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { seeActivity } from '../../store/spots';
import AddSpots from './AddSpots';
import EditSpots from './EditSpots';
import './Spots.css'
import { removeActivity } from '../../store/spots';

const Spots = () => {
    // const { activityId } = useParams();
    const dispatch = useDispatch();
    const [showForm, setShorForm] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const onClick = () => setShorForm(!showForm);
    const onClick2 = () => setShowEdit(!showEdit);

    const activity = useSelector(state => {
        return state.activity.list
    })

    const spot = Object.values(activity);
    // console.log('..........', spot[0])
    useEffect(() => {
        dispatch(seeActivity())
    }, [])

    // pass each sport as prop into new component
    return (
        <div className='container'>
            <nav className='navigateAdd'>
                <h2 className='addBtn' onClick={onClick} >Add</h2>
                {showForm ? <AddSpots /> : null}
            </nav>
            <h1 className='recs'>Hosted By Yours Truly </h1>
            <div className='contain'>{spot.map(({ id, name, userId, address, city, state, Images, price }) =>
                <div className='lists' >
                    {/* Create component forEach map item */}
                    {/* Move show edit useState to component */}
                    {Images.map(({ url }) =>
                        <div className='tester'>
                            <img className='locPic' src={url}></img>
                        </div>
                    )}
                    <h2 className='editBtn' onClick={() => setShowEdit(id)} >Edit</h2>
                    <div className='describe' key={id} >
                        {showEdit === id ? <EditSpots /> : null}
                        {/* <h2 className='editBtn' onClick={onClick2} >Edit</h2>
                    <div className='describe' key={id} >
                        {showEdit ? <EditSpots /> : null} */}
                        <button className='deleteButton'
                            onClick={(e) => dispatch(removeActivity(id))}>Delete</button>
                        <div className='p' >
                            <p className='nameBar'>{name}</p>
                            <p className='addressBar'>{address}</p>
                            <p className='cityBar'>{city}</p>
                            <p className='stateBar'>{state}</p>
                            <p className='priceBar'>{price}</p>
                        </div>
                    </div>
                </div>
            )}
            </div>
        </div >
    )
};

export default Spots;
