import React, { useEffect, useState } from 'react';
import vector from "../../../../assets/images/Vector.png";
import HouseServicesList from "./HouseServicesList";
import Media from "../../../Media/Media";

const HouseServices = ({location_amenities}) => {

    return (
        <section id="amenities" className="p-60">
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

                    {(location_amenities && location_amenities.length !== 0) && location_amenities.map((service, index) => {
                        const {id, title, image, description} = service;
                        return (
                            <div className="col-lg-4 col-md-6 col-sm-12 my-5" key={index}>
                                <HouseServicesList id={id} title={title} img={image} text={description}/>
                            </div>
                        )
                    })}
                    {(location_amenities && location_amenities.length === 0) && <p className='empty'>theres is no partners yet!!</p>}
                </div>
            </div>
        </section>

    );
};

export default HouseServices;
