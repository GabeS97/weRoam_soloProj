import { csrfFetch } from './csrf';
// export const LOAD_spots = 'reviews/LOAD_spots';
// export const ADD_spots = 'reviews/ADD_spots';
// export const EDIT_spots = 'reviews/EDIT_spots';
// export const REMOVE_spots = 'reviews/REMOVE_spots';
export const LOAD_spots = 'spots/LOAD_spots';
export const ADD_spots = 'spots/ADD_spots';
export const EDIT_spots = 'spots/EDIT_spots';
export const REMOVE_spots = 'spots/REMOVE_spots';

export const load = (spots) => ({
    type: LOAD_spots,
    spots
});

export const add = (spots) => ({
    type: ADD_spots,
    spots
});

export const edit = (spots) => ({
    type: EDIT_spots,
    spots
});

export const remove = (spots) => ({
    type: REMOVE_spots,
    spots
});

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
        // headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ payload })
        // body: JSON.stringify({payload })
    })

    const spots = await res.json();
    dispatch(remove(spots))
    return spots
}

const initialState = {};

const spotsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_spots: {
            newState = { ...state }
            const allSpots = {};
            action.spots.forEach(spots => {
                allSpots[spots.id] = spots
            })
            newState = allSpots
            return newState
        }
        case ADD_spots: {
            newState = { ...state }
            newState = {
                ...state,
                [action.spots.id]: action.spots
            };
            return newState;
        }
        case EDIT_spots: {
            newState = { ...state }
            newState = { ...state, [action.spots.id]: action.spots }
            return newState;
        }
        case REMOVE_spots: {
            newState = { ...state }
            delete newState[action.spots.id]
            return newState
        }
        default:
            return state
    };

}

export default spotsReducer
