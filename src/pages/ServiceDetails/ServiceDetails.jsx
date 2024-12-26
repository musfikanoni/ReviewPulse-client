import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';

const ServiceDetails = () => {
    const {user} = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());
    const service = useLoaderData();
    const {photoUrl, title, description, category, price, companyName, website} = service;
    return (
        <div className='max-w-7xl mx-auto pt-5 pb-24'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Service Details - ReviewPulse Service Website</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="lg:flex lg:gap-5 lg:mx-0 mx-5">
                <div className="hero-content rounded-xl border flex-col lg:flex-row">
                    <img className='rounded-xl max-w-xs h-[35vh]'
                    src={photoUrl} />
                    <div>
                    <h2 className="text-xl font-bold">{title}</h2>
                    <p className="font-medium"><span className='font-bold'>Description:</span> {description}</p>
                    <p className="font-medium"><span className='font-bold'>Category:</span> {category}</p>
                    <p className="font-medium"><span className='font-bold'>Company Name:</span> {companyName}</p>
                    <p className="font-medium"><span className='font-bold'>Website:</span> {website}</p>
                    <p className="font-medium"><span className='font-bold'>Price:</span> {price.price} {price.currency}</p>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
                <div className="rounded-xl border mt-7 lg:mt-0 lg:w-9/12 w-full max-w-3xl">
                    <form className="card-body">
                        <h3 className='font-bold text-lg'>Add Your Review</h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Post Review</span>
                            </label>
                            <textarea className="textarea textarea-bordered" placeholder="Review write here"></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Review Posted Date</span>
                            </label>
                            <DatePicker readOnly selected={startDate} onChange={(date) => setStartDate(date)}  dateFormat="dd/MM/yyyy"
                            placeholderText="Select a date" placeholder="Date" name='date' 
                            className='lg:w-[346px] md:w-[345px] w-[325px] max-w-sm outline-gray-300 border border-gray-300 py-[11px] px-2.5 rounded-md'/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            {/* <input type="email" readOnly name='email' defaultValue={user.email} placeholder="Price"
                            className="input input-bordered" /> */}
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