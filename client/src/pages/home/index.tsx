import React from 'react';
import Hero from '../../components/hero';

import Header from '../../components/header/header';
import PAGES from '../../constants/pageData';
import HomePosts from '../../components/posts/homePosts/homePosts';


const Home = () => (
    <>
        <Hero pageName={PAGES.HOME} pageHeading="Welcome to Hagi">
            <Header />
        </Hero>
        <HomePosts />
    </>
);

export default Home;
