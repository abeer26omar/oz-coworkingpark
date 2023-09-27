import React from 'react';
import {NavLink, useParams} from "react-router-dom";
import Slider from "react-slick";
import {locationsData} from "../../../Data/LocationsData";
import LocationsList from "../../Locations/LocationsList";
import './HouseDetails.css';
import fb from "../../../assets/images/fb.png";
import mapPoint from "../../../assets/images/icons/mapPoint.svg";
import HouseServices from "./HouseServices/HouseServices";
import CommunityHouses from "./HousesCommunityEvents/CommunityHouses";
import Navbar from "react-bootstrap/Navbar";
import {Container, Nav} from "react-bootstrap";
import Media from "../../Media/Media";

const HouseDetails = () => {
    const {id} = useParams();
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
    return (
        <>

            {/*<h1>House ID: {id}</h1>*/}

            <Navbar expand="lg" className="bg-body-tertiary navigator">
                <Container fluid>
                    <Navbar.Brand className="title-name" href="#home">
                        El- sheikh Zayed
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
                    <Nav className="ms-auto nav-head">
                        <>
                            <NavLink className="nav-link-two links-margin" onClick={() => {
                                window.location.href = '#community-events';
                            }}>
                                Community Events
                            </NavLink>
                            <NavLink className="nav-link-two  links-margin"
                                     onClick={() => {
                                         window.location.href = '#f-b';
                                     }}
                                     smooth={true}
                                     smoothScrollTimeout={1000}
                            >
                                F&B
                            </NavLink>
                            <NavLink className="nav-link-two links-margin"
                                     onClick={() => {
                                         window.location.href = '#amenities';
                                     }
                                     }
                            >
                                Amenities
                            </NavLink>
                            <NavLink className="nav-link-two btn button-outLine btn-bg-white"
                                     to="/inquery"
                            >
                                Inquiry
                            </NavLink>
                        </>
                    </Nav>
                </Container>
            </Navbar>

            <section className=" house-details ">
                <div className="container-fluid">

                    <div className="row border-of-section ">
                        <div className="col-md-4 col-lg-4 col-sm-4 col-xs-6 m-auto ">
                            <div className="box-content px-60">
                                <h2 className="h2-text-box">Next to Iwan Compound</h2>
                                <p className="p-text-box">
                                    Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit
                                    amet, consectetur
                                    dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit
                                    eiusmod Lorem ipsum dolor
                                    sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur
                                    dipiscing eliteiusmod
                                </p>
                            </div>
                        </div>
                        <div className="col-md-8 col-lg-8 col-sm-8 col-xs-6 border-left ">
                            <Slider {...settings}>
                                {locationsData.map((location, index) => {
                                    const {id, address, img} = location;
                                    return (
                                        <div key={index}>
                                            <LocationsList id={id} img={img}/>
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>

                    </div>
                </div>
            </section>

            <CommunityHouses/>


            <section id="f-b" className="fab ">
                <div className="container-fluid">
                    <div className="row border-of-section ">
                        <div className="col-md-4 col-lg-4 col-sm-4 col-xs-6 m-auto ">
                            <div className="box-content px-60">
                                <h2 className="h2-text-box">
                                    F&B
                                </h2>
                                <p className="p-text-box">
                                    Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                                    Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                                    Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                                    Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                                    Lorem ipsum dolor sit amet, consectetur dipiscing eliteiusmod
                                </p>

                            </div>
                        </div>

                        <div className="col-md-8 col-lg-8 col-sm-8 col-xs-6 border-left ">
                            <Media
                                type="img" className="image-box w-100" src={fb} alt="Our OZ Vision"/>
                        </div>

                    </div>
                </div>
            </section>

            <HouseServices/>

            <section className="next-compound">
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                            <h4 className="h4-text">
                                <img src={mapPoint} className="mx-3 map-point"
                                     style={{width: "24px", height: "24px"}}
                                     alt="map"/>
                                Giza - EL - Sheikh Zayed - Next to Iwan Compound
                            </h4>

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default HouseDetails;
