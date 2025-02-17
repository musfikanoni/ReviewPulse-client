import React from 'react';
import { GiMoneyStack } from 'react-icons/gi';
import { TbCategory } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {

    const {_id, photoUrl, title, description, category, price} = service;
    console.log(service)

    return (
        <div>
            <div className="card card-compact bg-base-100 lg:w-[305px] md:w-[340px] w-[340px] mx-auto shadow-xl border border-b-0">
                <figure className='pt-4 px-4'>
                    <img className='rounded-xl'
                    src={photoUrl}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{title}</h2>
                    <p className='text-gray-500 text-justify font-medium'><span className='font-bold text-md text-slate-700'>Description:</span> {description}</p>
                    <div className="flex items-center gap-2">
                        <TbCategory className='text-xl' />
                        <p className='font-bold text-md text-slate-700'>{category}</p>
                    </div>                    <div className="flex items-start gap-2">
                        <GiMoneyStack className="text-xl" />
                        <p className='font-bold text-md text-slate-500'>{price?.price} {price?.currency}</p>
                    </div>
                    <div className="card-actions justify-center">
                        <Link to={`/services/${_id}`}>
                            <button className="btn font-semibold text-lg text-white rounded-xl btn-primary">See Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;