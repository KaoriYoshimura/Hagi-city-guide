import { CATEGORY_OPTIONS } from '../constants/category';

export const postInitialState = {
    title: '',
    description: '',
    image: '',
    category: '',
    file: '',
    fileName: '',
    uploadedFile: {},
    previewURL: ''
};

export const postFormState = {
    options: CATEGORY_OPTIONS,
    post: postInitialState,
    message: {
        variant: '',
        text: ''
    },
    isMessageDisplay: false,
};
