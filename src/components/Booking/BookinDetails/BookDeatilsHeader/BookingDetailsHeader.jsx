import React from 'react';
import community from "../../../../assets/images/bookings/bookingdetails.png";
import '../BookingDetails.css';
import BookingForm from "./BookingForm";


const BookingDetailsHeader = () => {
    return (
        <>
            <header>
                <div className="booking-details-header">
                    <div className="box ">

                        <div className="group-wrapper">
                            <div className="group">
                                <div className="overlap-group">
                                    <div className="rectangle-wrapper">
                                        <div className="rectangle"/>
                                    </div>
                                    <img className="img" alt="Group" src={community}/>
                                    <div className="">
                                        <span className="text-one">Booking </span>
                                    </div>
                                    <div className="">
                                        <span className="text-two">Meeting room 01 </span>
                                    </div>


                                    <div className="box-book">
                                        <BookingForm/>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </header>
        </>
    );
};

export default BookingDetailsHeader;
