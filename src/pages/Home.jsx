import React from 'react';

import HomeHeader from "../components/Home/HomeHeader/HomeHeader";
import MonoBlockOne from "../components/Home/HomeMonoBlock/MonoBlockOne";
import MonoBlock2 from "../components/Home/HomeMonoBlock/MonoBlock2";
import OurVision from "../components/Home/OurVision/OurVision";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Partners from "../components/Partners/Partners";

const Home = () => {
    return (
        <>
            <HomeHeader/>
            <MonoBlockOne/>
            <OurVision/>
            <MonoBlock2/>
            <Partners/>
            <NewsLetter/>
        </>
    );
};

export default Home;
