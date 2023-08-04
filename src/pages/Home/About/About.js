import React from 'react';
// import about1 from '../../../assets/home-about-1.jpg';
// import about2 from '../../../assets/home-about-2.jpg';
// import about3 from '../../../assets/home-about-3.jpg';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='my-20 px-[6%]'>
            {/* <div className='grid grid-cols-2 gap-6'>
                <div>
                    <h1 className="text-4xl font-semibold text-white">Welcome to my Practice</h1>
                    <p className='my-2 text-justify'>As a psychologist and a cognitive behavioral therapist I have worked with hundreds of patients and understand the intricacies of various psychological issues that people face.</p>
                    <p className='text-justify'>My work revolves around being friendly, disciplined and organized yet flexible. I approach my patients and help them resolve their emotional issues of the past and the present, to open the door to a brighter and confident future.</p>
                    <p className='mt-10 uppercase text-lg font-semibold text-orange-600'><Link>Read More</Link></p>
                </div>
                <div className='ml-20'>
                    <div className='flex gap-5 items-center cursor-pointer'>
                        <div><img src={about1} alt=""className='w-[150px]' /></div>
                        <div>
                            <h1 className="text-xl font-semibold text-white hover:text-cyan-500 duration-300">Depression Treatment</h1>
                            <p className='text-sm'>Depression is a mental illness, which one should not confuse …</p>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center my-5 cursor-pointer'>
                        <div><img src={about2} alt=""className='w-[150px]' /></div>
                        <div>
                            <h1 className="text-xl font-semibold text-white hover:text-cyan-500 duration-300">Individual Treatment</h1>
                            <p className='text-sm'>Individual treatment is often termed as psychotherapy, and is …</p>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center w-[450px] cursor-pointer'>
                        <div><img src={about3} alt=""className='w-[150px]' /></div>
                        <div>
                            <h1 className="text-xl font-semibold text-white hover:text-cyan-500 duration-300">Anxiety Treatment</h1>
                            <p className='text-sm'>Whether it is social phobia, specific phobia, post traumatic …</p>
                        </div>
                    </div>
                </div>
            </div> */}

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
                    <p className='mt-10 uppercase text-lg font-semibold text-orange-600'><Link>আরও পড়ুন</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;