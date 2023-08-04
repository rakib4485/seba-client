import React from 'react';
import { HiOutlineArrowCircleRight } from "react-icons/hi";

const WelcomeText = () => {
    return (
        <div className='mx-20 my-10 grid gap-9 grid-cols-1 lg:grid-cols-2 items-center'>
            <div>
                <img src="https://i.ibb.co/51qLnPf/about-img.jpg" alt="" />
            </div>
            <div>
                <p>স্বাগত বার্তা</p>
                <h1 className='text-3xl font-semibold my-4'>Psy.D. হেলেন পিরেন</h1>
                <div className='mt-3 flex gap-6'>
                    <div>
                        <div className='flex gap-2 items-center'>
                            <HiOutlineArrowCircleRight className='text-blue-600'/>
                            <p>উদ্বেগ এবং বিষন্নতা</p>
                        </div>
                        <div className='flex gap-2 items-center leading-7'>
                            <HiOutlineArrowCircleRight className='text-blue-600'/>
                            <p>ট্রমা/অপব্যবহার</p>
                        </div>
                        <div className='flex gap-2 items-center leading-7'>
                            <HiOutlineArrowCircleRight className='text-blue-600'/>
                            <p>সম্পর্ক বিষয়</p>
                        </div>
                        <div className='flex gap-2 items-center leading-7'>
                            <HiOutlineArrowCircleRight className='text-blue-600'/>
                            <p>সম্পর্ক অপব্যবহার</p>
                        </div>
                    </div>
                    <div>
                    <div className='flex gap-2 items-center'>
                            <HiOutlineArrowCircleRight className='text-blue-600'/>
                            <p>উদ্বেগ এবং বিষণ্নতা</p>
                        </div>
                    <div className='flex gap-2 items-center leading-7'>
                            <HiOutlineArrowCircleRight className='text-blue-600'/>
                            <p>স্ট্রেস এবং লাইফস্টাইল ম্যানেজমেন্ট</p>
                        </div>
                    <div className='flex gap-2 items-center leading-7'>
                            <HiOutlineArrowCircleRight className='text-blue-600'/>
                            <p>জীবনের রূপান্তরের পর্যায়</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeText;