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
            <PublicEvent configData={getComponentValue("page_event")}/>
            <Locations configData={getComponentValue('page_location')}/>
            <RightContentFB configData={getComponentValue("page_fb")} />
            <MonoBlockMember configData={getComponentValue("page_membership")}/>
            <Partners/>
            <NewsLetter/>
        </>
    );
};

export default React.memo(Home);
