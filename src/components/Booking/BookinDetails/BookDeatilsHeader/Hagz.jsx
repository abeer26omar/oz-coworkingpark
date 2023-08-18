import React, {useState} from 'react';
import callenderbook from '../../../../assets/images/icons/calender-book.svg';
import alarmbook from '../../../../assets/images/icons/alarmbook.svg';
import people from '../../../../assets/images/icons/people.svg';
import "react-datepicker/dist/react-datepicker.css";

import './hagz.css'
import DatePicker from "react-datepicker";

const Hagz = () => {
    const [startDate, setStartDate] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [isOpen, setIsOpen] = useState(false);


    const handleDateChange = (date) => {
        setStartDate(date);
    };
    const [selectedStartTime, setSelectedStartTime] = useState(null);
    const [selectedEndTime, setSelectedEndTime] = useState(null);

    const handleButtonClick = (e) => {
        e.preventDefault();
        setIsOpen(true);
    };

    const handleStartTimeChange = (startTime) => {
        setSelectedStartTime(startTime);
        setSelectedEndTime(null);
    };

    const handleEndTimeChange = (endTime) => {
        setSelectedEndTime(endTime);

    };
    // const handleEndTimeChange = (endTime) => {
    //     setSelectedEndTime(endTime);
    // };


    return (
        <>
            <div className="featured__bookbottom">
                <div className="bookbottom">
                    <form className="bookbottom__form">
                        <input type="hidden" id="bookbottom-value-arrive" name="arrive" value="09/08/2023"/>
                        <input type="hidden" id="bookbottom-value-depart" name="depart" value="09/09/2023"/>
                        <input type="hidden" id="bookbottom-value-depart" name="depart" value="09/09/2023"/>
                        <input type="hidden" id="bookbottom-value-depart" name="depart" value="09/09/2023"/>
                        <input type="hidden" id="bookbottom-value-adult" name="adult" value="1"/>
                        <ul className="bookbottom__ul">
                            <li className="bookbottom__li bookbottom__li--icon bookbottom__li--icon-guests">
                                <div className="bookbottom__guesticon">
                                    <img
                                        src={people}
                                        alt="Icon Profile New"
                                        className=" ls-is-cached lazyloaded"/>

                                </div>
                            </li>
                            <li className="bookbottom__li bookbottom__li--select bookbottom__li--select-guests">

                                <div className="bookbottom__select" data-target="adult">
                                    <div className="bookbottom__select-text">Total Guests</div>
                                    <div className="bookbottom__select-options">
                                        <div className="bookbottom__select-option" data-value="1">1</div>
                                        <div className="bookbottom__select-option" data-value="2">2</div>
                                        <div className="bookbottom__select-option" data-value="3">3</div>
                                        <div className="bookbottom__select-option" data-value="4">4</div>
                                    </div>
                                </div>
                            </li>
                            <li className="bookbottom__li bookbottom__li--icon bookbottom__li--icon-datepicker">
                                <div className="bookbottom__calicon">
                                    <img
                                        src={callenderbook}
                                        alt="icon cal new"
                                        className=" ls-is-cached lazyloaded"/>

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
                            <li className="bookbottom__li bookbottom__li--icon">
                                <div className="bookbottom__roomicon">
                                    <img src={alarmbook} alt="icon bed new" className=" ls-is-cached lazyloaded"/>
                                </div>
                            </li>
                            <li className="bookbottom__li bookbottom__li--select">
                                <div className="bookbottom__select active" data-target="roomType">
                                    <div className="bookbottom__select-text ">
                                        <div className="position-relative">
                                            {/*<button onClick={handleButtonClick}>Open Date Pickers</button>*/}
                                            <div>
                                                {selectedEndTime ? (
                                                    <div>
                                                        <p>Start Time: {selectedStartTime.toLocaleTimeString()}</p>
                                                        <p>End Time: {selectedEndTime.toLocaleTimeString()}</p>
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
                                                            placeholderText="Edit Time"
                                                            className="place-text"
                                                            // Open the start time picker automatically
                                                        />
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <DatePicker
                                                            selected={selectedStartTime}
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
                                                            placeholderText="Check In"
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
                                                                placeholderText="Check Out"
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

                            <li className="bookbottom__li bookbottom__li--submit">
                                <div className="btnlinks">
                                    <input type="submit" value="Book Now" className="reservebutton"/>
                                </div>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>

        </>
    );
};

export default Hagz;
