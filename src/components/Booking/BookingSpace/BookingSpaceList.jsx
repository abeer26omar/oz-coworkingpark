import React from 'react';
import Card from "react-bootstrap/Card";
import favs from "../../../assets/images/icons/heart.svg";
import Media from "../../Media/Media";
import Button from "../../UI/Button";

const BookingSpaceList = ({id, img, description, price, name, amenities, place_type}) => {
    return (
        <>
            <Card className="book-card" key={id}>

                <div className="position-relative">
                    <Media type="img" src={img} class="card-img-top rounded-0" title="desk room"/>

                    <Button tagType='link' className="fav-event"><img src={favs} alt="fav" width='40px' height='40px' /></Button>


                </div>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>

                    <ul className="list-options ">
                        {amenities.slice(0, 3).map((single, index) => {
                            return (
                                <li className="list-option-item" key={index}>{single.name}</li>
                            )
                        })}
                    </ul>
                    <Card.Text>{description}</Card.Text>
                    <div
                        className="d-flex justify-content-between align-items-center card-footer">
                        <span className="price-hour">{price} / Hour</span>
                        <Button to={`/bookingDetails/${place_type}/${id}`} tagType='link' className='btn_outline_black'>Book Now</Button>
                    </div>

                </Card.Body>


            </Card>
        </>
    );
};

export default BookingSpaceList;
