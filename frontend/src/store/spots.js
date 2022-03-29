import { csrfFetch } from './csrf';
// export const LOAD_SPOTS = 'reviews/LOAD_SPOTS';
// export const ADD_SPOTS = 'reviews/ADD_SPOTS';
// export const EDIT_SPOTS = 'reviews/EDIT_SPOTS';
// export const REMOVE_SPOTS = 'reviews/REMOVE_SPOTS';
export const LOAD_SPOTS = 'spots/LOAD_SPOTS';
export const ADD_SPOTS = 'spots/ADD_SPOTS';
export const EDIT_SPOTS = 'spots/EDIT_SPOTS';
export const REMOVE_SPOTS = 'spots/REMOVE_SPOTS';
export const LOAD_SPOT = 'spots/LOAD_SPOT';

export const load = (spots) => ({
    type: LOAD_SPOTS,
    spots
});

export const add = (spots) => ({
    type: ADD_SPOTS,
    spots
});

export const edit = (spots) => ({
    type: EDIT_SPOTS,
    spots
});

export const remove = (spots) => ({
    type: REMOVE_SPOTS,
    spots
});

export const loadOne = (spot) => ({
    type: LOAD_SPOT,
    spot
})

export const addSpots = payload => async dispatch => {

    const res = await csrfFetch('/api/spots/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    if (res.ok) {
        const spots = await res.json();
        dispatch(add(spots));
        return spots;
    }
}

export const seeSpots = () => async dispatch => {
    const res = await csrfFetch('/api/spots/');

    if (res.ok) {
        const spots = await res.json();
        dispatch(load(spots))
        return spots
    }
};


export const editSpots = (payload) => async dispatch => {
    const res = await csrfFetch(`/api/spots/${payload.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    if (res.ok) {
        const spots = await res.json();
        dispatch(edit(spots));
        return spots;
    }
}

export const removeSpots = payload => async dispatch => {
    const res = await csrfFetch(`/api/spots/${payload}`, {
        method: 'DELETE',
        body: JSON.stringify({ payload })
    })

    const spots = await res.json();
    dispatch(remove(spots))
    return spots
}

export const viewOneSpot = spotId => async dispatch => {
    const res = await csrfFetch(`/api/spots//${spotId}`)

    if (res.ok) {
        const spot = await res.json()
        dispatch(loadOne(spot))
        return spot
    }
}
const initialState = {};

const spotsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_SPOTS: {
            newState = { ...state }
            const allSpots = {};
            action.spots.forEach(spots => {
                allSpots[spots.id] = spots
            })
            newState = allSpots
            return newState
        }
        case ADD_SPOTS: {
            newState = { ...state }
            newState = {
                ...state,
                [action.spots.id]: action.spots
            };
            return newState;
        }
        case EDIT_SPOTS: {
            newState = { ...state }
            newState = { ...state, [action.spots.id]: action.spots }
            return newState;
        }
        case REMOVE_SPOTS: {
            newState = { ...state }
            delete newState[action.spots.id]
            return newState
        }
        case LOAD_SPOT: {
            newState = { ...state }
            newState = { state, [action.spot.id]: action.spot }
            return newState
        }
        default:
            return state
    };

}

export default spotsReducer
