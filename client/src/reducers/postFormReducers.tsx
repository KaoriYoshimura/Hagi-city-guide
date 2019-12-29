import { IPostFormInitialState } from '../interfaces/postForm';
import { SET_IMAGE } from '../actions/types';


const initialState: IPostFormInitialState = {
    title: '',
    description: '',
    image: '',
    category: '',
    file: '',
    fileName: '',
    uploadedFile: {},
};

// interface IPayload {
//     file: object;
//     fileName: string;
// }

interface IReducer {
    type: string;
    payload: any;
}

export default (state = initialState, action: IReducer) => {
    const { type, payload } = action;

    switch (type) {
        case SET_IMAGE:
            return {
                ...state,
                // file: payload,
                fileName: payload
            };
        default:
            return state;
    }
};
