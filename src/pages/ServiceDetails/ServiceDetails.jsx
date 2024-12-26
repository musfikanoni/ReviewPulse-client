import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData();
    const {photoUrl, title, description, category, price, companyName, website} = service;
    return (
        <div className='max-w-7xl mx-auto pt-5 pb-24'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Service Details - ReviewPulse Service Website</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="flex">
            <div className="hero">
                <div className="hero-content rounded-xl border flex-col lg:flex-row">
                    <img className='rounded-xl'
                    src={photoUrl} />
                    <div>
                    <h2 className="text-xl font-bold">{title}</h2>
                    <p className="">{description}</p>
                    <p className="">{category}</p>
                    <p className="">{companyName}</p>
                    <p className="">{website}</p>
                    <p className="">{price.price} {price.currency}</p>
                    <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            {/* <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div> */}
            </div>
        </div>
    );
};

export default ServiceDetails;