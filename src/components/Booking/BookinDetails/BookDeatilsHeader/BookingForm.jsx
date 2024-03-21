import React, {useState, useEffect, useContext} from 'react';
import "react-datepicker/dist/react-datepicker.css";
import './BookingForm.css'
import DatePicker from "react-datepicker";
import {useNavigate} from "react-router-dom";
import Button from '../../../UI/Button';
import RequestFormModal from '../../../Auth/LoginAlertModal';
import Toast from 'react-bootstrap/Toast';
import {checkAvailability} from '../../../../apis/Booking';
import { AuthContext } from '../../../../apis/context/AuthTokenContext';
import ShowAvaliablesModal from './ShowAvaliablesModal';
import moment from 'moment';
import { Modal } from 'antd';

const BookingForm = ({venueDetails, reschedule, services}) => {

    const [startDate, setStartDate] = useState(null);
    const [selectedStartTime, setSelectedStartTime] = useState(null);
    const [selectedEndTime, setSelectedEndTime] = useState(null);
    const [show, setShow] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [counter, setCounter] = useState(0);
    const [avaliableDate, setAvaliableDates] = useState([]);
    const [showAvailable, setShowAvailable] = useState(false);
    const navigate = useNavigate();
    const [userNewTimeInfo, setUserNewTimeInfo] = useState(null);
    const { userId, userProfileData, token } = useContext(AuthContext);
    const [amentiyGroupId, setAmenityGroupId] = useState('');
    const [discountAmentiyGroupId, setDiscountAmentiyGroupId] = useState('');

    const handleDateChange = (date) => {
        const timezoneOffset = date.getTimezoneOffset();
        const utcDate = new Date(date.getTime() - timezoneOffset * 60000);
        setStartDate(utcDate);
    };

    const handleStartTimeChange = (startTime) => {
        setSelectedStartTime(startTime);
        setSelectedEndTime(null);
    };

    const handleEndTimeChange = (endTime) => {
        setSelectedEndTime(endTime);
    };

    const handelHide = () => setShow(false);
    const handelAvailableHide = () => setShowAvailable(false);

    const saveBookingData = async (e)=>{
        e.preventDefault();
        try{
            if((startDate !== null) && (selectedStartTime !== null) && (selectedEndTime !== null)){
                if(token){
                    if(amentiyGroupId){
                        const hours = calcReservationHours(selectedStartTime, selectedEndTime);
                        checkForBackage(hours);
                    }else if(discountAmentiyGroupId){
                        const discount = userProfileData?.membership_discount_roles[discountAmentiyGroupId].discount;
                        const price = userProfileData?.membership_discount_roles[discountAmentiyGroupId].price;
                        const type = userProfileData?.membership_discount_roles[discountAmentiyGroupId].discount_type === 'percentage' ? '%' : '';

                        return Modal.info({
                            title: 'Membership Package',
                            content: `Enjoy ${discount} ${type} Off From Room Price`,
                            footer: true,
                            centered: true,
                            closable: true,
                            maskClosable: true
                        });
                    }
                }else{
                    setShow(true);
                }
                addUserDetails();
            }else{
                setShowToast(true);
            }
        }catch (error){

        }
    };

    const calcReservationHours = (start, end) => {
        const startTime = moment(start, 'h:mm A');
        const endTime = moment(end, 'h:mm A');
        
        const duration = moment.duration(endTime.diff(startTime));
        
        const hours = duration.hours();
        return hours;
    };

    const addUserDetails = () => {
        const bookingData  = {
            id: JSON.parse(localStorage.getItem('BookingOZDetailsId')),
            date: startDate,
            time: {
                start: selectedStartTime,
                end: selectedEndTime
            },
            numberOfPeople: counter,
            spaceDetails: venueDetails,
            services: services,
            price: calcPrice()
        };
        localStorage.setItem("BookingOZDetails", JSON.stringify(bookingData));
    };

    const calcPrice = () => {
        let Finalprice;
        if(amentiyGroupId || discountAmentiyGroupId){
            if(amentiyGroupId){
                Finalprice = 0;
            }
            if(discountAmentiyGroupId){
                Finalprice = userProfileData?.membership_discount_roles[discountAmentiyGroupId].price;
            }
        }
        else{
            Finalprice =  venueDetails?.price > venueDetails?.price_discounted ? venueDetails?.price_discounted : venueDetails?.price;
        }
        const service_price = services.reduce((sum, item) => sum + item.price, 0);
        const total_price = Finalprice + service_price;
        return JSON.stringify({total_price: total_price, service_price: service_price, booking_price: Finalprice});
    };

    const checkForBackage = (hours) => {
        const how_many_hours = userProfileData?.membership_packages[amentiyGroupId].how_many_hours;
        const max_hours = userProfileData?.membership_packages[amentiyGroupId].max_hours;
        const used_hours = userProfileData?.membership_packages[amentiyGroupId].used_hours;

        if(how_many_hours === used_hours){
            if(discountAmentiyGroupId){
                const discount = userProfileData?.membership_discount_roles[discountAmentiyGroupId].discount;
                const price = userProfileData?.membership_discount_roles[discountAmentiyGroupId].price;
                const type = userProfileData?.membership_discount_roles[discountAmentiyGroupId].discount_type === 'percentage' ? '%' : '';

                return Modal.info({
                    title: 'Membership Package',
                    content: `You Have Consumed Your Package Free Hours And Now Enjoy ${discount} ${type} Off From Room Price`,
                    centered: true,
                    onOk: checkAvailabileTimes,
                    okText: 'confirm'
                });
            }else{
                return Modal.warning({
                    title: 'Membership Package',
                    content: `You Have Consumed Your Package Free Hours`,
                    centered: true,
                    onOk: checkAvailabileTimes,
                    okText: 'confirm'
                });
            }
        }else{
            if(max_hours){
                if(hours > max_hours){
                    return Modal.warning({
                        title: 'Membership Package',
                        content: `You Have Only ${max_hours} Hours For Reservation In Your package`,
                        footer: false,
                        centered: true,
                        closable: true,
                        maskClosable: true
                        // stop booking 
                    });
                }else {
                    return Modal.info({
                        title: 'Membership Package',
                        content: `You Have ${max_hours} Hours free For Reservations Included In Your package`,
                        centered: true,
                        onOk: checkAvailabileTimes,
                        okText: 'confirm'
                    });
                }

            }else{
                if(hours > how_many_hours){
                    return Modal.info({
                        title: 'Membership Package',
                        content: `You Have Only ${how_many_hours} Hours For Reservation In Your package`,
                        footer: false,
                        centered: true,
                        closable: true,
                        maskClosable: true
                        // stop booking 
                    });
                }else {
                    return Modal.info({
                        title: 'Membership Package',
                        content: `You Have ${how_many_hours} Hours free For Reservations Included In Your package`,
                        centered: true,
                        onOk: checkAvailabileTimes,
                        okText: 'confirm'
                    });
                }
            }
        }
    };

    const checkAvailabileTimes = async () => {
        const dateObject = new Date(startDate);
        const formattedDate = dateObject.toISOString().substring(0, 10);
        const timeStart = new Date(selectedStartTime);
        const timeStartStamp = Math.floor(timeStart.getTime() / 1000);
        const timeEnd = new Date(selectedEndTime);
        const timeEndStamp = Math.floor(timeEnd.getTime() / 1000);
        try{
            const result = await checkAvailability(
                token, 
                userId, 
                venueDetails.id, 
                venueDetails.buffering_time, 
                formattedDate, 
                timeStartStamp, 
                timeEndStamp);
                if(result.conflict.length === 0){
                    if(reschedule){
                        navigate('/bookingDetails/bookNow?reschedule=true');
                    }else{
                        navigate('/bookingDetails/bookNow');
                    }
                }else{
                    setShowAvailable(true);
                    setAvaliableDates(result.available);
                }
        } catch (error){
            Modal.error({
                title: error.response.data.status,
                content: error.response.data.message,
                footer: false,
                centered: true,
                closable: true,
                maskClosable: true
            })
        }
    };

    const increment = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if(counter < venueDetails.capacity){
            setCounter(counter + 1)
        }else{
            setShowTooltip(!showTooltip);
        }
    };

    const decrement = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (counter > 1) {
            setCounter((prevCount) => prevCount - 1);
        }
    };

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("BookingOZDetails"));
        if(data){
            setStartDate(new Date(data.date));
            setSelectedStartTime(new Date(data.time.start));
            setSelectedEndTime(new Date(data.time.end));
            setCounter(data.numberOfPeople);
        }
    },[userNewTimeInfo]);

    useEffect(()=>{
        if(token){
            const groupIds = Object.keys(userProfileData?.membership_packages);
            const discountGroupIds = Object.keys(userProfileData?.membership_discount_roles);
            const groupId = venueDetails?.amenitie?.group_id.toString();
            if(groupIds.includes(groupId)) {
                setAmenityGroupId(groupId);
            }
            if(discountGroupIds.includes(groupId)){
                setDiscountAmentiyGroupId(groupId);
            }
        }
    },[venueDetails, userProfileData]);

    const updateTimeInfo = (data) => {
        localStorage.setItem("BookingOZDetails", JSON.stringify(data));
        setUserNewTimeInfo(data);
    };

    return (
        <>
            <div className="featured__bookbottom align-self-end col-12" style={{
                position: 'absolute',
                bottom: '0',
                zIndex: '99'
            }}>
                <div className="bookbottom">
                    <div className='container-fluid'>
                        <form className="bookbottom__form">
                            <ul className="row bookbottom__ul">
                                <li className="col-lg-1 col-12 bookbottom__li bookbottom__li--icon bookbottom__li--icon-guests">
                                    <div className="bookbottom__guesticon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none">
                                            <circle cx="44.1593" cy="32.421" r="8.42103" stroke="white" stroke-width="3.5"/>
                                            <path d="M56.791 38.7372C60.2791 38.7372 63.1068 36.3808 63.1068 33.4741C63.1068 30.5673 60.2791 28.2109 56.791 28.2109" stroke="#BDBDBD" stroke-width="3.5" stroke-linecap="round"/>
                                            <path d="M31.5273 38.7372C28.0392 38.7372 25.2116 36.3808 25.2116 33.4741C25.2116 30.5673 28.0392 28.2109 31.5273 28.2109" stroke="#BDBDBD" stroke-width="3.5" stroke-linecap="round"/>
                                            <ellipse cx="44.1589" cy="55.5773" rx="12.6316" ry="8.42103" stroke="white" stroke-width="3.5"/>
                                            <path d="M61 59.7919C64.6931 58.982 67.3158 56.931 67.3158 54.5288C67.3158 52.1265 64.6931 50.0755 61 49.2656" stroke="#BDBDBD" stroke-width="3.5" stroke-linecap="round"/>
                                            <path d="M27.3164 59.7919C23.6233 58.982 21.0006 56.931 21.0006 54.5288C21.0006 52.1265 23.6233 50.0755 27.3164 49.2656" stroke="#BDBDBD" stroke-width="3.5" stroke-linecap="round"/>
                                        </svg>
                                    </div>
                                </li>
                                <li className="col-lg-3 col-12 bookbottom__li bookbottom__li--select bookbottom__li--select-guests">
                                    <div className="bookbottom__select position-relative">
                                        <div class="btn-group">
                                            {reschedule ? (<p className="counter-number mb-0">{counter} persons</p>) :
                                            (<>
                                                <button class="btn button-select-guest dropdown-toggle dropup" 
                                                    type="button" id="dropdownMenuButton" 
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    {(counter !== null && counter !== 0) ? `${counter} persons` : "Number of People"}
                                                </button>
                                                
                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{
                                                    backgroundColor: 'transparent',
                                                    border: 'none'
                                                }}>
                                                    <div className='counter-container'>
                                                        <span>{`Max Room Capacity is ${venueDetails.capacity}`}</span>
                                                        <button className="decrement-btn" onClick={decrement}>-
                                                        </button>
                                                        <p className="counter-number">{counter}</p>
                                                        <button onClick={increment}>+
                                                        </button>
                                                    </div>
                                                </ul>
                                            </>)}
                                        </div>
                                    </div>
                                </li>

                                <li className="col-lg-1 col-12 bookbottom__li bookbottom__li--icon bookbottom__li--icon-datepicker">
                                    <div className="bookbottom__calicon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none">
                                        <path d="M24 43.4803C24 35.7427 24 31.8739 26.3434 29.4702C28.6869 27.0664 32.4585 27.0664 40.0019 27.0664H48.0029C55.5463 27.0664 59.318 27.0664 61.6614 29.4702C64.0048 31.8739 64.0048 35.7427 64.0048 43.4803V47.5838C64.0048 55.3214 64.0048 59.1902 61.6614 61.594C59.318 63.9978 55.5463 63.9978 48.0029 63.9978H40.0019C32.4585 63.9978 28.6869 63.9978 26.3434 61.594C24 59.1902 24 55.3214 24 47.5838V43.4803Z" stroke="white" stroke-width="2"/>
                                        <path opacity="0.5" d="M34.002 27.0776V24" stroke="white" stroke-width="2" stroke-linecap="round"/>
                                        <path opacity="0.5" d="M54.0078 27.0776V24" stroke="white" stroke-width="2" stroke-linecap="round"/>
                                        <path opacity="0.5" d="M25.002 37.3242H63.0065" stroke="white" stroke-width="2" stroke-linecap="round"/>
                                        <path d="M56.0044 53.747C56.0044 54.8801 55.1088 55.7987 54.0041 55.7987C52.8994 55.7987 52.0039 54.8801 52.0039 53.747C52.0039 52.6138 52.8994 51.6953 54.0041 51.6953C55.1088 51.6953 56.0044 52.6138 56.0044 53.747Z" fill="white"/>
                                        <path d="M56.0044 45.54C56.0044 46.6732 55.1088 47.5918 54.0041 47.5918C52.8994 47.5918 52.0039 46.6732 52.0039 45.54C52.0039 44.4069 52.8994 43.4883 54.0041 43.4883C55.1088 43.4883 56.0044 44.4069 56.0044 45.54Z" fill="white"/>
                                        <path d="M46.0024 53.747C46.0024 54.8801 45.1069 55.7987 44.0022 55.7987C42.8975 55.7987 42.002 54.8801 42.002 53.747C42.002 52.6138 42.8975 51.6953 44.0022 51.6953C45.1069 51.6953 46.0024 52.6138 46.0024 53.747Z" fill="white"/>
                                        <path d="M46.0024 45.54C46.0024 46.6732 45.1069 47.5918 44.0022 47.5918C42.8975 47.5918 42.002 46.6732 42.002 45.54C42.002 44.4069 42.8975 43.4883 44.0022 43.4883C45.1069 43.4883 46.0024 44.4069 46.0024 45.54Z" fill="white"/>
                                        <path d="M36.0044 53.747C36.0044 54.8801 35.1088 55.7987 34.0041 55.7987C32.8994 55.7987 32.0039 54.8801 32.0039 53.747C32.0039 52.6138 32.8994 51.6953 34.0041 51.6953C35.1088 51.6953 36.0044 52.6138 36.0044 53.747Z" fill="white"/>
                                        <path d="M36.0044 45.54C36.0044 46.6732 35.1088 47.5918 34.0041 47.5918C32.8994 47.5918 32.0039 46.6732 32.0039 45.54C32.0039 44.4069 32.8994 43.4883 34.0041 43.4883C35.1088 43.4883 36.0044 44.4069 36.0044 45.54Z" fill="white"/>
                                    </svg>

                                    </div>
                                </li>
                                <li className="col-lg-2 col-12 bookbottom__li bookbottom__li--datepicker select-date-costume">
                                    <DatePicker
                                        className="bookbottom__datetitle text-center"
                                        selected={startDate}
                                        placeholderText="Select Date"
                                        minDate={new Date()}
                                        onChange={handleDateChange}
                                        fixedHeight
                                    />

                                </li>
                            
                                <li className="col-lg-1 col-12 bookbottom__li bookbottom__li--icon">
                                    <div className="bookbottom__roomicon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none">
                                        <circle cx="44" cy="46" r="18" stroke="white" stroke-width="3.5"/>
                                        <path d="M44 38V46L49 51" stroke="#BDBDBD" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M27 29L35 24" stroke="#BDBDBD" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M61 29L53 24" stroke="#BDBDBD" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    </div>
                                </li>
                                <li className="col-lg-2 col-12 bookbottom__li bookbottom__li--select">
                                    <div className="bookbottom__select active" data-target="roomType">
                                        <div className="bookbottom__select-text ">
                                            <div className="position-relative">
                                                <div className="time-container d-flex px-xl-4 px-lg-2">
                                                    {selectedEndTime ? (
                                                            <div className="d-flex justify-content-evenly align-items-center">
                                                                    <DatePicker
                                                                        onChange={handleStartTimeChange}
                                                                        showTimeSelect
                                                                        showTimeSelectOnly
                                                                        timeIntervals={30}
                                                                        timeCaption="Start Time"
                                                                        dateFormat="h:mm aa"
                                                                        selectsStart
                                                                        startDate={selectedStartTime}
                                                                        endDate={selectedEndTime}
                                                                        placeholderText={selectedStartTime.toLocaleTimeString([],{ hour: 'numeric', minute: 'numeric' })}
                                                                        className="place-text"
                                                                    />
                                                                    
                                                                <p className="mb-0 mx-2">-</p>
                                                                <p className="place-text mb-0">{selectedEndTime.toLocaleTimeString([],{ hour: 'numeric', minute: 'numeric' })}</p>
                                                            </div>


                                                    ) : (
                                                        <>
                                                            <DatePicker
                                                                selected={selectedStartTime}
                                                                onChange={handleStartTimeChange}
                                                                showTimeSelect
                                                                showTimeSelectOnly
                                                                timeIntervals={30}
                                                                timeCaption="Check In"
                                                                dateFormat="h:mm aa"
                                                                selectsStart
                                                                startDate={selectedStartTime}
                                                                endDate={selectedEndTime}
                                                                fixedHeight
                                                                placeholderText="Select Time"
                                                                className="place-text"
                                                                // Open the start time picker automatically
                                                            />
                                                            {selectedStartTime && (
                                                                <DatePicker
                                                                    selected={selectedEndTime}
                                                                    onChange={handleEndTimeChange}
                                                                    showTimeSelect
                                                                    showTimeSelectOnly
                                                                    timeIntervals={30}
                                                                    timeCaption="End Time"
                                                                    dateFormat="h:mm aa"
                                                                    selectsEnd
                                                                    startDate={selectedStartTime}
                                                                    endDate={selectedEndTime}
                                                                    minTime={selectedStartTime}
                                                                    maxTime={new Date().setHours(23, 45)}
                                                                    disabled={!selectedStartTime}
                                                                    fixedHeight
                                                                    className="place-text"
                                                                    open={true} // Open the end time picker automatically
                                                                />
                                                            )}
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </li>

                                <li className="col-lg-2 col-12 bookbottom__li bookbottom__li--submit">
                                    <div className="btnlinks">
                                        <Button 
                                            className="reservebutton" 
                                            tagType='link'
                                            onClick={saveBookingData}>Book Now</Button>
                                    </div>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Toast 
                onClose={() => setShowToast(false)} 
                show={showToast} 
                delay={3000} 
                autohide 
                bg={'info'}
                position={'top-center'}
                style={{
                    position: 'absolute',
                    bottom: '15%',
                    zIndex: '9'
                }}>
                <Toast.Body style={{
                    color: '#fff',
                    textTransform: 'capitalize'
                }}>Please select Your booking details!</Toast.Body>
            </Toast>
            <RequestFormModal 
                show={show}
                handleClose={handelHide}
            />
            <ShowAvaliablesModal 
                show={showAvailable}
                onHide={handelAvailableHide}
                avaliableDate={avaliableDate}
                onConfirm={updateTimeInfo}
            />
        </>
    );
};

export default BookingForm;