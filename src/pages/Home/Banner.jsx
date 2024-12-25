import React from 'react';

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
                            <h1 className="mb-5 text-5xl font-bold">Hospitality & Travel Services</h1>
                            <p className="mb-5">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <button className="btn btn-primary">Get Started</button>
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
                            // backgroundImage: "url(https://i.ibb.co.com/sp4L0Nd/banner-2.webp)",
                            backgroundImage: "url(https://i.ibb.co.com/WpbHXZL/banner-2.webp)",
                        }}>
                        <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-4xl">
                            <h1 className="mb-5 text-5xl font-bold">E-commerce & Delivery Services</h1>
                            <p className="mb-5">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <button className="btn btn-primary">Get Started</button>
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
                            <h1 className="mb-5 text-5xl font-bold">Professional Consultation Services</h1>
                            <p className="mb-5">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <button className="btn btn-primary">Get Started</button>
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
                            <h1 className="mb-5 text-5xl font-bold">Technology & Digital Services</h1>
                            <p className="mb-5">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <button className="btn btn-primary">Get Started</button>
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