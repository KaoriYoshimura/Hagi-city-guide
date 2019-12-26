import { FETCH_POSTS, FETCH_POST, ADD_POST, DELETE_POST } from '../actions/types';
import { IPostRootState } from '../interfaces/index';

const initialState: IPostRootState = {
    posts: [],
    post: {},
};


export default (state = initialState, action: { type: typeof ADD_POST | typeof FETCH_POSTS | typeof FETCH_POST | typeof DELETE_POST; payload: string }) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.payload
            };

        case FETCH_POST:
            return {
                ...state,
                post: action.payload
            };

        case ADD_POST:
            return {
                ...state,
                post: action.payload
            };

        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== action.payload)
            };

        default:
            return state;
    }
};

