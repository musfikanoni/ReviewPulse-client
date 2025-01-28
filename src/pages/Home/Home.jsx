import React from 'react';
import Banner from './Banner';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';
import MeetPartners from './MeetPartners';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home - ReviewPulse Service Website</title>
            </Helmet>
            <Banner></Banner>
            <Outlet></Outlet>
            <MeetPartners></MeetPartners>
        </div>
    );
};

export default Home;