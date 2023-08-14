import React from 'react';
import Slider from "react-slick";
import {CommunityEventsData} from "../../../../../Data/CommunityEventsData";
import SingleCommunityExplore from "../SingleCommunityExplore";

const MultipleEventSlider = () => {
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
        // centerMode: true,
        infinite: true,
        pauseOnHover: true,
        swipeToSlide: true,
        easing: "ease-in-out",
        duration: 3000,
        useTransform: true,
        lazyLoad: true,
        adaptiveHeight: false,


        // adaptiveHeight: true,
        beforeChange: function (currentSlide, nextSlide) {
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            console.log("after change", currentSlide);
        }
    };

    return (
        <>

            <div className="slider-vertical-rows">
                <Slider {...settings}>
                    {CommunityEventsData.map((eventData, index) => {
                        const {id, img, linkText, title, text, category} = eventData;
                        return (
                            <div key={index}>
                                <SingleCommunityExplore id={id} img={img} linkText={linkText}
                                                        title={title}
                                                        text={text} category={category}/>
                            </div>
                        )
                    })}
                </Slider>

            </div>


        </>
    );
};

export default MultipleEventSlider;
