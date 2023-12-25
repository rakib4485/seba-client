import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const MyBookings = () => {
    const {user} = useContext(AuthContext);

    const {data: bookings = [], isLoading} = useQuery({
        queryKeyL: ['booking'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/doctorBookings?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='mt-5 ml-5'>
            <h1 className='text-4xl font-semibold'>My Patient List</h1>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-[2px] rounded-lg mb-3 w-32"></div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Patient Name</th>
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
                                    <td>{booking.appointmentDate}</td>
                                    <td>{booking.slot}</td>
                                    <td>{booking?.paid === 'true' ? <span className="text-primary">Paid</span> : booking.paid}</td>
                                    <td>
                                    {/* {booking?.paid === 'true' ? <Link target='_blank' to={booking.meet} className="btn btn-primary btn-sm">join meet</Link> : booking.paid} */}
                                    <Link target='_blank' to={booking.meet} className={`btn btn-primary btn-sm ${booking.paid === 'true' ? 'disabled': ''}`}>join meet</Link>
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

export default MyBookings;