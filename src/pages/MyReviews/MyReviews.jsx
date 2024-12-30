import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import useAuth from '../../hooks/useAuth';
import { Rating } from '@smastrom/react-rating';
import Swal from 'sweetalert2';

const MyReviews = () => {
    // const service = useLoaderData();
    
    // const {photoUrl, title, description, category, price} = service;
    const {user} = useAuth();
    const [reviews, setReviews] = useState([]);


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
        
    
                fetch(`http://localhost:5000/reviews/${id}`, {
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
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
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
            My Reviews{reviews.length}
                    {
                        reviews.map((review, index )=>
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
                                    <button className='btn'>update</button>
                                    <button onClick={() => handleDelete(review._id)} className='btn'>X</button>
                                </div>
                            </div>
                        </div>
                        )
                    }
            </div>

    );
};

export default MyReviews;