import React from 'react';

const AboutBanner = () => {
    return (
        <div>
             {/* Page intro started  */}
             <div>
                <div className="relative">
                    <div className="relative bg-gray-900">
                        <img
                            className="object-cover w-full h-[60vh]"
                            src='https://i.ibb.co/wYCLgcR/contact.jpg'
                            alt="Page Intro"
                        />
                        <div className="absolute inset-0 bg-blue-700 opacity-25"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center bg-white rounded-md px-20 py-3">
                                <h1 className="text-4xl font-bold text-black mb-4">
                                আমাদের সম্পর্কে
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Page intro ended  */}
        </div>
    );
};

export default AboutBanner;