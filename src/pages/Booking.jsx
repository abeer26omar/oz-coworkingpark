import React from 'react';
import BookingHeader from "../components/Booking/BookingHeader/BookingHeader";
import BookingSpace from "../components/Booking/BookingSpace/BookingSpace";
import { config } from '../apis/config';
import { useEffect ,useState } from 'react';
const Booking = () => {
    const [data , setData] = useState([])
useEffect(()=>{
    setData(config('booking '))
},[])
    return (
        <>
            <BookingHeader/>
            <BookingSpace/>
        </>
    );
};

export default Booking;
