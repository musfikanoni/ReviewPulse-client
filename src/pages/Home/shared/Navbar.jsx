import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/site-logo.png'

const Navbar = () => {

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink> Services</NavLink></li>
    </>
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
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
                        <a className="btn bg-transparent hover:bg-transparent hober:border-none border-none shadow-none text-xl">ReviewPulse</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <Link>
                        <button className='btn'>Login</button>
                    </Link>
                    <Link>
                        <button className='btn'>Register</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;