import React from 'react';
import vector from "../../../../assets/images/Vector.png";
import {services} from "../../../../Data/ServicesData";
import HouseServicesList from "./HouseServicesList";
import Media from "../../../Media/Media";

const HouseServices = () => {
    return (
        <section id="amenities" className="what-get p-60">
            <div className="position-relative">
                <Media
                    type="img" src={vector} className="position-absolute"
                    style={{top: "0px", left: "0", width: "100px"}} alt="shape"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="head-content-left-shape text-left pb-3 position-relative">
                            <h3 className="bold-head">What you'll get</h3>
                            <p className="text-content text-secondary">Lorem ipsum dolor sit amet, consectetur
                                dipiscing elit eius mod tempor incididunt ut labore </p>
                        </div>
                    </div>

                    {services.map((service, index) => {
                        const {id, title, img, text} = service;
                        return (
                            <div className="col-lg-4 col-md-6 col-sm-12 my-5">
                                <HouseServicesList id={id} title={title} img={img} text={text}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

    );
};

export default HouseServices;
