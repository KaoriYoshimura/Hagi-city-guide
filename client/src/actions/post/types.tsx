export const FETCH_POSTS = 'FETCH_POSTS';
export const SINGLE_USER = 'SINGLE_USER';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_USER = 'UPDATE_USER';

interface AddPostAction {
    type: typeof ADD_POST;
    payload: any;
}

interface DeletePostAction {
    type: typeof DELETE_POST;
    payload: any[];
}

export type PostActionTypes = AddPostAction | DeletePostAction;
