import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import book1 from "../../../../assets/images/bookings/book2.png";
import MainHeaderWrapper from '../../../UI/MainHeaderWrapper';
import Paragraph from '../../../UI/Paragraph';
import Button from '../../../UI/Button';
import wifi from '../../../../assets/images/icons/wifi.png';
import chairs from '../../../../assets/images/icons/chair.png';
import printer from '../../../../assets/images/icons/print.png';
import ModalInvities from './ModalInvities';
import CancelBookingModalConfirm from './CancelBookingModalConfirm';

const MyBookingDetails = () => {
    const {id} = useParams();
    const [show, setShow] = useState(false);
    const [showCancelModal, setShowCancelModal] = useState(false);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);
    const closeCancelModal = () => setShowCancelModal(false);

    return (
        <>            
            <div className='position-relative'>
                <MainHeaderWrapper image={book1} special_flex={`justify-content-md-center`}>
                    <div className="container text-center">
                        <Paragraph className="text-one">booking details</Paragraph>
                        <Paragraph className="text-two">{'Meeting room 02'}</Paragraph>
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
                                    <span>125 / Hour</span>
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
                                        <span className='grey-span opacity-25 ps-3'>Jun 15 , 2023</span>
                                    </div>
                                    <div className='ps-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <circle cx="16" cy="17.3281" r="12" stroke="black" stroke-width="2"/>
                                                <path d="M16 12V17.3333L19.3333 20.6666" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M4.66406 5.99739L9.99742 2.66406" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M27.3333 5.99739L22 2.66406" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <span className='grey-span opacity-25 ps-3'>09:00 AM - 12:00 AM</span>
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
                            <div className="space-description mb-5">
                                <Paragraph className="h2-description color-grey">
                                    Action
                                </Paragraph>
                                <div className='d-flex justify-content-between align-items-center my-5'>
                                    <div className='d-flex align-items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                            <path d="M42.6535 24.8366L43.5774 25.2193L42.6535 24.8366ZM38.7568 28.7333L39.1395 29.6572H39.1395L38.7568 28.7333ZM39.7635 5.8618L39.241 6.71444L39.7635 5.8618ZM42.1405 8.23887L42.9932 7.71638V7.71638L42.1405 8.23887ZM17.8391 5.8618L17.3166 5.00916L17.8391 5.8618ZM15.462 8.23887L14.6094 7.71638H14.6094L15.462 8.23887ZM26.6412 5.80078H30.9613V3.80078H26.6412V5.80078ZM42.2016 17.0411V18.4811H44.2016V17.0411H42.2016ZM42.2016 18.4811C42.2016 20.1722 42.201 21.3905 42.1354 22.3527C42.0703 23.3058 41.9447 23.9345 41.7296 24.4539L43.5774 25.2193C43.9103 24.4155 44.0587 23.5438 44.1307 22.4888C44.2021 21.4427 44.2016 20.1449 44.2016 18.4811H42.2016ZM41.7296 24.4539C41.1003 25.9731 39.8933 27.1801 38.3741 27.8094L39.1395 29.6572C41.1487 28.8249 42.7451 27.2285 43.5774 25.2193L41.7296 24.4539ZM30.9613 5.80078C33.3376 5.80078 35.0496 5.80184 36.3861 5.92892C37.7078 6.05459 38.5588 6.2964 39.241 6.71444L40.286 5.00916C39.2367 4.36618 38.0435 4.07748 36.5755 3.9379C35.1223 3.79973 33.2989 3.80078 30.9613 3.80078V5.80078ZM44.2016 17.0411C44.2016 14.7035 44.2026 12.8801 44.0644 11.4269C43.9249 9.95882 43.6362 8.76562 42.9932 7.71638L41.2879 8.76137C41.7059 9.44355 41.9478 10.2945 42.0734 11.6162C42.2005 12.9528 42.2016 14.6648 42.2016 17.0411H44.2016ZM39.241 6.71444C40.0752 7.22568 40.7767 7.9271 41.2879 8.76137L42.9932 7.71638C42.317 6.613 41.3893 5.68531 40.286 5.00916L39.241 6.71444ZM26.6412 3.80078C24.3037 3.80078 22.4803 3.79973 21.0271 3.9379C19.559 4.07748 18.3658 4.36618 17.3166 5.00916L18.3616 6.71444C19.0437 6.2964 19.8947 6.05459 21.2164 5.92892C22.553 5.80184 24.265 5.80078 26.6412 5.80078V3.80078ZM17.3166 5.00916C16.2132 5.68531 15.2855 6.613 14.6094 7.71638L16.3146 8.76137C16.8259 7.9271 17.5273 7.22568 18.3616 6.71444L17.3166 5.00916ZM15.4635 12.5329C15.5604 10.6703 15.8042 9.59435 16.3146 8.76137L14.6094 7.71638C13.8294 8.98922 13.5675 10.4817 13.4662 12.429L15.4635 12.5329ZM35.5547 30.2524C37.0156 30.2038 38.1356 30.073 39.1395 29.6572L38.3741 27.8094C37.7178 28.0813 36.8987 28.2066 35.4883 28.2535L35.5547 30.2524Z" fill="#BDBDBD"/>
                                            <path d="M21.8302 42.2607L22.6908 42.77L21.8302 42.2607ZM22.3283 41.4191L21.4678 40.9097L22.3283 41.4191ZM17.9938 41.4191L18.8543 40.9097L18.8543 40.9097L17.9938 41.4191ZM18.4919 42.2607L17.6313 42.77L17.6313 42.77L18.4919 42.2607ZM5.3854 33.852L6.30928 33.4693H6.30928L5.3854 33.852ZM13.0364 38.5642L13.0684 37.5647L13.0364 38.5642ZM9.54187 38.0085L9.15918 38.9324H9.15918L9.54187 38.0085ZM34.9368 33.852L35.8606 34.2347L34.9368 33.852ZM27.2857 38.5642L27.2537 37.5647L27.2857 38.5642ZM30.7803 38.0085L31.163 38.9324L30.7803 38.0085ZM31.8541 13.6122L32.3766 12.7596V12.7596L31.8541 13.6122ZM34.3896 16.1478L35.2423 15.6253L35.2423 15.6253L34.3896 16.1478ZM8.46806 13.6122L7.94556 12.7596V12.7596L8.46806 13.6122ZM5.93253 16.1478L5.07989 15.6253H5.07989L5.93253 16.1478ZM16.1604 39.0199L15.6513 39.8806L16.1604 39.0199ZM22.6908 42.77L23.1889 41.9285L21.4678 40.9097L20.9697 41.7513L22.6908 42.77ZM17.1332 41.9285L17.6313 42.77L19.3524 41.7513L18.8543 40.9097L17.1332 41.9285ZM20.9697 41.7513C20.6147 42.351 19.7074 42.351 19.3524 41.7513L17.6313 42.77C18.7607 44.6781 21.5614 44.6781 22.6908 42.77L20.9697 41.7513ZM17.857 13.4805H22.4651V11.4805H17.857V13.4805ZM34.5214 25.5368V27.0728H36.5214V25.5368H34.5214ZM5.80078 27.0728V25.5368H3.80078V27.0728H5.80078ZM3.80078 27.0728C3.80078 28.8484 3.80024 30.2302 3.87618 31.3431C3.95273 32.4651 4.11033 33.3868 4.46152 34.2347L6.30928 33.4693C6.07585 32.9058 5.94114 32.2271 5.87154 31.207C5.80132 30.1779 5.80078 28.8758 5.80078 27.0728H3.80078ZM13.0684 37.5647C11.5368 37.5157 10.6433 37.3823 9.92455 37.0846L9.15918 38.9324C10.2281 39.3751 11.4253 39.5132 13.0044 39.5637L13.0684 37.5647ZM4.46152 34.2347C5.3425 36.3616 7.0323 38.0514 9.15918 38.9324L9.92455 37.0846C8.28773 36.4066 6.98727 35.1061 6.30928 33.4693L4.46152 34.2347ZM34.5214 27.0728C34.5214 28.8758 34.5208 30.1779 34.4506 31.207C34.381 32.2271 34.2463 32.9058 34.0129 33.4693L35.8606 34.2347C36.2118 33.3868 36.3694 32.4651 36.446 31.3431C36.5219 30.2302 36.5214 28.8484 36.5214 27.0728H34.5214ZM27.3177 39.5637C28.8968 39.5132 30.094 39.3751 31.163 38.9324L30.3976 37.0846C29.6789 37.3823 28.7854 37.5157 27.2537 37.5647L27.3177 39.5637ZM34.0129 33.4693C33.3349 35.1061 32.0344 36.4066 30.3976 37.0846L31.163 38.9324C33.2899 38.0514 34.9797 36.3616 35.8606 34.2347L34.0129 33.4693ZM22.4651 13.4805C24.9985 13.4805 26.8284 13.4815 28.2579 13.6174C29.6726 13.752 30.5917 14.0115 31.3316 14.4649L32.3766 12.7596C31.2697 12.0812 30.0083 11.7749 28.4472 11.6264C26.901 11.4794 24.9598 11.4805 22.4651 11.4805V13.4805ZM36.5214 25.5368C36.5214 23.0421 36.5224 21.1008 36.3754 19.5546C36.227 17.9936 35.9206 16.7322 35.2423 15.6253L33.537 16.6703C33.9904 17.4102 34.2499 18.3293 34.3844 19.744C34.5203 21.1735 34.5214 23.0034 34.5214 25.5368H36.5214ZM31.3316 14.4649C32.2305 15.0157 32.9862 15.7714 33.537 16.6703L35.2423 15.6253C34.5266 14.4573 33.5446 13.4753 32.3766 12.7596L31.3316 14.4649ZM17.857 11.4805C15.3624 11.4805 13.4211 11.4794 11.8749 11.6264C10.3139 11.7749 9.05252 12.0812 7.94556 12.7596L8.99056 14.4649C9.73045 14.0115 10.6496 13.752 12.0642 13.6174C13.4938 13.4815 15.3236 13.4805 17.857 13.4805V11.4805ZM5.80078 25.5368C5.80078 23.0034 5.80184 21.1735 5.93776 19.744C6.07227 18.3293 6.33176 17.4102 6.78517 16.6703L5.07989 15.6253C4.40155 16.7322 4.09517 17.9936 3.94674 19.5546C3.79973 21.1008 3.80078 23.0421 3.80078 25.5368H5.80078ZM7.94556 12.7596C6.7776 13.4753 5.79561 14.4573 5.07989 15.6253L6.78517 16.6703C7.33599 15.7714 8.09171 15.0157 8.99056 14.4649L7.94556 12.7596ZM18.8543 40.9097C18.4646 40.2513 18.1383 39.698 17.8253 39.2671C17.5004 38.8198 17.1468 38.4415 16.6696 38.1592L15.6513 39.8806C15.8099 39.9744 15.9739 40.1213 16.2071 40.4424C16.4522 40.7799 16.7246 41.2381 17.1332 41.9285L18.8543 40.9097ZM13.0044 39.5637C13.8518 39.5908 14.4215 39.6099 14.861 39.6635C15.2846 39.7152 15.4989 39.7904 15.6513 39.8806L16.6696 38.1592C16.1862 37.8732 15.6678 37.7471 15.1031 37.6782C14.5542 37.6113 13.8798 37.5906 13.0684 37.5647L13.0044 39.5637ZM23.1889 41.9285C23.5975 41.2381 23.8699 40.7799 24.115 40.4424C24.3482 40.1213 24.5122 39.9744 24.6708 39.8806L23.6525 38.1592C23.1753 38.4415 22.8217 38.8198 22.4968 39.2671C22.1838 39.698 21.8575 40.2513 21.4678 40.9097L23.1889 41.9285ZM27.2537 37.5647C26.4423 37.5906 25.7679 37.6113 25.219 37.6782C24.6543 37.7471 24.1359 37.8732 23.6525 38.1592L24.6708 39.8806C24.8232 39.7904 25.0375 39.7152 25.4612 39.6635C25.9006 39.6099 26.4703 39.5908 27.3177 39.5637L27.2537 37.5647Z" fill="black"/>
                                            <path opacity="0.5" d="M13.459 25.9219H13.4763M20.1613 25.9219H20.1786M26.8642 25.9219H26.8814" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <Paragraph className='ms-3 service_catering mb-0'>Contact Admin</Paragraph>
                                    </div>
                                    <Button className='p-0' tagType='link'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.374916 0.368713C0.595783 0.132613 0.895177 -3.91295e-08 1.20734 -5.27744e-08C1.51949 -6.64192e-08 1.81889 0.132613 2.03976 0.368713L8.32217 7.09278C8.54276 7.32918 8.66667 7.64962 8.66667 7.98372C8.66667 8.31782 8.54276 8.63827 8.32217 8.87466L2.03976 15.5987C1.93192 15.7226 1.80187 15.8219 1.65737 15.8909C1.51288 15.9598 1.3569 15.9968 1.19873 15.9998C1.04057 16.0028 0.883463 15.9717 0.736787 15.9082C0.590111 15.8448 0.456872 15.7505 0.345016 15.6307C0.233159 15.511 0.144977 15.3684 0.0857327 15.2114C0.0264879 15.0544 -0.00260735 14.8863 0.000183264 14.717C0.00297388 14.5477 0.0375931 14.3808 0.101975 14.2261C0.166357 14.0715 0.259184 13.9323 0.374917 13.8169L5.82491 7.98372L0.374916 2.15059C0.154324 1.9142 0.0304197 1.59376 0.0304197 1.25965C0.0304196 0.92555 0.154324 0.605106 0.374916 0.368713Z" fill="#BDBDBD"/>
                                        </svg>
                                    </Button>
                                </div>
                                <div className='d-flex justify-content-between align-items-center my-5'>
                                    <div className='d-flex align-items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                        <ellipse cx="22.5632" cy="12.4812" rx="7.68038" ry="7.68038" stroke="black" stroke-width="2"/>
                                        <path d="M28.3203 26.5499C26.5414 26.1449 24.597 25.9219 22.56 25.9219C14.0765 25.9219 7.19922 29.7903 7.19922 34.5623C7.19922 39.3343 7.19922 43.2027 22.56 43.2027C33.4804 43.2027 36.6372 41.2475 37.5497 38.4025" stroke="#BDBDBD" stroke-width="2"/>
                                        <path d="M28.6479 37.1112C30.0378 38.5011 31.9579 39.3608 34.0788 39.3608C38.3206 39.3608 41.7592 35.9221 41.7592 31.6804C41.7592 29.5595 40.8995 27.6393 39.5096 26.2495M28.6479 37.1112C27.2581 35.7213 26.3984 33.8012 26.3984 31.6804C26.3984 27.4386 29.8371 24 34.0788 24C36.1997 24 38.1197 24.8596 39.5096 26.2495M28.6479 37.1112L39.5096 26.2495" stroke="black" stroke-width="2" stroke-linejoin="round"/>
                                        </svg>
                                        <Paragraph className='ms-3 service_catering mb-0'>Issue reporting</Paragraph>
                                    </div>
                                    <Button className='p-0' tagType='link'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.374916 0.368713C0.595783 0.132613 0.895177 -3.91295e-08 1.20734 -5.27744e-08C1.51949 -6.64192e-08 1.81889 0.132613 2.03976 0.368713L8.32217 7.09278C8.54276 7.32918 8.66667 7.64962 8.66667 7.98372C8.66667 8.31782 8.54276 8.63827 8.32217 8.87466L2.03976 15.5987C1.93192 15.7226 1.80187 15.8219 1.65737 15.8909C1.51288 15.9598 1.3569 15.9968 1.19873 15.9998C1.04057 16.0028 0.883463 15.9717 0.736787 15.9082C0.590111 15.8448 0.456872 15.7505 0.345016 15.6307C0.233159 15.511 0.144977 15.3684 0.0857327 15.2114C0.0264879 15.0544 -0.00260735 14.8863 0.000183264 14.717C0.00297388 14.5477 0.0375931 14.3808 0.101975 14.2261C0.166357 14.0715 0.259184 13.9323 0.374917 13.8169L5.82491 7.98372L0.374916 2.15059C0.154324 1.9142 0.0304197 1.59376 0.0304197 1.25965C0.0304196 0.92555 0.154324 0.605106 0.374916 0.368713Z" fill="#BDBDBD"/>
                                        </svg>
                                    </Button>
                                </div>
                                <div className='d-flex justify-content-between align-items-center my-5'>
                                    <div className='d-flex align-items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                        <path d="M32.8202 39.2741C33.909 38.3063 35.5498 38.3063 36.6387 39.2741C37.3785 39.9317 38.5479 39.4065 38.5479 38.4167V9.58327C38.5479 8.59347 37.3785 8.06831 36.6387 8.72589C35.5498 9.69375 33.909 9.69375 32.8202 8.72589C31.7313 7.75804 30.0905 7.75804 29.0017 8.72589C27.9129 9.69375 26.272 9.69375 25.1832 8.72589C24.0944 7.75804 22.4536 7.75804 21.3647 8.72589C20.2759 9.69375 18.6351 9.69375 17.5462 8.72589C16.4574 7.75804 14.8166 7.75804 13.7277 8.72589C12.6389 9.69375 10.9981 9.69375 9.90925 8.72589C9.16946 8.06831 8 8.59347 8 9.58327V38.4167C8 39.4065 9.16946 39.9317 9.90925 39.2741C10.9981 38.3063 12.6389 38.3063 13.7277 39.2741C14.8166 40.242 16.4574 40.242 17.5462 39.2741C18.6351 38.3063 20.2759 38.3063 21.3647 39.2741C22.4536 40.242 24.0944 40.242 25.1832 39.2741C26.272 38.3063 27.9129 38.3063 29.0017 39.2741C30.0905 40.242 31.7313 40.242 32.8202 39.2741Z" stroke="black" stroke-width="2"/>
                                        <path d="M15.6367 29.9414H30.9107" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round"/>
                                        <path d="M15.6367 24H30.9107" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round"/>
                                        <path d="M15.6367 18.0586H30.9107" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round"/>
                                        </svg>
                                        <Paragraph className='ms-3 service_catering mb-0'>view invoice</Paragraph>
                                    </div>
                                    <Button className='p-0' tagType='link'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.374916 0.368713C0.595783 0.132613 0.895177 -3.91295e-08 1.20734 -5.27744e-08C1.51949 -6.64192e-08 1.81889 0.132613 2.03976 0.368713L8.32217 7.09278C8.54276 7.32918 8.66667 7.64962 8.66667 7.98372C8.66667 8.31782 8.54276 8.63827 8.32217 8.87466L2.03976 15.5987C1.93192 15.7226 1.80187 15.8219 1.65737 15.8909C1.51288 15.9598 1.3569 15.9968 1.19873 15.9998C1.04057 16.0028 0.883463 15.9717 0.736787 15.9082C0.590111 15.8448 0.456872 15.7505 0.345016 15.6307C0.233159 15.511 0.144977 15.3684 0.0857327 15.2114C0.0264879 15.0544 -0.00260735 14.8863 0.000183264 14.717C0.00297388 14.5477 0.0375931 14.3808 0.101975 14.2261C0.166357 14.0715 0.259184 13.9323 0.374917 13.8169L5.82491 7.98372L0.374916 2.15059C0.154324 1.9142 0.0304197 1.59376 0.0304197 1.25965C0.0304196 0.92555 0.154324 0.605106 0.374916 0.368713Z" fill="#BDBDBD"/>
                                        </svg>
                                    </Button>
                                </div>
                            </div>
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
            />
        </>
    )
};

export default MyBookingDetails;
