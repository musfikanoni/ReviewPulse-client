import React from 'react';
import img1 from '../../assets/Home/apply.png';
import img2 from '../../assets/Home/process.png';
import img3 from '../../assets/Home/delivery.png';

const OurWorkProcess = () => {
    return (
        <div className='pb-20'>
            <h2 className='lg:text-3xl md:text-2xl text-xl font-bold text-center pb-10'>Our Work Process</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                <div className="card bg-base-100 lg:w-96 md:w-80 w-96 shadow-xl">
                    <div className="card-body">
                        <div className="flex justify-center">
                            <div className="bg-white p-3 rounded-full">
                                <img src={img1} alt="" />
                            </div>
                            
                        </div>
                        <h2 className="text-xl font-bold text-center">Apply Online</h2>
                        <p className='text-center'>Choose your desired service, fill out the required details, and submit your request online.</p>
                    </div>
                </div>
                <div className="card bg-base-100 lg:w-96 md:w-80 w-96 shadow-xl">
                    <div className="card-body">
                        <div className="flex justify-center">
                            <div className="bg-white p-3 rounded-full">
                                <img src={img2} alt="" />
                            </div>
                            
                        </div>
                        <h2 className="text-xl font-bold text-center">Processing & Execution</h2>
                        <p className='text-center'> Our team reviews your request, starts working on it, and ensures high-quality results.</p>
                    </div>
                </div>
                <div className="card bg-base-100 lg:w-96 md:w-80 w-96 shadow-xl">
                    <div className="card-body">
                        <div className="flex justify-center">
                            <div className="bg-white p-3 rounded-full">
                                <img src={img3} alt="" />
                            </div>
                            
                        </div>
                        <h2 className="text-xl font-bold text-center">Delivery & Support</h2>
                        <p className='text-center'>Receive the completed service, review it, and get assistance if needed for any modifications.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurWorkProcess;