import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export const Carousel = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        className="slide_img1"
                        src="https://images-static.nykaa.com/uploads/2e08ee01-a827-4371-8e1c-e3ad53f5affa.jpg?tr=w-1200,cm-pad_resize"
                        alt="SlideImg1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="slide_img1"
                        src="https://images-static.nykaa.com/uploads/35ca509a-4b90-4e97-92d8-00e2f0c353ee.jpg?tr=w-1200,cm-pad_resize"
                        alt="SlideImage2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="slide_img1"
                        src="https://images-static.nykaa.com/uploads/072c0004-9068-4fcf-99e4-ce6895c46efb.jpg?tr=w-1200,cm-pad_resize"
                        alt="SlideImage3"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="slide_img1"
                        src="https://images-static.nykaa.com/uploads/a6f1d864-1498-4982-b97f-2fd2fca016ee.gif?tr=w-2400,cm-pad_resize"
                        alt="SlideImage4"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="slide_img1"
                        src="https://images-static.nykaa.com/uploads/78b48e32-c61c-479e-9858-7be32c408f12.gif?tr=w-1200,cm-pad_resize"
                        alt="SlideImage5"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="slide_img1"
                        src="https://images-static.nykaa.com/uploads/61205e75-e1c6-474f-ab73-0137764692ad.gif?tr=w-1200,cm-pad_resize"
                        alt="SlideImage6"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="slide_img1"
                        src="https://images-static.nykaa.com/uploads/ca8db8b4-561c-4ba1-9a80-d28e54141fb9.gif?tr=w-1200,cm-pad_resize"
                        alt="SlideImage"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
};
