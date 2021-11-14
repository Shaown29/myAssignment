import React from 'react';
// import Rating from 'react-rating';

const ReviewShows = ({ review }) => {
    const { name, emailAddress, reviewDescribe, star } = review;

    return (
        <div className='col-lg-6 col-12 home-size'>
            <h2>Product name: {name}</h2>
            <h3>Reviewer Address: {emailAddress}</h3>
            <h4>Review Describe: {reviewDescribe}</h4>

            {
                [...Array(Number(star)).keys()].map((star, index) => (
                    <i key={index} className="fas fa-star" aria-hidden="true"></i>
                ))
            }

            {
                [...Array(5 - Number(star)).keys()].map((star, index) => (
                    <i key={index} className="far fa-star" aria-hidden="true"></i>
                ))
            }
            {/* <Rating
                initialRating={star || 0}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"  
                readonly>
            </Rating> */}
        </div>
    );
};

export default ReviewShows;
