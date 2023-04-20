import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import School_card from './school_card';
const School_slider = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, background: "gray", display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '5px', borderRadius: '50%', zIndex: '2' }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, background: "gray", display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '5px', borderRadius: '50%', zIndex: '2' }}
                onClick={onClick}
            />
        );
    }
    const settings = {

        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,

                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,

                }
            },
            {
                breakpoint: 830,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <div>
            <p className='mt-2' style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}> MANAGEMENT TEAM</p>
            <Slider {...settings}>
                <School_card />
                <School_card />
                <School_card />
                <School_card />
            </Slider>
        </div>
    )
}
export default School_slider