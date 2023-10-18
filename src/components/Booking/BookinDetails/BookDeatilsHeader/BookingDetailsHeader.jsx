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
            <MainHeaderWrapper image={community} special_flex={`justify-content-center`}>
                <div className="container">
                    <Paragraph className="text-one" >Booking </Paragraph>
                    <Paragraph className="text-two">Meeting room 01 </Paragraph>
                </div>
                <div className='d-flex h-100'>
                    <BookingForm />
                </div>
            </MainHeaderWrapper>
        </>
    );
};

export default BookingDetailsHeader;
