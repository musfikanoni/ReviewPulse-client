import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Home/shared/Navbar';
import Footer from '../pages/Home/shared/Footer';

const MainLayout = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;