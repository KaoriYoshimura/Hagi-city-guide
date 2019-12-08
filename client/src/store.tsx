import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const initialState = {};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    // Can use instead?
    // applyMiddleware(thunk);
    compose(applyMiddleware(...middleware))
);

export default store;
