import React, { useState, useEffect, useContext} from 'react';
import './BookingSpace.css'
import Slider from "react-slick";
import LastBooking from "../LastBooking/LastBooking";
import BookingSpacesTypes from './BookingSpacesTypes';
import { getAmenitiesGroup, getVenues } from '../../../apis/Booking';
import { AuthContext } from '../../../apis/context/AuthTokenContext';

const BookingSpace = () => {
    const [bookingPlaces, setBookingPlaces] = useState([]);
    const [spaceTitle, setSpaceTitle] = useState('');
    const [spaceId, setSpaceId] = useState('');
    const [venues, setVenues] = useState([]);
    const { token, userId } = useContext(AuthContext);

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;

        getAmenitiesGroup(token, signal).then(res=>{
            setBookingPlaces(res);
            changeSpace(1,res[0].id,res[0].name);
        }).catch(err=>{});

        return ()=>controller.abort();
    },[]);

    const changeSpace = (branch_id, amenities_group_id, spaceTitle) => {
        getVenues(token, userId, branch_id, amenities_group_id).then(res=>{
            setVenues(res);
            setSpaceTitle(spaceTitle);
            setSpaceId(amenities_group_id);
        }).catch(err=>{})
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
                                {bookingPlaces && bookingPlaces.map((place, index)=>{
                                    return (
                                        <div className="col-lg-2" key={index}>
                                            <div className="d-flex justify-content-between align-items-center" 
                                                onClick={()=>{changeSpace(1,place.id,place.name)}}>
                                                    <span className="space-name">{place.name}</span>
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
                        <BookingSpacesTypes venues={venues} placeId={spaceId} spaceTitle={spaceTitle}/>
                    </div>
            </section>

            <LastBooking placeId={spaceId}/>
        </>
    );
};

export default React.memo(BookingSpace);
