import React, { useContext, useEffect } from "react";
import CommunityHeader from "../components/Community/CommunityHeader/CommunityHeader";
import CommunityNews from "../components/Community/CommunityNewsFeed/CommunityNews";
import CommunityEvents from "../components/Community/CommunityEvents/CommunityEvents";
import CommunityGallery from "../components/Community/CommunityGallery/CommunityGallery";
import MonoBlockCommunity from "../components/Community/CommunityNewsFeed/MonoBlockCommunity";
import JoinCommuinty from "../components/Community/JoinCommuinty/JoinCommuinty";
import { DataContext } from "../apis/context/SiteDataContext";

const Community = () => {
  // const { ResetPageName, getComponentValue } = useContext(DataContext);
  const { ResetPageName, isPending, data, error, getComponentValue } =
    useContext(DataContext);

  useEffect(() => {
    ResetPageName("community");
  }, []);

  return (
    <>
      <CommunityHeader
        configData={getComponentValue("header")}
        pending={isPending}
      />
      <MonoBlockCommunity />
      <CommunityNews
        configData={getComponentValue("newsfeed")}
        pending={isPending}
      />
      <CommunityEvents
        configData={getComponentValue("event")}
        pending={isPending}
      />
      <CommunityGallery
        configData={getComponentValue("gallery")}
        pending={isPending}
      />
      <JoinCommuinty
        configData={getComponentValue("footer")}
        pending={isPending}
      />
    </>
  );
};

export default Community;
