import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';


const ServiceDetails = () => {
    const {user} = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());
    const service = useLoaderData();
    const {photoUrl, title, description, category, price, companyName, website} = service;

    const [rating, setRating] = useState(0)
    return (
        <div className='max-w-7xl mx-auto pt-5 pb-24'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Service Details - ReviewPulse Service Website</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="lg:flex lg:gap-5 lg:mx-0 mx-5">
                <div className=" p-5 lg:flex-col rounded-xl border flex-col">
                    <img className='rounded-xl lg:max-w-xl mx-w-xs lg:h-[30vh]'
                    src={photoUrl} />
                    <div className='pt-3'>
                        <h2 className="text-xl font-bold pt-3">{title}</h2>
                        <p className="font-medium pt-2 text-gray-600"><span className='font-bold text-black'>Description:</span> {description}</p>
                        <p className="font-medium pt-1 text-gray-600"><span className='font-bold text-black'>Category:</span> {category}</p>
                        <p className="font-medium pt-1 text-gray-600"><span className='font-bold text-black'>Company Name:</span> {companyName}</p>
                        <p className="font-medium pt-1 text-gray-600"><span className='font-bold text-black'>Website:</span> <a href="#">{website}</a></p>
                        <p className="font-medium pt-1 text-gray-600"><span className='font-bold text-black'>Price:</span> {price.price} {price.currency}</p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
                <div className="rounded-xl border mt-7 lg:mt-0 lg:w-9/12 w-full max-w-3xl">
                    <form className="card-body">
                        <h3 className='font-bold text-lg'>Add Your Review</h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Post Review</span>
                            </label>
                            <textarea className="textarea textarea-bordered" placeholder="Review write here"></textarea>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Review Posted Date</span>
                                </label>
                                <DatePicker readOnly selected={startDate} onChange={(date) => setStartDate(date)}  dateFormat="dd/MM/yyyy"
                                placeholderText="Select a date" placeholder="Date" name='date' 
                                className='lg:w-[220px] md:w-[345px] w-[285px] max-w-xs outline-gray-300 border border-gray-300 py-[11px] px-2.5 rounded-md'/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">User Email</span>
                                </label>
                                <input type="email" readOnly name='email' defaultValue={user?.email} placeholder=""
                                className="input input-bordered" />
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='label-text font-semibold text-lg'>Rating:</span> <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} />
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Review</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default ServiceDetails;