import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import useAuth from '../../hooks/useAuth';
import { Rating } from '@smastrom/react-rating';
import Swal from 'sweetalert2';
import { MdDeleteForever } from 'react-icons/md';



// const Modal = ({ review, onClose, onUpdate }) => {
//     const [startDate, setStartDate] = useState(new Date());
//     const [updatedTitle, setUpdatedTitle] = useState(review?.title || '');
//     const [rating, setRating] = useState(0);
//     const {user} = useAuth();

//      const handleUpdateReview = e => {
//             e.preventDefault();
//             const formData = new FormData(e.target)
//             const initialData = Object.fromEntries(formData.entries());
//             console.log(initialData);
//             const {price, currency, ...updatedReview} = initialData;
//             updatedReview.price = {price, currency};
//             console.log(updatedReview);
    
//             fetch(`http://localhost:5000/reviews/${review._id}`, {
//                 method: 'PUT',
//                 headers: {
//                     'content-type': 'application/json'
//                 },
//                 body: JSON.stringify(updatedReview)
//             })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 e.target.reset();
//                 if(data.modifiedCount > 0){
//                     Swal.fire({
//                         title: 'Success!',
//                         text: 'Service Updated successfully',
//                         icon: 'success',
//                         confirmButtonText: 'Cool'
//                       })
//                       onUpdate(review._id, updatedReview);
//                       onClose();
//                 }
//             })
    
//         }

//     return (
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 overflow-y-scroll">
//             <div className="rounded-lg shadow-lg w-11/12 md:w-6/12">
//                 {/* <h2 className="text-2xl font-bold mb-4">Update Service</h2> */}
//                 <div className="card bg-base-100 w-full max-w-3xl">
//                     <form onSubmit={handleUpdateReview} className="card-body">
//                         <h3 className='font-bold text-lg'>Add Your Review</h3>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text font-semibold text-lg">Service Title</span>
//                             </label>
//                             <input type="title" readOnly name='title' defaultValue={review.title} placeholder="" className="input input-bordered" />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text font-semibold text-lg">Post Review</span>
//                             </label>
//                             <textarea name='review' type="text" className="textarea textarea-bordered" placeholder="Review write here"></textarea>
//                         </div>
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text font-semibold text-lg">Review Posted Date</span>
//                                 </label>
                        
//                                 <DatePicker readOnly selected={startDate} onChange={(date) => setStartDate(date)}  dateFormat="dd/MM/yyyy"
//                                 placeholderText="Select a date" placeholder="Date" name='date' 
//                                 className='lg:w-[220px] md:w-[345px] w-[285px] max-w-xs outline-gray-300 border border-gray-300 py-[11px] px-2.5 rounded-md'/>
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text font-semibold text-lg">User Email</span>
//                                 </label>
//                                 <input type="email" readOnly name='email' defaultValue={user?.email} placeholder=""
//                                 className="input input-bordered" />
//                             </div>
//                         </div>
//                         <div className='flex items-center gap-1'>
//                             <span className=' font-semibold text-lg'>Rating:</span>
//                             <label className='label-text'>
//                                 <Rating className='h-8' style={{ maxWidth: 200 }} value={rating} onChange={setRating} />
        
//                             </label>
//                             <input type="hidden" name="rating" value={rating} />
//                         </div>
//                         <div className="form-control mt-6">
//                         <button className="btn btn-primary">Add Review</button>
//                         </div>
                            
//                         <div className="flex justify-center pt-3 gap-4">
//                             <button onClick={onClose} className="btn lg:btn-wide">Cancel</button>
//                             <button className="btn lg:btn-wide btn-primary">Update</button>
//                         </div>
//                     </form>
//                 </div>

//             </div>
//         </div>
//     );
// };






const MyReviews = () => {
    // const service = useLoaderData();
    
    // const {photoUrl, title, description, category, price} = service;
    const {user} = useAuth();
    const [reviews, setReviews] = useState([]);


        const [selectedReview, setSelectedReview] = useState(null);
        const openUpdateModal = (review) => {
            setSelectedReview(review);
        };
    
        const closeModal = () => {
            setSelectedReview(null);
        };
    
        const handleServiceUpdate = (id, updatedData) => {
            setServices(prevServices =>
                prevServices.map(review =>
                    review._id === id ? { ...review, ...updatedData } : review
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
        
    
                fetch(`https://assignment-11-server-eta-jade.vercel.app/reviews/${id}`, {
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
    
                    const updatedReviews = reviews.filter(review => review._id !== id);
                    setReviews(updatedReviews);
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
    

    useEffect(()=>{
        fetch(`https://assignment-11-server-eta-jade.vercel.app/reviews?email=${user.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [user.email])

    return (
        <div className='max-w-7xl mx-auto'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Reviews - ReviewPulse Service Website</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
                    {
                        reviews.map((review)=>
                        <div className="card my-5 border  w-">
                            <div className="card-body ">
                                <h2 className="card-title">{review.title}</h2>
                                <p>Company Name: {review.companyName}</p>
                                <p>Category: {review.category}</p>
                                <p>{review.review}</p>
                                <p>       
                                    <div className='flex items-center gap-1'>
                                        <span className=' font-semibold text-lg'>Rating: {review.rating}</span> 
                                        <Rating className='h-8 hover:text-none' required style={{ maxWidth: 200 }} value={review.rating} />
                                    </div>
                                </p>
                                <div className='flex justify-end gap-5'>
                                    <button onClick={() => openUpdateModal(review)} className='btn'>update</button>
                                    <button onClick={() => handleDelete(review._id)}  className='text-4xl text-red-500'><MdDeleteForever /></button>
                                </div>
                            </div>
                        </div>
                        )
                    }

                    {/* Render Modal Conditionally */}
                        {/* {selectedReview && (
                    <Modal service={selectedReview} onClose={closeModal} onUpdate={handleServiceUpdate}/>
                )} */}
            </div>

    );
};

export default MyReviews;