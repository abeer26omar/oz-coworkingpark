import React, { useContext, useEffect, useState } from 'react';
import BookingDetailsHeader from "./BookDeatilsHeader/BookingDetailsHeader";
import SpaceDetails from "./SpaceDetails/SpaceDetails";
import { useParams } from 'react-router-dom';
import { getSingleItemById } from '../../../apis/Booking';
import { AuthContext } from '../../../apis/context/AuthTokenContext';

const BookingDetails = () => {

    const {id} = useParams();
    const { token } = useContext(AuthContext);
    const [venueDetails, setVenueDetails] = useState({});

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;

        getSingleItemById(token, 'booking', id, signal).then(res=>{
            setVenueDetails(res);
        }).catch(err=>{console.log(err);});
        
        return ()=>controller.abort();
    },[id, token]);

    return (
        <>   
            <BookingDetailsHeader venueDetails={venueDetails} />
            {/* <SpaceDetails venueDetails={venueDetails}/> */}
        </>
    )
};

export default BookingDetails;
