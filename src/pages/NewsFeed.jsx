import React from "react";
import NewsFeedHeader from "../components/NewsFeed/NewsFeedHeader/NewsFeedHeader";
import NewsFeedBlogs from "../components/NewsFeed/NewsFeedBlogs/NewsFeedBlogs";

const NewsFeed = () => {
    return (
        <>
            <NewsFeedHeader/>
            <NewsFeedBlogs/>
        </>
    );
};

export default NewsFeed;
