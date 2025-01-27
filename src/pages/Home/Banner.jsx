import { easeIn, easeOut, motion } from "framer-motion";

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div
                        className="hero min-h-[80vh]"
                        style={{
                            borderRadius: '16px',
                            backgroundImage: "url(https://i.ibb.co.com/G9L9Spj/banner-1.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-4xl">
                            <motion.h1
                                animate={{y : [-50, -50, 0], color : ['#FFFFFF']}}
                                transition={{duration : 4, delay: 0,
                                    ease: easeIn}}
                                className="text-5xl font-bold pb-3">
                            Hospitality & Travel Services</motion.h1>
                            <motion.p
                                animate={{y : [-50, -50, 0], color : ['#FFFFFF']}}
                                transition={{duration : 3, delay: 0,
                                    ease: easeIn}}
                                className="mb-5">
                            Crafting memorable travel experiences with world-class hospitality. Your gateway to personalized travel planning and luxury accommodations. Elevating your trips with tailored services and unforgettable moments.</motion.p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div
                        className="hero min-h-[80vh]"
                        style={{
                            borderRadius: '16px',
                            backgroundImage: "url(https://i.ibb.co.com/WpbHXZL/banner-2.webp)",
                        }}>
                        <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-4xl">
                            <motion.h1
                                animate={{y : [-50, -50, 0], color : ['#FFFFFF']}}
                                transition={{duration : 4, delay: 0,
                                    ease: easeIn}}
                                className="text-5xl font-bold pb-3">
                            E-commerce & Delivery Services</motion.h1>
                            <motion.p
                                animate={{y : [-50, -50, 0], color : ['#FFFFFF']}}
                                transition={{duration : 3, delay: 0,
                                    ease: easeIn}}
                                className="mb-5">
                            From everyday essentials to unique finds, we bring it all to you. Redefining convenience with effortless e-commerce and on-time delivery. Simplifying your shopping experience with speed and reliability.</motion.p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                <div
                    className="hero min-h-[80vh]"
                    style={{
                        borderRadius: '16px',
                        backgroundImage: "url(https://i.ibb.co.com/2Kbn1ZB/banner-3.jpg)",
                    }}>
                        <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-4xl">
                            <motion.h1
                                animate={{y : [-50, -50, 0], color : ['#FFFFFF']}}
                                transition={{duration : 4, delay: 0,
                                    ease: easeIn}}
                                className="text-5xl font-bold pb-3">
                            Professional Consultation Services</motion.h1>
                            <motion.p
                                animate={{y : [-50, -50, 0], color : ['#FFFFFF']}}
                                transition={{duration : 3, delay: 0,
                                    ease: easeIn}}
                                className="mb-5">
                            Guiding you through complex decisions with professional insights. Offering strategic consultation to help you thrive in every endeavor. Providing clear, actionable advice for your business and personal growth.</motion.p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                <div
                    className="hero min-h-[80vh]"
                    style={{
                        borderRadius: '16px',
                        backgroundImage: "url(https://i.ibb.co.com/PTZ25Py/banner-4.jpg)",
                    }}>
                    <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-4xl">
                            <motion.h1
                                animate={{y : [-50, -50, 0], color : ['#FFFFFF']}}
                                transition={{duration : 4, delay: 0,
                                    ease: easeIn}}
                                className="text-5xl font-bold pb-3">
                            Technology & Digital Services</motion.h1>
                            <motion.p
                                animate={{y : [-50, -50, 0], color : ['#FFFFFF']}}
                                transition={{duration : 3, delay: 0,
                                    ease: easeIn}}
                                className="mb-5">
                            Empowering your business with cutting-edge digital transformation. Crafting customized technology solutions that drive success. Bridging the gap between technology and your business goals.</motion.p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;