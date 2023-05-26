import React from "react";
import Banner1 from '../../../assets/banner-1.jpg';
import Banner2 from '../../../assets/banner-2.jpg';
import Banner3 from '../../../assets/banner-3.jpg';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay,EffectFade } from "swiper";
import SingleBanner from "./SingleBanner";

const Banner = () => {
   
        const bannerItems = [
            {
                id: 1, 
                img: Banner1,
                title: "Mental illness is no myth.",
                author: "- Nelson Mandela"
            },
            {
                id: 2, 
                img: Banner2,
                title: "Life is too short to wait",
                author: "- Unknown Girl"
            },
            {
                id: 3, 
                img: Banner3,
                title: "Be smart, help yourself now.",
                author: "- Mahatma Gandhi"
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
                        // effect={"fade"}
                        
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