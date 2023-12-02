import React, { useContext, useEffect } from 'react';
import BookingHeader from "../components/Booking/BookingHeader/BookingHeader";
import BookingSpace from "../components/Booking/BookingSpace/BookingSpace";
import { DataContext } from '../apis/context/SiteDataContext';

const Booking = () => {

    const { data, ResetPageName } = useContext(DataContext);

    useEffect(()=>{
        ResetPageName('booking');
        sessionStorage.removeItem("BookingOZDetails");
        sessionStorage.removeItem("BookingOZServices");
    },[]);

    return (
        <>
            <BookingHeader configData={data}/>
            <BookingSpace/>
        </>
    );
};

export default React.memo(Booking);
