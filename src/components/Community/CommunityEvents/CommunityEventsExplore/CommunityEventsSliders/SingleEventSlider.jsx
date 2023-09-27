import React from 'react';
import {CommunityEventsData} from "../../../../../Data/CommunityEventsData";
import Slider from "react-slick";
import SingleCommunityExplore from "../SingleCommunityExplore";

const SingleEventSlider = () => {
    const settingsSingle = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        adaptiveHeight: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
    };
    return (
        <>
            <Slider {...settingsSingle}>
                {CommunityEventsData.map((eventSingle, index) => {
                    const {img, id, title, category, text, day, host, clock} = eventSingle;
                    return (
                        <div key={index} style={{width: '100%'}}>
                            <SingleCommunityExplore img={img} id={id} title={title} category={category} text={text}
                                                    day={day}
                                                    host={host} clock={clock}/>
                        </div>


                    )
                })}
            </Slider>
        </>
    );
};

export default SingleEventSlider;
