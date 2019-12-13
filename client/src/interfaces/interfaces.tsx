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

export interface INewPostState {
    file: string;
    fileName: string;
    uploadedFile: {};
    title: string;
    description: string;
    category: string;
    [x: number]: any;
    options: ICategoryOptions[];
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
