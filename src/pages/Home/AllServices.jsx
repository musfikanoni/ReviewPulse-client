import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './shared/ServiceCard';
import { Helmet } from 'react-helmet';

const AllServices = () => {

    const services = useLoaderData();

    return (
        <div className='py-20 bg-[#F2F4F8]'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Services - ReviewPulse Service Website</title>
            </Helmet>
            <h1 className='font-bold text-3xl text-center pb-10'>Our All Services</h1>


            <div className="max-w-7xl mx-auto pt-5">
                <div className='gap-y-10 gap-x-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    {
                        services.map(service => <ServiceCard
                        key={service._id}
                        service={service}></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllServices;