import React, { useContext, useState } from 'react';

import { Helmet } from 'react-helmet';
import { useLoaderData, useNavigate } from 'react-router-dom';
// import AuthContext from '../../context/AuthContext/AuthContext';

import '@smastrom/react-rating/style.css';

// import useAuth from '../../hooks/useAuth';
import AddReview from '../AddReview/AddReview';


const ServiceDetails = () => {
    
    // const {user} = useContext(AuthContext);
    
    const service = useLoaderData();
    const {photoUrl, title, description, category, price, companyName, website} = service;

    return (
        <div className='max-w-7xl mx-auto pt-5 pb-24'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Service Details - ReviewPulse Service Website</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="lg:flex lg:gap-5 lg:mx-0 mx-5">
                <div className=" p-5 lg:flex-col rounded-xl border flex-col">
                    <img className='rounded-xl lg:max-w-xl mx-w-xs lg:h-[35vh]'
                    src={photoUrl} />
                    <div className='pt-3'>
                        <h2 className="text-xl font-bold pt-3">{title}</h2>
                        <p className="font-medium pt-2 text-gray-600"><span className='font-bold text-black'>Description:</span> {description}</p>
                        <p className="font-medium pt-1 text-gray-600"><span className='font-bold text-black'>Category:</span> {category}</p>
                        <p className="font-medium pt-1 text-gray-600"><span className='font-bold text-black'>Company Name:</span> {companyName}</p>
                        <p className="font-medium pt-1 text-gray-600"><span className='font-bold text-black'>Website:</span> <a href="#">{website}</a></p>
                        <p className="font-medium pt-1 text-gray-600"><span className='font-bold text-black'>Price:</span> {price.price} {price.currency}</p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
                <div className="rounded-xl border mt-7 lg:mt-0 lg:w-9/12 w-full max-w-3xl">
                    <AddReview service={service}></AddReview>
                </div>
            </div>
        </div>

    );
};

export default ServiceDetails;