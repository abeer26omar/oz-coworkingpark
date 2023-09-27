import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import {Container, Nav} from "react-bootstrap";
import aminites from "../../../../assets/images/aminites.png";

import alarm from "../../../../assets/images/icons/Alarm.svg";
import gym from "../../../../assets/images/icons/calendar-event.svg";
import user from "../../../../assets/images/icons/user.svg";
import './CommunityEventsDetails.css';
import Slider from "react-slick";
import Media from "../../../Media/Media";
import Buttons from "../../../Buttons/Buttons";

const CommunityEventsDetails = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        cssEase: "linear",
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        lazyLoad: true
    }

    const settingsGallry = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        cssEase: "linear",
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        lazyLoad: true,

    }
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary navigator-feed">
                <Container fluid>
                    <Navbar.Brand className="title-name" href="#home">
                        Events
                    </Navbar.Brand>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2"
                        height="127"
                        viewBox="0 0 2 127"
                        fill="none"
                    >
                        <path d="M1 0L1.00001 127" stroke="#BDBDBD" stroke-width="1.5"/>
                    </svg>
                    <Nav className="ms-auto">
                        <>

                        </>
                    </Nav>

                </Container>
            </Navbar>

            <section className="community-events-details">
                <div className="container-fluid">
                    <div className="row border-of-section ">
                        <div className="col-md-6 col-lg-4 col-sm-4 col-xs-6 border-right  ">
                            <div className="box-content">
                                <h2 className="h2-text-box">Summer Sessions</h2>
                                <div className="event-type-details">
                                    <span className="status-event">Status: <span>public Event</span></span>
                                </div>
                                <div
                                    className="d-flex  mb-5 amenities-box-details">
                                    <div className="amenities-box">
                                        <Media
                                            type="img"
                                            src={alarm}
                                            alt="alarm amenities-icon"
                                            className="amenties-icon"
                                        />
                                        <h5 className="amenities-text">12 June</h5>
                                    </div>

                                    <div className="amenities-box">
                                        <Media
                                            type="img"
                                            src={gym}
                                            alt="alarm amenities-icon"
                                            className="amenties-icon"
                                        />
                                        <h5 className="amenities-text">03:00 Pm</h5>
                                    </div>
                                    <div className="amenities-box">
                                        <Media
                                            type="img"
                                            src={user}
                                            alt="alarm amenities-icon"
                                            className="amenties-icon"
                                        />
                                        <h5 className="amenities-text">Monica</h5>
                                    </div>

                                </div>
                                <Buttons href="#">
                                    Explore
                                </Buttons>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-8 col-sm-8 col-xs-6  m-auto ">
                            <Slider {...settings}>
                                <div>
                                    <Media
                                        type="img"
                                        className="image-box w-100"
                                        src={aminites}
                                        alt="Our OZ Vision"
                                    />
                                </div>
                                <div>
                                    <Media
                                        type="img"
                                        className="image-box w-100"
                                        src={aminites}
                                        alt="Our OZ Vision"
                                    />
                                </div>
                                <div>
                                    <Media
                                        type="img"
                                        className="image-box w-100"
                                        src={aminites}
                                        alt="Our OZ Vision"
                                    />
                                </div>
                            </Slider>

                        </div>

                    </div>
                </div>
            </section>


            <section className="about-event-details px-60 py-5  border-bottom">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="event-type-details">
                                <span className="status-event">Host: <span>Monica</span></span>
                            </div>
                            <div className="event-type-details">
                                <span className="status-event ">About Event
                                    <p className="p-text">
                                        Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod  ipsum dolor sit amet,  dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit a elit eiusmod Lorem ipsum dolor sit amet, consectetur di consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectet ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit  Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                                    </p>
                                </span>
                            </div>
                            <div className="event-type-details">
                                <span className="status-event">Price: <span>1125 EGP</span></span>
                            </div>

                            <div className="cards-event-buttons text-center">
                                <Buttons href='#'>Attend</Buttons>
                                <Buttons href='#' className="share-button">
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_b_3532_22581)">
                                            <rect x="0.5" y="0.5" width="47" height="47" stroke="black"></rect>
                                        </g>
                                        <path d="M27.7697 30.4059L20.6738 25.7227" stroke="black" stroke-width="1.5"
                                              stroke-linecap="round"></path>
                                        <path d="M27.8907 17.1309L20.7949 21.8141" stroke="black" stroke-width="1.5"
                                              stroke-linecap="round"></path>
                                        <path
                                            d="M20.6682 23.3419C20.6682 25.1833 19.1755 26.676 17.3341 26.676C15.4927 26.676 14 25.1833 14 23.3419C14 21.5005 15.4927 20.0078 17.3341 20.0078C19.1755 20.0078 20.6682 21.5005 20.6682 23.3419Z"
                                            stroke="black" stroke-width="1.5"></path>
                                        <path
                                            d="M34.0061 32.6661C34.0061 34.5075 32.5134 36.0002 30.672 36.0002C28.8306 36.0002 27.3379 34.5075 27.3379 32.6661C27.3379 30.8248 28.8306 29.332 30.672 29.332C32.5134 29.332 34.0061 30.8248 34.0061 32.6661Z"
                                            stroke="black" stroke-width="1.5"></path>
                                        <path
                                            d="M34.0061 15.3341C34.0061 17.1755 32.5134 18.6682 30.672 18.6682C28.8306 18.6682 27.3379 17.1755 27.3379 15.3341C27.3379 13.4927 28.8306 12 30.672 12C32.5134 12 34.0061 13.4927 34.0061 15.3341Z"
                                            stroke="black" stroke-width="1.5"></path>
                                        <defs>
                                            <filter id="filter0_b_3532_22581" x="-6" y="-6" width="60" height="60"
                                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                                <feGaussianBlur in="BackgroundImageFix"
                                                                stdDeviation="3"></feGaussianBlur>
                                                <feComposite in2="SourceAlpha" operator="in"
                                                             result="effect1_backgroundBlur_3532_22581"></feComposite>
                                                <feBlend mode="normal" in="SourceGraphic"
                                                         in2="effect1_backgroundBlur_3532_22581"
                                                         result="shape"></feBlend>
                                            </filter>
                                        </defs>
                                    </svg>
                                </Buttons>
                                <a className="share-button">
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_b_3789_18299)">
                                            <rect x="0.5" y="0.5" width="47" height="47" stroke="black"/>
                                        </g>
                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M36.099 15.7153L36.0993 15.7159C37.4978 18.58 36.9847 21.8798 34.2459 25.6467L34.2446 25.6486C32.0756 28.6511 28.945 31.6687 24.3568 35.2318L24.3555 35.2328C24.3412 35.2439 24.3236 35.25 24.3054 35.25C24.2873 35.25 24.2696 35.2439 24.2553 35.2328L24.2542 35.2319C19.6602 31.6625 16.5351 28.6186 14.364 25.6454C11.6176 21.879 11.1049 18.5796 12.5033 15.7159L12.5035 15.7153C13.4542 13.7643 16.2788 12.0651 19.6788 13.0394C21.2994 13.5077 22.7133 14.5117 23.6897 15.8874L24.3013 16.7492L24.9129 15.8874C25.8894 14.5115 27.3036 13.5074 28.9245 13.0392L28.9264 13.0387C32.3135 12.0505 35.147 13.7615 36.099 15.7153Z"
                                                stroke="black" stroke-width="1.5"/>
                                        </svg>
                                        <defs>
                                            <filter id="filter0_b_3789_18299" x="-6" y="-6" width="60" height="60"
                                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="3"/>
                                                <feComposite in2="SourceAlpha" operator="in"
                                                             result="effect1_backgroundBlur_3789_18299"/>
                                                <feBlend mode="normal" in="SourceGraphic"
                                                         in2="effect1_backgroundBlur_3789_18299" result="shape"/>
                                            </filter>
                                        </defs>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="gallery-show border-of-section">
                <div className="container-fluid">
                    <div className="row  ">
                        <div className="col-md-12 col-lg-12 col-sm-12 col-xs-6  ">
                            <div className="box-content text-center">
                                <h2 className="h2-text-box">pervious gallery events</h2>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-12 col-sm-12 col-xs-6">
                            <Slider {...settingsGallry}>
                                <div>
                                    <Media
                                        type="img"
                                        className="image-box w-100"
                                        src={aminites}
                                        alt="Our OZ Vision"
                                    />
                                </div>
                                <div>
                                    <Media
                                        type="img"
                                        className="image-box w-100"
                                        src={aminites}
                                        alt="Our OZ Vision"
                                    />

                                </div>
                                <div>
                                    <Media
                                        type="img"
                                        className="image-box w-100"
                                        src={aminites}
                                        alt="Our OZ Vision"
                                    />

                                </div>
                                <div>
                                    <Media
                                        type="img"
                                        className="image-box w-100"
                                        src={aminites}
                                        alt="Our OZ Vision"
                                    />
                                </div>
                            </Slider>

                        </div>

                    </div>
                </div>
            </section>


        </>
    );
};

export default CommunityEventsDetails;
