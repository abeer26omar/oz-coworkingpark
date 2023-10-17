import React from "react";
import Slider from "react-slick";
import {EventsData} from "../../../Data/EventsData";
import CommunityEventsList from "./CommunityEventsList";
import {NavLink} from "react-router-dom";
import Paragraph from "../../UI/Paragraph";

const CommunityEvents = (props) => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        ease: "linear",
        lazyLoad: true,
        // adaptiveHeight: true,
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
                breakpoint: 600,
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
            <section id="community-events" className="events">
                <div className="container-fluid">
                        <div className="  ">
                            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-6 m-auto ">
                                <div className="box-content px-60 d-flex justify-content-between align-items-center">
                                    <div className="row">
                                    {props.configData ? props.configData.map((configItem, index) => (
                                    <React.Fragment key={index}>
                                        {configItem.key === "community_page_event_title" && 
                                        <div className="col-lg-4 col-sm-12">
                                            <Paragraph className='white_monoBlock_title black'>{configItem.value}</Paragraph>
                                        </div>
                                        }
                                        {configItem.key === "community_page_event_description" &&
                                        <div className="col-lg-8 col-sm-12 m-auto">
                                            <div className="d-lg-flex d-sm-block align-items-center">
                                            <Paragraph className={'m_b_center monoBlock_description w-75 mx-auto black'}>{configItem.value}</Paragraph>
                                               <NavLink to={"/community/events"}
                                                className="btn button-outLine btn-bg-white mx-3">Explore</NavLink>
                                            </div>
                                        </div>
                                        }
                                    </React.Fragment>
                                )):''}
                                
                        
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12  col-sm-12">
                                <Slider {...settings} className="home-events">
                                    {EventsData.map((events, index) => {
                                        const {id, title, img, text, linkText} = events;

                                        return (
                                            <div key={index}>
                                                <CommunityEventsList
                                                    id={id}
                                                    title={title}
                                                    img={img}
                                                    text={text}
                                                    linkText={linkText}
                                                />
                                            </div>
                                        );
                                    })}
                                </Slider>
                            </div>
                        </div>
                </div>
            </section>
        </>
    );
};

export default CommunityEvents;
