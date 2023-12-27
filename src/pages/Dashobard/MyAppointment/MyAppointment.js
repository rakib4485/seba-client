import React, { useContext } from 'react';
import Loading from '../../Shared/Loading/Loading';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    console.log(bookings)

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='mt-5 ml-5'>
            <h1 className='text-4xl font-semibold'>My Appointment</h1> 
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-[2px] rounded-lg mb-3 w-32"></div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Doctor Name</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Payment</th>
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
                                    <td>
                                    {booking.price && booking.paid !== 'true' && booking.paid === 'false' && (
                                        <Link to={`/dashboard/payment/${booking._id}`}>
                                            <button className="btn btn-primary btn-sm">Pay</button>
                                        </Link>
                                    )}
                                    {booking.price && booking.paid !== 'true' && booking.paid !== 'false' && (
                                        <span className="text-primary">Pending</span>
                                    )}
                                    {booking.price && booking.paid === 'true' && (
                                        <Link target='_blank' to={booking.meet} className="btn btn-primary btn-sm">join meet</Link>
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

export default MyAppointment;