import React from 'react';

import HomeHeader from "../components/Home/HomeHeader/HomeHeader";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Partners from "../components/Partners/Partners";
import MonoBlock from "../components/MonoBlocks/MonoBlock";
import PublicEvent from "../components/PublicEvents/PublicEvent";
import Locations from "../components/Locations/Locations";
import LeftContent from "../components/Home/ContentComponent/LeftContent";
import RightContent from "../components/Home/ContentComponent/RightContent";

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
                       link={[
                           {className: "btn button-outLine", label: "Booking"},
                           {className: "btn button-outLine", label: "Booking"},
                           {className: "btn button-outLine", label: "Booking"},
                       ]}
                       numberOfLinksToShow={3}
                       className="bgBlack"
            />
            <LeftContent head="Our Vision" title="About OZ"
                         desc="Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing eliteiusmod"
                         link="Our Vision"/>
            <RightContent head="News feed" title="achievements for OZ"
                          desc="Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing eliteiusmod"
                          link="Explore"/>
            <PublicEvent/>
            <Locations/>
            <RightContent head="F&B" title="FRESH RECIPES FOR SUCCESS"
                          desc="Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing eliteiusmod"
                          link="F&B"/>
            {/*<OurVision/>*/}
            <MonoBlock title="I'LL BE AT OZ"
                       desc="Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod"
                // link={["Become a Member"]}
                       numberOfLinksToShow={1}
                       link={[{className: "btn button-outLine", label: "Become a Member"}]}


            />
            <Partners/>
            <NewsLetter/>
        </>
    );
};

export default Home;
