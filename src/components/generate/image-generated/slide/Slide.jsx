import React from "react";
import Slider from "react-slick";
import illustration from '../../../../assets/illustration.png';
import spinner from '../../../../assets/spinner.svg'
import Image from "../image/Image";
import { useSelector } from 'react-redux';
import './Slide.css'

const Slide = () => {
    const photos = useSelector((state) => state.photos.value);
    const isLoading = useSelector((state) => state.photos.isLoading);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        photos != null ? (
            <Slider {...settings}>
                {photos.map((img) => (
                    <Image key={img.id} url={img.image.url} />
                ))}
            </Slider>
        ) : (
            <img src={isLoading ? spinner : illustration} alt="illustration" style={{ width: "250px", height: "250px" }} />
        )
    );
};

export default Slide;