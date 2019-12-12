export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'UPDATE_USER';

interface AddPostAction {
    type: typeof ADD_POST;
    payload: any;
}

interface EditPostAction {
    type: typeof EDIT_POST;
    payload: any[];
}

export type PostActionTypes = AddPostAction | EditPostAction;
