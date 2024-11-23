import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay, Pagination } from 'swiper/modules';

const Carousel = () => {
    return(
        <>
        <div className="mt-4 mx-3">
            <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false, 
            }}
            pagination={{
                clickable: true,
            }}
            className="mySwiper"
            >
                <SwiperSlide>
                    <img 
                        src="/TOPRANK.png"
                        alt="Slide 1"
                        className="w-screen rounded-md md:rounded-xl" 
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                            src="/TOPRANK2.png"
                            alt="Slide 2"
                            className="w-full rounded-md md:rounded-xl" 
                    />
                </SwiperSlide>
                <SwiperSlide>
                <img 
                        src="/TOPRANK3.png"
                        alt="Slide 3"
                        className="w-full rounded-md md:rounded-xl" 
                    />
                </SwiperSlide>
            </Swiper>
        </div>
        </>
    );
};

export default Carousel;