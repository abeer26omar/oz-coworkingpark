import React, { useContext, useEffect } from 'react';
import BookingHeader from "../components/Booking/BookingHeader/BookingHeader";
import BookingSpace from "../components/Booking/BookingSpace/BookingSpace";
import { DataContext } from '../apis/context/SiteDataContext';

const Booking = () => {

    const { config, data } = useContext(DataContext);

    useEffect(()=>{
        config('booking');
    },[]);

    return (
        <>
            <BookingHeader configData={data}/>
            <BookingSpace/>
        </>
    );
};

export default React.memo(Booking);
