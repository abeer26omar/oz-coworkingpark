import React, {useState, useEffect} from 'react';
import callenderbook from '../../../../assets/images/icons/calender-book.svg';
import alarmbook from '../../../../assets/images/icons/alarmbook.svg';
import people from '../../../../assets/images/icons/people.svg';
import "react-datepicker/dist/react-datepicker.css";
import RequestFormModal from '../../BookingSpace/RequestFormModal';
import './BookingForm.css'
import DatePicker from "react-datepicker";
import {NavLink, useNavigate} from "react-router-dom";
import Media from "../../../Media/Media";
import Button from '../../../UI/Button';

const BookingForm = (props) => {
    const [startDate, setStartDate] = useState(null);
    const [selectedStartTime, setSelectedStartTime] = useState(null);
    const [selectedEndTime, setSelectedEndTime] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [bookingDetails, setBookingDetails] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();


    useEffect(()=>{
        if(props.space_redirect === '/bookingDetails'){
            setBookingDetails(true)
        }
    },[])

    const handleDateChange = (date) => {
        setStartDate(date);
    };


    const handleStartTimeChange = (startTime) => {
        setSelectedStartTime(startTime);
        setSelectedEndTime(null);
    };

    const handleEndTimeChange = (endTime) => {
        setSelectedEndTime(endTime);

    };
    // END Time Picker
    const [counter, setCounter] = useState(0);
    const [initialCount, setInitialCount] = useState(0);
    const handleInitialCountChange = (event) => {
        event.preventDefault();

        setInitialCount(event.target.value);
    };

    const openSelectGuest = (event) => {
        event.preventDefault();
        setIsOpen(!isOpen);

    }

    const closeSelectGuest = (event) => {
        event.preventDefault();
        setIsOpen(!isOpen);
    }
    //
    // let body = document.querySelector("body");
    //
    // body.addEventListener("click", closeSelectGuest);
    const increment = (event) => {
        event.preventDefault();
        if(counter < 6){
            setCounter(counter + 1)
        }
    }

    // const decrement = (event) => {
    //     event.preventDefault();
    //     if (setCounter < 0) {
    //         setCounter((counter) => counter - 1);
    //     }
    //     // setCounter(counter - 1)
    // }

    const decrement = (event) => {
        event.preventDefault();
        if (counter > 0) {
            setCounter((prevCount) => prevCount - 1);
        }
    };
    const handleReset = (event) => {
        event.preventDefault();
        setCounter(initialCount);
    };

const saveBookingData = (e)=>{
    e.preventDefault();
    if(bookingDetails){
        navigate('/bookingDetails/bookNow')
        const bookingData = {
            date: startDate,
            time: {
                start: selectedStartTime,
                end: selectedEndTime
            },
            numberOfPeople: counter,
            spaceDetails: props.space_details
        }
        window.sessionStorage.setItem("BookingDetails", JSON.stringify(bookingData));
    } else{
        handleShow()
    }
}
    return (
        <>
            <div className="featured__bookbottom align-self-end col-12" style={{
                position: 'absolute',
                bottom: '0',
                zIndex: '99'
            }}>
                <div className="bookbottom">
                    <form className="bookbottom__form">
                        <input type="hidden" id="bookbottom-value-arrive" name="arrive" value="09/08/2023"/>
                        <input type="hidden" id="bookbottom-value-depart" name="depart" value="09/09/2023"/>
                        <input type="hidden" id="bookbottom-value-depart" name="depart" value="09/09/2023"/>
                        <input type="hidden" id="bookbottom-value-depart" name="depart" value="09/09/2023"/>
                        <input type="hidden" id="bookbottom-value-adult" name="adult" value="1"/>
                        <ul className="bookbottom__ul">

                            { bookingDetails && 
                                <>
                                <li className="bookbottom__li bookbottom__li--icon bookbottom__li--icon-guests">
                                <div className="bookbottom__guesticon">
                                    <Media
                                        type="img"
                                        src={people}
                                        alt="Icon Profile New"
                                        className=" ls-is-cached"/>

                                </div>
                            </li>
                            <li className="bookbottom__li bookbottom__li--select bookbottom__li--select-guests">
                                <div className="bookbottom__select position-relative">
                                    {/*<div className="bookbottom__select-text">Total Guests</div>*/}
                                    <button className="button-select-guest" onClick={openSelectGuest} style={{
                                        cursor: 'pointer'
                                    }}>
                                        {counter !== null && counter != 0 ? `${counter} persons` : "Number of People"}
                                    </button>

                                    {isOpen && (
                                        <div className='counter-container'>
                                            <span onClick={closeSelectGuest}>Number of People ✖</span>
                                            <button className="decrement-btn" onClick={decrement}>-
                                            </button>
                                            <p className="counter-number">{counter}</p>
                                            <button onClick={increment}>+
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </li>
                                </>
                            
                           }

                            <li className="bookbottom__li bookbottom__li--icon bookbottom__li--icon-datepicker">
                                <div className="bookbottom__calicon">
                                    <Media
                                        type="img"
                                        src={callenderbook}
                                        alt="icon cal new"
                                        className=" ls-is-cached"/>

                                </div>
                            </li>
                            <li className="bookbottom__li bookbottom__li--datepicker select-date-costume">
                                <DatePicker
                                    className="bookbottom__datetitle text-center"
                                    selected={startDate}
                                    placeholderText="Select Date"
                                    onChange={handleDateChange}
                                    fixedHeight
                                />

                            </li>
                            {bookingDetails && 
                                <>
                            <li className="bookbottom__li bookbottom__li--icon">
                                <div className="bookbottom__roomicon">
                                    <Media
                                        type="img" src={alarmbook} alt="icon bed new"
                                        className=" ls-is-cached lazyloaded"/>
                                </div>
                            </li>
                            <li className="bookbottom__li bookbottom__li--select">
                                <div className="bookbottom__select active" data-target="roomType">
                                    <div className="bookbottom__select-text ">
                                        <div className="position-relative">

                                            {/*<button onClick={handleButtonClick}>Open Date Pickers</button>*/}
                                            <div className="time-container">
                                                {selectedEndTime ? (
                                                        <div className="d-flex justify-content-evenly align-items-center">
                                                            <p className='mb-0'>
                                                                <DatePicker
                                                                    // selected={selectedStartTime}
                                                                    onChange={handleStartTimeChange}
                                                                    showTimeSelect
                                                                    showTimeSelectOnly
                                                                    timeIntervals={15}
                                                                    timeCaption="Start Time"
                                                                    dateFormat="h:mm aa"
                                                                    selectsStart
                                                                    startDate={selectedStartTime}
                                                                    endDate={selectedEndTime}
                                                                    fixedHeight
                                                                    placeholderText={selectedStartTime.toLocaleTimeString()}
                                                                    className="place-text"
                                                                    // Open the start time picker automatically
                                                                >
                                                                </DatePicker>
                                                            </p>
                                                            <p className="mb-0 mx-2">-</p>
                                                            <p className="place-text mb-0">{selectedEndTime.toLocaleTimeString()}</p>
                                                        </div>


                                                ) : (
                                                    <div>
                                                        <DatePicker
                                                            selected={selectedStartTime}
                                                            onChange={handleStartTimeChange}

                                                            showTimeSelect
                                                            showTimeSelectOnly
                                                            timeIntervals={5}
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
                                                                timeIntervals={15}
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
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </li>
                            </>
                           }

                            <li className="bookbottom__li bookbottom__li--submit">
                                <div className="btnlinks">
                                    <Button 
                                        className="reservebutton" 
                                        tagType='link'
                                        onClick={saveBookingData}>Book Now</Button>
                                    {/*<input type="submit" value="" className="reservebutton"/>*/}
                                </div>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <RequestFormModal 
                show={show}
                handleClose={handleClose}/>
        </>
    );
};

export default BookingForm;
