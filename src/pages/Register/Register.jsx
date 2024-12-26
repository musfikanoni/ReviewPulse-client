import React, { useContext, useState } from 'react';
import registerLottieData from '../../assets/lottie/register.json';
import Lottie from 'lottie-react';
import AuthContext from '../../context/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../Home/shared/SocialLogin';
import Swal from 'sweetalert2';

const Register = () => {
    
    const navigate = useNavigate();
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const { createUser } = useContext(AuthContext);

    const handleReegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;
        console.log(name, email, photoUrl, password);

        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
            });


        //password Validation
        //reset error and status
        // setErrorMessage('');
        // setSuccess(false);

        // if(password.length < 6){
        //     setErrorMessage('Password should be 6 charecter')
        // }

        // const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        // if(!passwordRegex.test(password)){
        //     setErrorMessage('At last 1 uppercase,1 lowercase and 1 number and 1 special character');
        //     return;
        // }


        //save new user
        createUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .then(error => {
            console.log('error', error);
            e.target.reset();

            Toast.fire({
                icon: "success",
                title: "Successfully Registered"
              });

            navigate('/');
        })

    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="w-[45%]">
                        <Lottie animationData={registerLottieData}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h1 className="text-5xl ml-2 mt-4 font-bold text-center">Register now!</h1>
                        <form onSubmit={handleReegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photoUrl' placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div className="divider">OR</div>
                            <SocialLogin></SocialLogin>
                        </form>
                        {/* {
                            errorMessage && <p className='text-red-700'>{errorMessage}</p>
                        }
                        {
                            success && <p>Succssfully Register</p>
                        } */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;