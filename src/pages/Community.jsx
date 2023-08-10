import React from "react";
import CommunityHeader from "../components/Community/CommunityHeader/CommunityHeader";
import CommunityNews from "../components/Community/CommunityNewsFeed/CommunityNews";
import CommunityEvents from "../components/Community/CommunityEvents/CommunityEvents";
import CommunityGallery from "../components/Community/CommunityGallery/CommunityGallery";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import JoinCommunityWhite from "../components/MonoBlocks/JoinCommunityWhite/JoinCommunityWhite";
import CommunityPepole from "../components/MonoBlocks/CommunityPepoleBlack/CommunityPepole";

const Community = () => {
    return (
        <>
            <CommunityHeader/>
            <CommunityPepole/>
            <CommunityNews/>
            <CommunityEvents/>
            <CommunityGallery/>
            <JoinCommunityWhite/>
            <NewsLetter/>
        </>
    );
};

export default Community;
