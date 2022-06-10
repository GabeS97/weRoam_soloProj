import { csrfFetch } from './csrf';
export const LOAD_REVIEW = 'reviews/LOAD_REVIEW';
export const ADD_REVIEW = 'reviews/ADD_REVIEW';
export const EDIT_REVIEW = 'reviews/EDIT_REVIEW';
export const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW';

export const load = (review) => ({
    type: LOAD_REVIEW,
    review
})


export const add = (review) => ({
    type: ADD_REVIEW,
    review
})

export const edit = (review) => ({
    type: EDIT_REVIEW,
    review
})

export const remove = (review) => ({
    type: REMOVE_REVIEW,
    review,
})

export const seeReview = (spotId) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/spots/${spotId}`)

    if (res.ok) {
        const reviews = await res.json()
        dispatch(load(reviews))
        return reviews
    }
}

export const addReview = (payload) => async dispatch => {
    console.log(payload)
    const res = await csrfFetch(`/api/reviews/spots/${payload?.spotId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    if (res.ok) {
        const review = await res.json();
        console.log(review, '<<<<<<<<<<<<<<<<<<<')
        dispatch(add(review))
        return review
    }
}


export const editReview = (payload) => async dispatch => {
    console.log(payload)
    const res = await csrfFetch(`/api/reviews/${payload.reviewId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    if (res.ok) {
        const review = await res.json();
        console.log(review);
        // thunk
        dispatch(edit(review));
        return review
    }
}

export const removeReview = payload => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${payload}`, {
        method: 'DELETE',
        body: JSON.stringify({ payload })

    })
    const review = await res.json();
    dispatch(remove(review))
    return review
}
const initialState = {};

const reviewReducer = (state = initialState, action) => {

    let newState;
    switch (action.type) {
        case LOAD_REVIEW: {
            newState = { ...state }
            const alLReviews = {};
            action.review.forEach(review => {
                alLReviews[review.id] = review
            })
            newState = alLReviews
            console.log(newState)
            return newState
        }
        case ADD_REVIEW: {
            newState = { ...state }
            newState = {
                ...state,
                [action.review.id]: action.review
            };
            return newState;
        }
        case EDIT_REVIEW: {
            newState = { ...state }
            newState = { ...state, [action.review.id]: action.review }
            return newState
        }
        case REMOVE_REVIEW: {
            newState = { ...state }
            delete newState[action.review.id]
            return newState
        }
        default:
            return state
    };
}

// component
// thunk
// routes
// thunk
// action-creator
// reducer

export default reviewReducer
