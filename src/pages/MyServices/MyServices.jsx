import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import useAuth from '../../hooks/useAuth';
import { MdDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import { FaRegEdit } from 'react-icons/fa';


const Modal = ({ service, onClose, onUpdate }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [updatedTitle, setUpdatedTitle] = useState(service?.title || '');
    const {user} = useAuth();

     const handleUpdateService = e => {
            e.preventDefault();
            const formData = new FormData(e.target)
            const initialData = Object.fromEntries(formData.entries());
            console.log(initialData);
            const {price, currency, ...updatedService} = initialData;
            updatedService.price = {price, currency};
            console.log(updatedService);
    
            fetch(`https://assignment-11-server-eta-jade.vercel.app/services/${service._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedService)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                e.target.reset();
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Service Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                      onUpdate(service._id, updatedService);
                      onClose();
                }
            })
    
        }

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 overflow-y-scroll">
            <div className="rounded-lg shadow-lg w-11/12 md:w-6/12">
                <div className="card bg-base-100 w-full max-w-3xl">
                    <form onSubmit={handleUpdateService} className="card-body">
                        {/* Service Image */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Image</span>
                            </label>
                            <input type="text" defaultValue={service?.photoUrl || ''} name='photoUrl' placeholder="Service Image URL" className="input input-bordered" required />
                        </div>
                        {/* Service Title */}
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Title</span>
                                </label>
                                <input type="text" defaultValue={service?.title} name='title' placeholder="Service Title" className="input input-bordered" required />
                        </div>
                        <div className="grid grid-cols-1 items-end md:grid-cols-2 lg:grid-cols-2 gap-x-3">
                            {/* Company Name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Company Name</span>
                                </label>
                                <input type="text" defaultValue={service?.companyName || ''} name='companyName' placeholder="Company Name" className="input input-bordered" required />
                            </div>
                            {/* Website */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Website</span>
                                </label>
                                <input type="text" defaultValue={service?.website || ''} name='website' placeholder="Website URL" className="input input-bordered" required />
                            </div>
                        </div>
    
                        {/* Description */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea name='description' defaultValue={service?.description || ''} className="textarea textarea-bordered" placeholder="Description"></textarea>
                        </div>
                        {/* category */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select name='category' defaultValue={service?.category || ''} className="select select-bordered w-full max-w-4xl">
                            <option disabled selected>Select a Category</option>
                                <option>Travel</option>
                                <option>Delivery</option>
                                <option>Consultation</option>
                            </select>
                        </div>
                        {/* Price */}
                        <div className='grid grid-cols-1 items-end md:grid-cols-2  lg:grid-cols-2 gap-x-3'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" defaultValue={service?.price?.price}  name='price' placeholder="Price" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-2 lg:mt-0">
                                <select defaultValue={service?.price?.currency || ''} name='currency'required className="select select-bordered w-full max-w-4xl">
                                    <option disabled selected>Currency</option>
                                    <option>BDT</option>
                                    <option>USD</option>
                                    <option>INR</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 items-end md:grid-cols-2 lg:grid-cols-2 gap-x-3">
                            {/* Date */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Added date</span>
                                </label>
                                <DatePicker readOnly selected={startDate} onChange={(date) => setStartDate(date)}  dateFormat="dd/MM/yyyy"
                                placeholderText="Select a date" placeholder="Date" name='date'
                                className='lg:w-[345px] md:w-[155px] w-[325px] max-w-sm outline-gray-300 border border-gray-300 py-[11px] px-2.5 rounded-md'/>
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
                        <div className="flex justify-center pt-3 gap-4">
                            <button onClick={onClose} className="btn lg:btn-wide">Cancel</button>
                            <button className="btn lg:btn-wide btn-primary">Update</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};



const MyServices = () => {
    
    const [services, setServices] = useState([]);
    const {user} = useAuth();

    const [selectedService, setSelectedService] = useState(null);
    const openUpdateModal = (service) => {
        setSelectedService(service);
    };

    const closeModal = () => {
        setSelectedService(null);
    };

    const handleServiceUpdate = (id, updatedData) => {
        setServices(prevServices =>
            prevServices.map(service =>
                service._id === id ? { ...service, ...updatedData } : service
            )
        );
    };
             

    const handleDelete = id => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
    

            fetch(`https://assignment-11-server-eta-jade.vercel.app/services/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                const updatedServices = services.filter(service => service._id !== id);
                setServices(updatedServices);
                if(data.deletedCount > 0){
                    Swal.fire({
                    title: "Deleted!",
                    text: "Your service has been deleted.",
                    icon: "success"
                });
                }
            })
            }
          });
    }

    useEffect(() => {
        fetch(`https://assignment-11-server-eta-jade.vercel.app/services?email=${user.email}`)
        .then(res => res.json())
        .then(data => setServices(data))
    }, [user.email])

    
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Services - ReviewPulse Service Website</title>
            </Helmet>

            <div className="lg:w-6/12 md:w-6/12 mx-auto pt-7 pb-10 px-5">
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

            <div className="overflow-x-auto max-w-7xl mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr className='text-base text-slate-500'>
                        <th></th>
                        <th>Service Category</th>
                        <th>Title</th>
                        <th>Company Name</th>
                        <th>Deadline</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                        services.map((service, index) => 
                            <tr>
                                <th>{index + 1}</th>
                                <td>{service.category}</td>
                                <td>{service.title}</td>
                                <td>{service.companyName}</td>
                                <td>{service.date}</td>
                                <td>
                                    <button onClick={() => openUpdateModal(service)} className='text-[27px] text-blue-900'><FaRegEdit /></button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(service._id)} className='text-3xl text-red-500'><MdDeleteForever /></button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
                {selectedService && (
                <Modal service={selectedService} onClose={closeModal} onUpdate={handleServiceUpdate}/>
            )}
        </div>
    );
};

export default MyServices;