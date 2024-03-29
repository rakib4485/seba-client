import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import loginImg from '../../assets/Login.png'
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
  const {googleSignIn, signIn} = useContext(AuthContext);
  const [loginUserEmail, setLoginUserEmail] = useState("");
  // const [token] = useToken(loginUserEmail);
  const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleSignIn = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        signIn(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            setLoginUserEmail(email);
            navigate(from, {replace: true})
        })
        .then(err => {
            console.error(err);
        })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const user = result.user;
            console.log(user);
            setLoginUserEmail(user.email);
            navigate(from, {replace: true})
        })
        .catch(err => {
            console.error(err);
        })
    }
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse justify-around">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body">
            <h1 className="text-3xl font-bold">লগ ইন করুন!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">ইমেল</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">পাসওয়ার্ড</span>
                </label>
                <input
                  type="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link  className="label-text-alt link link-hover">
                  পাসওয়ার্ড ভুলে গেছেন?
                  </Link>
                </label>
               
              </div>
              <div className="form-control mt-3">
                <button className="btn btn-primary">লগ ইন</button>
              </div>
          
            </form>
            <p className="ml-5">একটি অ্যাকাউন্ট নেই? অনুগ্রহ করে<Link to="/signup" className="text-primary"> সাইন আপ করুন</Link></p>
              <div className="divider">অথবা</div>
              <div className="form-control mb-6 w-[80%] mx-auto">
                <button onClick={handleGoogleSignIn} className="btn btn-success text-white flex items-center"><FaGoogle className="mr-2"></FaGoogle> গুগোল
                 সাইন ইন</button>
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