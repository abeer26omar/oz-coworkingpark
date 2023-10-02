import React from 'react';
import HomeHeader from "../components/Home/HomeHeader/HomeHeader";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Partners from "../components/Partners/Partners";
import MonoBlock from "../components/MonoBlocks/MonoBlock";
import PublicEvent from "../components/PublicEvents/PublicEvent";
import Locations from "../components/Locations/Locations";
import LeftContent from "../components/Home/ContentComponent/LeftContent";
import RightContent from "../components/Home/ContentComponent/RightContent";
import { config } from '../apis/config';
import { useEffect ,useState } from 'react';

const Home = () => {
const [data , setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);


useEffect(()=>{
    config('home').then(res =>{
        setData(res)
        setLoading(false)
    })
    .catch(err =>{
        setError(err)
        setLoading(false)
    })
},[])
const getComponentValue = (param) => {
    const matchingItems = data.filter(ele => ele.key.match(param));
    return matchingItems;
};
    return (
        <>

            {/* <HomeHeader headerConfig={getComponentValue('header')}/> */}
            <MonoBlock 
                configData = {getComponentValue('mono_block')}
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
