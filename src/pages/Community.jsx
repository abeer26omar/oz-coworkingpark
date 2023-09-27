import React from "react";
import CommunityHeader from "../components/Community/CommunityHeader/CommunityHeader";
import CommunityNews from "../components/Community/CommunityNewsFeed/CommunityNews";
import CommunityEvents from "../components/Community/CommunityEvents/CommunityEvents";
import CommunityGallery from "../components/Community/CommunityGallery/CommunityGallery";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import MonoBlock from "../components/MonoBlocks/MonoBlock";

const Community = () => {
    return (
        <>
            <CommunityHeader/>
            <MonoBlock title="where like-minded people meet"/>
            <CommunityNews/>
            <CommunityEvents/>
            <CommunityGallery/>
            <MonoBlock className="bg-white  " title="JOIN OUR COMMUNITY" desc=" Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                                    Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                                    Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                                    Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                                    Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod"
                       link={[{className: "btn-bg-white", label: "Connect"}]} numberOfLinksToShow={1}
            />
            <NewsLetter/>
        </>
    );
};

export default Community;
