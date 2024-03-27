import React, { useContext, useState } from 'react';
import BookingDetailsHeader from "./BookDeatilsHeader/BookingDetailsHeader";
import SpaceDetails from "./SpaceDetails/SpaceDetails";
import { useParams } from 'react-router-dom';
import { getVenueById } from '../../../apis/Booking';
import { AuthContext } from '../../../apis/context/AuthTokenContext';
import { useQuery } from "@tanstack/react-query";

const BookingDetails = () => {

    const {id} = useParams();
    const { token } = useContext(AuthContext);
    const [services, setServices] = useState([]);

    const { isPending, error, data: venueDetails } = useQuery({
        queryKey: ["get-venue-details", id],
        queryFn: ({ signal }) => getVenueById(token, id, signal),
    });

    const getServices = (services) => {
        setServices(services);
    };

    return (
        <>
            <BookingDetailsHeader venueDetails={venueDetails} services={services} />
            <SpaceDetails venueDetails={venueDetails} getServices={getServices} />
        </>
    )
};

export default BookingDetails;
