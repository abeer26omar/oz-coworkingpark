import React, { useState } from "react";
import Media from "../Media/Media";
import Button from "../UI/Button";
import Paragraph from "../UI/Paragraph";
// import { Skeleton } from "antd";
// import { useQuery } from "@tanstack/react-query";
import SkeletonCard  from "../UI/SkeletonCard"
const CardsClasses = ({ classesGym, getLimit , pending }) => {
  const [limit, setLimit] = useState(12);
  let content = "";
  if (classesGym?.length === 0) {
    content = (
      <Paragraph className="empty mb-0">there is not classes yet</Paragraph>
    );
  }
  if (classesGym) { 
    content = classesGym.map((card, index) => {
      return (
        <>
          <div
            className="col-xxl-4 col-xl-4 col-md-6 col-sm-12 my-2"
            key={index}
          >
            <div className="card my-2 h-100 text-start">
              <Media
                type="img"
                src={card.image}
                className="w-100"
                alt={card.title}
              />
              <div className="card-body">
                <Paragraph className="card-title">{card.title}</Paragraph>
                <Paragraph className="description_black py-2">
                  {card.descriptions.slice(0, 150)}
                </Paragraph>
                <div className="d-flex justify-content-between align-items-center flex-dir-responsive ">
                  <Button
                    tagType="link"
                    to={`/gymdetails/${card.id}`}
                    className="btn button-outLine btn-bg-white  m-auto-unset"
                  >
                    {"Explore More"}
                  </Button>
                  <Paragraph className="card-title mt-3 mt-xl-0">
                    {Math.floor(card.price)} Egp
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    });
  }

  const HandelShowMore = (e) => {
    e.stopPropagation();

    setLimit((prevLimit) => prevLimit + 3);
    getLimit(limit);
  
  };

  return (
    <>
      <div className="container-fluid  special_padding px-70 py-5">
        <div className="row py-5">
          <Paragraph className="fs-4">
            <span className="card-title mx-2">{classesGym?.length}</span>
            Results Founds
          </Paragraph>
          {pending &&
            [1, 2, 3, 4, 5].map((n, index) => {
              return (
                <div
                  className="px-sm-2 px-0 col-xxl-4 col-xl-4 col-md-6 col-sm-12"
                  key={index}
                >
                  <SkeletonCard />
                </div>
              );
            })}
          {content}
        </div>
        {/* {classesGym && visibleCards < classesGym.length && ( */}
        <div className="text-center">
          <Button
            tagType="button"
            onClick={HandelShowMore}
            className="btn button-outLine btn-bg-white m-auto-unset"
          >
            {"View More"}
          </Button>
        </div>
        {/* )} */}
      </div>
    </>
  );
};

export default CardsClasses;
