import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import banner from '../../../assets/pattern.png'
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const Payment = () => {
    const booking = useLoaderData();
    const navigate = useNavigate();

    const handlePayment = (event) => {
        event.preventDefault();

        const form = event.target;
        const tId = form.tId.value;

        const pId = {
            tId
        }

        fetch(`http://localhost:5000/bookings/payment/makePayment?id=${booking._id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(pId)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Made admin successfully');
                    form.reset();
                    navigate('/dashboard');
                }
            })
    }

    return (
        <div>
            <div style={{background:`linear-gradient(rgba(18, 17, 17, 0.5), rgba(25, 23, 23, 0.5)), url(${banner})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                <div className='py-28'>
                <h1 className="text-5xl text-center text-white font-semibold">Payment</h1>
                <h1 className="text-3xl mt-5 text-center text-white font-semibold">Doctor: {booking.treatment} </h1>
                </div>
            </div>

            <div className='my-20'>
                <h2 className="text-2xl font-semibold text-center">Appointment Fee: {booking.price}</h2>
                <h2 className="text-2xl font-semibold text-center text-red-500">Make bKash Payment To 01811458885</h2>

                <form className='mx-[10%] mt-10' onSubmit={handlePayment}>
                    <div className='flex gap-6 items-center md:flex-row flex-col justify-center'>
                        <span>Enter bKash Transaction ID <span className='text-red-500'>*</span></span> 
                        <input type="text" name='tId' placeholder="Transaction ID" className="input input-bordered input-accent w-full max-w-xs" required/>
                    
                    </div>
                    <div className='text-center'>
                    <h2 className="text-xl font-semibold text-center text-red-500 my-8">Please make sure you have filled all the fields correctly before submitting</h2>
                    <button type='submit' className="btn btn-outline btn-primary btn-wide">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Payment;