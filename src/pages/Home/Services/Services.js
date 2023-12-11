import React from 'react';
import ServiceCard from './ServiceCard';
import { useQuery } from '@tanstack/react-query';

const Services = () => {
    const {data: services = []} = useQuery({
        queryKey: ['service'],
        queryFn: async() => {
            const res = await fetch ('http://localhost:5000/blogs')
            const data = await res.json()
            return data;
        }
    })

    

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