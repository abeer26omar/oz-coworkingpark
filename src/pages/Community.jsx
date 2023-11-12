import React, { useContext, useEffect } from "react";
import CommunityHeader from "../components/Community/CommunityHeader/CommunityHeader";
import CommunityNews from "../components/Community/CommunityNewsFeed/CommunityNews";
import CommunityEvents from "../components/Community/CommunityEvents/CommunityEvents";
import CommunityGallery from "../components/Community/CommunityGallery/CommunityGallery";
import MonoBlockCommunity from "../components/Community/CommunityNewsFeed/MonoBlockCommunity";
import JoinCommuinty from "../components/Community/JoinCommuinty/JoinCommuinty";
import { DataContext } from "../apis/context/SiteDataContext";

const Community = () => {
    
    const {config, getComponentValue} = useContext(DataContext);

    useEffect(()=>{
        config('community')
    },[]);

    return (
        <>
            <CommunityHeader configData={getComponentValue('header')} />
            <MonoBlockCommunity />
            <CommunityNews configData={getComponentValue('newsfeed')}/>
            <CommunityEvents configData={getComponentValue('event')}/>
            <CommunityGallery configData={getComponentValue("gallery")}/>
            <JoinCommuinty  configData={getComponentValue("footer")}/>
   
        </>
    );
};

export default Community;
