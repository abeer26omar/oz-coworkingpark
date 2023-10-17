import React from 'react';
import community from "../../../../assets/images/bookings/bookingdetails.png";
import '../BookingDetails.css';
import BookingForm from "./BookingForm";
import Media from "../../../Media/Media";
import MainHeaderWrapper from '../../../UI/MainHeaderWrapper';
import Paragraph from '../../../UI/Paragraph';

const BookingDetailsHeader = () => {
    return (
        <>
            <MainHeaderWrapper image={community}>
                <div className="container">
                    <Paragraph className="text-one">Booking </Paragraph>
                    <Paragraph className="text-two">Meeting room 01 </Paragraph>
                </div>
                <BookingForm/>
            </MainHeaderWrapper>
        </>
    );
};

export default BookingDetailsHeader;
