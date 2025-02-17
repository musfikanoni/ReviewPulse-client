import React from 'react';
import Footer_logo from '../../../assets/site-logo.png'

const Footer = () => {
    return (
        <div className='bg-[#59007C]'>
           <div className="max-w-7xl mx-auto">
            <footer className="footer p-10">
                <aside className='max-w-md'>
                    <img className='w-20' src={Footer_logo} alt="" />
                    <p className='text-white'>
                    <span className='font-bold text-2xl'>ReviewPulse</span>
                    <br />
                    ReviewPulse is your go-to platform for gathering, managing, and showcasing customer feedback to boost your brand’s reputation.
                    </p>
                </aside>
                <nav className='text-white'>
                    <h6 className="text-lg font-bold">Services</h6>
                    <a className="link link-hover">Travel</a>
                    <a className="link link-hover">Delivery</a>
                    <a className="link link-hover">Consultation</a>
                </nav>
                <nav className='text-white'>
                    <h6 className="text-lg font-bold">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                </nav>
                <nav className='text-white'>
                    <h6 className="text-lg font-bold">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>  
                </footer>
            <div className="divider mx-auto"></div>
            <p className='text-center py-5 text-white'>© 2025 ReviewPulse. All rights reserved</p>
           </div>
        </div>
    );
};

export default Footer;