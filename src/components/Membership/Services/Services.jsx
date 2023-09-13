import React from 'react';
import './Services.css';

import vector from "../../../assets/images/Vector.png";
import {services} from "../../../Data/ServicesData";
import ServicesList from "./ServicesList";
import {useLocation} from "react-router-dom";
import Media from "../../Media/Media";

const Services = () => {
    const location = useLocation();

    // Check if the current path matches "/membership"
    const isMembershipPage = location.pathname === '/membership';
    return (
        <>
            <section className=" {`membership-component ${isMembershipPage ? 'yellow-background p-60' : ''}`}">
                <div className="position-relative mb-5" style={{height: "100px"}}>
                    <Media
                        type="img" src={vector} className="position-absolute"
                        style={{top: "0px", left: "0", width: "100px"}} alt="shape"/>
                    <div className="head-content-left-shape text-left  position-absolute"
                         style={{top: "40px", left: "100px"}}>
                        <h3 className="bold-head mb-4 ">What you'll get</h3>
                        <p className="text-content text-secondary">Lorem ipsum dolor sit amet, consectetur
                            dipiscing elit eius mod tempor incididunt ut labore </p>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            {/*<div className="head-content-left-shape text-left pb-3 position-relative">*/}
                            {/*    <h3 className="bold-head pb-5">What you'll get</h3>*/}
                            {/*    <p className="text-content text-secondary">Lorem ipsum dolor sit amet, consectetur*/}
                            {/*        dipiscing elit eius mod tempor incididunt ut labore </p>*/}
                            {/*</div>*/}
                        </div>

                        {services.map((service, index) => {
                            const {id, title, img, text} = service;
                            return (
                                <div className="col-lg-4 col-md-6 col-sm-12 my-5">
                                    <ServicesList id={id} title={title} img={img} text={text}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

        </>
    );
};

export default Services;
