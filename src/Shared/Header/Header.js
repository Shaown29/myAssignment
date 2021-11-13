import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Header = () => {
  const {user,logout} = useAuth();
    return (
        <div>
           <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-warning">
  <div className="container-fluid">
    <a className="navbar-brand" href="#home">Best Refrigerator to buy</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/explore">Explore</Link>
        </li>
      </ul>
      <span className="navbar-text">
        {
          user?.email ?
          <div>
            <NavLink to='/dashboard'><button >Dashboard</button></NavLink>
          <button className='btn btn-success' onClick={logout}>Logout</button>
          </div>:
          <NavLink to='/login'><button className='btn btn-success'>Login</button></NavLink>
          
       
        }
      </span>
      <span className="navbar-text">
        Signed in as: <a href="#login">{user?.displayName}</a>
      </span>
    </div>
  </div>
</nav> 
        </div>
    );
};

export default Header;