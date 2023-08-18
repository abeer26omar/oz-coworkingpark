import React, {useState} from 'react';

import HomeHeader from "../components/Home/HomeHeader/HomeHeader";
import MonoBlockOne from "../components/Home/HomeMonoBlock/MonoBlockOne";
import MonoBlock2 from "../components/Home/HomeMonoBlock/MonoBlock2";
import OurVision from "../components/Home/OurVision/OurVision";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Partners from "../components/Partners/Partners";
import DatePicker from "react-datepicker";

const Home = () => {
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);

    // const handleTimeChange = (date) => {
    //     setStartTime(date);
    // };


    const handleStartTimeChange = (date) => {
        if (endTime && date > endTime) {
            // If the selected start time is after the current end time, reset end time
            setEndTime(null);
        }
        setStartTime(date);
    };

    const handleEndTimeChange = (date) => {
        if (startTime && date < startTime) {
            // If the selected end time is before the current start time, reset start time
            setStartTime(null);
        }
        setEndTime(date);
    };
    return (
        <>
            <HomeHeader/>
            <MonoBlockOne/>
            <OurVision/>
            <MonoBlock2/>
            <Partners/>
            <NewsLetter/>
            <DatePicker
                selected={startTime}
                onChange={handleStartTimeChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Start Time"
                dateFormat="h:mm aa"
                selectsStart
                startDate={startTime}
                endDate={endTime}
            />
            <DatePicker
                selected={endTime}
                onChange={handleEndTimeChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="End Time"
                dateFormat="h:mm aa"
                selectsEnd
                startDate={startTime}
                endDate={endTime}
                minTime={startTime}
                maxTime={new Date().setHours(23, 45)}
                disabled={!startTime}
            />
        </>
    );
};

export default Home;
