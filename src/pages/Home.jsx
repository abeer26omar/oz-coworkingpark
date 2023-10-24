import React from 'react';
import MainHeaderWrapper from '../components/UI/MainHeaderWrapper';
import SectionHeader from '../components/UI/SectionHeader';
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Partners from "../components/Partners/Partners";
import PublicEvent from "../components/PublicEvents/PublicEvent";
import Locations from "../components/Locations/Locations";
import LeftContent from "../components/Home/ContentComponent/LeftContent";
import MonoBlockTitle from '../components/MonoBlocks/MonoBlockTitle';
import MonoBlockMember from '../components/MonoBlocks/MonoBlockMember';
import RightContentFB from '../components/Home/ContentComponent/RightContentFB';
import RightContentNewFeed from '../components/Home/ContentComponent/RightContentNewFeed';
import { useData } from '../apis/auth_api/Createdata';
import headVideo from '../assets/images/videos/header.mp4';
import HomeMembership from '../components/Home/HomeMembership';
import OurSpaces from '../components/Home/OurSpaces';
import OZAmenities from '../components/Home/OZAmenities';
import ExploreOZ from '../components/Home/ExploreOZ';
import ZeeStudio from '../components/Home/ZeeStudio';
import OZKnowledge from '../components/Home/OZKnowledge';
const Home = () => {
    const DataLocation = useData();
    const getComponentValue = DataLocation.getComponentValue
    const page_home = DataLocation.config('home')

    return (
        <>
            <MainHeaderWrapper configData={getComponentValue('header')} video={headVideo}>
                <SectionHeader configData={getComponentValue('header')} video={headVideo} />
            </MainHeaderWrapper>
            <MonoBlockTitle configData = {getComponentValue("mono_block")}/>
            <LeftContent configData = {getComponentValue("page_about")} />
            <RightContentNewFeed configData = {getComponentValue("page_newsfeed")} />
            <HomeMembership />
            <OurSpaces />
            <OZAmenities />
            <ExploreOZ />
            <PublicEvent configData={getComponentValue("page_event")}/>
            <ZeeStudio configData={getComponentValue('')}/>
            <OZKnowledge  configData={getComponentValue("")} />
            <RightContentFB configData={getComponentValue("page_fb")} />
            <MonoBlockMember configData={getComponentValue("page_membership")}/>
            <Partners/>
            <Locations configData={getComponentValue('page_location')}/>
            <NewsLetter/>
        </>
    );
};

export default React.memo(Home);
