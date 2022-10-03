import React from 'react'
import "./carousel.css"
import Slider from "react-slick";
import first from "../img/1.jpg"
import second from "../img/2.jpg"
import third from "../img/3.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <main>

            <Slider {...settings}>
                <div>
                <img src={first} alt="" />
                </div>
                <div>
                <img src={second} alt="" />
                </div>
                <div>
                <img src={third} alt="" />
                </div>
            </Slider>

            {/* <img src={first} alt="" />
            <img src={second} alt="" />
            <img src={third} alt="" /> */}
        </main>
    )
}

export default Carousel