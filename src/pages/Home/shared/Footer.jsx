import React from 'react';
import Footer_logo from '../../../assets/site-logo.png'

const Footer = () => {
    return (
        <div className='bg-[#0065B9]'>
            <footer className="footer text-white text-base-content p-10">
            <aside className='max-w-md'>
                <img className='w-20' src={Footer_logo} alt="" />
                <p>
                <span className='font-bold text-2xl'>ReviewPulse</span>
                <br />
                ReviewPulse is your go-to platform for gathering, managing, and showcasing customer feedback to boost your brand’s reputation.
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Travel</a>
                <a className="link link-hover">Delivery</a>
                <a className="link link-hover">Consultation</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>  
        </footer>
        <div className="divider max-w-7xl mx-auto"></div>
        <p className='text-center text-white py-5'>© 2025 ReviewPulse. All rights reserved</p>
        </div>
    );
};

export default Footer;