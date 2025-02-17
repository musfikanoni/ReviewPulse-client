import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import { MdDeleteForever } from 'react-icons/md';
import useAuth from '../../hooks/useAuth';
import { Rating } from '@smastrom/react-rating';
import Modal from './Modal';

const MyReviews = () => {
    const { user } = useAuth();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedReview, setSelectedReview] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(`https://assignment-11-server-eta-jade.vercel.app/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [user.email]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-11-server-eta-jade.vercel.app/reviews/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setReviews(reviews.filter(review => review._id !== id));
                            Swal.fire("Deleted!", "Your review has been deleted.", "success");
                        }
                    });
            }
        });
    };

    const handleServiceUpdate = (id, updatedData) => {
        setReviews(prevReviews =>
            prevReviews.map(review =>
                review._id === id ? { ...review, ...updatedData } : review
            )
        );
    };

    if (loading) {
        return <div className="text-center my-5">Loading...</div>;
    }

    return (
        <div className=" bg-[#F2F4F8]">
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Reviews - ReviewPulse Service Website</title>
            </Helmet>
            <div className="max-w-7xl mx-auto">
                <h2 className='text-3xl font-bold text-center py-5'>My All Reviews</h2>

                {reviews.length === 0 ? (
                    <div className="text-center my-5">
                        <p className="text-lg font-semibold">No reviews found. Start by adding one!</p>
                    </div>
                ) : (
                    reviews.map((review) => (
                        <div className="py-10">
                                <div key={review._id} className="card border bg-white">
                                <div className="card-body">
                                    <h2 className="card-title">{review.title}</h2>
                                    <p>Company Name: {review.companyName}</p>
                                    <p>Category: {review.category}</p>
                                    <p>{review.review}</p>
                                    <div className="flex items-center gap-1">
                                        <span className="font-semibold text-lg">Rating: {review.rating}</span>
                                        <Rating className="h-8" style={{ maxWidth: 200 }} value={review.rating} readOnly />
                                    </div>
                                    <div className="flex justify-end gap-5">
                                        <button onClick={() => setSelectedReview(review)} className="py-2 px-5 rounded-full bg-gradient-to-r from-[#a233ce] to-[#7847fe] border-none text-lg text-white">Update</button>
                                        <button onClick={() => handleDelete(review._id)} className="text-4xl text-red-500">
                                            <MdDeleteForever />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}

                {selectedReview && (
                    <Modal
                        review={selectedReview}
                        onClose={() => setSelectedReview(null)}
                        onUpdate={handleServiceUpdate}
                    />
                )}
            </div>
        </div>
    );
};

export default MyReviews;
