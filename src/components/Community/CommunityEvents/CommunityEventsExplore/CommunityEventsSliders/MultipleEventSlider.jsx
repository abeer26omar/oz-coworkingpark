import React from 'react';
import Slider from "react-slick";
import SingleCommunityExplore from "../SingleCommunityExplore";

const MultipleEventSlider = ({eventsData}) => {
    const settings = {
        className: "center",
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        rows: 1,
        slidesPerRow: 2,
        vertical: true,
        verticalSwiping: true,
        infinite: true,
        pauseOnHover: true,
        swipeToSlide: true,
        easing: "ease-in-out",
        duration: 3000,
        useTransform: true,
        lazyLoad: true,
        adaptiveHeight: false,


    
    };

    return (
        <>

            <div className="slider-vertical-rows">
                <Slider {...settings}>
                    {eventsData && eventsData.map((event, index) => {
                        return (
                            <div key={index}>
                                <SingleCommunityExplore 
                                    img={event.gallery[0].image} 
                                    id={event.id} 
                                    title={event.event_name} 
                                    category={event.event_type.name} 
                                    host={event.host[0].name} 
                                    day={event.dates[0].check_in_date}
                                    clock={event.dates[0].check_in_time}
                                    text={event.description} />
                            </div>
                        )
                    })}
                </Slider>

            </div>


        </>
    );
};

export default MultipleEventSlider;
