import { SET_IMAGE } from './types';

interface IPayload {
    fileName: string;
}

// Action creator
export const setImage = (fileName: string) => (dispach: (arg0: { type: string; payload: any }) => void) => {
    // Return an action
    dispach({
        type: SET_IMAGE,
        payload: fileName
    });
};
