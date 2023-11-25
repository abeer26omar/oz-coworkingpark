import React from 'react';
import Slider from "react-slick";
import SingleCommunityExplore from "../SingleCommunityExplore";

const SingleEventSlider = ({eventsData}) => {

    const settingsSingle = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
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
                {eventsData && eventsData.map((event, index) => {
                    return (
                        <div key={index} style={{width: '100%'}}>
                            <SingleCommunityExplore 
                                img={event.gallery[0].image} 
                                id={event.id} 
                                title={event.event_name} 
                                category={event.event_type.name} 
                                host={event.host[0].name} 
                                day={event.dates[0].check_in_date}
                                clock={event.dates[0].check_in_time}
                                text={event.description}
                                img_style='img_style' />
                        </div>
                    )
                })}
            </Slider>
        </>
    );
};

export default SingleEventSlider;
