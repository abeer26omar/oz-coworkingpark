import React, { useContext, useEffect, useState } from 'react';
import BookingDetailsHeader from "./BookDeatilsHeader/BookingDetailsHeader";
import axios from 'axios';
import SpaceDetails from "./SpaceDetails/SpaceDetails";
import { useParams } from 'react-router-dom';
import { getVenueById } from '../../../apis/Booking';
import { AuthContext } from '../../../apis/context/AuthTokenContext';

const BookingDetails = () => {

    const {id} = useParams();
    const { token } = useContext(AuthContext);
    const [venueDetails, setVenueDetails] = useState({});

    useEffect(()=>{
        const source = axios.CancelToken.source();

        getVenueById(token, id, source).then(res=>{
            setVenueDetails(res);
        }).catch(err=>{console.log(err);});
        
        return ()=>source.cancel(); 
    },[id, token]);

    return (
        <>
            <BookingDetailsHeader venueDetails={venueDetails} />
            <SpaceDetails venueDetails={venueDetails}/>
        </>
    )
};

export default BookingDetails;
