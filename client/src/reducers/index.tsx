import { combineReducers } from 'redux';
import postReducer from './postReducers';
import messageReducer from './messageReducers';
import authReducers from './authReducers';


export default combineReducers({
    posts: postReducer,
    message: messageReducer,
    auth: authReducers
});
