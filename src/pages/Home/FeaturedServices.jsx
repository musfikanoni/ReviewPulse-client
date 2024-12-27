import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from './shared/ServiceCard';

const FeaturedServices = () => {

    const services = useLoaderData();

    return (
        <div>
            <h1 className='text-center pb-10 py-20 font-extrabold text-4xl'>Featured Services</h1> 
            <div className="max-w-7xl mx-auto pt-5 pb-14">
                <div className='gap-y-10 gap-x-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        services.map(service => <ServiceCard
                        key={service._id}
                        service={service}></ServiceCard>)
                    }
                </div>
            </div>
            <div className="flex justify-center pb-24">
                <Link to="/services">
                    <button className="btn btn-outline btn-error">See all Services</button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedServices;