export const FETCH_POSTS = 'FETCH_POSTS';
export const SINGLE_USER = 'SINGLE_USER';
export const ADD_POST = 'ADD_POST';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';

interface AddPostAction {
    type: typeof ADD_POST;
    payload: any;
}

export type PostActionTypes = AddPostAction;
