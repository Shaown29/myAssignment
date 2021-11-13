import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { user,registerUser,loading,authError } =useAuth();
    const [registerData,setRegisterData] = useState({})
    const history = useHistory();

    const handleOnBlur=e=>{
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = {...registerData};
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }

    const handleLoginSubmit=e=>{
        if(registerData.password !== registerData.password2){
            alert("Incorrect password");
            return
        }
        registerUser(registerData.email,registerData.password,registerData.name,history);
        e.preventDefault();
    }
    return (
        
        <div className='container'>
      { !loading && <form onSubmit={handleLoginSubmit} >
      <div className="form-floating mt-5">
        <input name='name' onBlur={handleOnBlur}  className="form-control"/>
        <label for="floatingInput">User Name</label>
        </div>
        <div className="form-floating mt-5">
        <input name='email' onBlur={handleOnBlur} type="email" className="form-control" placeholder="name@example.com"/>
        <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating mt-5">
        <input name='password' onBlur={handleOnBlur} type="password" className="form-control" placeholder="Password"/>
        <label for="floatingPassword">Password</label>
        </div>
        <div className="form-floating mt-5">
        <input name='password2' onBlur={handleOnBlur} type="password" className="form-control" placeholder="Password"/>
        <label for="floatingPassword">Retype Password</label>
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
        <br/>
        <NavLink to='/login'>
            <button type="button" className="btn btn-outline-info">Already Register? Please Login</button>
        </NavLink>
        </form>}
        {loading && <div className="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>}
        {user?.email && <div className="alert alert-info" role="alert">
        Created successfully
        </div>}
        {authError && <div className="alert alert-danger" role="alert">
        {authError}
        </div>}
         </div>
     
    )
};

export default Register;