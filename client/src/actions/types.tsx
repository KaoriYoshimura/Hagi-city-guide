export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'UPDATE_USER';
export const POST_ERROR = 'POST_ERROR';
export const SET_MESSAGE = 'SET_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';


interface AddPostAction {
    type: typeof ADD_POST;
    payload: any;
}

interface EditPostAction {
    type: typeof EDIT_POST;
    payload: any[];
}

export type PostActionTypes = AddPostAction | EditPostAction;
