import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import EditPost from '../../components/posts/postForm/editPost';
import './admin.scss';
import Button from '../../ui/button';
import { IPostProps } from '../../interfaces';

class AdminEditPost extends Component<IPostProps> {
    render() {
        return (
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

        );
    }
}

export default AdminEditPost;
