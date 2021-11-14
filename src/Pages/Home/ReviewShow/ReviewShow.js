import React, { useEffect } from 'react';
import { useState } from 'react';
import ReviewShows from '../Home/ReviewShows/ReviewShows';

const ReviewShow = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('https://polar-harbor-56501.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    return (
        <div className='row mt-5'>
            <h3>Reviews<hr/></h3>
            {
                reviews?.map(review => <ReviewShows key={review._id} review={review} />)
            }
        </div>
    );
};

export default ReviewShow;