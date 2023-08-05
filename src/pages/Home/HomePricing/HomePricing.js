import React from 'react';

const HomePricing = () => {
    return (
        <div className='my-20 px-[6%]'>
            <h1 className="text-center text-3xl font-bold">আমাদের প্যাকেজ সমুহ</h1>
            <div className="grid grid-cols-3 gap-6 mt-10">
                <div className='border px-8 py-16 rounded-md'>
                    <h3 className="text-xl text-center font-semibold">স্ট্যান্ডার্ড প্যাকেজ</h3>
                    <h1 className="text-3xl font-semibold text-center my-3">৳ ১৫০০০</h1>
                    <p className='text-justify'>আমাদের স্ট্যান্ডার্ড প্যাকেজ লাইসেন্সপ্রাপ্ত মনোবিজ্ঞানীর সাথে পৃথক থেরাপি সেশন অফার করে। এই অধিবেশনগুলি আপনার নির্দিষ্ট প্রয়োজন অনুসারে তৈরি করা হয়েছে এবং আপনার চ্যালেঞ্জগুলি নিয়ে আলোচনা এবং কাজ করার জন্য একটি নিরাপদ স্থান প্রদান করে।</p>
                </div>
                <div className='border px-8 py-16 rounded-md bg-[#252525] text-white'>
                    <h3 className="text-xl text-center font-semibold">প্রিমিয়াম প্যাকেজ</h3>
                    <h1 className="text-3xl font-semibold text-center my-3">৳ ১৫০০০</h1>
                    <p className='text-justify'>প্রিমিয়াম প্যাকেজে আমাদের সবচেয়ে অভিজ্ঞ এবং বিশেষ মনোবিজ্ঞানীদের সাথে পৃথক থেরাপি সেশন অন্তর্ভুক্ত রয়েছে। আপনি আপনার থেরাপিউটিক লক্ষ্যগুলি আরও দক্ষতার সাথে অর্জন করতে সহায়তা করার জন্য ব্যক্তিগতকৃত মনোযোগ এবং উন্নত কৌশলগুলি পাবেন।</p>
                </div>
                <div className='border px-8 py-16 rounded-md bg-[#B68D7E] text-white'>
                    <h3 className="text-xl text-center font-semibold">দম্পতিদের কাউন্সেলিং</h3>
                    <h1 className="text-3xl font-semibold text-center my-3">৳ ১৫০০০</h1>
                    <p className='text-justify'>আমাদের দম্পতিদের কাউন্সেলিং সেশনগুলি অংশীদারদের যোগাযোগ উন্নত করতে, দ্বন্দ্ব সমাধান করতে এবং তাদের সম্পর্ককে শক্তিশালী করতে সাহায্য করার জন্য ডিজাইন করা হয়েছে। সেশনগুলি একজন অভিজ্ঞ দম্পতি থেরাপিস্ট দ্বারা সহায়তা করা হয়।</p>
                </div>
            </div>
        </div>
    );
};

export default HomePricing;