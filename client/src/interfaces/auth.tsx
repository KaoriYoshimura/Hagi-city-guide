export interface IIsAuthenticated {
    isAuthenticated: boolean;
}

export interface IAuthInitialState {
    token: any;
    isAuthenticated: boolean;
    loading: boolean;
    user: any;
}


export interface IAdminPageProps {
    auth: IAuthInitialState;
}
