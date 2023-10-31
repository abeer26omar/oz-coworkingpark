import React from 'react';
import community from "../../../../assets/images/bookings/bookingdetails.png";
import '../BookingDetails.css';
import BookingForm from "./BookingForm";
import Media from "../../../Media/Media";
import MainHeaderWrapper from '../../../UI/MainHeaderWrapper';
import Paragraph from '../../../UI/Paragraph';

const BookingDetailsHeader = (props) => {
    return (
        <>
        {
                    <div className='position-relative'>
                        <MainHeaderWrapper image={community} special_flex={`justify-content-md-center justify-content-start`}>
                            <div className="container">
                                <Paragraph className="text-one">Booking </Paragraph>
                                <Paragraph className="text-two">{props.space_details.name}</Paragraph>
                            </div>
                            <div className='d-flex h-100'>
                            </div>
                        </MainHeaderWrapper>
                        <BookingForm space_details={props.space_details} space_redirect={props.space_redirect}/>
                    </div>
               
        }
        </>
    );
};

export default BookingDetailsHeader;
