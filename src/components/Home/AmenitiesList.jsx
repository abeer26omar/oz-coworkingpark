import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import Paragraph from '../UI/Paragraph';
import {amenitiesList} from '../../Data/AmenitiesList';
import Media from '../Media/Media';

const AmenitiesList = (props) => {
    const [AmenitiesList, setAmenitiesList] = useState(amenitiesList)
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 3,
                settings: "unslick",

            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    };
    return (
        <>
        <Slider {...settings}>
            {AmenitiesList && AmenitiesList.map((AmenitiesList, index) => {
                const {id,title, img} = AmenitiesList;
                return (
                    <div className="col-lg-12 d-flex justify-content-center amenitiy_item" key={index}>
                        <div className='position-relative'>
                            <Media
                                width='197px'
                                height='400px'
                                type='img'
                                src={img}/>
                            <div className='content_overlay'>
                                <Paragraph className='overlay_p'>{title}</Paragraph>
                            </div>
                        </div>
                    </div>
                );
            })}
        </Slider>
        {!AmenitiesList && <Paragraph>there is no Amenities to display</Paragraph>}
        </>
    );

}
export default AmenitiesList;