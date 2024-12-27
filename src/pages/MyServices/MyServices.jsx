import React from 'react';
import { Helmet } from 'react-helmet';

const MyServices = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Services - ReviewPulse Service Website</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            My Services
        </div>
    );
};

export default MyServices;