import { csrfFetch } from './csrf';
export const LOAD_ACTIVITY = 'spots/LOAD_ACTIVITY';
export const ADD_ACTIVITY = 'spots/LOAD_ACTIVITY';
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

export const editActivity = id => async dispatch => {
    const res = await csrfFetch(`/api/spots/${id}`)

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
            
        }
        default:
            return state
    };

}

export default activityReducer
