import React from 'react';
import EditPost from '../../components/posts/editPost';
import classNames from 'classnames';

const AdminEditPost = () => (
    <>
        <main className={classNames('container', 'admin-edit-post-container')}>
            <h2>Edit new post</h2>
            {/* <EditPost /> */}
        </main>
    </>
);

export default AdminEditPost;
