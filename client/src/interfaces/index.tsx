import { RouteComponentProps } from 'react-router-dom';

export interface IEvent {
    target: any;
    preventDefault(): void;
}

export interface IBlackVariantProps {
    blackVariant: boolean;
}

export interface ISubSidyComponents {
    children: React.ReactNode;
}


export interface IHeroProps {
    children: React.ReactNode;
    pageHeading: string;
    pageName: string;
}


export interface IMainProps {
    pageName: string;
    children: React.ReactNode;
}

export interface ICategoryOptions {
    name: string;
    value: string;
}

export interface IPost {
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
    posts: IPost[];
    post: {};
}

// For Single Post reducers
export interface IPostRootStateSingle {
    posts: [];
    post: IPost;
}

// For home and postList
export interface IPostsProps {
    posts: IPost[];
    fetchPosts: () => void;
}

// For mapStateToProps(posts array)
export interface IPostsState {
    posts: IPostRootState;
}

// For mapStateToProps(Single post)
export interface IPostState {
    posts: IPostRootStateSingle;
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

// For Post comonent
export type IPostProps = RouteComponentProps<IMatchParams>
