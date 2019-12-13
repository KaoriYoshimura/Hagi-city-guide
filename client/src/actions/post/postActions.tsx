import axios from 'axios';
import { FETCH_POSTS, FETCH_POST, ADD_POST, EDIT_POST, DELETE_POST, PostActionTypes } from './types';

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

export const fetchSinglePost = (id: string) => (dispatch: (arg0: { type: string; payload: any }) => void) => {
    console.log('single fetchPost action');
    axios.get(`/api/posts/${id}`)
        .then(res => dispatch({
            type: FETCH_POST,
            payload: res.data
        }));
};

export const deletePost = (id: string) => (dispatch: (arg0: { type: any; payload: string }) => void) => {
    axios.delete(`/api/posts/${id}`)
        .then(() => dispatch({
            type: DELETE_POST,
            payload: id
        }));
};

export const editPost = (id: string, updatedPost: PostActionTypes) => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    console.log(updatedPost);
    try {
        const res = await axios.put(`/api/posts/${id}`, updatedPost);

        dispatch({
            type: EDIT_POST,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: EDIT_POST,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};
