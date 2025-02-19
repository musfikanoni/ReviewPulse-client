import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import AuthContext from '../../context/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const AddService = () => {
    const {user} = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());

    const handleAddService = e => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const initialData = Object.fromEntries(formData.entries());
        console.log(initialData);
        const {price, currency, ...newService} = initialData;
        newService.price = {price, currency};
        console.log(newService);

        fetch('https://assignment-11-server-eta-jade.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            e.target.reset();
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Service added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }
    return (
        <div className='flex justify-center bg-base-200 py-20'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Add Service - ReviewPulse service Website</title>
            </Helmet>
             <div className="card bg-base-100 w-full max-w-3xl shrink-0 shadow-2xl">
                <form onSubmit={handleAddService} className="card-body">
                    <h2 className='text-3xl font-bold text-center'>Add Service</h2>
                    {/* Service Image */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Image</span>
                        </label>
                        <input type="text" name='photoUrl' placeholder="Service Image URL" className="input input-bordered" required />
                    </div>
                    {/* Service Title */}
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Title</span>
                            </label>
                            <input type="text" name='title' placeholder="Service Title" className="input input-bordered" required />
                    </div>
                    <div className="grid grid-cols-1 items-end md:grid-cols-2  lg:grid-cols-2 gap-x-3">
                        {/* Company Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Company Name</span>
                            </label>
                            <input type="text" name='companyName' placeholder="Company Name" className="input input-bordered" required />
                        </div>
                        {/* Website */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Website</span>
                            </label>
                            <input type="text" name='website' placeholder="Website URL" className="input input-bordered" required />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name='description' className="textarea textarea-bordered" placeholder="Description"></textarea>
                    </div>
                    {/* category */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select name='category' className="select select-bordered w-full max-w-4xl">
                        <option disabled selected>Select a Category</option>
                            <option>Travel</option>
                            <option>Delivery</option>
                            <option>Consultation</option>
                        </select>
                    </div>
                    {/* Price */}
                    <div className='grid grid-cols-1 items-end md:grid-cols-2  lg:grid-cols-2 gap-x-3'>
                        <div className="form-control mt-2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' placeholder="Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-2">
                            <select name='currency'required className="select select-bordered w-full max-w-4xl">
                                <option disabled selected>Currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>INR</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 items-end md:grid-cols-2  lg:grid-cols-2 gap-x-3">
                        {/* Date */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Added date</span>
                            </label>
                            <DatePicker readOnly selected={startDate} onChange={(date) => setStartDate(date)}  dateFormat="dd/MM/yyyy"
                            placeholderText="Select a date" placeholder="Date" name='date' 
                            className='lg:w-[346px] md:w-[345px] w-[325px] max-w-sm outline-gray-300 border border-gray-300 py-[11px] px-2.5 rounded-md'/>
                        </div>
                        {/* user Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="email" readOnly name='email' defaultValue={user.email} placeholder="Price"
                            className="input input-bordered" />
                        </div>
                    </div>
                        
                    <div className="form-control mt-6">
                    <button className="btn rounded-full bg-gradient-to-r from-[#a233ce]  to-[#7847fe] border-none text-lg text-white">Add Service</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;