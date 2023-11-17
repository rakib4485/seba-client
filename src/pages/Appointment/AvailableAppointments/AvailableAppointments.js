import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import { format } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import AppointmentOpiton from './AppointmentOpiton';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointments = ({selectedDate}) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    const {data:appointmentOptions=[], refetch, isLoading} = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`https://phychobuzz-server.vercel.app/appointments?date=${date}`)
        .then(res => res.json())
    });

    if(isLoading){
        return <Loading/>
    }

    return (
        <section className='my-16 mx-[7%]'>
            <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-6'>
                {
                    appointmentOptions.map(appointmentOption => <AppointmentOpiton
                    key={appointmentOption._id}
                    appointmentOption={appointmentOption}
                    setTreatment={setTreatment}
                    ></AppointmentOpiton>)
                }
            </div>
            {
                treatment && <BookingModal
                selectedDate = {selectedDate}
            treatment={treatment}
            setTreatment={setTreatment}
            refetch={refetch}
            ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;