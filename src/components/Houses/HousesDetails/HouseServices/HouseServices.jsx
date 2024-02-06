import React, { useEffect, useState } from 'react';
import vector from "../../../../assets/images/Vector.png";
import HouseServicesList from "./HouseServicesList";
import Media from "../../../Media/Media";

const HouseServices = ({location_amenities, dark_theme}) => {

    return (
        <section id="amenities" className={`p-60 ${dark_theme ? 'dark_theme' : ''}`}>
            <div className="position-relative">
                <img
                    type="img" src={vector} className="position-absolute"
                    style={{top: "-106px", left: "0", width: "100px"}} alt="shape"/>
            </div>
            <div className="container-fluid px-70">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="head-content-left-shape text-left pb-3 position-relative">
                            <h3 className="bold-head">What you'll get</h3>
                            <p className="text-content text-secondary">We offer a wide range of amenities to support our members' personal and professional growth.</p>
                        </div>
                    </div>

                    {(location_amenities && location_amenities.length !== 0) && location_amenities.map((service, index) => {
                        const {id, title, image, logo, description} = service;
                        return (
                            <div className="col-lg-4 col-md-6 col-sm-12 my-5" key={index}>
                                <HouseServicesList id={id} title={title} img={logo || image} text={description}/>
                            </div>
                        )
                    })}
                    {(location_amenities && location_amenities.length === 0) && <p className='empty'>theres is no amenities yet!!</p>}
                </div>
            </div>
        </section>

    );
};

export default HouseServices;
