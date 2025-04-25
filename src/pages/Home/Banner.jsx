import { useState, useEffect } from "react";
import { easeIn } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = 4; // Total number of slides

    // Auto-play effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev % totalSlides) + 1);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true,
        });
      }, []);

    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className={`carousel-item relative w-full ${currentSlide === 1 ? 'block' : 'hidden'}`}>
                    <div
                        className="hero lg:min-h-[80vh] min-h-[40vh]"
                        style={{
                            backgroundImage: "url(https://i.ibb.co.com/G9L9Spj/banner-1.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-4xl" data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1500">
                                <h1
                                    className="lg:text-5xl text-3xl font-bold pb-3">
                                    Hospitality & Travel Services
                                </h1>
                                <p

                                    className="mb-5">
                                    Crafting memorable travel experiences with world-class hospitality. Your gateway to personalized travel planning and luxury accommodations. Elevating your trips with tailored services and unforgettable moments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="slide2" className={`carousel-item relative w-full ${currentSlide === 2 ? 'block' : 'hidden'}`}>
                    <div
                        className="hero lg:min-h-[80vh] min-h-[40vh]"
                        style={{
                            backgroundImage: "url(https://i.ibb.co.com/WpbHXZL/banner-2.webp)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-4xl">
                                <h1
                                    className="lg:text-5xl text-3xl font-bold pb-3">
                                    E-commerce & Delivery Services
                                </h1>
                                <p
                                    className="mb-5">
                                    From everyday essentials to unique finds, we bring it all to you. Redefining convenience with effortless e-commerce and on-time delivery. Simplifying your shopping experience with speed and reliability.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="slide3" className={`carousel-item relative w-full ${currentSlide === 3 ? 'block' : 'hidden'}`}>
                    <div
                        className="hero lg:min-h-[80vh] min-h-[40vh]"
                        style={{
                            backgroundImage: "url(https://i.ibb.co.com/2Kbn1ZB/banner-3.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-4xl">
                                <h1
                                    className="lg:text-5xl text-3xl font-bold pb-3">
                                    Professional Consultation Services
                                </h1>
                                <p
                                    className="mb-5">
                                    Guiding you through complex decisions with professional insights. Offering strategic consultation to help you thrive in every endeavor. Providing clear, actionable advice for your business and personal growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="slide4" className={`carousel-item relative w-full ${currentSlide === 4 ? 'block' : 'hidden'}`}>
                    <div
                        className="hero lg:min-h-[80vh] min-h-[40vh]"
                        style={{
                            backgroundImage: "url(https://i.ibb.co.com/PTZ25Py/banner-4.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-4xl">
                                <h1
                                    className="lg:text-5xl text-3xl font-bold pb-3">
                                    Technology & Digital Services
                                </h1>
                                <p
                                    className="mb-5">
                                    Empowering your business with cutting-edge digital transformation. Crafting customized technology solutions that drive success. Bridging the gap between technology and your business goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
