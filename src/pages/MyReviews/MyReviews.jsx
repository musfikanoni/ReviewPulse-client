import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import AuthContext from '../../context/AuthContext/AuthContext';
import { useLoaderData } from 'react-router-dom';

const MyReviews = () => {
    // const service = useLoaderData();
    
    // const {photoUrl, title, description, category, price} = service;
    const [reviews, setReviews] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(()=>{
        fetch(`http://localhost:5000/reviews`)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    return (
        <div className='max-w-7xl mx-auto'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Reviews - ReviewPulse Service Website</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            My Reviews{reviews.length}

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Review</th>
                        <th>Rating</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                        reviews.map((review, index )=>
                            <tr>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img
                                        src={user?.photoURL} />
                                    </div>
                                    </div>
                                    <div>
                                    <div className="font-bold">{user.displayName}</div>
                            
                                </div>
                            </div>
                        </td>
                        <td>
                        {/* {title} */}
                        <br />
                        <span className="badge badge-ghost badge-sm">{}</span>
                        </td>
                        <td>Purple</td>
                        <th>
                        <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                            </tr>
                        )
                    }
                    </tbody>
                    {/* foot */}
                </table>
            </div>
        </div>
    );
};

export default MyReviews;