import React from 'react'
import "./carousel.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, A11y } from 'swiper';//, Scrollbar
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import first from "../img/1.jpg"
import second from "../img/2.jpg"
import third from "../img/3.jpg"


const Carousel = () => {

    return (
        <main>
            <Swiper
                modules={[Navigation, Pagination, A11y]}//, Scrollbar
                navigation
                pagination={{ clickable: true}}
                loop={true}
                // scrollbar={{ draggable: true }}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img src={first} alt="" />
                    <span className='slideText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={second} alt="" />
                    <span style={{color: "white"}} className='slideText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={third} alt="" />
                    <span style={{color: "white"}} className='slideText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </SwiperSlide>
            </Swiper>
        </main>
    )
}

export default Carousel