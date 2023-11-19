import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import book1 from "../../../../assets/images/bookings/book2.png";
import MainHeaderWrapper from '../../../UI/MainHeaderWrapper';
import Paragraph from '../../../UI/Paragraph';
import Button from '../../../UI/Button';
import wifi from '../../../../assets/images/icons/wifi.png';
import chairs from '../../../../assets/images/icons/chair.png';
import printer from '../../../../assets/images/icons/print.png';
import ModalInvities from './ModalInvities';
import CancelBookingModalConfirm from './CancelBookingModalConfirm';
import ProfileActions from '../../ProfileContent/ProfileActions';
import {AuthContext} from '../../../../apis/context/AuthTokenContext';
import {getSingleItemById} from '../../../../apis/User';

const MyBookingDetails = () => {
    const {id} = useParams();
    const [show, setShow] = useState(false);
    const [showCancelModal, setShowCancelModal] = useState(false);
    const [booking, setBooking] = useState(false);
    const { token, userId } = useContext(AuthContext);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);
    const closeCancelModal = () => setShowCancelModal(false);

    useEffect(()=>{
        const source = axios.CancelToken.source();

        getSingleItemById(token, 'booking', id, source).then(res=>{
            setBooking(res);
        }).catch(err=>{});

        return ()=>source.cancel();
    },[token, id]);
    
    return (
        <>            
            <div className='position-relative'>
                <MainHeaderWrapper image={booking.venueData && booking.venueData?.gallery} special_flex={`justify-content-md-center`}>
                    <div className="container text-center">
                        <Paragraph className="text-one">booking details</Paragraph>
                        <Paragraph className="text-two">{booking.venueData && booking.venueData?.title}</Paragraph>
                        <Button 
                            tagType='link' 
                            className='btn_outline mt-4'
                            to={`/bookingDetails/Metting Rooms/1`}>Reschedule</Button>
                        <div className='mt-5'>
                            <Button tagType='link' className='btn_underline p-0' onClick={()=>{setShowCancelModal(true)}}>Cancel Booking</Button>
                        </div>
                    </div>
                </MainHeaderWrapper>
            </div>
            <section className="space-details">
                <div className="container-fluid">
                    <div className="row px-0">
                        <div className="col-lg-8 col-12 p-0 py-5 border-right">
                            <div className="space-description px-sm-5 px-3 mb-5">
                                <Paragraph className="h2-description color-grey">
                                    Booking Details
                                </Paragraph>
                            </div>
                            <div className="space-price px-sm-5 px-3 mb-5">
                                <Paragraph className="h2-description mb-5">
                                    Price
                                </Paragraph>
                                <div className="price-list">
                                    <span>{booking.venueData && booking.venueData?.price} EGP / Hour</span>
                                </div>
                            </div>
                            <hr className='my-5 p-0'/>
                            <div className="space-price px-sm-5 px-3 mb-5">
                                <Paragraph className="h2-description mb-5">
                                    Date & Time
                                </Paragraph>
                                <div className="price-list">
                                    <div className='pe-4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path d="M9.33594 5.33594V3.33594" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round"/>
                                            <path d="M22.6641 5.33594V3.33594" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round"/>
                                            <path d="M2.66406 12H29.3307" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round"/>
                                            <path d="M2.66406 16.0026C2.66406 10.9743 2.66406 8.46013 4.22616 6.89803C5.78826 5.33594 8.30241 5.33594 13.3307 5.33594H18.6641C23.6924 5.33594 26.2065 5.33594 27.7686 6.89803C29.3307 8.46013 29.3307 10.9743 29.3307 16.0026V18.6693C29.3307 23.6976 29.3307 26.2117 27.7686 27.7738C26.2065 29.3359 23.6924 29.3359 18.6641 29.3359H13.3307C8.30241 29.3359 5.78826 29.3359 4.22616 27.7738C2.66406 26.2117 2.66406 23.6976 2.66406 18.6693V16.0026Z" stroke="black" stroke-width="2"/>
                                            <path d="M23.9974 21.3308L21.3307 21.3308M21.3307 21.3308L18.6641 21.3308M21.3307 21.3308L21.3307 18.6641M21.3307 21.3308L21.3307 23.9974" stroke="black" stroke-width="2" stroke-linecap="round"/>
                                        </svg>
                                        {/* <span className='grey-span opacity-25 ps-3'>{setDate(booking.check_in_formmated)}</span> */}
                                    </div>
                                    <div className='ps-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <circle cx="16" cy="17.3281" r="12" stroke="black" stroke-width="2"/>
                                                <path d="M16 12V17.3333L19.3333 20.6666" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M4.66406 5.99739L9.99742 2.66406" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M27.3333 5.99739L22 2.66406" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            {/* <span className='grey-span opacity-25 ps-3'>{setTime(booking.check_in_formmated)}</span> */}
                                    </div>
                                </div>
                            </div>
                            <hr className='my-5 p-0'/>
                            <div className="space-capacity px-sm-5 px-3 mb-5">
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Paragraph className="h2-description mb-5">Invites</Paragraph>
                                    <Button tagType='link' className='p-0' onClick={handleOpen}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6196 12.3347C31.0659 11.8884 31.7895 11.8884 32.2359 12.3347L35.6644 15.7633C36.1107 16.2096 36.1107 16.9332 35.6644 17.3795L25.3787 27.6653C25.2039 27.8401 24.977 27.9535 24.7322 27.9885L20.7322 28.5599C20.3761 28.6108 20.0168 28.491 19.7625 28.2367C19.5081 27.9823 19.3884 27.623 19.4392 27.2669L20.0107 23.2669C20.0456 23.0221 20.1591 22.7953 20.3339 22.6204L30.6196 12.3347ZM22.2195 23.9673L21.9175 26.0817L24.0319 25.7796L33.2401 16.5714L31.4277 14.7591L22.2195 23.9673Z" fill="#BDBDBD"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 17.7154C15.0532 17.7154 14.2857 18.4829 14.2857 19.4297V32.0011C14.2857 32.9479 15.0532 33.7154 16 33.7154H28.5714C29.5182 33.7154 30.2857 32.9479 30.2857 32.0011V23.4297H32.5714V32.0011C32.5714 34.2102 30.7806 36.0011 28.5714 36.0011H16C13.7909 36.0011 12 34.2102 12 32.0011V19.4297C12 17.2205 13.7909 15.4297 16 15.4297H24.5714V17.7154H16Z" fill="black"/>
                                        </svg>
                                    </Button>
                                </div>
                                <span className='grey-span'>3 people going</span>
                                <div className="facilities-list going_event">
                                    <ul className="list-options d-flex p-0 py-3 m-0">
                                        <li className="list-option-item"><img src={wifi} alt='wifi'/><span className='grey-span'>Wifi</span></li>
                                        <li className="list-option-item"><img src={chairs} alt='chair'/><span className='grey-span'>chairs</span></li>
                                        <li className="list-option-item"><img src={printer} alt='printer'/><span className='grey-span'>Printer</span></li>
                                    </ul>
                                    <Button 
                                        className='more_people'
                                        tagType='link' 
                                        onClick={handleOpen}>
                                            +4
                                    </Button>
                                </div>
                            </div>
                            <hr className='my-5 p-0'/>
                            <div className="space-facilities px-sm-5 px-3 mb-5">
                                <Paragraph className="h2-description mb-5">
                                    facilities
                                </Paragraph>
                                <div className="facilities-list">
                                    <ul className="list-options d-flex p-0 py-3 m-0">
                                        <li className="list-option-item"><img src={wifi} alt='wifi'/> Wifi</li>
                                        <li className="list-option-item"><img src={chairs} alt='chair'/> chairs</li>
                                        <li className="list-option-item"><img src={printer} alt='printer'/> Printer</li>
                                    </ul>
                                </div>
                            </div>
                            <hr className='my-5 p-0'/>
                            <div className="catering px-sm-5 px-3 pb-60">
                                <Paragraph className="h2-catering mb-5">
                                    Services
                                </Paragraph>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        <span className='service_catering'>Catering :</span><span className='opacity-50'>Breakfast a day per person</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-12 p-sm-5 p-3'>
                            <ProfileActions />
                        </div>
                    </div>
                </div>
            </section>
            <ModalInvities 
                show={show}
                onHide={handleClose}
            />
            <CancelBookingModalConfirm
                show={showCancelModal}
                onHide={closeCancelModal}
                booking_id={booking.id} 
            />
        </>
    )
};

export default MyBookingDetails;
