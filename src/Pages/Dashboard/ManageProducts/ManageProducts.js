import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [manages,setManages]=useState([]);

    useEffect(()=>{
        fetch('https://polar-harbor-56501.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setManages(data))
    },[])



    const handleDelete=id=>{
        const proceed = window.confirm('Are you sure,you want to delete?');
        if(proceed){
            const url=`https://polar-harbor-56501.herokuapp.com/products/${id}`;
            fetch(url,{
                method:'Delete'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                    alert('deleted successfully')
                    const remaining=manages.filter(order=>order._id !==id)
                setManages(remaining)
                }
                
            })
        }
        }
    return (
        <div>
            <h2>Hello</h2>
            {
                manages.map(order=><div key={order._id}>
                    <h2>{order.name}</h2>
                    <button className='btn btn-success' onClick={()=>handleDelete(order._id)}>Delete</button>
                     </div>)
            }
        </div>
    );
};

export default ManageProducts;