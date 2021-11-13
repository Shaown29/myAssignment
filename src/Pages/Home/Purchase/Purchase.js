import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Purchase = () => {
    const { Id } = useParams();
    const[detail,setDetail]=useState([]);
    const{user}=useAuth();

    const { register, handleSubmit,reset,formState: { errors } } = useForm();
    const onSubmit = data => {console.log(data);
    
    
    fetch('https://polar-harbor-56501.herokuapp.com/orders',{
        method:'Post',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(result=>{
        if(result.insertedId){
            alert('Order processed Successfully');
            reset();
        }
    })
}; 
    useEffect(()=>{
        fetch('https://polar-harbor-56501.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=> {
            const result = data.filter(item => item._id === Id);
            console.log("result", result) 
            setDetail(result)
        })
    },[Id]);

    return (
        <div>
           <h2>clicked: {Id}</h2>
          {detail?.map(item => (
                <div key={item._id}>
                    <img src={item.img} alt="" />
                    <h3>Place Name: {item.name}</h3>
                    <p>Description: {item.describe}</p>
                    <p>Spending cost: ${item.price}</p>
                    <p>Country location:{item.quality}</p>
                    
                </div>
            ))} 

            <h2>User Email:{user.email}</h2>
            <h4>User name:{user.displayName}</h4>

            
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("name")} />
                <br />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                <br />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <br />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <br />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />
                <br />

                <input type="submit" />
            </form> 
        </div>
    );
};

export default Purchase;