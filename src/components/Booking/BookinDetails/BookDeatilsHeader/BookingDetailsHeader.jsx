import React from 'react';
import community from "../../../../assets/images/bookings/bookingdetails.png";
import '../BookingDetails.css';
import BookingForm from "./BookingForm";
import Media from "../../../Media/Media";
import MainHeaderWrapper from '../../../UI/MainHeaderWrapper';
import Paragraph from '../../../UI/Paragraph';

const BookingDetailsHeader = ({venueDetails}) => {
    return (
        <>
            <div className='position-relative'>
                <MainHeaderWrapper image={venueDetails.gallery} special_flex={`justify-content-md-center justify-content-start`}>
                    <div className="container">
                        <Paragraph className="text-one">Booking</Paragraph>
                        <Paragraph className="text-two">{venueDetails.title}</Paragraph>
                    </div>
                    <div className='d-flex h-100'></div>
                </MainHeaderWrapper>
                <BookingForm />
            </div>
               
        </>
    );
};

export default BookingDetailsHeader;
