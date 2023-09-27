import React from 'react';
import './Locations.css'
import Slider from "react-slick";
import LocationsList from "./LocationsList";
import {locationsData} from "../../Data/LocationsData";
import Buttons from "../Buttons/Buttons";

const Locations = () => {
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
            {/*<section className="locations p-60">*/}
            {/*    <Container>*/}
            {/*        <Row>*/}
            {/*            <Col lg={6} sm={12} className="m-auto">*/}
            {/*                <div className="head-content">*/}
            {/*                    <h2 className="large-head">Our Locations</h2>*/}
            {/*                    <p className="text-content py-4">*/}
            {/*                        Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit*/}
            {/*                        amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur*/}
            {/*                        dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit*/}
            {/*                        eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod*/}
            {/*                        Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit*/}
            {/*                        amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet,*/}
            {/*                    </p>*/}
            {/*                </div>*/}
            {/*            </Col>*/}
            {/*            <Col lg={6} sm={12}>*/}

            {/*                    <Slider {...settings}>*/}
            {/*                        {locationsData.map((location, index)=>{*/}
            {/*                            const {id, address, img} = location;*/}
            {/*                            return(*/}
            {/*                                <div key={index}>*/}
            {/*                                <LocationsList id={id} address={address} img={img}/>*/}
            {/*                                    </div>*/}
            {/*                            )*/}
            {/*                        })}*/}
            {/*                    </Slider>*/}

            {/*            </Col>*/}
            {/*            <div className="col-lg-12 d-flex justify-content-start">*/}
            {/*                <a href="#" className="button-one-outline p-0 my-3">See all</a>*/}
            {/*            </div>*/}
            {/*    </Row>*/}
            {/*    </Container>*/}
            {/*</section>*/}
            <section className="locations ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="head-content-sec">
                                <h2 className="h2-text">Explore Houses</h2>

                            </div>

                        </div>
                    </div>
                    <div className="row border-of-section ">
                        <div className="col-md-6 col-lg-4 col-sm-4 col-xs-6 m-auto ">
                            <div className="box-content px-60">
                                <h2 className="h2-text-box">Locations</h2>
                                <p className="p-text-box">
                                    Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit
                                    amet, consectetur
                                    dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit
                                    eiusmod Lorem ipsum dolor
                                    sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur
                                    dipiscing eliteiusmod
                                </p>
                                <Buttons
                                    href="/houses" className="btn button-outLine btn-bg-white"

                                >Explore</Buttons>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-8 col-sm-8 col-xs-6  border-left ">
                            <Slider {...settings}>
                                {locationsData.map((location, index) => {
                                    const {id, address, img} = location;
                                    return (
                                        <div key={index}>
                                            <LocationsList id={id} address={address} img={img}/>
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
};

export default Locations;
