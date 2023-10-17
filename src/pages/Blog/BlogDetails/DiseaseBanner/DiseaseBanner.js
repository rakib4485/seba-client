import React from 'react';

const DiseaseBanner = ({disease}) => {
    const {img, title} = disease;
    console.log(disease)
    return (
        <div className="relative">
            <div className="relative bg-gray-900">
                <img
                    className="object-cover w-full h-[60vh]"
                    src={img}
                    alt="Page Intro"
                />
                <div className="absolute inset-0 bg-blue-700 opacity-25"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center bg-transparent rounded-md mx-20 py-3 px-10">
                        <h1 className="text-2xl font-bold text-white mb-4 text-justify">
                            {title}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiseaseBanner;