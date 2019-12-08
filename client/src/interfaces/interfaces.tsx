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

export interface INewPostState {
    file: string;
    fileName: string;
    uploadedFile: {};
    title: string;
    description: string;
    [x: number]: any;
}

export interface IFile {
    name: string;
}

export interface IFile {
    name: string;
}

export interface INewPostProps {
    addPost: any;
    history: any;
}


export interface IHomePostsState {
    fetchPosts: any;
    posts: [];
}
