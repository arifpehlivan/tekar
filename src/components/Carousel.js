import React from 'react'
import "./carousel.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay, Pagination, A11y } from 'swiper';//, Scrollbar
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import first from "../img/1.jpg"
import second from "../img/2.jpg"
import third from "../img/3.jpg"
import fourth from "../img/4.jpg"
import fifth from "../img/5.jpg"
import sixth from "../img/6.jpg"


const Carousel = () => {

    return (
        <main>
            <Swiper
                modules={[Navigation,Autoplay, Pagination, A11y]}//, Scrollbar
                navigation
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                // scrollbar={{ draggable: true }}
                spaceBetween={50}
                slidesPerView={1}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img src={first} alt="" />
                    <span className='slideText'>Tekar Elektrik İnşaat A.Ş</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={second} alt="" />
                    <span  className='slideText'>Tekar Elektrik İnşaat A.Ş</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={third} alt="" />
                    <span style={{ color: "white" }} className='slideText'>Tekar Elektrik İnşaat A.Ş</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={fourth} alt="" />
                    <span  className='slideText'>Tekar Elektrik İnşaat A.Ş</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={fifth} alt="" />
                    <span style={{ color: "white" }} className='slideText'>Tekar Elektrik İnşaat A.Ş</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sixth} alt="" />
                    <span style={{ color: "white" }} className='slideText'>Tekar Elektrik İnşaat A.Ş</span>
                </SwiperSlide>
            </Swiper>
        </main>
    )
}

export default Carousel