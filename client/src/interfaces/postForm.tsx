import { IMessageState } from './message';

export interface IPostForm {
    title: string;
    description: string;
    image: string | any;
    category: string;
}

export interface IPostFormInitialState {
    title: string;
    description: string;
    image: string | any;
    category: string;
    file: any;
    fileName: string;
    uploadedFile: {};
    previewURL?: string;
}

export interface IOptions {
    name: string;
    value: string;
}

export interface IPostFormState {
    post: IPostFormInitialState | any;
    options: IOptions[];
    message: IMessageState;
    isMessageDisplay: boolean;
}
