import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import classNames from 'classnames';

import EditPost from '../../components/posts/editPost';
import './adminEditPost.scss';

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
                </main>
            </>

        );
    }
}

export default AdminEditPost;
