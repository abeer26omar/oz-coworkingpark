import React, { useEffect, useState } from 'react';
import {NavLink, useParams} from "react-router-dom";
import Slider from "react-slick";
import LocationsList from "../../Locations/LocationsList";
import './HouseDetails.css';
import mapPoint from "../../../assets/images/icons/mapPoint.svg";
import HouseServices from "./HouseServices/HouseServices";
import CommunityHouses from "./HousesCommunityEvents/CommunityHouses";
import Navbar from "react-bootstrap/Navbar";
import {Container, Nav} from "react-bootstrap";
import Media from "../../Media/Media";
import axios from "axios";

const HouseDetails = () => {
    const {id} = useParams();
    const [houseDetails, setHouseDetails] = useState({});
    const [response, setResponse] = useState('');

    useEffect(()=>{
        const getHouseDetails = async ()=>{
            try{
                const config = {
                    method: 'get',
                    url: `${process.env.REACT_APP_API_CONFIG_URL}/api/locations/${id}`
                };
                const response = await axios(config);
                setHouseDetails(response.data.data);
            }catch(error){
                setResponse(error.response.data.message);
            }
        }
        getHouseDetails();
    },[]);
    const settings = {
        dots: true,
        speed: 300,
        slidesToShow: 1,
        cssEase: "linear",
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        lazyLoad: true
    }
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary navigator">
                <Container fluid>
                    <p className="title-name">
                        {houseDetails.title}
                    </p>
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
                                <h2 className="h2-text-box">{houseDetails.address}</h2>
                                <p className="p-text-box">
                                   {houseDetails.description}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-8 col-lg-8 col-sm-8 col-xs-6 border-left ">
                            <Slider {...settings}>
                                {houseDetails.images && houseDetails.images.map((house, index) => {
                                    const {id, path} = house;
                                    return (
                                        <div key={index}>
                                            <LocationsList id={id} img={path}/>
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>
                        {response !== '' && <p className={`mt-2 mb-0`}>{response}</p>}
                    </div>
                </div>
            </section>

            <CommunityHouses description={houseDetails.community_event_description} event_images={houseDetails.community_event_images} />


            <section id="f-b" className="fab ">
                <div className="container-fluid">
                    <div className="row border-of-section ">
                        <div className="col-md-4 col-lg-4 col-sm-4 col-xs-6 m-auto ">
                            <div className="box-content px-60">
                                <h2 className="h2-text-box">
                                    F&B
                                </h2>
                                <p className="p-text-box">
                                   {houseDetails.fb_description}
                                </p>

                            </div>
                        </div>

                        <div className="col-md-8 col-lg-8 col-sm-8 col-xs-6 border-left ">
                            <Media
                                type="img" className="image-box w-100" src={houseDetails.fb_image} alt="Our OZ Vision"/>
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
                                {houseDetails.title} - {houseDetails.address}
                            </h4>

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default HouseDetails;
