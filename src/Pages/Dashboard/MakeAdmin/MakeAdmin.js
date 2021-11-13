import React from 'react';
import { useState } from 'react/cjs/react.development';

const MakeAdmin = () => {
    const [email,setEmail] = useState('');
    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e =>{
        const user = {email};
        fetch('http://localhost:5000/users/admin',{
            method:'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data =>{ 
        console.log(data);
        
        })
        e.preventDefault()
    }
    return (
    <div>
        <h2>Make an Admin</h2>
        <form onSubmit={handleAdminSubmit}>
        <div className="form-floating mt-5">
        <input name='email' onBlur={handleOnBlur} type="email" className="form-control" placeholder="name@example.com"/>
        <label for="floatingInput">Email address</label>
        </div>
        <button className='bg-success' type='submit'>Make Admin</button>
        </form>
        </div>
    );
};

export default MakeAdmin;