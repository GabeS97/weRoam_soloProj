import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { add, seeActivity } from '../../../store/spots';
import AddSpots from '../AddSpots/AddSpots';
import EditSpots from '../EditSpots/EditSpots';
import './Spots.css'
import { removeActivity } from '../../../store/spots';
import { Link, NavLink } from 'react-router-dom';
import AddReview from '../../Review/AddReview/AddReview';
import NotFound from '../../NotFound/NotFound';
// import AllReviews from '../../Review/AllReview/AllReviews';

const Spots = () => {
    // const { id } = useParams()
    const user = useSelector(state => state.session.user)
    console.log(user)
    const history = useHistory();
    const dispatch = useDispatch();
    const [showForm, setShorForm] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    // const onClick = () => setShorForm(!showForm);
    // const onClick2 = () => setShowEdit(!showEdit);

    const activity = useSelector(state => {
        // return state.activity.list
        return state.activity
    })


    const spot = Object.values(activity);

    useEffect(() => {
        dispatch(seeActivity())
    }, [dispatch])


    // const handleDelete = async (e) => {
    //     e.preventDefault();

    //     const deleted = await removeActivity(spot)
    //     if (deleted) {
    //         return history.push('/spots')
    //     }
    // }

    return (
        <div className='container'>
            <nav className='navigateAdd'>
                {user ? <h1 className='recs'>Hosted By {user.username}! </h1> : <h1 className='recs'>Developers Favorites </h1>}
                {/* <h1 className='recs'>Hosted By You! </h1> */}
            </nav>
            {user && (<h2 className='addBtn' onClick={() => setShorForm(!showForm)} >Add</h2>)}
            {/* <h2 className='addBtn' onClick={() => setShorForm(!showForm)} >Add</h2> */}
            {/* {showForm ? <AddSpots className='addForm'/> : null} */}
            {showForm && <AddSpots />}
            <div className='contain'>{spot.map(({ id, name, userId, address, city, country, state, imageLink, price }) => (
                // <div className='contain'>{spot.map(({ id, name, userId, address, city, state, Images, price }) =>
                <div className='lists' key={id}>
                    {/* {Images.map((image) => */}

                    <div className='tester' key={id}>
                        {user ? <NavLink className='imageLinkBar' to={`/spots/${id}`} >
                            <img className='locPic' src={imageLink} alt=''></img>
                        </NavLink> : <div className='imageLinkBar' to={`/spots/${id}`} >
                            <img className='locPic' src={imageLink} alt=''></img>
                        </div>}
                        {/* <NavLink className='imageLinkBar' to={`/spots/${id}`} >
                            <img className='locPic' src={imageLink} alt=''></img>
                        </NavLink> */}
                        <div className='words' >
                            <p className='nameBar'>{name}</p>
                            <p className='priceBar'>{price}</p>
                            <p className='addressBar'>{address}</p>
                            <p className='cityBar'>{city}</p>
                            <p className='countryBar'>{country}</p>
                            <p className='stateBar'>{state}</p>
                        </div>
                        {user && (user.id === userId) &&

                            (<div className='buttonsEditandDelete' key={id} >
                                <button className='editBtn' onClick={() => setShowEdit(id && !showEdit)} >Edit</button>
                                <button className='deleteButton'
                                    onClick={(e) => { { dispatch(removeActivity(id)) } }}
                                >
                                    Delete
                                </button>
                                {/* <EditSpots id={id} name={name} userId={userId} address={address} city={city} state={state} price={price} /> */}
                                {/* {showEdit === id ? <EditSpots id={id} name={name} userId={userId} address={address} city={city} state={state} price={price} /> : null} */}
                                {showEdit && <EditSpots id={id} name={name} userId={userId} address={address} city={city} state={state} price={price} />}
                            </div>)}
                    </div>
                </div>
            )
            )}
            </div>
        </div >
    )
};

export default Spots;
