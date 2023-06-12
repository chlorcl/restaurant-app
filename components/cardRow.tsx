"use client";
import Card from "@/components/card";
import {cardProps} from "@/components/card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type cardRowProps = {
    cardsData: cardProps[]
}

export default function CardRow({cardsData}: cardRowProps) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        draggable: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full ">
            <Slider {...settings}>
                {cardsData.map((cardData) => (
                    <Card {...cardData} key={cardData.name}/>
                ))}

            </Slider>
        </div>
    );
}
