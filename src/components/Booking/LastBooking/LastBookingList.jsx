import React from 'react';
import Card from "react-bootstrap/Card";
import bookImg from "../../../assets/images/bookings/book1.png";
import favs from "../../../assets/images/icons/heart.svg";
import Media from "../../Media/Media";
// import './LastBooking.css';

import Button from "../../UI/Button";

const LastBookingList = () => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <Card className="book-card">
                    <div className="position-relative">

                        <Media type="img" src={bookImg} class="card-img-top rounded-0" title="desk room"/>
                        <Button tagType='link' className="fav-event"><img src={favs} alt="fav" width='40px' height='40px' /></Button>


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
                            services.</Card.Text>
                        <div
                            className="d-flex justify-content-between align-items-center card-footer">
                            <span className="price-hour">125.000 / Hour</span>
                            <Button tagType='link' className='btn_outline_black'>Book Now</Button>
                        </div>

                    </Card.Body>


                </Card>


            </div>
        </>
    );
};

export default LastBookingList;
