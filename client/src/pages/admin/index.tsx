import React from 'react';
import PostForm from '../../components/posts/postForm';
import classNames from 'classnames';
import './admin.scss';

const Admin = () => (
    <>
        <main className={classNames('container', 'admin-container')}>
            <h2>Creat a new post</h2>
            <PostForm />
        </main>
    </>
);

export default Admin;
