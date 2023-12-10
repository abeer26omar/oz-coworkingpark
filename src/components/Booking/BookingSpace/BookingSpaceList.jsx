import React from 'react';
import Card from "react-bootstrap/Card";
import Media from "../../Media/Media";
import Button from "../../UI/Button";
import AddToFavButton from '../../UI/AddToFavButton';

const BookingSpaceList = ({id, img, description, price, name, amenities, is_favorite}) => {
    
    return (
        <>
            <Card className="book-card" key={id}>

                <div className="position-relative">
                    <Media type="img" src={img} class="card-img-top rounded-0" title="desk room" height='309px' />

                    <AddToFavButton is_favorite={is_favorite} id={id} add_fav={true} type='venue'/>


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
                        className="d-flex justify-content-between align-items-center card-footer p-0">
                        <span className="price-hour">{price} EGP / Hour</span>
                        <Button to={`/bookingDetails/${id}`} tagType='link' className='btn_outline_black'>Book Now</Button>
                    </div>

                </Card.Body>


            </Card>
        </>
    );
};

export default BookingSpaceList;
