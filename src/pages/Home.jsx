import React, { useContext, useEffect, useState } from 'react';
import MainHeaderWrapper from '../components/UI/MainHeaderWrapper';
import SectionHeader from '../components/UI/SectionHeader';
import NewsLetter from "../components/NewsLetter/NewsLetter";
import PublicEvent from "../components/PublicEvents/PublicEvent";
import Locations from "../components/Locations/Locations";
import LeftContent from "../components/Home/ContentComponent/LeftContent";
import MonoBlockTitle from '../components/MonoBlocks/MonoBlockTitle';
import MonoBlockMember from '../components/MonoBlocks/MonoBlockMember';
import RightContentFB from '../components/Home/ContentComponent/RightContentFB';
import RightContentNewFeed from '../components/Home/ContentComponent/RightContentNewFeed';
import { DataContext } from '../apis/context/SiteDataContext';
import HomeMembership from '../components/Home/HomeMembership';
import OurSpaces from '../components/Home/OurSpaces';
import OZAmenities from '../components/Home/OZAmenities';
import ExploreOZ from '../components/Home/ExploreOZ';
import ZeeStudio from '../components/Home/ZeeStudio';
import OZKnowledge from '../components/Home/OZKnowledge';

const Home = () => {
    
    const { data, getComponentValue, ResetPageName } = useContext(DataContext);

    const [video, setVideo] = useState('')

    useEffect(()=>{
        ResetPageName('home');

        const bookingVideo = () => {
          getComponentValue("header").map((configItem) => {
            if(configItem.key === 'home_page_header_video'){
                setVideo (configItem.value)
            }
        })}

        bookingVideo();
    },[data])
    
    return (
      <>
        <MainHeaderWrapper
          configData={getComponentValue("header")}
          video={video}
        >
          <SectionHeader
            configData={getComponentValue("header")}
            video={video}
          />
        </MainHeaderWrapper>
        <MonoBlockTitle configData={getComponentValue("mono_block")} />
        <LeftContent configData={getComponentValue("page_about")} />
        <RightContentNewFeed configData={getComponentValue("page_newsfeed")} />
        <HomeMembership configData={getComponentValue("page_membership")} />
        <OurSpaces configData={getComponentValue("page_space")} />
        <OZAmenities configData={getComponentValue("page_benefit")}/>
        <ExploreOZ configData={getComponentValue("explore_space")}/>
        <PublicEvent configData={getComponentValue("page_event")} />
        <ZeeStudio configData={getComponentValue("page_zee")} />
        <OZKnowledge configData={getComponentValue("page_courses")} />
        <RightContentFB configData={getComponentValue("page_ozy")} />
        <MonoBlockMember configData={getComponentValue("page_membership")} />
        <Locations configData={getComponentValue("page_location")} />
        <NewsLetter />
      </>
    );
};

export default React.memo(Home);
