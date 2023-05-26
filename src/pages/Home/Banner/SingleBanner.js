import React from "react";

const SingleBanner = ({banner}) => {
    const {img, title, author} = banner;
    return(
        <div className="h-[450px] rounded pt-20" style={{backgroundImage: `url(${img})`, backgroundPosition: "center", backgroundSize: "cover"}}>
            <div className="bg-slate-200 w-[400px] rounded px-5 py-3 ml-16">
                <h1 className="text-2xl font-semibold text-black">"{title}"</h1>
                <p className="text-lg text-black">{author}</p>
            </div>
        </div>
    );
    
};

export default SingleBanner;