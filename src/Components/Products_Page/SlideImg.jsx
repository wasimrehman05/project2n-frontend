import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SlideImg.css";

import { Pagination, Navigation } from "swiper";

export const SlideImg = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                    backgroundColor: "red",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        className="ads_img2"
                        src="https://images-static.nykaa.com/uploads/955c1246-e324-42a0-af8d-291fa64f0d31.jpeg?tr=w-1200,cm-pad_resize"
                        alt="img"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="ads_img2"
                        src="https://images-static.nykaa.com/uploads/471922f1-d135-45b3-9df2-6ee3a72023d5.jpg?tr=w-1200,cm-pad_resize"
                        alt="img"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="ads_img2"
                        src="https://images-static.nykaa.com/uploads/5ee8ed07-ecf3-4e7c-9af7-ff14f5ec35da.jpg?tr=w-1200,cm-pad_resize"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="ads_img2"
                        src="https://images-static.nykaa.com/uploads/6f1f4edb-0aeb-466f-9f9f-bc9521c72d07.jpg?tr=w-1200,cm-pad_resize"
                        alt=""
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
};
