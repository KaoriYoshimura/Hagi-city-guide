import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import NewPost from '../../components/posts/postForm/newPost';
import './admin.scss';
import Button from '../../ui/button';


const AdminPostForm = () => {
    return (
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
                        <Button>Post List</Button>
                    </Link>
                </div>
            </main>
        </>

    );
};

export default AdminPostForm;
