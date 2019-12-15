import React from 'react';
import Hero from '../../components/hero';
import classNames from 'classnames';

import Header from '../../components/header';
import PAGES from '../../constants/pageData';
import HomePosts from '../../components/posts/homePosts';


const Home = () => (
    <>
        <Hero pageName={PAGES.HOME} pageHeading="Welcome to Hagi">
            <Header blackVariant={false} />
        </Hero>
        <main className={classNames('container', 'home-posts')}>
            <HomePosts />
        </main>
    </>
);

export default Home;
