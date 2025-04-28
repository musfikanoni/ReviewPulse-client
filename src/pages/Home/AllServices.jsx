import React, { useEffect, useState } from 'react';
import { ScrollRestoration, useLoaderData } from 'react-router-dom';
import ServiceCard from './shared/ServiceCard';
import { Helmet } from 'react-helmet';

const AllServices = () => {
    const loadedServices = useLoaderData();
    const [services, setServices] = useState(loadedServices);
    const [searchText, setSearchText] = useState("");           

    useEffect(() => {
        fetch(`http://localhost:5000/services?searchParams=${searchText}`)
            .then(res => res.json())
            .then((data) => {
                setServices(data);  
            })
    }, [searchText]);  

    return (
        <div className="bg-base-200 py-20 pt-24"> 
            <ScrollRestoration />
            <Helmet>
                <title>Services - ReviewPulse Service Website</title>
            </Helmet>

            <h1 className='font-bold text-3xl text-center pb-5'>Our All Services</h1>

            <div className='w-6/12 mx-auto pt-5 mb-5'>
                <label className="input input-bordered flex items-center gap-2">
                    <input 
                        onChange={(e) => setSearchText(e.target.value)}
                        name='search'
                        type="text"
                        className="grow"
                        placeholder="Search"
                        value={searchText}  
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                        <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                    </svg>
                </label>
            </div>

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
