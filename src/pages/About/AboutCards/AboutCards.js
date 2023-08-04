import React from 'react';
import { HiBookmark, HiGlobeAlt, HiPhone } from "react-icons/hi";

const AboutCards = () => {
    return (
        <div className='grid gap-8 lg:grid-cols-3 mx-20 mt-10'>
            <div className='bg-red-200 py-10 px-5 text-center rounded-md'>
                <HiPhone className='text-4xl w-2/3 mx-auto text-cyan-500'/>
                <h1 className='text-3xl font-bold my-3 text-pink-400'>১,৮২০+</h1>
                <p className='text-black'>বার্তা, চ্যাট, এবং ভিডিও সেশন</p>
            </div>
            <div className='bg-red-200 py-10 px-5 text-center rounded-md'>
                <HiBookmark  className='text-4xl w-2/3 mx-auto text-cyan-500'/>
               <h1 className='text-3xl font-bold my-3 text-pink-400'>১৮২+</h1>
               <p className='text-black'>মানুষ সাহায্য পেয়েছে</p>
            </div>
            <div className='bg-red-200 py-10 px-5 text-center rounded-md'>
                <HiGlobeAlt className='text-4xl w-2/3 mx-auto text-cyan-500'/>
               <h1 className='text-3xl font-bold my-3 text-pink-400'>১,০০০+</h1>
               <p className='text-black'>বিশ্বব্যাপী ক্লায়েন্ট</p> 
            </div>
        </div>
    );
};

export default AboutCards;