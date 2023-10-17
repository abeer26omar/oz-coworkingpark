import React from "react";
import CommunityHeader from "../components/Community/CommunityHeader/CommunityHeader";
import CommunityNews from "../components/Community/CommunityNewsFeed/CommunityNews";
import CommunityEvents from "../components/Community/CommunityEvents/CommunityEvents";
import CommunityGallery from "../components/Community/CommunityGallery/CommunityGallery";
import NewsLetter from "../components/NewsLetter/NewsLetter";
// import MonoBlock
import MonoBlock from "../components/MonoBlocks/MonoBlock";
import { config } from '../apis/config';
import { useEffect ,useState } from 'react';
import MonoBlockCommunity from "../components/Community/CommunityNewsFeed/MonoBlockCommunity";
import JoinCommuinty from "../components/Community/JoinCommuinty/JoinCommuinty";
import { useData } from "../apis/auth_api/Createdata";
const Community = () => {
     const DataLocation = useData();
     const page_home = DataLocation.config('community')
    const getComponentValue = DataLocation.getComponentValue;
    const [data , setData] = useState([page_home]);

    useEffect(()=>{
        page_home.then(res =>{
            setData(res)
        })
        .catch(err =>{
         
        })
    },[]);
  
    return (
        <>
            <CommunityHeader configData= {data}/>
            <MonoBlockCommunity />
            <CommunityNews configData={getComponentValue('newsfeed')}/>
            <CommunityEvents configData={getComponentValue('event')}/>
            <CommunityGallery configData={getComponentValue("gallery")}/>
            <JoinCommuinty  configData={getComponentValue("footer")}/>
   
        </>
    );
};

export default Community;
