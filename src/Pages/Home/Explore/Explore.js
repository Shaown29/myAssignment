import React from 'react';
import { useState } from 'react/cjs/react.development';
import Header from '../../../Shared/Header/Header';
import Footer from '../Footer/Footer';

import Explorer from './Explorer/Explorer';

const Explore = () => {
    const [products,setProducts] = useState([]);
    fetch('http://localhost:5000/products')
    .then(res=>res.json())
    .then(data=>setProducts(data))
    return (
        <div>
            <Header></Header>
            <div className='row mt-5'>
                {
                    products.map(product=><Explorer key={product.name} product={product}></Explorer>)
                }
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Explore;