import React from 'react';
import './SpaceDetails.css';
import wifi from '../../../../assets/images/icons/wifi.png';
import chair from '../../../../assets/images/icons/chair.png';
import printer from '../../../../assets/images/icons/print.png';
import Media from "../../../Media/Media";
import Paragraph from '../../../UI/Paragraph';

const SpaceDetails = () => {
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
                                    Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem
                                    ipsum dolor sit amet, consectetur dipiscing elit eiusmod ipsum dolor sit amet,
                                    dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit
                                    eiusmod Lorem ipsum dolor sit a elit eiusmod Lorem ipsum dolor sit amet, consectetur
                                    di consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur
                                    dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectet ipsum dolor sit amet,
                                    consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing
                                    elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit Lorem ipsum
                                    dolor sit amet, consectetur dipiscing elit eiusmod
                                </Paragraph>
                            </div>
                            <div className="catering">
                                <Paragraph className="h2-catering">
                                    Catering
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
                                    <span className=""><del className="discount-price">25 EGP / Hour</del></span>
                                    <span>125.000 / Hour</span>
                                </div>
                            </div>
                            <div className="space-facilities mb-5">
                                <Paragraph className="h2-description">
                                    facilities
                                </Paragraph>
                                <div className="facilities-list">
                                    <ul>
                                        <li>
                                            <Media
                                                type="img" src={wifi}/>
                                            wifi
                                        </li>
                                        <li>
                                            <Media
                                                type="img" src={chair}/>
                                            Chairs
                                        </li>
                                        <li>
                                            <Media
                                                type="img" src={printer}/>
                                            Printer
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="space-capacity mb-5">
                                <Paragraph className="h2-description">
                                    capacity
                                </Paragraph>
                                <span>6 Persons</span>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default SpaceDetails;
