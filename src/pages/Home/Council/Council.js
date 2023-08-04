import React from 'react';

const Council = () => {
    return (
        <div className='mt-20'>
            <h1 className="text-center text-4xl font-semibold text-white">Our Counselling Video</h1>
            <div className="grid grid-cols-3 gap-8 mt-10">
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 py-10">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Gljq2FHzTvY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </figure>

                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 py-10">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/eAK14VoY7C0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </figure>

                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 py-10">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/_MJe1YRwad0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </figure>

                </div>
            </div>
        </div>
    );
};

export default Council;