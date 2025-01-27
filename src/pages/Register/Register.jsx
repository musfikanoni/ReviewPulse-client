import React, { useContext, useState } from 'react';
import registerLottieData from '../../assets/lottie/register.json';
import Lottie from 'lottie-react';
import AuthContext from '../../context/AuthContext/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../Home/shared/SocialLogin';
import Swal from 'sweetalert2';

const Register = () => {
    
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [passwordErrors, setPasswordErrors] = useState([]);

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const validatePassword = (password) => {
        const errors = [];
        if (password.length < 6) errors.push("Password must be at least 6 characters long.");
        if (!/[A-Z]/.test(password)) errors.push("Password must contain at least one uppercase letter.");
        if (!/[a-z]/.test(password)) errors.push("Password must contain at least one lowercase letter.");
        if (!/\d/.test(password)) errors.push("Password must contain at least one number.");
        if (!/[@$!%*?&]/.test(password)) errors.push("Password must contain at least one special character.");
        return errors;
      };
    
      const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setPasswordErrors(validatePassword(newPassword));
      };

    const handleReegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photo.value;
        const password = form.password.value;

        const user = {email, password}

        fetch('https://assignment-11-server-eta-jade.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

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

        //save new user
        createUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .then(error => {
            console.log('error', error);
            e.target.reset();
            updateUserProfile({displayName: name, photoURL:photoUrl})
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
                    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                        
                        <form onSubmit={handleReegister} className="card-body">
                        <h1 className="text-3xl ml-2 mt-2 font-bold text-center">Create Your Account!</h1>
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
                                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" value={password}
                                onChange={handlePasswordChange}
                                className={`input input-bordered ${
                                    passwordErrors.length ? "input-error" : ""
                                }`}
                                required
                                />
                                <div className="mt-2">
                                {passwordErrors.map((error, index) => (
                                    <p key={index} className="text-red-500 text-sm">
                                    {error}
                                    </p>
                                ))}
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-lg font-bold text-white">Register</button>
                            </div>
                            <div className="divider">OR</div>
                            <SocialLogin></SocialLogin>
                            <p>Already have an account? Please <Link to="/login" className='text-[#4A00FF]'>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;