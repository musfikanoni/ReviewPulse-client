import React, { useContext } from 'react';
import loginLottieData from '../../assets/lottie/login.json'
import Lottie from 'lottie-react';
import AuthContext from '../../context/AuthContext/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../Home/shared/SocialLogin';

const Login = () => {
    const navigate = useNavigate();
    const { logInUser } = useContext(AuthContext);
    const location = useLocation();
    console.log('In login', location);

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

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logInUser(email, password)
        .then(result => {
            console.log('login', result.user);
            e.target.reset();

            Toast.fire({
                icon: "success",
                title: "Login successfully"
              });

            navigate('/');
        })
        .catch(error => {
            console.log('error', error)
        })
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="w-[42%]">
                        <Lottie animationData={loginLottieData}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                    <h1 className="text-3xl ml-2 mt-4 font-bold text-center">Welcome Back!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                    <SocialLogin></SocialLogin>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>
                        <p>Create an Account? <Link to="/register" className='text-[#4A00FF]'>Register here</Link></p>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;