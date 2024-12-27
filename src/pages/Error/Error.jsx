import React from 'react';
import errorLottie404 from '../../assets/lottie/404.json';
import Lottie from 'lottie-react';

const Error = () => {
    return (
        <div>
            <Lottie className='h-[100vh]' animationData={errorLottie404}></Lottie>
        </div>
    );
};

export default Error;