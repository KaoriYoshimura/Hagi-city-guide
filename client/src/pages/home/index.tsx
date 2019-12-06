import React from 'react';
import Hero from '../../components/hero';

import Header from '../../components/header/header';
import PAGES from '../../constants/pageData';


const Home = () => (
    <>
        <Hero pageName={PAGES.HOME} pageHeading="Welcome to Hagi">
            <Header />
        </Hero>
        <div>
            contents
        </div>
    </>
);

export default Home;
