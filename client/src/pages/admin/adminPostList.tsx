import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import PostListAdmin from '../../components/posts/postListAdmin';
import './admin.scss';
import Button from '../../ui/button';

const AdminPostList = () => (
    <>
        <main className={classNames('container', 'admin-container')}>
            <h2>Post list</h2>
            <PostListAdmin />
            <Link to={'/admin/form'}>
                <Button>
                    Create a new post
            </Button>
            </Link>
        </main>
    </>
);

export default AdminPostList;
