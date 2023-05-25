import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {img , title, description } = service;
    return (
        <div className="bg-base-100 shadow-xl rounded-md">
  <figure><img src={img} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title text-white hover:text-cyan-500 duration-300 cursor-pointer">{title}</h2>
    <p>{description}</p>
    <p className='hover:text-orange-600'><Link>Read More</Link></p>
    
  </div>
</div>
    );
};

export default ServiceCard;