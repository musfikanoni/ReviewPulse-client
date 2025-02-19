import React from 'react';
import { Link } from 'react-router-dom';
import quality from '../../assets/about/quality.png';
import support from '../../assets/about/support.png';
import coming from '../../assets/about/upcomming.png';

const AboutUs = () => {
    return (
        <div>
            <div
                className="hero lg:h-[85vh] md:h-[50vh] h-100vh ab-banner">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">About Us</h1>
                    <p className="mb-5">
                    Welcome to ReviewPlus, your trusted partner for high-quality and reliable services. We are dedicated to providing top-notch solutions tailored to meet your unique needs. 
                    </p>
                   <Link to="/services">
                        <button className="btn bg-gradient-to-r from-[#a233ce] 
                             to-[#7847fe] border-none text-lg text-white rounded-full">Let's View Our Service</button>
                   </Link>
                    </div>
                </div>
            </div>

            {/* Why choose us */}

            <div className="hero bg-base-200 min-h-screen flex flex-col">
                {/* Title - Positioned based on screen size */}
                <h2 className="text-4xl font-bold text-center md:text-5xl md:mt-0 pt-28">
                    Why Choose Us?
                </h2>
                <div className="hero-content grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-6">
                    <div className="order-2 lg:order-none">
                        <h1 className="text-3xl font-bold text-center lg:text-left">High Quality Service</h1>
                        <p className="py-6 text-center lg:text-left">
                            We follow strict quality control measures, use the latest technologies, and continuously improve our processes to meet industry standards.  
                            We are committed to transparency, professionalism, and integrity, ensuring you receive honest and dependable service every time.  
                            Our team is dedicated to delivering exceptional results, offering personalized support, and addressing your concerns promptly.  
                            With years of expertise, a skilled team, and a proven track record, we have successfully served numerous satisfied clients.  
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end order-1 lg:order-none">
                        <img src={quality} className="max-w-sm rounded-lg" />
                    </div>

                </div>
            </div>


            <div className="hero bg-base-200 min-h-min md:-mt-32">
                <div className="hero-content grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
                <div className="flex lg:justify-start justify-center">
                        <img
                        src={support}
                        className="max-w-sm rounded-lg" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">Best Supportive service</h1>
                        <p className="py-6">
                        After receiving the service, if you face any problem, you can take support from our team.
                        We response faster and provide you a best solutions. It's Our main priority to support our coustomers.
                        Everything was handled smoothly and on time. The quality exceeded my expectations, and the staff was very friendly. Will use again!
                        From competitive pricing and expert solutions to exceptional customer support, we provide a seamless and hassle-free experience.
                        Excellent service! The team was professional, efficient, and delivered exactly what I needed. Their attention to detail and customer support were outstanding. Highly recommend!
                        </p>
                    </div>
                </div>
            </div>



            <div className="hero bg-base-200 min-h-min flex flex-col pb-20">
                <div className="hero-content grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-6">
                    <div className="order-2 lg:order-none">
                        <h1 className="text-3xl font-bold text-center lg:text-left">Coming Soon: Innovative Tech Solutions!</h1>
                        <p className="py-6 text-center lg:text-left">
                        Get ready for a cutting-edge tech service designed to simplify your digital needs.
                        From advanced automation to top-tier support, we’re bringing innovation right to your fingertips. Get ready to experience technology like never before—fast, efficient, and hassle-free!
                         Our upcoming <b>Tech service</b> will offer smart, efficient, and reliable solutions tailored for businesses and individuals. Stay tuned for the future of technology—seamless, secure, and built for you! 🚀
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end order-1 lg:order-none">
                        <img src={coming} className="max-w-sm rounded-lg" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutUs;