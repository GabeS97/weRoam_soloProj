import { csrfFetch } from './csrf';
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
    payload: activity
});

export const remove = (activity) => ({
    type: REMOVE_ACTIVITY,
    activity
});

export const addActviity = activityId => async dispatch => {

    const res = await csrfFetch('/api/spots/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(activityId)
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

export const editActivity = (input) => async dispatch => {
    // console.log('THUNK:', payload.id)
    const res = await csrfFetch(`/api/spots/${input.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input)
    })

    if (res.ok) {
        const activity = await res.json();
        dispatch(edit(activity));
        return activity;
    }
}

export const removeActivity = activityId => async dispatch => {

    const res = await csrfFetch(`/api/spots/${activityId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: activityId })
    })

    const activity = await res.json();
    dispatch(remove(activity))
    return activity
}
const initialState = { list: {} };


const activityReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_ACTIVITY: {
            newState = { ...state }
            const allActivities = {};
            action.activity.forEach(activity => {
                allActivities[activity.id] = activity
            })
            newState.list = allActivities
            return newState
        }
        case ADD_ACTIVITY: {
            newState = { ...state }
            newState.activity = {
                ...newState.activity,
                [action.activity.id]: action.activity
            };
            return newState;
        }
        case EDIT_ACTIVITY: {
            newState = { ...state }
            newState[action.payload.id] = action.payload
            return newState;
        }
        case REMOVE_ACTIVITY: {
            newState = { ...state }
            delete newState.list[action.activity.id]
            return newState
        }
        default:
            return state
    };

}

export default activityReducer
