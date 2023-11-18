import React from 'react';
import cupule from '../../../assets/cuppole.jpg';
import postDivorce from '../../../assets/post-divorce.jpg';
import children from '../../../assets/children.jpg';
import ServiceCard from './ServiceCard';
import { useQuery } from '@tanstack/react-query';

const Services = () => {
    const {data: services = []} = useQuery({
        queryKey: ['service'],
        queryFn: async() => {
            const res = await fetch ('https://phychobuzz.vercel.app/blogs')
            const data = await res.json()
            return data;
        }
    })

    // const services = [
    //     {
    //         id: 1, 
    //         img: cupule,
    //         title: "গ্রুপ, থেরাপি",
    //         description: "উদ্বেগ চিকিৎসা"

    //     },
        
    //     {
    //         id: 2, 
    //         img: postDivorce,
    //         title: "পরিবার",
    //         description: "দম্পতি থেরাপি"

    //     },
    //     {
    //         id: 3, 
    //         img: children,
    //         title: "পরিবার",
    //         description: "পারিবারিক চর্চা"

    //     },
    //     {
    //         id: 4, 
    //         img: children,
    //         title: "ব্যক্তিগত, থেরাপি",
    //         description: "বিষন্নতা থেরাপি"

    //     },
    //     {
    //         id: 5, 
    //         img: children,
    //         title: "গ্রুপ, থেরাপি",
    //         description: "গ্রুপ, থেরাপি"

    //     },
    //     {
    //         id: 6, 
    //         img: children,
    //         title: "ব্যক্তি, কোচিং",
    //         description: "ব্যক্তি, কোচিং"

    //     },

    // ]

    return (
        <div className='px-[6%]'>
            <h1 className="text-3xl font-bold mx-auto text-center  py-3 md:w-[50%] rounded-lg">সুস্থ থাকুন, <br /> বিশেষজ্ঞের পরামর্শ সহ</h1>
            <p className="text-center text-lg">সাইকোলজি বাজ অত্যন্ত যাচাইকৃত এবং প্রত্যয়িত অনুশীলনকারী মনোবিজ্ঞানী</p>

            <div className="grid grid-cols-3 gap-6 mt-20">
                {
                    services.map(service => <ServiceCard 
                        key={service._id}
                        service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default Services;