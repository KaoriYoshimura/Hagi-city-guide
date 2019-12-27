import axios from 'axios';
import { FETCH_POSTS, FETCH_POST, ADD_POST, EDIT_POST, DELETE_POST } from './types';
import { IPostForm } from '../interfaces';

export const addPost = (newPost: IPostForm) => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {
        const res = await axios.post('/api/posts', newPost);

        dispatch({
            type: ADD_POST,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: ADD_POST,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

export const fetchPosts = () => (dispatch: (arg0: { type: string; payload: any }) => void) => {
    axios.get('/api/posts')
        .then(res => dispatch({
            type: FETCH_POSTS,
            payload: res.data
        }));
};

export const fetchSinglePost = (id: string) => (dispatch: (arg0: { type: string; payload: any }) => void) => {
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

export const editPost = (id: string, updatedPost: IPostForm) => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
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
