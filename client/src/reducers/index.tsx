import { combineReducers } from 'redux';
import postReducer from './postReducers';
import messageReducer from './messageReducers';
import postFormReducers from './postFormReducers';
import authReducers from './authReducers';


export default combineReducers({
    posts: postReducer,
    message: messageReducer,
    postForm: postFormReducers,
    auth: authReducers
});
