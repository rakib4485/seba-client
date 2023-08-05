import React from 'react';
// import about1 from '../../../assets/home-about-1.jpg';
// import about2 from '../../../assets/home-about-2.jpg';
// import about3 from '../../../assets/home-about-3.jpg';
import { Link } from 'react-router-dom';

const AboutHome = () => {
    return (
        <div className='my-20 px-[6%]'>

            <div>
                <h1 className="text-center text-3xl font-bold w-[50%] mx-auto">
                প্রতিটি যাত্রা প্রথম ধাপ দিয়ে শুরু হয়, তাই আপনি শুধু আপনাকে তৈরি করেন।
                </h1>
                <div className="grid grid-cols-2 mt-20">
                    <div className=''>
                        <div className='my-4'>
                            <p className="text-lg ">স্ট্রেস ম্যানেজমেন্ট</p>
                            <div className='h-7 w-96 rounded border'>
                                <div className='h-full w-[60%] bg-[#B68D7E] rounded text-right pr-3'>60%</div>
                            </div>
                        </div>
                        <div className='my-4'>
                            <p className="text-lg">এক্সিকিউটিভ কোচিং</p>
                            <div className='h-7 w-96 rounded border'>
                                <div className='h-full w-[75%] bg-[#B68D7E] rounded text-right pr-3'>75%</div>
                            </div>
                        </div>
                        <div className='my-4'>
                            <p className="text-lg">সম্পর্ক</p>
                            <div className='h-7 w-96 rounded border'>
                                <div className='h-full w-[90%] bg-[#B68D7E] rounded text-right pr-3'>90%</div>
                            </div>
                        </div>
                    </div>
                    <div>
                    <h1 className="text-2xl font-semibold ">আমার অনুশীলনে স্বাগতম</h1>
                    <p className='my-2 text-justify'>একজন মনোবিজ্ঞানী এবং একজন জ্ঞানীয় আচরণগত থেরাপিস্ট হিসাবে, আমি শত শত রোগীর সাথে কাজ করেছি এবং মানুষের মুখোমুখি হওয়া বিভিন্ন মানসিক সমস্যাগুলির জটিলতা বুঝতে পেরেছি।</p>
                    <p className='text-justify'>আমার কাজ বন্ধুত্বপূর্ণ, সুশৃঙ্খল এবং সংগঠিত তবুও নমনীয় হওয়ার চারপাশে ঘোরে। আমি আমার রোগীদের কাছে যাই এবং তাদের অতীতের মানসিক সমস্যা এবং বর্তমান মানসিক সমস্যাগুলি সমাধান করতে সাহায্য করি, একটি উজ্জ্বল এবং আরও আত্মবিশ্বাসী ভবিষ্যতের দরজা খুলে দিতে।</p>
                    <p className='mt-10 uppercase text-lg font-semibold text-orange-600 hover:underline'><Link>আরও পড়ুন</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHome;