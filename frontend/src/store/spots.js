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
    activity
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

export const editActivity = payload => async dispatch => {
    // const { id, name, address, city, state, country } = payload
    // console.log('this is activityId:', activityId.id)
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

// console.log('.............', editActivity)

export const removeActivity = activityId => async dispatch => {
    // console.log('************', activityId)
    const res = await csrfFetch(`/api/spots/${activityId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: activityId })
    })

    const activity = await res.json();
    // console.log(activity, '.............')
    dispatch(remove(activity))

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
            // console.log('........', '1', 'in reducer', newState)
            // console.log('........', '1.5', 'in reducer', action.activity)
            newState.activity = {
                ...newState.activity,
                [action.activity.id]: action.activity
            };
            // console.log('..........','2',newState)
            return newState;
        }
        case EDIT_ACTIVITY: {
            newState = { ...state }
            newState.activity = { [action.activity.id]: action.activity }
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
