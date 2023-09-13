import React from 'react';

import HomeHeader from "../components/Home/HomeHeader/HomeHeader";
import OurVision from "../components/Home/OurVision/OurVision";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Partners from "../components/Partners/Partners";
import MonoBlock from "../components/MonoBlocks/MonoBlock";

const Home = () => {


    return (
        <>
            <HomeHeader/>
            <MonoBlock title="hello"
                       desc=" Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit
                                    amet, consectetur
                                    dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit
                                    eiusmod Lorem ipsum dolor sit
                                    amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur
                                    dipiscing elit
                                    eiusmod&nbsp;&nbsp;
                                    Lorem ipsum dolor sit amet, consectetur"
                       link={["Booking", "Booking", "Booking"]}
                       numberOfLinksToShow={3}
                       className="bgBlack"
            />
            <OurVision/>
            <MonoBlock title="I'LL BE AT OZ"
                       desc="Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod"
                       link={["Become a Member"]}
                       numberOfLinksToShow={1}
            />
            <Partners/>
            <NewsLetter/>
        </>
    );
};

export default Home;
