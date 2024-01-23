import React, {useEffect, useState} from 'react';
import './Services.css';
import vector from "../../../assets/images/Vector.png";
import ServicesList from "./ServicesList";
import {useLocation} from "react-router-dom";
import Media from "../../Media/Media";
import Paragraph from '../../UI/Paragraph';
import { getMembershipAmenities } from '../../../apis/MembershipApi';

const Services = () => {
    const [amenities, setamenities] = useState([]);
    const location = useLocation();
    const isMembershipPage = location.pathname === '/membership';

    useEffect(()=>{
        const getAmenities = async ()=>{
            try{
               const result = await getMembershipAmenities();
               setamenities(result);
            }catch(error){
                console.log(error);
            }
        }
        getAmenities();
    },[]);

    return (
        <>
            <section className={`membership-component ${isMembershipPage ? 'yellow-background p-60' : ''}`}>
                <div className="position-relative">
                    <img
                        src={vector} 
                        className="position-absolute"
                        style={{top: "0px", left: "0", width: "100px"}} 
                        alt="shape"
                    />
                </div>
                <div className="container-fluid px-70">
                    <div className="head-content-left-shape text-left position-relative ms-4" style={{zIndex: '99'}}>
                        <Paragraph className="bold-head mb-4 ">What you'll get</Paragraph>
                        <Paragraph className="text-content text-secondary">Enjoy the boundlessness of possibilities at OZ:</Paragraph>
                    </div>
                    <div className="row">
                        {amenities.map((amenity, index) => {
                            const {id, title, image,description} = amenity;
                            return (
                                <div className="col-lg-4 col-md-6 col-sm-12 my-0 my-xl-4 my-md-4" key={index}>
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
