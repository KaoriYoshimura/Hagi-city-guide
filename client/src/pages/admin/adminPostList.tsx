import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import classNames from 'classnames';
import { connect } from 'react-redux';
import PostListAdmin from '../../components/posts/postListAdmin';
import Button from '../../ui/button';

import './admin.scss';
import { IAuthInitialState, IAdminPageProps } from '../../interfaces/auth';

class AdminPostList extends Component<IAdminPageProps> {
    render() {
        const { isAuthenticated, loading } = this.props.auth;

        return (
            <>
                {!loading && (
                    <>
                        {isAuthenticated ? (
                            <>
                                <header>
                                    <h1>Admin</h1>
                                </header>
                                <main className={classNames('admin-container', 'admin-list-container')}>
                                    <PostListAdmin />
                                    <div className="link-container">
                                        <Link to={'/'}>
                                            <Button>Home</Button>
                                        </Link>
                                        <Link to={'/admin-form'}>
                                            <Button>
                                                Create a new post
                    </Button>
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

export default connect(mapStateToProps)(AdminPostList);
