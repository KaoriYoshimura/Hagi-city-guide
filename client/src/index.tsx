import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';


import './style/styles.scss';
import 'normalize.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BrowserRouter>
    <Provider store={store}>
        <Route component={App} />
    </Provider>
</BrowserRouter>, document.getElementById('root'));
serviceWorker.unregister();
