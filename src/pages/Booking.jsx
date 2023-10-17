import React from 'react';
import BookingHeader from "../components/Booking/BookingHeader/BookingHeader";
import BookingSpace from "../components/Booking/BookingSpace/BookingSpace";
import { config } from '../apis/config';
import { useEffect, useState } from 'react';
const Booking = () => {
    const [data , setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        config('booking').then(res =>{
            setData(res)
            setLoading(false)
        })
        .catch(err =>{
            setError(err)
            setLoading(false)
        })
    },[]);
    return (
        <>
            <BookingHeader configData={data}/>
            <BookingSpace/>
        </>
    );
};

export default React.memo(Booking);
