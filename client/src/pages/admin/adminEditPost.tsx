import React, { Component } from 'react';
import { Link, RouteComponentProps, Redirect } from 'react-router-dom';
import classNames from 'classnames';
import { connect } from 'react-redux';
import EditPost from '../../components/posts/postForm/editPost';
import Button from '../../ui/button';
import { IMatchParams } from '../../interfaces';

import './admin.scss';
import { IAuthInitialState } from '../../interfaces/auth';


// For Post and AdminEditPost
interface IAdminEditPostProps extends RouteComponentProps<IMatchParams> {
    auth: IAuthInitialState;
}


class AdminEditPost extends Component<IAdminEditPostProps> {
    render() {
        const { isAuthenticated, loading } = this.props.auth;

        return (
            <>
                {!loading && (
                    <>
                        {isAuthenticated ? (
                            <>
                                <header>
                                    <h1>Edit post</h1>
                                </header>
                                <main className={classNames('container', 'admin-container')}>
                                    <EditPost id={this.props.match.params.id} />
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

export default connect(mapStateToProps)(AdminEditPost);
