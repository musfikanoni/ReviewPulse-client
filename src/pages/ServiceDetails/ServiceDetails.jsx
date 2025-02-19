import React, { useContext, useState } from 'react';

import { Helmet } from 'react-helmet';
import { useLoaderData, useNavigate } from 'react-router-dom';
import '@smastrom/react-rating/style.css';
import AddReview from '../AddReview/AddReview';
import { div } from 'motion/react-client';


const ServiceDetails = () => {

    
    const service = useLoaderData();
    const {photoUrl, title, description, category, price, companyName, website} = service;

    return (
        <div className='bg-base-200'>
            <div className='max-w-7xl mx-auto py-20'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Service Details - ReviewPulse Service Website</title>
            </Helmet>
            <div className="lg:flex lg:gap-5 lg:mx-0 mx-5">
                <div className="p-5 lg:flex-col rounded-xl border flex-col bg-base-100">
                    <img className='rounded-xl lg:max-w-xl mx-w-xs lg:h-[35vh]'
                    src={photoUrl} />
                    <div className='pt-3'>
                        <h2 className="text-xl font-bold pt-3">{title}</h2>
                        <p className="font-medium pt-2 text-base"><span className='font-bold text-base'>Description:</span> {description}</p>
                        <p className="font-medium pt-1 text-base"><span className='font-bold text-base'>Category:</span> {category}</p>
                        <p className="font-medium pt-1 text-base"><span className='font-bold text-base'>Company Name:</span> {companyName}</p>
                        <p className="font-medium pt-1 text-base"><span className='font-bold text-base'>Website:</span> <a href="#">{website}</a></p>
                        <p className="font-medium pt-1 text-base"><span className='font-bold text-base'>Price:</span> {price.price} {price.currency}</p>
                    </div>
                </div>
                <div className="rounded-xl border bg-base-100 mt-7 lg:mt-0 lg:w-9/12 w-full max-w-3xl">
                    <AddReview service={service}></AddReview>
                </div>
            </div>
            </div>
        </div>

    );
};

export default ServiceDetails;