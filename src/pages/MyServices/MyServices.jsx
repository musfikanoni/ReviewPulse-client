import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import useAuth from '../../hooks/useAuth';
import { MdDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2';

const MyServices = () => {
    
    const [services, setServices] = useState([]);
    const {user} = useAuth();

    const handlUpdate = id => {
        console.log(update)
    }

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
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div className="lg:w-6/12 md:w-6/12 mx-auto pt-7 pb-10">
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
                    <tr>
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
                                    <button className='btn'>Update</button>
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
        </div>
    );
};

export default MyServices;