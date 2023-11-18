import React from 'react';

const Council = () => {
    return (
        <div className='mt-20 px-[6%]'>
            <h1 className="text-center text-4xl font-semibold ">আমাদের কাউন্সেলিং ভিডিও</h1>
            <div className="grid grid-cols-3 gap-8 mt-10">
                <div className="card">
                    <figure className="px-5 py-5">
                    <video controls src="https://res.cloudinary.com/dmfktgrnl/video/upload/v1700320873/pdlwkygzbe_dcfdse.mp4"></video>
                    </figure>

                </div>
                <div className="card">
                    <figure className="px-5 py-5">
                    <video controls src="https://res.cloudinary.com/dmfktgrnl/video/upload/v1700320133/durakezptx_ozaegq.mp4"></video>
                    </figure>

                </div>
                <div className="card">
                    <figure className="px-5 py-5">
                    <video controls src="https://res.cloudinary.com/dmfktgrnl/video/upload/v1700321376/yjqapbtsht_ami9yv.mp4"></video>
                    </figure>

                </div>
            </div>
        </div>
    );
};

export default Council;