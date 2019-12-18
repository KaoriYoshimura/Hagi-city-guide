import uuid from 'uuid';
import { SET_MESSAGE, REMOVE_MESSAGE } from './types';

export const setMessage = (msg: string, messageVariant: string) => (dispach: (arg0: { type: string; payload: any }) => void) => {
    const id = uuid.v4();

    dispach({
        type: SET_MESSAGE,
        payload: { msg, messageVariant, id }
    });

    setTimeout(() => dispach({ type: REMOVE_MESSAGE, payload: id }), 5000);
};
