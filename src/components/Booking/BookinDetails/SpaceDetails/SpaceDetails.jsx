import React from 'react';
import './SpaceDetails.css';
import wifi from '../../../../assets/images/icons/wifi.png';
import chair from '../../../../assets/images/icons/chair.png';
import printer from '../../../../assets/images/icons/print.png';
import Media from "../../../Media/Media";
import Paragraph from '../../../UI/Paragraph';

const SpaceDetails = (props) => {

    return (
        <>
           <section className="space-details">
                <div className="container-fluid">
                    <div className="row p-3">
                        <div className="col-lg-6 col-12 p-sm-5 p-3 border-right">
                            <div className="space-description mb-5">
                                <Paragraph className="h2-description">
                                    Space Description
                                </Paragraph>
                                <Paragraph className="p-description">
                                    {props.space_details.description}
                                </Paragraph>
                            </div>
                            <div className="catering">
                                <Paragraph className="h2-catering">
                                    Services
                                </Paragraph>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Breakfast a day per person
                                    </label>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 col-12 p-sm-5 p-3 m-sm-auto">
                            <div className="space-price mb-5">
                                <Paragraph className="h2-description">
                                    Price
                                </Paragraph>
                                <div className="price-list">
                                    <span>{props.space_details.price} / Hour</span>
                                </div>
                            </div>
                            <div className="space-facilities mb-5">
                                <Paragraph className="h2-description">
                                    facilities
                                </Paragraph>
                                <div className="facilities-list">
                                    <ul>
                                        {
                                            props.space_details.amenities.slice(0,3).map((amenity,index)=>{
                                                return (
                                                    <li className='' key={index}>
                                                        <Media
                                                            type="img" src={wifi}/>
                                                        {amenity.name}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="space-capacity mb-5">
                                <Paragraph className="h2-description">
                                    capacity
                                </Paragraph>
                                <span>{props.space_details.capacity} Persons</span>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default SpaceDetails;
