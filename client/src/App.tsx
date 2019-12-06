import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './pages/home';
// import { Provider } from 'react-redux';
// import store from './store';

const App = () => {
  return (
    // <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/news" component={News} /> */}
        {/* <Route exact path="/" component={Access} /> */}
        {/* <Route exact path="/" component={Admin} /> */}
        {/* <Route exact path="/" component={Contact} /> */}
      </Switch>
    </Router>
    // </Provider>
  );
};

export default App;
