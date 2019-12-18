import { combineReducers } from 'redux';
import postReducer from './postReducers';
import messageReducer from './messageReducers';


export default combineReducers({
    posts: postReducer,
    message: messageReducer
});
