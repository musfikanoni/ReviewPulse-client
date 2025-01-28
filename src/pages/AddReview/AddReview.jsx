import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AddReview = ({service}) => {
    const {id} = useParams();
    console.log(id)
    const navigate = useNavigate();
    const [rating, setRating] = useState(0);
    const {user} = useAuth();
    const [startDate, setStartDate] = useState(new Date());

    const {photoUrl, title, description, category, price, companyName, website} = service;

    const handleAddReview = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        initialData.rating = rating;
        const form = e.target;
        const review = form.review.value;

        const reviewPost = {
            review_id: id, 
            posted_email: user.email,
            name: user.displayName,
            review,
            rating,
            title
            // initialData
        }

        fetch('https://assignment-11-server-eta-jade.vercel.app/reviews',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewPost)
        }
        )
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Your service added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                    })
                    console.log(review.title)
                navigate('/myReviews')
            }
        })


    }
    return (
        <div>
            <form onSubmit={handleAddReview} className="card-body">
                <h3 className='font-bold text-lg'>Add Your Review</h3>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-lg">Service Title</span>
                    </label>
                    <input type="title" readOnly name='title' defaultValue={title} placeholder="" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-lg">Post Review</span>
                    </label>
                    <textarea name='review' type="text" className="textarea textarea-bordered" placeholder="Review write here"></textarea>
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
                <div className='flex items-center gap-1'>
                    <span className=' font-semibold text-lg'>Rating:</span>
                    <label className='label-text'>
                        <Rating className='h-8' style={{ maxWidth: 200 }} value={rating} onChange={setRating} />

                    </label>
                    <input type="hidden" name="rating" value={rating} />
                </div>
                <div className="form-control mt-6">
                {
                    user?  <>
                        <button className="btn btn-primary w-full text-md font-bold text-white">Add Review</button>
                    </> : <>
                        <Link to='/login'>
                            <button className="btn btn-primary w-full text-md font-bold text-white">Add Review</button>
                        </Link>
                    </>
                }
                </div>
            </form>
        </div>
    );
};

export default AddReview;