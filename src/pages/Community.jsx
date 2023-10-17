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
const Community = () => {
    const [data , setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        config('community').then(res =>{
            setData(res)
            setLoading(false)
        })
        .catch(err =>{
            setError(err)
            setLoading(false)
        })
    },[]);
    const getComponentValue = (param) => {
        const matchingItems = data.filter(ele => ele.key.match(param));
        return matchingItems;
    };
    return (
        <>
            <CommunityHeader configData={data}/>
            <MonoBlockCommunity />
            <CommunityNews configData={getComponentValue('newsfeed')}/>
            <CommunityEvents configData={getComponentValue('event')}/>
            <CommunityGallery configData={getComponentValue("gallery")}/>
            <JoinCommuinty  configData={getComponentValue("footer")}/>
   
        </>
    );
};

export default Community;
