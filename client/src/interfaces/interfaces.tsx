import { RouteComponentProps } from 'react-router-dom';

export interface IisSideBarOpen {
    isSideBarOpen: boolean;
}

export interface IonClickSideBar {
    onClickClose: any;
    onClickDisplay?: any;
}

export interface INavBarProps {
    sideBarToggleClickHandler: any;
}

export interface ISubSidyComponents {
    children: any;
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
    children: any;
}

export interface IEvent {
    target: any;
    preventDefault: Function;
}

export interface ICategoryOptions {
    name: string;
    value: string;
}

export interface IPostFormState {
    post: IPost | any;
    [x: number]: any;
    options: any;
}

export interface IFile {
    name: string;
}

export interface IFile {
    name: string;
}

export interface IHomePostsState {
    fetchPosts: any;
    posts: [];
}

export interface IPosts {
    _id: string;
    image: string;
    title: string;
    category: string;
    isFixed?: boolean;
    fixedArticle?: string;
    date?: string;
    description: string;
    updated?: string;
}

// For match.params.id
export interface IMatchParams {
    id: string;
}

// For Post and AdminEditPost
export type IPostProps = RouteComponentProps<IMatchParams>
