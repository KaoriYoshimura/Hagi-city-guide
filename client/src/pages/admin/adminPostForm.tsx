import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import classNames from 'classnames';
import Button from '../../ui/button';
import { connect } from 'react-redux';
import NewPost from '../../components/posts/postForm/newPost';
import { IAuthInitialState, IAdminPageProps } from '../../interfaces/auth';

import './admin.scss';


class AdminPostForm extends Component<IAdminPageProps> {
    render() {
        const { isAuthenticated, loading } = this.props.auth;

        return (
            <>
                {!loading && (
                    <>
                        {isAuthenticated ? (
                            <>
                                <header>
                                    <h1 className="test">New post</h1>
                                </header>
                                <main className={classNames('container', 'admin-container')}>
                                    <NewPost />
                                    <div className="link-container">
                                        <Link to={'/'}>
                                            <Button>Home</Button>
                                        </Link>
                                        <Link to={'/admin'}>
                                            <Button>Admin top</Button>
                                        </Link>
                                    </div>
                                </main>
                            </>
                        ) : (
                                <Redirect to="/login" />
                            )}
                    </>
                )}
            </>

        );
    }
}

const mapStateToProps = (state: { auth: IAuthInitialState }) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(AdminPostForm);
