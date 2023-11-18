import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const {_id, img, title, description } = service;
  return (
    <div className="relative mb-32">
      <figure><img src={img} alt="" className=''/></figure>
      <div className="bg-[#F4F3F2] p-5 w-[80%] absolute -bottom-28 text-center">
        <h2 className="text-[#6C6C6C] text-lg">{title}</h2>
        
        {/* <p className='text-xl font-semibold my-2'>{description}</p> */}
        <Link to={`/blogs/${_id}`}>
        <p className='text-[#906555] border-2 border-[#F4F3F2] border-b-[#906555] p-2 hover:text-white hover:bg-[#906555] hover:border-[#906555] w-[125px] mx-auto duration-500 '>আরও পড়ুন</p>
        </Link>

      </div>
    </div>
  );
};

export default ServiceCard;