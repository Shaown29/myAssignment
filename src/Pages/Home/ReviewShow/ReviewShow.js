import React from 'react';
import { useState } from 'react';
import ReviewShows from '../Home/ReviewShows/ReviewShows';

const ReviewShow = () => {
    const [reviews,setReviews] = useState([]);
    fetch('https://polar-harbor-56501.herokuapp.com/reviews')
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