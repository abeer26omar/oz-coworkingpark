import React from "react";
import "./CommunityNewsFeed.css";

const CommunityNewsList = ({ id, img }) => {
  return (
    <>
      <figure className="" key={id}>
        <img
          src={img}
          className="figure-img img-fluid image-box w-100"
          alt="news feed"
        />
      </figure>
    </>
  );
};

export default CommunityNewsList;
