import { RouteComponentProps } from 'react-router-dom';

export interface IBlackVariantProps {
    blackVariant: boolean;
}
export interface IonClickSideBar {
    onClickClose: any;
    onClickDisplay?: any;
}

export interface ISubSidyComponents {
    children: React.ReactNode;
}

export interface IHeroProps {
    children: any;
    pageHeading: string;
    pageName: string;
}

export interface IPost {
    category: string;
    description: string;
    image: string | any;
    title: string;
    file: string;
    fileName: string;
    uploadedFile?: {};
}
export interface IMainProps {
    pageName: string;
    children: React.ReactNode;
}

export interface IEvent {
    target: any;
    preventDefault: Function;
}

export interface ICategoryOptions {
    name: string;
    value: string;
}

export interface IMessageState {
    variant: string;
    text: string;
}
export interface IPostFormState {
    post: IPost | any;
    [x: number]: any;
    options: any;
    message: IMessageState;
    isMessageDisplay: boolean;
    shouldRedirect: boolean;
}

export interface IFile {
    name: string;
}

export interface IFile {
    name: string;
}

export interface IPosts {
    _id: string;
    image: string;
    title: string;
    category: string;
    description: string;
    isDefault?: boolean;
    defaultAlt?: string;
    date?: string;
    updated?: string;
}

// For Posts reducers
export interface IPostRootState {
    posts: IPosts[];
    post: {};
}

// For home and postList
export interface IPostsProps {
    posts: IPostRootState;
    fetchPosts: () => void;
}

// For mapStateToProps
export interface IPostsState {
    posts: IPostRootState;
}

export interface IFixedArticle {
    link: string;
    title: string;
    image: string;
    category: string;
    isDefault: boolean;
}

// For match.params.id
export interface IMatchParams {
    id: string;
}

// For Post and AdminEditPost
export type IPostProps = RouteComponentProps<IMatchParams>
