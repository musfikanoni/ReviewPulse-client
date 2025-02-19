import React from 'react';
import { GiMoneyStack } from 'react-icons/gi';
import { TbCategory } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import * as motion from "motion/react-client"

const ServiceCard = ({service}) => {

    const {_id, photoUrl, title, description, category, price} = service;

    return (
        <div>
            <div className="card card-compact min-h-full bg-base-100 lg:w-[305px] md:w-[340px] w-[340px] mx-auto shadow-xl border-gray-400 border-b-0">
                <figure className='pt-4 px-4'>
                    <img className='rounded-xl'
                    src={photoUrl}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{title}</h2>
                    <p className='text-gray-500 text-justify font-medium'>{description}</p>
                    <div className="flex items-center gap-2">
                        <TbCategory className='text-xl' />
                        <p className='font-bold text-md text-slate-700'>{category}</p>
                    </div>                    <div className="flex items-start gap-2">
                        <GiMoneyStack className="text-xl" />
                        <p className='font-bold text-md text-slate-500'>{price?.price} {price?.currency}</p>
                    </div>
                    <div className="card-actions justify-center pt-3">
                        <Link to={`/services/${_id}`}>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.6 }}
                            className="py-2 px-7 font-semibold
                             text-white rounded-full bg-gradient-to-r from-[#a233ce] 
                             to-[#7847fe] border-none text-lg">See Details</motion.button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;