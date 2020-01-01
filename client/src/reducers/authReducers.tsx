import { REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/types';

interface IAuthInitialState {
    token: any;
    isAuthenticated: boolean;
    loading: boolean;
    user: any;
}

const initialState: IAuthInitialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true,
    user: null
};

export default (state = initialState, action: { type: string; payload: any }) => {
    const { type, payload } = action;
    switch (type) {
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            };

        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            };
        default:
            return state;
    }
};
