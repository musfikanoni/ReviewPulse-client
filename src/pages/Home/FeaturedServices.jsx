import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from './shared/ServiceCard';

const FeaturedServices = () => {

    const services = useLoaderData();

    return (
        <div className="bg-[#F2F4F8]">
            <div className=''>
                <h1 className='text-center pb-10 py-20 font-extrabold text-4xl'>Featured Services</h1> 
                <div className="max-w-7xl mx-auto pt-5 pb-14">
                    <div className='gap-y-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                        {
                            services.map(service => <ServiceCard
                            key={service._id}
                            service={service}></ServiceCard>)
                        }
                    </div>
                </div>
                <div className="flex justify-center pb-24">
                    <Link to="/services">
                        <button className="btn font-bold text-lg btn-outline text-[#3F00E7] border-[#3F00E7] text-vborder-[#3F00E7] hover:bg-[#3F00E7] hover:border-[#3F00E7]">See all Services</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedServices;