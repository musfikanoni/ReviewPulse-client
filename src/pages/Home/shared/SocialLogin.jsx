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
            <button onClick={handleGoogleLogIn} className='btn'>Google</button>
        </div>
    );
};

export default SocialLogin;