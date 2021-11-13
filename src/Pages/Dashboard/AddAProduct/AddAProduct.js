import React, { useState } from 'react';
import toastr from 'toastr';

const initialValue = {
    name: "",
    quality: "",
    price: "",
    describe: "",
    img: "",
};

const AddAProduct = () => {
    const [addProductData,setAddProductData] = useState(initialValue);

    // set data from input to state
    const handleOnChange = (e) => {
        setAddProductData({
            ...addProductData,
            [e.target.name]: e.target.value
        });
    }

    // POST: add product API call
    const handleAddProduct = e => {
        fetch(`https://polar-harbor-56501.herokuapp.com/products`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(addProductData)
        })
        .then(res => {
            // console.log(res);
            toastr.success("product added successfully");
            setAddProductData(initialValue);
        })
        .catch(err => {
            // console.log(err);
            toastr.error("product add failed");
        })

        e.preventDefault();
    }
    
    return (
        <div>
            <h2>Hello</h2> 
            <form onSubmit={handleAddProduct}>
                <div className="form-floating mt-5">
                    <input name='name' value={addProductData.name} onChange={handleOnChange} className="form-control"/>
                    <label for="floatingInput">Product Name</label>
                </div>

                <div className="form-floating mt-5">
                    <input name='quality' value={addProductData.quality} onChange={handleOnChange} className="form-control"/>
                    <label for="floatingInput">Product Quality</label>
                </div>

                <div className="form-floating mt-5">
                    <input name='price' value={addProductData.price} onChange={handleOnChange} className="form-control"/>
                    <label for="floatingInput">Product Price</label>
                </div>
                
                <div className="form-floating mt-5">
                    <input name='describe' value={addProductData.describe} onChange={handleOnChange}  className="form-control"/>
                    <label for="floatingInput">Product describe</label>
                </div>
                
                <div className="form-floating mt-5">
                    <input name='img' value={addProductData.img} onChange={handleOnChange} className="form-control"/>
                    <label for="floatingInput">Image URL</label>
                </div>

                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </div>
    );
};

export default AddAProduct;