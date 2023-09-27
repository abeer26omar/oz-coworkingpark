import React from 'react';
import './SpaceDetails.css';
import wifi from '../../../../assets/images/icons/wifi.png';
import chair from '../../../../assets/images/icons/chair.png';
import printer from '../../../../assets/images/icons/print.png';
import Media from "../../../Media/Media";

const SpaceDetails = () => {
    return (
        <>
            <section className="space-details">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 border-right">
                            <div className="space-description">
                                <h2 className="h2-description">
                                    Space Description
                                </h2>
                                <p className="p-description">
                                    Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem
                                    ipsum dolor sit amet, consectetur dipiscing elit eiusmod ipsum dolor sit amet,
                                    dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit
                                    eiusmod Lorem ipsum dolor sit a elit eiusmod Lorem ipsum dolor sit amet, consectetur
                                    di consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur
                                    dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectet ipsum dolor sit amet,
                                    consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing
                                    elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit Lorem ipsum
                                    dolor sit amet, consectetur dipiscing elit eiusmod
                                </p>
                            </div>
                            <div className="catering">
                                <h2 className="h2-catering">
                                    Catering
                                </h2>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Breakfast a day per person
                                    </label>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 m-sm-auto">
                            <div className="space-price">
                                <h2 className="h2-description">
                                    Price
                                </h2>
                                <div className="price-list">
                                    <span className=""><del className="discount-price">25 EGP / Hour</del></span>
                                    <span>125.000 / Hour</span>
                                </div>
                            </div>
                            <div className="space-facilities">
                                <h2 className="h2-description">
                                    facilities
                                </h2>
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
                            <div className="space-capacity">
                                <h2 className="h2-description">
                                    capacity
                                </h2>
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
