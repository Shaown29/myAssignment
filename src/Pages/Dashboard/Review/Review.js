import React, { useState } from 'react';
import toastr from 'toastr';

const initialValue = {
    name: "",
    emailAddress: "",
    reviewDescribe: "",
    star: "",
    
};


const Review = () => {
    const [addReview,setAddReview] = useState(initialValue);

    // set data from input to state
    const handleOnChange = (e) => {
        setAddReview({
            ...addReview,
            [e.target.name]: e.target.value
        });
    }

    
        // POST: add review API call
    const handleAddReview = e => {
        e.preventDefault();
        fetch(`http://localhost:5000/reviews`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(addReview)
        })
        .then(res => {
            // console.log(res);
            toastr.success("product added successfully");
            setAddReview(initialValue);
        })
        .catch(err => {
            // console.log(err);
            toastr.error("product add failed");
        })

        
    }
    
    return (
        <div>
            <h3>Review</h3>
            <form onSubmit={handleAddReview}>
            <div className="form-floating mt-5">
                    <input name='name' value={addReview.name} onChange={handleOnChange}  className="form-control"/>
                    <label for="floatingInput">Product Name</label>
            </div>
            <div className="form-floating mt-5">
                    <input name='emailAddress' value={addReview.emailAddress} onChange={handleOnChange}  className="form-control"/>
                    <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating mt-5">
                    <input name='reviewDescribe' value={addReview.reviewDescribe} onChange={handleOnChange}  className="form-control"/>
                    <label for="floatingInput">Review Describe</label>
            </div>
            <div className="form-floating mt-5">
                    <input name='star' value={addReview.star} onChange={handleOnChange}  className="form-control"/>
                    <label for="floatingInput">Input a number 0-5</label>
            </div>
            <button type="submit" className="btn btn-success">Add Review</button>
            </form>
        </div>
    );
};

export default Review;