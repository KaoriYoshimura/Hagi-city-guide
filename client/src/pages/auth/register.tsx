import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import NewPost from '../../components/posts/postForm/newPost';
import './auth.scss';
import Button from '../../ui/button';
import Header from '../../components/header';


const Register = () => (
    <>
        <Header blackVariant />
        <main className={classNames('container', 'admin-container')}>
            <NewPost />
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

export default Register;
