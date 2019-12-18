import { FETCH_POSTS, FETCH_POST, ADD_POST, DELETE_POST } from '../actions/types';

interface IPostState {
    _id: string;
}
interface IPostInitialState {
    posts: IPostState[];
    post: {};
}

const initialState: IPostInitialState = {
    posts: [],
    post: {},
};


export default (state = initialState, action: any) => {
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

