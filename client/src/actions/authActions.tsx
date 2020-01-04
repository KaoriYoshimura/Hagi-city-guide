import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_OUT } from './types';
import { setMessage } from './messageActions';
import { COLOR_VARIANTS } from '../constants/colorVariant';
import { INewUser } from '../interfaces/user';
import setAuthToken from '../utils/setAuthToken';

// Load User
export const loadUser = () => async (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('api/auth');

        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
};

// Register User
export const register = ({ name, email, password }: INewUser) => async (dispatch: (arg0: any) => void) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ name, email, password });

    try {
        const res = await axios.post('/api/users', body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser());
        dispatch(setMessage('User registered', COLOR_VARIANTS.INFO));
    } catch (err) {

        const { errors } = err.response.data;

        if (errors) {
            errors.forEach((error: any) => dispatch(setMessage(error.msg, COLOR_VARIANTS.DANGER)));
        }

        dispatch({
            type: REGISTER_FAIL,
        });
        dispatch(loadUser());
    }
};

// Login User
export const login = (email: any, password: any) => async (dispatch: (arg0: any) => void) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('/api/auth', body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());
    } catch (err) {
        const { errors } = err.response.data;

        if (errors) {
            errors.forEach((error: any) => dispatch(setMessage(error.msg, COLOR_VARIANTS.DANGER)));
        }

        dispatch({
            type: LOGIN_FAIL,
        });
        dispatch(loadUser());
    }
};

//  Logout
export const logout = () => (dispatch: (arg0: { type: string }) => void) => {
    dispatch({
        type: LOGIN_OUT
    });
};
