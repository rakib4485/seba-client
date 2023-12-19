import React from 'react';

const AppointmentOpiton = ({ appointmentOption, setTreatment }) => {
  const { name, service, slots, image } = appointmentOption;
  return (
    <div>
      {/* <div className="card lg:card-side bg-base-100 shadow-xl pr-6">
        <figure><img className='w-[400px]' src={image} alt="Album" /></figure>
        <div className="card-body">
          <div>
          <h2 className="text-2xl font-bold  text-secondary">{name}</h2>
          <p className="font-semibold"><small>{service}</small></p>
          <p>{slots.length > 0 ? slots[0] : "Try another day"}</p>
          <p>
            {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
          </p>
          </div>
        </div>
        
        <div className='-mt-36 -ml-56'>
        <div className="card-actions items-end justify-end">
            <label disabled={slots.length === 0}
              htmlFor="booking-modal"
              className="btn btn-primary text-white border-0 bg-gradient-to-r from-primary to-secondary" onClick={() => setTreatment(appointmentOption)}
            >Book Appointment</label>
          </div>
        </div>
      </div> */}

<div className="card card-side bg-base-100 shadow-xl">
  <figure><img className='w-[250px] h-[350px]' src={image} alt="Movie"/></figure>
  <div className="card-body">
    <div className='leading-8'>
    <h2 className="text-2xl font-bold  text-secondary">{name}</h2>
          <p className="font-semibold"><small>{service}</small></p>
          <p>{slots.length > 0 ? slots[0] : "Try another day"}</p>
          <p>
            {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
          </p>
    </div>
    <div className="card-actions mt-6">
    <label disabled={slots.length === 0}
              htmlFor="booking-modal"
              className="btn btn-primary text-white border-0 bg-gradient-to-r from-primary to-secondary" onClick={() => setTreatment(appointmentOption)}
            >Book Appointment</label>
    </div>
  </div>
</div>
    </div>
  );
};

export default AppointmentOpiton;