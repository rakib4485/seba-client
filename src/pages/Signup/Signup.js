import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import signUpImg from '../../assets/register.png'
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const Signup = () => {
    const {createUser, updateUser, googleSignIn} = useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    const handleCreateUser = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const userInfo = {
            displayName: name
        }

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            updateUser(userInfo)
            .then( () => {
              saveUser(name, email)
            })
            .then()
        })
        .then(err => console.error(err)) 
    }

    const handleGoogleSignIn = () => {
      googleSignIn()
      .then(result => {
          const user = result.user;
          console.log(user);
          saveUser(user.displayName, user.email)
          toast("User Created Successfully")
          navigate('/')
      })
      .catch(err => {
          console.error(err);
      })
  }

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        setCreatedUserEmail(email);
        navigate('/')
      })
  }

    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse justify-around">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleCreateUser} className="card-body">
            <h1 className="text-3xl font-bold">সাইন আপ করুন!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">নাম</span>
                </label>
                <input
                  type="text"
                  name='name'
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">ইমেল</span>
                </label>
                <input
                  type="email"
                  name='email'
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">পাসওয়ার্ড</span>
                </label>
                <input
                  type="password"
                  name='password'
                  className="input input-bordered"
                /> 
              </div>
              <div className="form-control mt-3">
                <button className="btn btn-primary">সাইন আপ করুন</button>
              </div>
              <p className="">ইতিমধ্যে একটি অ্যাকাউন্ট আছে? অনুগ্রহ করে<Link to="/login" className="text-primary"> লগ ইন করুন</Link></p>
              <div className="divider">অথবা</div>
              <div className="form-control">
                <button onClick={handleGoogleSignIn} className="btn btn-success text-white flex items-center"><FaGoogle className='mr-2'></FaGoogle> গুগোল সাইন ইন</button>
              </div>
            </form>
          </div>
          <div className="text-center lg:text-left lg:w-1/2">
           <img src={signUpImg} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Signup;