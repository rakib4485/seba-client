import React from 'react';
import cupule from '../../../assets/cuppole.jpg';
import postDivorce from '../../../assets/post-divorce.jpg';
import children from '../../../assets/children.jpg';
import ServiceCard from './ServiceCard';

const Services = () => {

    const services = [
        {
            id: 1, 
            img: cupule,
            title: "Couples Therapy",
            description: "A relationship goes through numerous phases during its life cycle, and it is obvious for it to have a few rough patches. However, the strength of a relationship is reflected in how the couples deal with those ..."

        },
        
        {
            id: 2, 
            img: postDivorce,
            title: "Post-divorce Recovery",
            description: "Our systematic approach towards couple therapy is defined on the lines of enhancing the communication between the partners, and establishing short term and long term goals, where both the partners would be..."

        },
        {
            id: 3, 
            img: children,
            title: "Therapy for Children",
            description: "There are many emotional issues that find a corner in our heart, and refuse to die down. With time, these issues can transform into a sort of emotional tumor that impacts negatively on our daily life, such as lack of..."

        },

    ]

    return (
        <div>
            <h1 className="text-4xl font-semibold mx-auto text-center bg-blue-500 py-3 w-[250px] text-white rounded-lg">Our Services</h1>

            <div className="grid grid-cols-3 gap-6 mt-20">
                {
                    services.map(service => <ServiceCard 
                        key={service.id}
                        service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default Services;