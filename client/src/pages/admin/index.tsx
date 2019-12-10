import React from 'react';
import PostForm from '../../components/posts/postForm';
import classNames from 'classnames';

const Admin = () => (
    <>
        <main className={classNames('container')}>
            <PostForm />
        </main>
    </>
);

export default Admin;
