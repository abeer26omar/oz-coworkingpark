import React from "react";
import "./PublicEvent.css";
import Slider from "react-slick";
import PublicEventList from "./PublicEventList";
import { EventsData } from "../../Data/EventsData";
import Paragraph from "../UI/Paragraph";
const PublicEvent = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        lazyLoad: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 769,
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
        <>
            <section className="events">
                <div className="container-fluid">
                    <div className="row">                
                        <div className="col-lg-12">
                            <div className="head-content-sec">
                                <Paragraph className='head_feature'>{'Community Events'}</Paragraph>                              
                            </div> 
                        </div>               
                            {/*  */}
                        <div className="border-of-section">
                            <div className="row p-5 justify-content-between align-items-center">
                                {props.configData ? props.configData.map((configItem , index)=>(
                                    <React.Fragment key={index}>
                                        {configItem.key === "home_page_event_title" &&                            
                                            <div className="col-sm-12 col-lg-5">
                                                <Paragraph className='paragraph_black'>{configItem.value}</Paragraph>
                                            </div>
                                        }
                                        {configItem.key === "home_page_event_description" &&                            
                                            <div className="col-sm-12 col-lg-7 m-auto">
                                                <Paragraph className='description_black'>{configItem.value}</Paragraph>
                                            </div>
                                        }
                                    </React.Fragment>                                
                                )):''}
                            </div>                                 
                            <div className="col-lg-12 ">
                                <Slider {...settings} className="home-events">
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

export default React.memo(PublicEvent) ;
