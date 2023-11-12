import React, { useEffect, useState } from 'react';
import BookingDetailsHeader from "./BookDeatilsHeader/BookingDetailsHeader";
import SpaceDetails from "./SpaceDetails/SpaceDetails";
import { useParams } from 'react-router-dom';
import img from '../../../assets/images/bookings/book1.png'
const BookingDetails = () => {

    const {id} = useParams();
    const [venueDetails, setVenueDetails] = useState({
        "id": 6,
        "title": "MEETING ROOM 1",
        "amenitie_id": 1,
        "extended_time": null,
        "buffering_time": 30,
        "allowed_booking_time": 0,
        "online_payment": 1,
        "online_booking": 1,
        "backup_room": 0,
        "backup_avalible_from": 0,
        "backup_avalible_to": 0,
        "description": "FGHDFHBCXB",
        "capacity": 1,
        "cancellation_policy": "FGHDFHBCXB",
        "cancellation_time": 1,
        "created": 1692281407,
        "discount_type": "percentage",
        "amenitie": {
            "id": 1,
            "branche_id": 1,
            "group_id": 1,
            "logo": "https://dashboard.ozcoworkingpark.com/storage/amenities/YHW47cVs2T0MXFUpxOhwpnBE7fuBAyJEjJ9Us9Ow.png",
            "wing": "1",
            "floor": "1",
            "code": "BE01",
            "zone": "1",
            "capacity": 10,
            "title": "Utilities",
            "description": "test",
            "integration_url": "",
            "active": 1,
            "created": 1691952755
        },
        "gallery": [
            {
                "name": "pexels-pixabay-159806",
                "image": "https://dashboard.ozcoworkingpark.com/storage/venues/6/q1uJfqUYNmv2gSsM7stjXFedvOIxFxfEaPWap4Ic.jpg"
            },
            {
                "name": "pexels-pixabay-159806",
                "image": img
            }
        ],
        "price": 100,
        "price_discounted": 0,
        "discount_roles": [
            {
                "id": 5,
                "name": "The Social",
                "price": "20",
                "discount": 0
            }
        ],
        "facilities": [
            {
                "id": 14,
                "name": "Screen",
                "count": "1",
                "logo": "https://dashboard.ozcoworkingpark.com/storage/upload/photos/2023/06/9xaYZhxXOMxQFy8fLrZD_04_df074d3c8e76ca923749b973aa8dd0ea_image.png"
            }
        ],
        "services": [
            {
                "id": 1,
                "name": "wifi",
                "logo": "https://dashboard.ozcoworkingpark.com/storage/services/5dWA9FYD5uWbUnWLQ8ARnW0L9qFkCIv4fE9pjRug.png",
                "price": 100
            },
            {
                "id": 2,
                "name": "Service 2",
                "logo": "https://dashboard.ozcoworkingpark.com/storage/services/5wb3F43GI1Vi7XutxM1UaLbtvTfAmjxfmLORgpVD.png",
                "price": 3
            },
            {
                "id": 3,
                "name": "Service 1",
                "logo": "https://dashboard.ozcoworkingpark.com/storage/services/MdFfxtCqF2EkdwzXWb5PiFMWbq2HRd4R2yxRAzQp.png",
                "price": 100
            }
        ],
        "booking_url": "https://api.ozcoworkingpark.com/booking?id=",
        "booking_code": "6WfaYz6P2RhV6WrfSUJF",
        "is_favorite": true
    });

    return (
        <>   
            <BookingDetailsHeader venueDetails={venueDetails} />
            <SpaceDetails venueDetails={venueDetails}/>
        </>
    )
};

export default BookingDetails;
