import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import './Locations.css'
import Slider from "react-slick";
import LocationsList from "./LocationsList";
import {locationsData} from "../../Data/LocationsData";

const Locations = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,

        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    }
    return (
        <>
            <section className="locations p-60">
                <Container>
                    <Row>
                        <Col lg={6} sm={12} className="m-auto">
                            <div className="head-content">
                                <h2 className="large-head">Our Locations</h2>
                                <p className="text-content py-4">
                                    Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit
                                    amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur
                                    dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit
                                    eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                                    Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit
                                    amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet,
                                </p>
                            </div>
                        </Col>
                        <Col lg={6} sm={12}>

                                <Slider {...settings}>
                                    {locationsData.map((location, index)=>{
                                        const {id, address, img} = location;
                                        return(
                                            <div key={index}>
                                            <LocationsList id={id} address={address} img={img}/>
                                                </div>
                                        )
                                    })}
                                </Slider>

                        </Col>
                        <div className="col-lg-12 d-flex justify-content-start">
                            <a href="#" className="button-one-outline p-0 my-3">See all</a>
                        </div>
                </Row>
                </Container>
            </section>

        </>
    );
};

export default Locations;