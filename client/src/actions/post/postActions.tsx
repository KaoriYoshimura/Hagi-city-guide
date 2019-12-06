import axios from 'axios';
import { FETCH_USERS, SINGLE_USER, ADD_POST, UPDATE_USER, DELETE_USER, PostActionTypes } from './types';

export const addPost = (newUser: PostActionTypes) => (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    console.log('actions');
    axios.post('/api/posts', newUser)
        .then(res => dispatch({
            type: ADD_POST,
            payload: res.data
        }));
};
