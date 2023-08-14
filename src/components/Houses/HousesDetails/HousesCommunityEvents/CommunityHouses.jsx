import React from 'react';
import Slider from "react-slick";
import {locationsData} from "../../../../Data/LocationsData";
import LocationsList from "../../../Locations/LocationsList";
import './CommunityHouses.css'

const CommunityHouses = () => {
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
            <section id="community-events" className=" house-details ">
                <div className="container-fluid">

                    <div className="row border-of-section ">
                        <div className="col-md-8 col-lg-8 col-sm-8 col-xs-6 border-right ">
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
                        <div className="col-md-4 col-lg-4 col-sm-4 col-xs-6 m-auto ">
                            <div className="box-content px-60">
                                <h2 className="h2-text-box">Community Events</h2>
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


                    </div>
                </div>
            </section>

        </>
    );
};

export default CommunityHouses;
