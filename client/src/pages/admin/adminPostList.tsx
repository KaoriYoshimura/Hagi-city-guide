import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import PostListAdmin from '../../components/posts/postListAdmin';
import './admin.scss';
import Button from '../../ui/button';

const AdminPostList = () => (
    <>
        <header>
            <h1>Admin</h1>
        </header>
        <main className={classNames('container', 'admin-container')}>
            <PostListAdmin />
            <div className="link-container">
                <Link to={'/'}>
                    <Button>Home</Button>
                </Link>
                <Link to={'/admin-form'}>
                    <Button>
                        Create a new post
                    </Button>
                </Link>
            </div>
        </main>
    </>
);

export default AdminPostList;
