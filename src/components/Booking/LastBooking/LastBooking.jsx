import React from 'react';
import './LastBooking.css';
import LastBookingList from "./LastBookingList";

const LastBooking = () => {
    return (
        <>
            <section className="last-booking">
                <div className="container-fluid">
                    <div className="booking-section">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="h2-text-box">last booking</h2>
                            </div>
                            <LastBookingList/>
                        </div>
                    </div>

                </div>
            </section>

        </>
    );
};

export default LastBooking;
