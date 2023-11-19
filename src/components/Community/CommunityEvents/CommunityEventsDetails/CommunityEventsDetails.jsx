import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import aminites from "../../../../assets/images/aminites.png";
import vector from '../../../../assets/images/Vector.png';
import './CommunityEventsDetails.css';
import Slider from "react-slick";
import Media from "../../../Media/Media";
import Button from "../../../UI/Button";
import { AuthContext } from '../../../../apis/context/AuthTokenContext';
import { getSingleItemById } from '../../../../apis/User';
import { attendEvent, likeEvent } from '../../../../apis/Events';
import SweetAlert2 from 'react-sweetalert2';

const CommunityEventsDetails = () => {

    const {id} = useParams();
    const [eventDetails, setEventDetails] = useState([]);
    const [like, setLike] = useState(eventDetails?.is_favorite);
    const [swalProps, setSwalProps] = useState({});
    const { token, userId } = useContext(AuthContext);

    useEffect(()=>{
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchEventData = async () => {
            try{
                const res = await getSingleItemById(token, 'event', id, source);
                if (isMounted) {
                    setEventDetails(res);
                }
            }catch (error){}
        }
        fetchEventData();

        return ()=>{
            isMounted = false;
            source.cancel();
        };
    },[token, id]);
    
    const attend = async () => {
        try{
            const res = await attendEvent(token, userId, id);
            setSwalProps({
                show: true,
                icon: 'success',
                title: res.status,
                text: res.data.like_status,
                showConfirmButton: false,
                timer: 1500
            });
        }catch (error){
            setSwalProps({
                show: true,
                icon: 'error',
                title: error.response.data.status,
                text: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    const likeFavEvent = async () => {
        try{
            const res = await likeEvent(token, userId, id);
                if(res){
                    setLike(!like);
                    setSwalProps({
                        show: true,
                        icon: 'success',
                        title: res.status,
                        text: res.message,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
        }catch (error){
            setSwalProps({
                show: true,
                icon: 'error',
                title: error.response.data.status,
                text: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        cssEase: "linear",
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        lazyLoad: true
    }

    const settingsGallry = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        lazyLoad: true,
    }
    
    return (
        <>
            <div className="bg-body-tertiary navigator-feed">
                <div className='container-fluid'>
                    <div className='d-flex'>
                        <h1 className="title-name mb-0">
                            Events
                        </h1>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2"
                            height="127"
                            viewBox="0 0 2 127"
                            fill="none"
                        >
                            <path d="M1 0L1.00001 127" stroke="#BDBDBD" stroke-width="1.5"/>
                        </svg>
                    </div>
                </div>
            </div>

            <section className="community-events-details">
                <div className="container-fluid">
                    <div className="row border-of-section position-relative ">
                        <div className="col-md-6 col-lg-4 col-sm-4 col-xs-6 border-right  ">
                            <div className="box-content">
                                <h2 className="h2-text-box">{eventDetails && eventDetails.event_name}</h2>
                                <div className="event-type-details">
                                    <span className="status-event">Status: <span>{eventDetails && eventDetails.event_type?.name}</span></span>
                                </div>
                                <div
                                    className="d-flex  mb-5 amenities-box-details">
                                    <div className="amenities-box">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M9.33594 5.33594V3.33594" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round"/>
                                        <path d="M22.6641 5.33594V3.33594" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round"/>
                                        <path d="M2.66406 12H29.3307" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round"/>
                                        <path d="M2.66406 16.0026C2.66406 10.9743 2.66406 8.46013 4.22616 6.89803C5.78826 5.33594 8.30241 5.33594 13.3307 5.33594H18.6641C23.6924 5.33594 26.2065 5.33594 27.7686 6.89803C29.3307 8.46013 29.3307 10.9743 29.3307 16.0026V18.6693C29.3307 23.6976 29.3307 26.2117 27.7686 27.7738C26.2065 29.3359 23.6924 29.3359 18.6641 29.3359H13.3307C8.30241 29.3359 5.78826 29.3359 4.22616 27.7738C2.66406 26.2117 2.66406 23.6976 2.66406 18.6693V16.0026Z" stroke="black" stroke-width="2"/>
                                        <path d="M23.9974 21.3308L21.3307 21.3308M21.3307 21.3308L18.6641 21.3308M21.3307 21.3308L21.3307 18.6641M21.3307 21.3308L21.3307 23.9974" stroke="black" stroke-width="2" stroke-linecap="round"/>
                                        </svg>
                                        {eventDetails && eventDetails.dates?.map(date=>{
                                            return (
                                                <h5 className="amenities-text">{date.check_in_date}</h5>
                                            )
                                        })}
                                    </div>

                                    <div className="amenities-box">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <circle cx="16" cy="17.3281" r="12" stroke="black" stroke-width="2"/>
                                        <path d="M16 12V17.3333L19.3333 20.6666" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M4.66406 5.99739L9.99742 2.66406" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M27.3333 5.99739L22 2.66406" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        {eventDetails && eventDetails.dates?.map(date=>{
                                            return (
                                                <h5 className="amenities-text">{date.check_in_time}</h5>
                                            )
                                        })}
                                    </div>
                                    {eventDetails && eventDetails.host?.map(host=>{
                                        return (
                                            <div className="amenities-box">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <path d="M5.69531 24.4583C5.69531 24.4583 8.66734 20.6641 16.0006 20.6641C23.334 20.6641 26.3061 24.4583 26.3061 24.4583" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M15.9974 2.66406C8.6336 2.66406 2.66406 8.6336 2.66406 15.9974C2.66406 23.3611 8.6336 29.3307 15.9974 29.3307C23.3611 29.3307 29.3307 23.3611 29.3307 15.9974C29.3307 8.6336 23.3611 2.66406 15.9974 2.66406Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M16 16C18.2092 16 20 14.2092 20 12C20 9.79087 18.2092 8 16 8C13.7908 8 12 9.79087 12 12C12 14.2092 13.7908 16 16 16Z" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                <h5 className="amenities-text">{host.name}</h5>
                                            </div>
                                        )

                                    })}
                                    <Media type='img'
                                     src={vector}
                                     alt="vector"
                                     className='vector'/>

                                </div>
                                <Button href="#">
                                    Explore
                                </Button>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-8 col-sm-8 col-xs-6  m-auto">
                            <Slider {...settings}>
                                {eventDetails && eventDetails.gallery?.map((item, index)=>{
                                    return (
                                        <div className='img_block' key={index}>
                                            <Media
                                                type="img"
                                                className="image-box w-100 "
                                                src={item.image}
                                                alt={item.name}
                                            />
                                        </div>
                                    )
                                })}
                            </Slider>

                        </div>

                    </div>
                </div>
            </section>


            <section className="about-event-details px-60 py-5  border-bottom">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="event-type-details">
                                <span className="status-event">Host: 
                                    {eventDetails && eventDetails.host?.map(host=>{
                                        return (
                                            <span>{host.name}</span>
                                        )
                                    })}
                                </span>
                            </div>
                            <div className="event-type-details">
                                <span className="status-event ">About Event
                                    <p className="p-text">
                                        {eventDetails.description}
                                    </p>
                                </span>
                            </div>
                            <div className="event-type-details">
                                <span className="status-event">Price: <span>{eventDetails.default_price} EGP</span></span>
                            </div>

                            <div className="cards-event-buttons text-center">
                                <Button 
                                    tagType='link'
                                    className="btn button-outLine btn-bg-white attend-btn"
                                    onClick={attend}>Attend</Button>
                                <Button 
                                    tagType='link'
                                    className="p-0 mx-3"
                                    onClick={''}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                        <g filter="url(#filter0_b_3738_15824)">
                                            <rect x="0.5" y="0.5" width="47" height="47" stroke="black"/>
                                        </g>
                                        <path d="M27.7697 30.4059L20.6738 25.7227" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                                        <path d="M27.8907 17.1309L20.7949 21.8141" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                                        <path d="M20.6682 23.3419C20.6682 25.1833 19.1755 26.676 17.3341 26.676C15.4927 26.676 14 25.1833 14 23.3419C14 21.5005 15.4927 20.0078 17.3341 20.0078C19.1755 20.0078 20.6682 21.5005 20.6682 23.3419Z" stroke="black" stroke-width="1.5"/>
                                        <path d="M34.0061 32.6661C34.0061 34.5075 32.5134 36.0002 30.672 36.0002C28.8306 36.0002 27.3379 34.5075 27.3379 32.6661C27.3379 30.8248 28.8306 29.332 30.672 29.332C32.5134 29.332 34.0061 30.8248 34.0061 32.6661Z" stroke="black" stroke-width="1.5"/>
                                        <path d="M34.0061 15.3341C34.0061 17.1755 32.5134 18.6682 30.672 18.6682C28.8306 18.6682 27.3379 17.1755 27.3379 15.3341C27.3379 13.4927 28.8306 12 30.672 12C32.5134 12 34.0061 13.4927 34.0061 15.3341Z" stroke="black" stroke-width="1.5"/>
                                        <defs>
                                            <filter id="filter0_b_3738_15824" x="-6" y="-6" width="60" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3"/>
                                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_3738_15824"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_3738_15824" result="shape"/>
                                            </filter>
                                        </defs>
                                    </svg>
                                </Button>
                                <Button 
                                    tagType='link'
                                    className="p-0"
                                    onClick={likeFavEvent}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                        <g filter="url(#filter0_b_3789_18299)">
                                            <rect x="0.5" y="0.5" width="47" height="47" stroke="black"/>
                                        </g>
                                        <path d="M36.099 15.7153L36.0993 15.7159C37.4978 18.58 36.9847 21.8798 34.2459 25.6467L34.2446 25.6486C32.0756 28.6511 28.945 31.6687 24.3568 35.2318L24.3555 35.2328C24.3412 35.2439 24.3236 35.25 24.3054 35.25C24.2873 35.25 24.2696 35.2439 24.2553 35.2328L24.2542 35.2319C19.6602 31.6625 16.5351 28.6186 14.364 25.6454C11.6176 21.879 11.1049 18.5796 12.5033 15.7159L12.5035 15.7153C13.4542 13.7643 16.2788 12.0651 19.6788 13.0394C21.2994 13.5077 22.7133 14.5117 23.6897 15.8874L24.3013 16.7492L24.9129 15.8874C25.8894 14.5115 27.3036 13.5074 28.9245 13.0392L28.9264 13.0387C32.3135 12.0505 35.147 13.7615 36.099 15.7153Z" stroke={like ? 'red' : 'black'} stroke-width="1.5"/>
                                        <defs>
                                            <filter id="filter0_b_3789_18299" x="-6" y="-6" width="60" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3"/>
                                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_3789_18299"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_3789_18299" result="shape"/>
                                            </filter>
                                        </defs>
                                    </svg>
                                </Button>
                                
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="gallery-show border-of-section">
                <div className="container-fluid">
                    <div className="row  ">
                        <div className="col-md-12 col-lg-12 col-sm-12 col-xs-6  ">
                            <div className="box-content text-center">
                                <h2 className="h2-text-box">pervious gallery events</h2>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-12 col-sm-12 col-xs-6">
                            <Slider {...settingsGallry}>
                                <div>
                                    <Media
                                        type="img"
                                        className="image-box w-100"
                                        src={aminites}
                                        alt="Our OZ Vision"
                                    />
                                </div>
                                <div>
                                    <Media
                                        type="img"
                                        className="image-box w-100"
                                        src={aminites}
                                        alt="Our OZ Vision"
                                    />

                                </div>
                                <div>
                                    <Media
                                        type="img"
                                        className="image-box w-100"
                                        src={aminites}
                                        alt="Our OZ Vision"
                                    />

                                </div>
                                <div>
                                    <Media
                                        type="img"
                                        className="image-box w-100"
                                        src={aminites}
                                        alt="Our OZ Vision"
                                    />
                                </div>
                            </Slider>

                        </div>

                    </div>
                </div>
            </section>
            <SweetAlert2 {...swalProps} />

        </>
    );
};

export default CommunityEventsDetails;
