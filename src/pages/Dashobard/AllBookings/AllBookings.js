import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../../components/Loader/Loader';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const AllBookings = () => {
    const {data: bookings = [], isLoading, refetch} = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allBookings');
            const data = await res.json();
            return data;
        }
    })

    const handlePayment = (id) => {

        fetch(`http://localhost:5000/bookings/payment/confirm?id=${id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Made admin successfully');
                    refetch();
                }
            })
    }

    if(isLoading){
        return <Loader />
    }
    return (
        <div className='mt-5 ml-5'>
            <h1 className='text-4xl font-semibold underline'>All Appointments</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Patient Name</th>
                                <th>Doctor Name</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Payment</th>
                                <th>Confirm</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                [...bookings].reverse().map((booking, i) => <tr key={booking._id} className='hover'>
                                    <th>{i + 1}</th>
                                    <td>{booking.patient}</td>
                                    <td>{booking.treatment}</td>
                                    <td>{booking.appointmentDate}</td>
                                    <td>{booking.slot}</td>
                                    <td>{booking?.paid === 'true' ? <span className="text-primary">Paid</span> : booking.paid}</td>
                                    <td>
                                    {booking.price && booking.paid !== 'true' && (
                                        <button className="btn btn-primary btn-sm" onClick={()=>handlePayment(booking._id)}>Confirm</button>    
                                    )}
                                    {booking.price && booking.paid === 'true' && (
                                        <span className="text-primary">Paid</span>
                                    )}
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllBookings;