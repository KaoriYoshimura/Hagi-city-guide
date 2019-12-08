import axios from 'axios';
import { FETCH_POSTS, SINGLE_USER, ADD_POST, UPDATE_USER, DELETE_USER, PostActionTypes } from './types';

export const addPost = (newUser: PostActionTypes) => (dispatch: (arg0: { type: string; payload: any }) => void) => {
    console.log('addPost actions');
    axios.post('/api/posts', newUser)
        .then(res => dispatch({
            type: ADD_POST,
            payload: res.data
        }));
};

export const fetchPosts = () => (dispatch: (arg0: { type: string; payload: any }) => void) => {
    console.log('fetchPosts action');
    axios.get('/api/posts')
        .then(res => dispatch({
            type: FETCH_POSTS,
            payload: res.data
        }));
};
