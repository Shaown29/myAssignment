import React, { useEffect } from 'react';
import { useState } from 'react';
import HomeProduct from '../HomeProduct/HomeProduct';

const Products = () => {
    const [homeproducts,setHomeProducts] = useState([]);

    useEffect(() => {
        fetch('https://polar-harbor-56501.herokuapp.com/products')
    .then(res=>res.json())
    .then(data=>setHomeProducts(data.slice(0,6)))
    },[])


    
    return (
        <div className='row mt-5'>
            <h3>Products<hr/></h3>
            {
                homeproducts.map(homeproduct=><HomeProduct key={homeproduct.name} homeproduct={homeproduct}></HomeProduct>)
            }
        </div>
    );
};

export default Products;