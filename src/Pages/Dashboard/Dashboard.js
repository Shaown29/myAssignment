import React from 'react';
import { Link } from 'react-router-dom';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import AddAProduct from './AddAProduct/AddAProduct';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import ManageProducts from './ManageProducts/ManageProducts';
import MyOrder from './MyOrder/MyOrder';
import Pay from './Pay/Pay';
import Review from './Review/Review';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const {admin,user,logout} = useAuth();
    return (
        <div >
             <nav className="navbar navbar-light bg-primary">
        <div >
        <span className="navbar-brand mb-0 h1">Dashboard</span>
        </div>
        </nav>
        <div className="row flex-nowrap">
        <div className="col-6 col-md-3 bg-dark">
        <div className="d-flex flex-column align-items-center px-3 pt-2 text-white min-vh-100">
        <Link to="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span>Home</span>
        </Link>
       
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
        <li className="nav-item">
        <Link to={`${url}`} className="nav-link align-middle px-0">
         <span>Dashboard</span>
                        </Link>
                    </li>
                    {!admin &&<div>
                        <li>
                        <Link to={`${url}/pay`}  className="nav-link px-0 align-middle">
                             <span>Pay</span> </Link>
                    </li>

                    <div>
           {
                user?.email ?
                <div>
                <button onClick={logout}>Logout</button>
                </div>:
                <Link to='/login'><button>Login</button></Link>
            }
       </div>

                    <li>
                        <Link to={`${url}/myOrder`} className="nav-link px-0 align-middle">
                             <span>MyOrder</span></Link>
                    </li>
                    <li>
                        <Link to={`${url}/review`} className="nav-link px-0 align-middle">
                             <span>Review</span></Link>
                    </li></div>}
                    {admin && <div>
                        <li>
                        <Link to={`${url}/makeAdmin`} className="nav-link px-0 align-middle">
                             <span>Make Admin</span></Link>
                    </li>
                    <li>
                        <Link to={`${url}/addAProduct`} className="nav-link px-0 align-middle">
                             <span>Add A Product</span></Link>
                    </li>

                    <div>
                            {
                            user?.email ?
                            <div>
                            <button onClick={logout}>Logout</button>
                            </div>:
                            <Link to='/login'><button>Login</button></Link>
                        }
                     </div>


                    <li>
                        <Link to={`${url}/manageAllOrders`} className="nav-link px-0 align-middle">
                             <span>Manage All Orders</span></Link>
                    </li>
                    <li>
                        <Link to={`${url}/manageProducts`} className="nav-link px-0 align-middle">
                             <span>Manage Products</span></Link>
                    </li>
                    </div>}
                    </ul>
                    </div>
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-6 md-3" >
                            
                    <Switch>
                    <Route exact path={path}>
                        <h3>Please select a topic.</h3>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin/>
                    </Route>
                    <Route path={`${path}/addAProduct`}>
                        <AddAProduct/>
                    </Route>
                    <Route path={`${path}/manageAllOrders`}>
                        <ManageAllOrders/>
                    </Route>
                    <Route path={`${path}/manageProducts`}>
                        <ManageProducts/>
                    </Route>
                    <Route path={`${path}/myOrder`}>
                        <MyOrder/>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review/>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay/>
                    </Route>
                    </Switch>
                            </div>
                        </div>
                    


                    </div>
                    </div>
                    </div>

    
    );
};

export default Dashboard;