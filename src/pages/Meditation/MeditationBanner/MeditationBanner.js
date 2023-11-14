import React from 'react';
import { Link } from 'react-router-dom';

const MeditationBanner = () => {
    return (
        <div className='my-5 mx-[7%] grid grid-cols-1 lg:grid-cols-2 items-center'>
            <div>
                <h1 className='text-3xl lg:text-6xl font-bold lg:w-2/3'>একটি সুস্থ মন এবং শরীর আপনার উপায় শ্বাস</h1>
                <p className='lg:w-2/3 my-4'>ধ্যানের অনুচ্ছেদের অনেক বৈচিত্র্য রয়েছে, তবে বেশিরভাগই কিছু আকারে পরিবর্তনের শিকার হয়েছে, ইনজেক্টেড হাস্যরস, বা এলোমেলো শব্দ যা সামান্য বিশ্বাসযোগ্য বলে মনে হচ্ছে না।</p>
                <Link className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-3 rounded text-white font-semibold' to='/signup'>সাইন আপ করুন</Link>
            </div>
            <div>
                <img className='rounded-2xl' src="https://i.ibb.co/94Lvmj3/Meditation-Banner.jpg" alt="" />
            </div>
        </div>
    );
};

export default MeditationBanner;