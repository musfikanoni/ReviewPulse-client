import React from 'react';
import { ScrollRestoration, useLoaderData } from 'react-router-dom';
import ServiceCard from './shared/ServiceCard';
import { Helmet } from 'react-helmet';

const AllServices = () => {
    const services = useLoaderData();

    return (
        <div className="bg-base-200 py-20 pt-24"> 
        <ScrollRestoration />
            <Helmet>
                <title>Services - ReviewPulse Service Website</title>
            </Helmet>
            
            <h1 className='font-bold text-3xl text-center pb-10'>Our All Services</h1>

            <div className="max-w-7xl mx-auto pt-5">
                <div className='gap-y-10 gap-x-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    {
                        services.map(service => (
                            <ServiceCard key={service._id} service={service} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default AllServices;
