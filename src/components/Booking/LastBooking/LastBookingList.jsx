import React from 'react';
import Card from "react-bootstrap/Card";
import bookImg from "../../../assets/images/bookings/book1.png";
import favs from "../../../assets/images/icons/heart.svg";

const LastBookingList = () => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <Card className="book-card">
                    <div className="position-relative">
                        <Card.Img variant="top" src={bookImg} className="rounded-0"
                                  title="desk room"/>
                        <img src={favs} alt="fav" className="fav-event"/>

                    </div>

                    <Card.Body>
                        <Card.Title>Meeting room 01</Card.Title>

                        <ul className="list-options ">

                            <li className="list-option-item">Wifi</li>
                            <li className="list-option-item">Coffee</li>
                            <li className="list-option-item">Printer</li>

                        </ul>
                        <Card.Text>Coworking is an arrangement in which workers of different companies
                            share an
                            office space, allowing cost savings and convenience through the use of
                            common
                            infrastructures, such as equipment, utilities, and receptionist and
                            custodial
                            services, and in some cases refreshments and parcel acceptance
                            services.}</Card.Text>
                        <div
                            className="d-flex justify-content-between align-items-center card-footer">
                            <span className="price-hour">125.000 / Hour</span>
                            <a href="#"
                               className="btn button-outLine btn-bg-white">Book Now</a>
                        </div>

                    </Card.Body>


                </Card>


            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <Card className="book-card">
                    <div className="position-relative">
                        <Card.Img variant="top" src={bookImg} className="rounded-0"
                                  title="desk room"/>
                        <img src={favs} alt="fav" className="fav-event"/>

                    </div>

                    <Card.Body>
                        <Card.Title>Meeting room 01</Card.Title>

                        <ul className="list-options ">

                            <li className="list-option-item">Wifi</li>
                            <li className="list-option-item">Coffee</li>
                            <li className="list-option-item">Printer</li>

                        </ul>
                        <Card.Text>Coworking is an arrangement in which workers of different companies
                            share an
                            office space, allowing cost savings and convenience through the use of
                            common
                            infrastructures, such as equipment, utilities, and receptionist and
                            custodial
                            services, and in some cases refreshments and parcel acceptance
                            services.}</Card.Text>
                        <div
                            className="d-flex justify-content-between align-items-center card-footer">
                            <span className="price-hour">125.000 / Hour</span>
                            <a href="#"
                               className="btn button-outLine btn-bg-white">Book Now</a>
                        </div>

                    </Card.Body>


                </Card>


            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <Card className="book-card">
                    <div className="position-relative">
                        <Card.Img variant="top" src={bookImg} className="rounded-0"
                                  title="desk room"/>
                        <img src={favs} alt="fav" className="fav-event"/>

                    </div>

                    <Card.Body>
                        <Card.Title>Meeting room 01</Card.Title>

                        <ul className="list-options ">

                            <li className="list-option-item">Wifi</li>
                            <li className="list-option-item">Coffee</li>
                            <li className="list-option-item">Printer</li>

                        </ul>
                        <Card.Text>Coworking is an arrangement in which workers of different companies
                            share an
                            office space, allowing cost savings and convenience through the use of
                            common
                            infrastructures, such as equipment, utilities, and receptionist and
                            custodial
                            services, and in some cases refreshments and parcel acceptance
                            services.}</Card.Text>
                        <div
                            className="d-flex justify-content-between align-items-center card-footer">
                            <span className="price-hour">125.000 / Hour</span>
                            <a href="#"
                               className="btn button-outLine btn-bg-white">Book Now</a>
                        </div>

                    </Card.Body>


                </Card>


            </div>
        </>
    );
};

export default LastBookingList;
