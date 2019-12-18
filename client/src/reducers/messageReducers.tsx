import { SET_MESSAGE, REMOVE_MESSAGE } from '../actions/types';

interface IMessageInitialState {
    id: number;
    message: any;
    messageVariant: string;
}
const initialState: IMessageInitialState[] = [];

export default (state = initialState, action: { type: any; payload: any }) => {
    const { type, payload } = action;

    switch (type) {
        case SET_MESSAGE:
            return [...state, action.payload];
        case REMOVE_MESSAGE:
            return state.filter(message => message.id !== payload);
        default:
            return state;
    }
};
