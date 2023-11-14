import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({disease}) => {
    const {_id, title, description, img} = disease
    return (
        <div className='md:flex even:flex-row-reverse  items-center mx-20'>
            <div className='w-1/2 px-[50px]'>
                <h1 className='text-4xl font-semibold'>{title}</h1>
                <p className='mt-3 mb-5 text-justify lg:w-[95%] text-gray-400'>{description}...</p>
                <Link to={`/blog/${_id}`} className='bg-black text-white py-3 px-8 rounded'>Read More</Link>
            </div>
            <div className='w-1/2'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default BlogCard;