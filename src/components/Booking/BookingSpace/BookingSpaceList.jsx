import React from 'react';
import Card from "react-bootstrap/Card";
import favs from "../../../assets/images/icons/heart.svg";
import {NavLink} from "react-router-dom";

const BookingSpaceList = ({id, img, text, price, title, options}) => {
    return (
        <>
            <Card className="book-card" key={id}>

                <div className="position-relative">
                    <Card.Img variant="top" src={img} className="rounded-0"
                              title="desk room"/>
                    <img src={favs} alt={title} className="fav-event"/>

                </div>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>

                    <ul className="list-options ">
                        {options.map((single, index) => {
                            return (
                                <li className="list-option-item">{single.name}</li>
                            )
                        })}
                    </ul>
                    <Card.Text>{text}</Card.Text>
                    <div
                        className="d-flex justify-content-between align-items-center card-footer">
                        <span className="price-hour">{price} / Hour</span>
                        <NavLink to="/bookingDetails"
                                 className="btn button-outLine btn-bg-white">Book Now</NavLink>
                    </div>

                </Card.Body>


            </Card>
        </>
    );
};

export default BookingSpaceList;
