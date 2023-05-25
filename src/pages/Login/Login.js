import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import loginImg from '../../assets/Login.png'

const Login = () => {
    const navigate = useNavigate();
    const handleSignIn = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        // signIn(email, password)
        // .then( result => {
        //     const user = result.user;
        //     console.log(user);
        //     navigate('/')
        // })
        // .then(err => {
        //     console.error(err);
        // })
    }

    const handleGoogleSignIn = () => {
        // googleSignIn()
        // .then(result => {
        //     const user = result.user;
        //     saveUser(user.displayName, user.email);
        //     navigate('/')
        // })
        // .catch(err => {
        //     console.error(err);
        // })
    }
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse justify-around">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link  className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
               
              </div>
              <div className="form-control mt-3">
                <button className="btn btn-primary">Login</button>
              </div>
              
            </form>
            <p className="ml-5">Don't have an account? Please<Link to="/signup" className="text-primary"> Sign Up</Link></p>
              <div className="divider">OR</div>
              <div className="form-control mb-6 w-[80%] mx-auto">
                <button onClick={handleGoogleSignIn} className="btn btn-success text-white flex items-center"><FaGoogle className="mr-2"></FaGoogle> Google Sing in</button>
              </div>
          </div>
          <div className="text-center lg:text-left lg:w-1/2">
           <img src={loginImg} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Login;