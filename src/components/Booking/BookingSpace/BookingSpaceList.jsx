import React from 'react';
import Card from "react-bootstrap/Card";
import favs from "../../../assets/images/icons/heart.svg";
import Media from "../../Media/Media";
import Buttons from "../../Buttons/Buttons";

const BookingSpaceList = ({id, img, text, price, title, options}) => {
    return (
        <>
            <Card className="book-card" key={id}>

                <div className="position-relative">
                    <Media type="img" src={img} class="card-img-top rounded-0" title="desk room"/>

                    <img src={favs} alt="fav" className="fav-event"/>


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
                        <Buttons href="/bookingDetails">Book Now</Buttons>
                    </div>

                </Card.Body>


            </Card>
        </>
    );
};

export default BookingSpaceList;
