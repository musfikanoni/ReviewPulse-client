import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import DatePicker from 'react-datepicker';
import Swal from 'sweetalert2';
import 'react-datepicker/dist/react-datepicker.css';
import useAuth from '../../hooks/useAuth';

const Modal = ({ review, onClose, onUpdate }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [rating, setRating] = useState(review?.rating || '');
    const { user } = useAuth();

    const handleUpdateReview = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        initialData.rating = rating;

        fetch(`https://assignment-11-server-eta-jade.vercel.app/reviews/${review._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(initialData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Review updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    });
                    onUpdate(review._id, initialData);
                    onClose();
                }
            })
            .catch((error) => {
                console.error('Error updating review:', error);
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to update the review',
                    icon: 'error',
                });
            });
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 overflow-y-scroll">
            <div className="bg- rounded-lg shadow-lg w-11/12 md:w-6/12">
                <div className="card bg-base-100 w-full max-w-3xl">
                    <form onSubmit={handleUpdateReview} className="card-body">
                        <h3 className="font-bold text-lg">Update Your Review</h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Service Title</span>
                            </label>
                            <input
                                type="text"
                                readOnly
                                defaultValue={review.title}
                                name="title"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Post Review</span>
                            </label>
                            <textarea
                                name="review"
                                defaultValue={review.review}
                                className="textarea textarea-bordered"
                                placeholder="Write your review here"
                            ></textarea>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Posted Date</span>
                                </label>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="Select a date"
                                    name="date"
                                    className="outline-gray-300 border border-gray-300 py-[11px] px-2.5 rounded-md w-full"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">User Email</span>
                                </label>
                                <input
                                    type="email"
                                    readOnly
                                    name="email"
                                    defaultValue={user?.email}
                                    className="input input-bordered"
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-semibold text-lg">Rating:</span>
                            <Rating
                                className="h-8"
                                style={{ maxWidth: 200 }}
                                value={rating}
                                onChange={setRating}
                            />
                            <input type="hidden" name="rating" value={rating} />
                        </div>
                        <div className="form-control mt-6">
                            <div className="flex justify-center gap-4">
                                <button type="button" onClick={onClose} className="btn lg:btn-wide  px-5 py-2.5 rounded-full font-semibold">
                                    Cancel
                                </button>
                                <button type="submit" className="btn lg:btn-wide px-5 py-2.5 rounded-full font-semibold bg-gradient-to-r from-[#a233ce] via-[#b60bffd2] to-[#936dfa] border-none text-white">
                                    Update
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;
