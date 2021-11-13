import React from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import useAuth from '../../hooks/useAuth';

const Login = () => {
const [loginData,setLoginData] = useState({});
const {user, loginUser, loading, authError} = useAuth(); 
const location = useLocation();
const history = useHistory();

    const handleOnBlur=e=>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit=e=>{
        loginUser(loginData.email, loginData.password,location,history)
        e.preventDefault();
    }
    return (
        <div>
        {!loading && <form onSubmit={handleLoginSubmit} className='container'>
            <div className="form-floating mt-5">
            <input name='email' onBlur={handleOnBlur} type="email" className="form-control" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating mt-5">
            <input name='password' onBlur={handleOnBlur} type="password" className="form-control" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            <br/>
            <NavLink to='/register'>
                <button type="button" className="btn btn-outline-info">New User? Please Register</button>
            </NavLink>
            {user?.email && <div className="alert alert-info" role="alert">
         Login successfully
         </div>}
         {authError && <div className="alert alert-danger" role="alert">
         {authError}
         </div>}
        </form>}
        {loading && <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
        </div>}
        </div> 
    );
};

export default Login;