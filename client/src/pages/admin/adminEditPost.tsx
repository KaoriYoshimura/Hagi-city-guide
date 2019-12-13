import React, { Component } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import classNames from 'classnames';

import EditPost from '../../components/posts/editPost';
import './admin.scss';
import Button from '../../ui/button';

interface IMatchParams {
    id: string;
}

type IEditPostsProps = RouteComponentProps<IMatchParams>

class AdminEditPost extends Component<IEditPostsProps> {
    render() {
        return (
            <>
                <main className={classNames('container', 'admin-edit-post-container')}>
                    <h2>Edit post</h2>
                    <EditPost id={this.props.match.params.id} />
                    <div className="link-container">
                        <Link to={'/'}>
                            <Button>Home</Button>
                        </Link>
                        <Link to={'/admin'}>
                            <Button>Admin List</Button>
                        </Link>
                    </div>
                </main>
            </>

        );
    }
}

export default AdminEditPost;
