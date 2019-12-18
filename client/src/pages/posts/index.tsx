import React from 'react';
import Hero from '../../components/hero';
import classNames from 'classnames';

import Header from '../../components/header';
import PAGES from '../../constants/pageData';
import PostList from '../../components/posts/postList';
import Footer from '../../components/footer';

import './posts.scss';

const Posts = () => (
    <>
        <Hero pageName={PAGES.POSTS} pageHeading="Posts">
            <Header blackVariant={false} />
        </Hero>
        <main className={classNames('container', 'posts-container')}>
            <PostList />
            <div className="push" />
        </main>
        <Footer className="posts-footer" />
    </>
);

export default Posts;
