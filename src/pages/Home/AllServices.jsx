import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './shared/ServiceCard';
import { Helmet } from 'react-helmet';

const AllServices = () => {

    const services = useLoaderData();

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Services - ReviewPulse Service Website</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h1 className='font-bold text-3xl text-center my-8'>Our All Services</h1>

            <div className="lg:w-7/12 md:w-6/12 mx-auto pt-7 pb-10">
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                    </svg>
                </label>
            </div>

            <div className="max-w-7xl mx-auto pt-5 pb-24">
                <div className='gap-y-10 gap-x-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
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