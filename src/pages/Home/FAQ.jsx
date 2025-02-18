import React from 'react';
import why from '../../assets/Home/Q.png';

const FAQ = () => {
    return (
        <div>
            <div className="hero bg-base-200 rounded-xl min-h-min mb-72">
                <div className="hero-content grid  lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
                    <div className='py-5 pl-5'>
                        <h1 className="lg:text-3xl text-xl font-bold">Some Common FAQ?</h1>
                        <div className="join join-vertical my-7">
                            <div className="collapse collapse-arrow join-item border-base-300 border">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className="collapse-title text-xl font-medium">After receiving the service, if I face any problem, can I take support from your team?</div>
                                <div className="collapse-content">
                                <p>Yes, You can take sopport from us.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border-base-300 border">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">What is the maximum time for a service?</div>
                                <div className="collapse-content">
                                <p>Only, 5 days.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border-base-300 border">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">Can I get more than one service at a time?</div>
                                <div className="collapse-content">
                                <p>Yes, You can.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex justify-center md:justify-center lg:justify-end">
                        <img
                        src={why}
                        className="max-w-sm rounded-lg" />
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default FAQ;