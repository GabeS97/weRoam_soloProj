import { csrfFetch } from './csrf';
// export const LOAD_ACTIVITY = 'reviews/LOAD_ACTIVITY';
// export const ADD_ACTIVITY = 'reviews/ADD_ACTIVITY';
// export const EDIT_ACTIVITY = 'reviews/EDIT_ACTIVITY';
// export const REMOVE_ACTIVITY = 'reviews/REMOVE_ACTIVITY';
export const LOAD_ACTIVITY = 'spots/LOAD_ACTIVITY';
export const ADD_ACTIVITY = 'spots/ADD_ACTIVITY';
export const EDIT_ACTIVITY = 'spots/EDIT_ACTIVITY';
export const REMOVE_ACTIVITY = 'spots/REMOVE_ACTIVITY';

export const load = (activity) => ({
    type: LOAD_ACTIVITY,
    activity
});

export const add = (activity) => ({
    type: ADD_ACTIVITY,
    activity
});

export const edit = (activity) => ({
    type: EDIT_ACTIVITY,
    activity
});

export const remove = (activity) => ({
    type: REMOVE_ACTIVITY,
    activity
});

export const addActviity = payload => async dispatch => {

    const res = await csrfFetch('/api/spots/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    if (res.ok) {
        const activity = await res.json();
        dispatch(add(activity));
        return activity;
    }
}

export const seeActivity = () => async dispatch => {
    const res = await csrfFetch('/api/spots/');

    if (res.ok) {
        const activity = await res.json();
        dispatch(load(activity))
        return activity
    }
};


// // load one activity
// export const seeOne = id => async dispatch => {
//     const res = await csrfFetch(`/api/spots/${id}`);

//     if (res.ok) {
//         const activity = await res.json()
//         dispatch(load(activity));
//         return activity
//     }
// }

export const editActivity = (payload) => async dispatch => {
    const res = await csrfFetch(`/api/spots/${payload.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    if (res.ok) {
        const activity = await res.json();
        dispatch(edit(activity));
        return activity;
    }
}

export const removeActivity = payload => async dispatch => {
    const res = await csrfFetch(`/api/spots/${payload}`, {
        method: 'DELETE',
        // headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ payload })
        // body: JSON.stringify({payload })
    })

    const activity = await res.json();
    dispatch(remove(activity))
    return activity
}

const initialState = {};

const activityReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_ACTIVITY: {
            newState = { ...state }
            const allActivities = {};
            action.activity.forEach(activity => {
                allActivities[activity.id] = activity
            })
            newState = allActivities
            return newState
        }
        case ADD_ACTIVITY: {
            newState = { ...state }
            newState = {
                ...state,
                [action.activity.id]: action.activity
            };
            return newState;
        }
        case EDIT_ACTIVITY: {
            newState = { ...state }
            newState = { ...state, [action.activity.id]: action.activity }
            return newState;
        }
        case REMOVE_ACTIVITY: {
            newState = { ...state }
            delete newState[action.activity.id]
            return newState
        }
        default:
            return state
    };

}

export default activityReducer
