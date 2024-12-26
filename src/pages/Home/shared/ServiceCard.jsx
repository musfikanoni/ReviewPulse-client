import React from 'react';

const ServiceCard = ({service}) => {

    const {photoUrl, title, description, category, price} = service;

    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl border border-b-0">
                <figure className='pt-4 px-4'>
                    <img className='rounded-xl'
                    src={photoUrl}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p>{category}</p>
                    <p>{price.price} {price.currency}</p>
                    <div className="card-actions justify-center">
                    <button className="btn font-semibold text-lg text-white rounded-xl btn-primary">See Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;