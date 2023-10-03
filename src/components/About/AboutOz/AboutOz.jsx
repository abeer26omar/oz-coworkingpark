import React from 'react';
import './AboutOz.css';
import vector from "../../../assets/images/VectorRight.png";
import aboutone from "../../../assets/images/about/aboutone.png";
import aboutwo from "../../../assets/images/about/abouttwo.png";
import about3 from "../../../assets/images/about/about4.png";
import about4 from "../../../assets/images/about/about3.png";
import about5 from "../../../assets/images/about/about5.png";
import about6 from "../../../assets/images/about/about6.png";
import Media from "../../Media/Media";
import { useEffect, useState } from 'react';
import axios from "axios";


const AboutOz = () => {
    const [amenities, setamenities] = useState([]);
    useEffect(()=>{
        const getAmenities = async ()=>{
            try{
                const config = {
                    method: 'get',
                    url: `${process.env.REACT_APP_API_CONFIG_URL}/api/about_us_amenities`
                };
                const response = await axios(config);
                console.log(response.data.data);
                setamenities(response.data.data);
            }catch(error){
                console.error(error);
            }
        }
        getAmenities();
    },[]);
    return (
        <>
            <section className="about-oz body-dark">
                <div className="position-relative mb-5" style={{height: "0"}}>
                    <Media
                        type="img" src={vector} className="position-absolute"
                        style={{top: "0px", right: "0", width: "100px"}} alt="shape"/>
                    <div className="head-content-left-shape text-left  position-absolute"
                         style={{top: "40px", left: "100px"}}>

                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content-block">
                                <svg width="72" height="40" viewBox="0 0 72 40" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19.3413 9.16777C13.8992 9.16777 10.3477 13.4478 10.3477 20C10.3477 26.5522 13.8992 30.8322 19.3413 30.8322C24.7834 30.8322 28.3349 26.5522 28.3349 20C28.3093 13.4478 24.7579 9.16777 19.3413 9.16777ZM33.0361 34.4254C29.3058 38.1506 24.7068 40 19.3157 40C13.9247 40 9.32572 38.177 5.59543 34.4254C1.89069 30.7001 0 25.9181 0 20C0 14.0819 1.89069 9.29987 5.62098 5.57464C9.35127 1.82299 13.9503 0 19.3413 0C24.7323 0 29.3313 1.82299 33.0616 5.57464C36.7919 9.29987 38.6826 14.0819 38.6826 20C38.657 25.9181 36.7663 30.7001 33.0361 34.4254Z"
                                        fill="white"/>
                                    <path
                                        d="M71.9995 30.7011V39.2348H40.4453V31.3616L58.7646 9.30083H40.6242V0.740723H71.5396V8.79885L53.0925 30.7011H71.9995Z"
                                        fill="white"/>
                                </svg>

                                <h2 className="text-h2">“Creativity requires the courage to let go of certainties”</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-section body-dark">
                <div className="container-fluid">

                    <div className="row ">
                        <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 box-content-black">
                            <Media
                                type="img"
                                className="image-box w-100"
                                src={aboutone}
                                alt="Our OZ Vision"
                            />
                        </div>

                        <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 box-content-black m-auto ">
                            <div className="box-content ">
                                <span>Home of New Ideas</span>
                                <h2 className="h2-text-box">Oz will help you find the right people</h2>

                            </div>
                        </div>


                        <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 box-content-black m-auto ">
                            <div className="box-content ">
                                <h2 className="h2-text-box">Our vision</h2>
                                <p className="p-text-box">
                                    Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                                    Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                                    Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                                    Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                                    Lorem ipsum dolor sit amet, consectetur dipiscing eliteiusmod
                                </p>

                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 box-content-black">
                            <Media
                                type="img"
                                className="image-box w-100"
                                src={aboutwo}
                                alt="Our OZ Vision"
                            />
                        </div>


                        <div className="col-md-8 col-lg-8 col-sm-8 col-xs-8 box-content-black  ">
                            <div className="box-content ">
                                <div className=" d-lg-flex  d-md-flex d-sm-block justify-content-center ">
                                    <Media
                                        type="img"
                                        className=" img-fixed "
                                        src={about3}
                                        alt="Our OZ Vision"
                                    />
                                    <div className="">

                                        <h2 className="h2-text-box">Community</h2>
                                        <p className="p-text-box">
                                            Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                                            Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                                            Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                                            Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                                            Lorem ipsum dolor sit amet, consectetur dipiscing eliteiusmod
                                        </p>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-4 col-xs-4 box-content-black">
                            <Media
                                type="img"
                                className="image-box w-100"
                                src={about4}
                                alt="Our OZ Vision"
                                style={{
                                    width: "448px",
                                    height: "549px",
                                    margin: "0",
                                    padding: "0"
                                }}
                            />
                        </div>


                        <div className="col-md-6 col-lg-6 col-sm-4 col-xs-6 box-content-black   ">
                            <div className="box-content     ">
                                <div className="d-block justify-content-center ">
                                    <div className="">

                                        <h2 className="h2-text-box">Events</h2>
                                        <p className="p-text-box">
                                            Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                                            Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                                        </p>
                                    </div>

                                    <Media
                                        type="img"
                                        className=" img-events "
                                        src={about5}
                                        alt="Our OZ Vision"
                                    />
                                </div>


                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 m-auto box-content-black  ">
                            <Media
                                type="img"
                                className="image-box w-100"
                                src={about6}
                                alt="Our OZ Vision"
                                style={{
                                    width: "762px",
                                    height: "546px"
                                }}
                            />
                        </div>

                    </div>
                </div>
            </section>


            <section className="what-get p-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="head-amenities">
                                <h2 className="text-h2 pb-5">Our Amenities</h2>
                            </div>
                        </div>

                        {amenities.map((service, index) => {
                            const {title, image, description} = service;
                            return (
                                <div className="col-lg-6 col-md-6 col-sm-12 py-3 border-all" key={index}>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-lg-flex d-md-flex d-sm-block align-items-center w-50">
                                            <Media
                                                type="img" src={image} alt={title}/>
                                                <h2 className="bold-head mt-3">{title}</h2>
                                        </div>
                                        <p className="text-content text-left mt-4">{description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>


        </>
    );
};

export default AboutOz;
