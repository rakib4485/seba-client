import React from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
    return (
        <div>
            <h1 className="text-center text-4xl font-semibold text-white mt-20">Frequently Asked Questions</h1>
            <div className="grid grid-cols-3 gap-8 mt-16">
                <div>
                    <h5 className="text-xl font-semibold text-white">What can I expect in the first session when I see a therapist?</h5>
                    <p className='text-justify my-4'>Aliquam erat volutpat. Morbi volutpat velit ac sem vulputate sollicitudin. Aliquam tincidunt finibus leo, eget suscipit augue eleifend in.</p>
                    <p className='uppercase text-orange-500'><Link>Read more</Link></p>
                </div>
                <div>
                    <h5 className="text-xl font-semibold text-white">What can I expect in the first session when I see a therapist?</h5>
                    <p className='text-justify my-4'>Aliquam erat volutpat. Morbi volutpat velit ac sem vulputate sollicitudin. Aliquam tincidunt finibus leo, eget suscipit augue eleifend in.</p>
                    <p className='uppercase text-orange-500'><Link>Read more</Link></p>
                </div>
                <div>
                    <h5 className="text-xl font-semibold text-white">What can I expect in the first session when I see a therapist?</h5>
                    <p className='text-justify my-4'>Aliquam erat volutpat. Morbi volutpat velit ac sem vulputate sollicitudin. Aliquam tincidunt finibus leo, eget suscipit augue eleifend in.</p>
                    <p className='uppercase text-orange-500'><Link>Read more</Link></p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;