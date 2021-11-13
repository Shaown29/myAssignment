import React from 'react';
import { useState } from 'react/cjs/react.development';
import ReviewShows from '../Home/ReviewShows/ReviewShows';

const ReviewShow = () => {
    const [reviews,setReviews] = useState([]);
    fetch('http://localhost:5000/reviews')
    .then(res=>res.json())
    .then(data=>setReviews(data))
    return (
        <div className='row mt-5'>
            <h3>Reviews<hr/></h3>
            {
                reviews.map(review=><ReviewShows key={review._id} review={review}></ReviewShows>)
            }
        </div>
    );
};

export default ReviewShow;