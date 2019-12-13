import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './pages/home';
import AdminEditPost from './pages/admin/adminEditPost';
import AdminPostList from './pages/admin/adminPostList';
import AdminPostForm from './pages/admin/adminPostForm';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/news" component={News} /> */}
          {/* <Route exact path="/" component={Access} /> */}
          <Route exact path="/admin" component={AdminPostList} />
          <Route exact path="/admin/:id" component={AdminEditPost} />
          <Route exact path="/admin/form" component={AdminPostForm} />
          {/* <Route exact path="/" component={Contact} /> */}
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
