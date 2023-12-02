import React, { useState, useEffect, useContext, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import './BookingSpace.css'
import Slider from "react-slick";
import axios from 'axios';
import LastBooking from "../LastBooking/LastBooking";
import BookingSpacesTypes from './BookingSpacesTypes';
import { getAmenitiesGroup, getVenues } from '../../../apis/Booking';
import { AuthContext } from '../../../apis/context/AuthTokenContext';

const BookingSpace = () => {
    const [bookingPlaces, setBookingPlaces] = useState([]);
    const [spaceTitle, setSpaceTitle] = useState('');
    const [spaceId, setSpaceId] = useState('');
    const [venues, setVenues] = useState([]);
    const { token, userId, branchId } = useContext(AuthContext);
    const sliderRef = useRef(null);
    const [searchParams] = useSearchParams();
    const amenity = searchParams.get('amenity');
    const amenityid = searchParams.get('id');
    const [activeSlide, setActiveSlide] = useState(amenityid);

    useEffect(() => {

        if (sliderRef.current) {
            sliderRef.current.slickGoTo(activeSlide);
        }

    }, [activeSlide]);

    useEffect(()=>{
        const source = axios.CancelToken.source();

        getAmenitiesGroup(token, source).then(res=>{
            setBookingPlaces(res);
            if(amenity && amenityid){
                changeSpace(amenityid, amenity);
            }else{
                changeSpace(res[0].id,res[0].name);
            }
        }).catch(err=>{});

        return ()=>source.cancel();
    },[amenity, amenityid]);

    const changeSpace = (amenities_group_id, spaceTitle) => {
        getVenues(token, userId, branchId, amenities_group_id).then(res=>{
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
            ],
            beforeChange: (current, next) => {
                setActiveSlide(next);
            },
    };

    const handleSlideClick = (index) => {
        setActiveSlide(index);
    };

    return (
        <>
            <section className="booking-space">
                <div className="container-fluid">
                    <div className="row">
                    <Slider {...settings} ref={sliderRef}>
                        {bookingPlaces &&
                            bookingPlaces.map((place, index) => {
                            const isActive = activeSlide === index ? 'activePlan' : '';
                            return (
                            <div
                                className={`col-lg-2 ${isActive}`}
                                key={index}
                                onClick={() => {
                                changeSpace(place.id, place.name);
                                handleSlideClick(index);
                                }}
                            >
                                <div className={`d-flex justify-content-between align-items-center`}>
                                <span className={`space-name`}>{place.name}</span>
                                <svg width="2" height="40" viewBox="0 0 2 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 0L0.999998 40" stroke="#BDBDBD" />
                                </svg>
                                </div>
                            </div>
                            );
                        })}
                    </Slider>
                    </div>
                    <BookingSpacesTypes venues={venues} placeId={spaceId} spaceTitle={spaceTitle} />
                </div>
            </section>

            {token && <LastBooking placeId={spaceId}/>}
        </>
    );
};

export default React.memo(BookingSpace);
