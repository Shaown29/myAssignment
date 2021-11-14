import React from 'react';
import { Link } from 'react-router-dom';
// import Header from '../../../../Shared/Header/Header';
import './Explorer.css';

const Explorer = ({product}) => {
    const {name,img,describe,price,quality,_id}=product;

    return (
        <div className='col-lg-6 col-12 size'>
            <img className='image-size' src={img} alt=''/>
            <h2>Product name: {name}</h2>
            <h3>Product Price: ${price}</h3>
            <h4>Specification: {quality}</h4>
            <p>description: {describe}</p>
            <Link to={`/purchase/${_id}`}><button className='mx-1 my-3'>Purchase</button></Link>
        </div>
    );
};

export default Explorer;