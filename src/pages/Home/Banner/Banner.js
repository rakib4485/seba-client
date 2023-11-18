import React from "react";
import Banner1 from '../../../assets/banner-1.jpg';
import Banner2 from '../../../assets/banner-2.jpg';
import Banner3 from '../../../assets/banner-1.jpg';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';
import { Autoplay,EffectFade } from "swiper";
import SingleBanner from "./SingleBanner";

const Banner = () => {
   
        const bannerItems = [
            {
                id: 1, 
                img: Banner1,
                title: "মানসিক রোগ কোন মিথ নয়।",
                author: "- নেলসন ম্যান্ডেলা"
            },
            {
                id: 2, 
                img: Banner2,
                title: "অপেক্ষা করার জন্য জীবন অনেক ছোট",
                author: "- অচেনা মেয়ে"
            },
            {
                id: 3, 
                img: Banner3,
                title: "স্মার্ট হোন, এখনই নিজেকে সাহায্য করুন।",
                author: "- মহাত্মা গান্ধী"
            }
        ]
    
        return (
            <div>
                
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                          delay: 3500,
                          disableOnInteraction: false,
                        }}
                        loop={true}
                        effect={"fade"}
                        
                        modules={[EffectFade, Autoplay]}
                        className="mySwiper"
                      >
                        
                        {
                            bannerItems.map(banner => <SwiperSlide
                                key={banner.id}
                            ><SingleBanner 
                                banner={banner}
                            /></SwiperSlide>)
                        }
                      </Swiper>
                
            </div>
        );
};

export default Banner;