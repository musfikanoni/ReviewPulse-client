import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/site-logo.png'
import AuthContext from '../../../context/AuthContext/AuthContext';
import { FaRegCircleUser } from 'react-icons/fa6';

const Navbar = () => {

    const {user, logOutUser} = useContext(AuthContext);

    const handleLogOut = () => {
        logOutUser()
        .then(() => {
            console.log('successful log out')
        })
        .catch(error => {
            console.log('failed log out')
        })
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        
        {
            user && <>
                <li><NavLink to="/addService">Add Service</NavLink></li>
                <li><NavLink to="/myServices">My Services</NavLink></li>
                <li><NavLink to="/myReviews">My Reviews</NavLink></li>
            </>
        }
    </>
    return (
        <div className="bg-[#59007c]">
            <div className='max-w-7xl mx-auto'>
                <div className="navbar py-4 pb-7">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#FFFFFF">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                        </div>
                    
                        <div className="flex">
                            <img className='w-12' src={logo} alt="" />
                            <div className="lg:block md:block hidden">
                                <a className="btn bg-transparent text-white hover:bg-transparent hober:border-none border-none shadow-none text-xl">ReviewPulse</a>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu text-lg text-white gap-3 font-medium menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end gap-3">

                        {
                            user ? <>
                                <div className="flex gap-5 items-center">
                                    <div className="group">
                                        <Link>
                                        {
                                            user.photoURL ? (
                                                <img src={user.photoURL} alt="" className='w-10 h-10 rounded-full cursor-pointer' />
                                            ) : (
                                                <FaRegCircleUser className='text-3xl text-gray-300 cursor-pointer' />
                                            )
                                        }
                                        </Link>
                                        <div className='absolute right-32 mt-2 w-40 bg-white text-gray-600 text-sm rounded-lg p-2 hidden group-hover:block'>
                                            {user.displayName || 'User'}
                                        </div>
                                    </div>
                                    <button onClick={handleLogOut} className='px-5 py-2.5 rounded-full font-semibold bg-gradient-to-r from-[#a233ce] via-[#b60bffd2] to-[#936dfa] border-none text-white'>Log Out</button>
                                </div>
                            </> : <>
                                <Link to="/login">
                                    <button className='px-5 py-2.5 rounded-full font-semibold bg-gradient-to-r from-[#a233ce] via-[#b60bffd2] to-[#936dfa] border-none text-white'>Login</button>
                                </Link>
                                <Link to="/register">
                                    <button className='px-5 py-2.5 rounded-full font-semibold bg-gradient-to-r from-[#a233ce] via-[#b60bffd2] to-[#936dfa] border-none text-white'>Register</button>
                                </Link>
                            </>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;