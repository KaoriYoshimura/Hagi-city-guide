import { FETCH_POSTS, SINGLE_USER, ADD_POST, DELETE_USER } from '../actions/post/types';

const initialState = {
    posts: [],
    post: {}
};


export default (state = initialState, action: any) => {
    console.log('reducers');
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.payload
            };

        case SINGLE_USER:
            return {
                ...state,
                user: action.payload
            }
        case ADD_POST:
            return {
                ...state,
                post: action.payload
            };

        // case DELETE_USER:
        //     return {
        //         ...state,
        //         user: state.users.filter(user => user._id !== action.payload)
        //     }

        default:
            return state;
    }
};

