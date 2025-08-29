import React from 'react';
import './ImageSlider.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../Image/img-1.jpg'
import img2 from '../../Image/img-2.jpg'
import img3 from '../../Image/img-3.jpg'
import img4 from '../../Image/img-4.jpg'


export default function ImageSlider() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 6000,
        // cssEase: 'linear ',
    };

    return (
        <div className='imageSlider-container'>
            <div className='card-container'>
                <Slider {...settings}>
                    {/* <div className="size-of-img">
                        <img src={img1} alt="" />
                    </div>
                    <div className="size-of-img">
                        <img src={img2} alt="" />
                    </div>
                    <div className="size-of-img">
                        <img src={img3} alt="" />
                    </div>
                    <div className="size-of-img">
                        <img src={img4} alt="" />
                    </div> */}
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />

                    {/* <div className="size-of-img"></div> */}
                </Slider>
            </div>
        </div>
    )
}
