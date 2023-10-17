import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DiseaseBanner from './DiseaseBanner/DiseaseBanner';

const BlogDetails = () => {
    const disease = useLoaderData();
    const {img, title, description, symptoms,treatments} = disease;
    console.log(disease)
    return (
        <div>
            <DiseaseBanner disease={disease}/>
            <div className='mx-[7%] mt-20'>
            <h2 className="text-2xl font-bold">{title} কী?</h2>
            <p className="text-xl my-5 font-semibold">{description}</p>
            <h2 className="text-2xl font-bold">{title} এর লক্ষণ গুলো হলোঃ </h2>
            <ul className='mt-5'>
                {
                    symptoms.map((symptom, idx) => <li className='list-decimal ml-8 my-3 text-md' key={idx}>{symptom}</li>)
                }
            </ul>
            <h2 className="text-2xl font-bold mt-10">{title} এর প্রতিকার গুলো হলোঃ </h2>
            <ul className='mt-5'>
                {
                    treatments.map((symptom, idx) => <li className='list-decimal ml-8 my-3 text-md' key={idx}>{symptom}</li>)
                }
            </ul>
            </div>
        </div>
    );
};

export default BlogDetails;