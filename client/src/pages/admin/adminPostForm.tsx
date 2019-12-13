import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import PostForm from '../../components/posts/postForm';
import './admin.scss';
import Button from '../../ui/button';


const AdminPostForm = () => {
    return (
        <>
            <main className={classNames('container', 'admin-edit-post-container')}>
                <h2>Edit post</h2>
                <PostForm />
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

export default AdminPostForm;
