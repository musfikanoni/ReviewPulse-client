import React from 'react';
import Banner from './Banner';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';
import MeetPartners from './MeetPartners';
import Newsletter from './Newsletter';
// import WhyChooseUs from './WhyChooseUs';
import FAQ from './FAQ';
import Reviews from './Reviews';
import OurWorkProcess from './OurWorkProcess';

const Home = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home - ReviewPulse Service Website</title>
            </Helmet>
            <Banner></Banner>
            <Outlet></Outlet>
            <div className='max-w-7xl mx-auto'>
                <MeetPartners></MeetPartners>
                <OurWorkProcess></OurWorkProcess>
                <Reviews></Reviews>
                <FAQ></FAQ>
            </div>
            <Newsletter></Newsletter>
        </>
    );
};

export default Home;