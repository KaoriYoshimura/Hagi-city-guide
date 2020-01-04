import React, { Component } from 'react';
import { /* BrowserRouter as Router,  */Route, Switch } from 'react-router-dom';
// import { Provider, connect } from 'react-redux';
import { connect } from 'react-redux';
// import store from './store';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './pages/home';
import Posts from './pages/posts';
import AdminEditPost from './pages/admin/adminEditPost';
import AdminPostList from './pages/admin/adminPostList';
import AdminPostForm from './pages/admin/adminPostForm';
import Post from './pages/post';
import Register from './pages/auth/register';
import Login from './pages/auth/login';
// import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/authActions';

interface ITestProps {
  loadUser: () => void;
}

class App extends Component<ITestProps> {
  componentDidMount() {
    this.props.loadUser();
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      // <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/posts/:id" component={Post} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/admin" component={AdminPostList} />
        <Route exact path="/admin/:id" component={AdminEditPost} />
        <Route exact path="/admin-form" component={AdminPostForm} />
      </Switch>
      // </Router>
    );
  }
}

export default connect(null, { loadUser })(App);
