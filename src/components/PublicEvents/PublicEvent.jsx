import React from "react";
import "./PublicEvent.css";
import Slider from "react-slick";
import PublicEventList from "./PublicEventList";
import {EventsData} from "../../Data/EventsData";

const PublicEvent = () => {
    // const [eventList, setEventList] = useState([]);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 1500,
        cssEase: "linear",
        adaptiveHeight: true,
        lazyLoad: false,
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
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: false
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 3000,
                    dots: false

                },
            },
        ],
    };
    return (
        <>
            <section className="events">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="head-content-sec">
                                <h2 className="h2-text">Community Events</h2>
                            </div>
                        </div>

                        <div className=" border-of-section ">
                            <div className="col-md-12 col-lg-12 col-sm-4 col-xs-6 m-auto ">
                                <div className="box-content px-60 d-flex justify-content-between align-items-center">
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-12">
                                            <h2 className="h2-text-box">WHAT'S ON events </h2>
                                        </div>
                                        <div className="col-lg-8 col-sm-12 m-auto">
                                            <p className="p-text-box">
                                                Lorem ipsum dolor sit amet, consectetur dipiscing elit
                                                eiusmod Lorem ipsum dolor sit amet,consectetur dipiscing
                                                elit Lorem ipsum dolor sit amet, consectetur
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <Slider {...settings}>
                                    {EventsData.map((events, index) => {
                                        const {id, title, img, text} = events;

                                        return (
                                            <div key={index}>
                                                <PublicEventList
                                                    id={id}
                                                    title={title}
                                                    img={img}
                                                    text={text}
                                                />
                                            </div>
                                        );
                                    })}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PublicEvent;
