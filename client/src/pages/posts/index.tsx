import React from 'react';
import Hero from '../../components/hero';
import classNames from 'classnames';

import Header from '../../components/header';
import PAGES from '../../constants/pageData';
import PostList from '../../components/posts/postList';


const Posts = () => (
    <>
        <Hero pageName={PAGES.POSTS} pageHeading="Posts">
            <Header blackVariant={false} />
        </Hero>
        <main className={classNames('container', 'posts')}>
            <PostList />
        </main>
    </>
);

export default Posts;
