import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { add, seeActivity } from '../../store/spots';
import AddSpots from './AddSpots';
import EditSpots from './EditSpots';
import './Spots.css'
import { removeActivity } from '../../store/spots';

const Spots = () => {
    // const { activityId } = useParams();
    const dispatch = useDispatch();
    const [showForm, setShorForm] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    // const onClick = () => setShorForm(!showForm);
    // const onClick2 = () => setShowEdit(!showEdit);

    const activity = useSelector(state => {
        return state.activity.list

    })

    const spot = Object.values(activity);
    useEffect(() => {
        dispatch(seeActivity())
    }, [dispatch])

    // pass each sport as prop into new component
    return (
        <div className='container'>
            <nav className='navigateAdd'>
                <h2 className='addBtn' onClick={() => setShorForm(!showForm)} >Add</h2>
                {showForm ? <AddSpots /> : null}
            </nav>
            <h1 className='recs'>Hosted By Yours Truly </h1>
            <div className='contain'>{spot.map(({ id, name, userId, address, city, state, Images, price }) =>
                // <div className='contain'>{spot.map(({ id, name, userId, address, city, state, Images, price }) =>
                <div className='lists' key={id}>
                    {/* Create component forEach map item */}
                    {/* Move show edit useState to component */}
                    {Images.map((image) =>
                        <div className='tester' key={image.id}>
                            <img className='locPic' src={image.url} alt=''></img>
                            <div className='p' >
                                <p className='nameBar'>{name}</p>
                                <p className='addressBar'>{address}</p>
                                <p className='cityBar'>{city}</p>
                                <p className='priceBar'>{price}</p>
                                <p className='stateBar'>{state}</p>
                            </div>
                            {/* inserthere */}
                            <div className='describe' key={id} >
                            <button className='editBtn' onClick={() => setShowEdit(id)} >Edit</button>
                                {showEdit === id ? <EditSpots id={id} name={name} userId={userId} address={address} city={city} state={state} image={Images} price={price} /> : null}
                                <button className='deleteButton'
                                    onClick={(e) => dispatch(removeActivity(id))}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
            </div>
        </div >
    )
};

export default Spots;
