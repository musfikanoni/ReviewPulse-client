import React from 'react';
import { Helmet } from 'react-helmet';

const MyReviews = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Reviews - ReviewPulse Service Website</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            My Reviews
        </div>
    );
};

export default MyReviews;