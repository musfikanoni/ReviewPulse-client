import React from 'react';
import Banner from './Banner';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';
import MeetPartners from './MeetPartners';
import OurServiceProcess from './OurServiceProcess';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home - ReviewPulse Service Website</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Banner></Banner>
            <Outlet></Outlet>
            <MeetPartners></MeetPartners>
            <OurServiceProcess></OurServiceProcess>
        </div>
    );
};

export default Home;