import { combineReducers } from 'redux';
import postReducer from './postReducers';
import messageReducer from './messageReducers';
import postFormReducers from './postFormReducers';


export default combineReducers({
    posts: postReducer,
    message: messageReducer,
    postForm: postFormReducers
});
