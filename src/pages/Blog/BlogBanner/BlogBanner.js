import React from 'react';

const BlogBanner = () => {
    return (
        <div className="relative">
            <div className="relative bg-gray-900">
                <img
                    className="object-cover w-full h-[60vh]"
                    src='https://i.ibb.co/wYCLgcR/contact.jpg'
                    alt="Page Intro"
                />
                <div className="absolute inset-0 bg-blue-700 opacity-25"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center bg-transparent rounded-md mx-20 py-3 px-10">
                        <h1 className="text-2xl font-bold text-white mb-4 text-justify">
                            মানসিক রোগ বা মানসিক স্বাস্থ্য সমস্যা মানসিক বা মানসিক প্রক্রিয়াবিদ্ধ সমস্যাগুলির সম্পূর্ণ বা অংশগুলির একটি সামাজিক, নেতিবাচক, বা ব্যক্তিগত প্রসঙ্গে উদ্ভাবিত মনস্থিরতা এবং সামজিক আবদ্ধতা বা দিকগুলি বর্ণনা করে। মানসিক রোগের বিভিন্ন ধরণের সমস্যা ও লক্ষণ থাকতে পারে, যা একে অপরে ভিন্ন হতে পারে।
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogBanner;