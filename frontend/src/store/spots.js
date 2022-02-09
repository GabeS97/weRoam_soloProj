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

export const seeActivity = () => async dispatch => {
    const res = await csrfFetch('/api/spots/');

    if (res.ok) {
        const activity = await res.json();
        dispatch(load(activity))
    }
}

const initialState = { list: {} };


const activityReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_ACTIVITY: {
            newState = {...state}
            const allActivities = {};
            action.activity.forEach(activity => {
                allActivities[activity.id] = activity
            })
            newState.list = allActivities
            return newState
        }
        default:
            return state
    };

}

export default activityReducer
