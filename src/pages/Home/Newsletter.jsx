import React from 'react';

const Newsletter = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className='border-2 py-5 px-5 w-full lg:w-[84.3%] rounded-xl -mt-52 my-32 absolute'>
                <div className="hero bg-base-200 py-20 min-h-min bg-gradient-to-r from-[#a233ce] via-[pink] to-[#7847fe] rounded-xl border">
                    <div className="hero-content flex-col">
                        <h2 className='text-xl md:text-3xl font-bold text-black'>Subscribe to our Newsletter</h2>
                        <p className='text-base text center md:text-lg text-gray-700'>Get the latest updates and news right in your inbox!</p>

                        <div className="md:flex flex-row gap-3">
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            <div className="flex md:justify-normal justify-center md:mt-0 mt-3">
                            <button className='rounded-xl font-semibold text-white bg-gradient-to-r from-[#a233ce]  to-[#7847fe] py-2 px-5'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;