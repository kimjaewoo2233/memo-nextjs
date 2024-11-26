"use client";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { FaCircle, FaRegCircle } from "react-icons/fa";

interface ImageSliderProps {
    images: string[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true, 
        autoplaySpeed: 1300,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current: number) => setCurrentSlide(current),
    };

    return (
        <div className="w-full max-w-[800px] mx-auto" >
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <div className="relative w-full h-[500px]">
                            <Image 
                                src={image} 
                                alt={`slide-${index}`} 
                                layout="fill"
                                objectFit="cover"
                                priority
                            />
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="flex w-full justify-center">
                {images.map((_, index) => (
                    index === currentSlide ? 
                    <FaCircle key={index} style={{ margin: "0 5px" }} /> : 
                    <FaRegCircle key={index} style={{ margin: "0 5px" }} />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
