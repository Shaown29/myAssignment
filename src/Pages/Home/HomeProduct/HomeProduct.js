import React from 'react';
import { Link } from 'react-router-dom';
import './HomeProduct.css'

const HomeProduct = ({homeproduct}) => {
    const { name,img,describe,quality,price,_id} = homeproduct;
    return (
            <div className='col-lg-6 col-12 home-size'>
                <img className='home-image-size' src={img} alt=''/>
                <h2>Product name: {name}</h2>
                <h3>Product Price: ${price}</h3>
                <h4>Specification: {quality}</h4>
                <p>description: {describe}</p>
                <Link to={`/purchase/${_id}`}><button className='mx-1 my-3'>Purchase</button></Link>
            </div>
        
    );
};

export default HomeProduct;