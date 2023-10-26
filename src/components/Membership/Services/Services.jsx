import React, {useEffect, useState} from 'react';
import './Services.css';
import vector from "../../../assets/images/Vector.png";
import ServicesList from "./ServicesList";
import {useLocation} from "react-router-dom";
import Media from "../../Media/Media";
import axios from 'axios';
import Paragraph from '../../UI/Paragraph';

const Services = () => {
    const [amenities, setamenities] = useState([]);
    const location = useLocation();
    const isMembershipPage = location.pathname === '/membership';

    useEffect(()=>{
        const getAmenities = async ()=>{
            try{
                const config = {
                    method: 'get',
                    url: `${process.env.REACT_APP_API_CONFIG_URL}/api/membership_amenities`
                };
                const response = await axios(config);
                setamenities(response.data.data);
                console.log(response.data.data);
            }catch(error){
                console.log(error);
            }
        }
        getAmenities();
    },[]);
    return (
        <>
            <section className=" {`membership-component ${isMembershipPage ? 'yellow-background p-60' : ''}`}">
                <div className="position-relative mb-5" style={{height: "100px"}}>
                    <Media
                        type="img" src={vector} className="position-absolute"
                        style={{top: "0px", left: "0", width: "100px"}} alt="shape"/>
                    <div className="head-content-left-shape text-left  position-absolute"
                         style={{top: "40px", left: "100px"}}>
                        <Paragraph className="bold-head mb-4 ">What you'll get</Paragraph>
                        <Paragraph className="text-content text-secondary">Enjoy the boundlessness of possibilities at OZ:</Paragraph>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        {amenities.map((amenity, index) => {
                            const {id, title, image,description} = amenity;
                            return (
                                <div className="col-lg-4 col-md-6 col-sm-12 my-5" key={index}>
                                    <ServicesList id={id} title={title} image={image} description={description}/>
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
