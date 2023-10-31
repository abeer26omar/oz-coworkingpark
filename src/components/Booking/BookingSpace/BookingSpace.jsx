import React, {useState} from 'react';
import './BookingSpace.css'
import Slider from "react-slick";
import {Places}  from '../../../Data/GroupingPlaces';
import LastBooking from "../LastBooking/LastBooking";
import BookingSpacesTypes from './BookingSpacesTypes';

const BookingSpace = () => {
        const [bookingPlaces, setBookingPlaces] = useState(Places);
        const [placeProperties, setplaceProperties] = useState(Places[0]);


        const changeSpace = (place) => {
            // e.preventDefault();
            setplaceProperties(place)
        };

        let settings = {
            dots: false,
            arrows: true,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            align: 'center',
            lazyLoad: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <>
                <section className="booking-space">
                    <div className="container-fluid">
                        <div className="row">
                            <Slider {...settings}>
                                {bookingPlaces.map((place, index)=>{
                                    return (
                                        <div className="col-lg-2" key={index}>
                                            <div className="d-flex justify-content-between align-items-center" onClick={()=>{changeSpace(place)}}>
                                                    <span className="space-name">{place.title}</span>
                                                    <svg width="2" height="40" viewBox="0 0 2 40" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 0L0.999998 40" stroke="#BDBDBD"/>
                                                    </svg>
                                            </div>
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>
                        <BookingSpacesTypes space={placeProperties}/>
                    </div>
                </section>

                <LastBooking/>


            </>
        );
    }
;

export default React.memo(BookingSpace);
