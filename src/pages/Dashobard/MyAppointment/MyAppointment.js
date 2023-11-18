import React, { useContext } from 'react';
import Loading from '../../Shared/Loading/Loading';
// import { useQuery } from 'react-query';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);

    const url = `https://phychobuzz.vercel.app/bookings?email=${user?.email}`;

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

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='mt-5 ml-5'>
            <h1 className='text-4xl font-semibold underline'>My Appointment</h1>
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
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map((booking, i) => <tr key={booking._id} className='hover'>
                                    <th>{i + 1}</th>
                                    <td>{booking.patient}</td>
                                    <td>{booking.treatment}</td>
                                    <td>{booking.appointmentDate}</td>
                                    <td>{booking.slot}</td>
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