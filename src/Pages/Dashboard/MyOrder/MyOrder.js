import React from 'react';
import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrder = () => {
    const {user} = useAuth();
    const [order,setOrder] = useState([]);
    const [orders,setOrders] = useState([]);

    useEffect(()=>{
        fetch('https://polar-harbor-56501.herokuapp.com/single-order',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({email:user.email})
        })
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[user.email])

    const handleDelete=id=>{
    const proceed = window.confirm('Are you sure,you want to delete?');
    if(proceed){
        const url=`https://polar-harbor-56501.herokuapp.com/orders/${id}`;
        fetch(url,{
            method:'Delete'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
                alert('deleted successfully')
                const remaining=orders.filter(order=>order._id !==id)
            setOrders(remaining)
            }
            
        })
    }
    }
    
    return (
        <div>
            <h2>My Order</h2>
            <h2>Name: {order?.name}</h2>
            <h3>Address: {order?.address}</h3>
            <h3>Phone Number: {order?.phone}</h3>
            <button className='btn btn-danger' onClick={()=>handleDelete(order?._id)}>Delete</button>
        </div>
    );
};


export default MyOrder;