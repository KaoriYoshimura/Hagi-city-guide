import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';
import { setMessage } from './messageActions';
import { COLOR_VARIANTS } from '../constants/colorVariant';
import { INewUser } from '../interfaces/user';

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
    } catch (err) {
        const { errors } = err.response.data;

        if (errors) {
            errors.forEach((error: any) => dispatch(setMessage(error.msg, COLOR_VARIANTS.DANGER)));
        }

        dispatch({
            type: REGISTER_FAIL,
        });
    }
};
