import React from 'react';
import PostForm from '../../components/posts/postForm';
import PostListAdmin from '../../components/posts/postListAdmin';
import classNames from 'classnames';
import './admin.scss';

const Admin = () => (
    <>
        <main className={classNames('container', 'admin-container')}>
            <h2>Creat a new post</h2>
            <PostForm />
            <h2>Post list</h2>
            <PostListAdmin />
        </main>
    </>
);

export default Admin;
