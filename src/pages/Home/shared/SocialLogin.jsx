import React, { useContext } from 'react';
import AuthContext from '../../../context/AuthContext/AuthContext';

const SocialLogin = () => {

    const {logInWithGoogle} = useContext(AuthContext);

    const handleGoogleLogIn = () => {
        logInWithGoogle()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log('Error', error)
        })
    }

    return (
        <div>
            
            <button onClick={handleGoogleLogIn} className='btn rounded-full w-full'>
                <img className='h-7' src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" /> Continue with Google
            </button>
        </div>
    );
};

export default SocialLogin;