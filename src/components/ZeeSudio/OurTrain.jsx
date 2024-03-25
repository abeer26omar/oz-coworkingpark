import React from "react";
import Paragraph from "../UI/Paragraph";
import { Link } from "react-router-dom";
import CardsGym from "./CardsGym";
import { Skeleton } from "antd";

const OurTrain = ({data, isPending}) => {

  return (
    <>
      <div className="container-fluid px-70 py-5">
        <Paragraph className="card-title">Description Membership</Paragraph>
        {isPending ? (
          <Skeleton
            active
            className="py-3"
            title={false}
            paragraph={{ row: 2 }}
          />
        ) : (
          <>
            <Paragraph className="description_black pt-3">
              {data?.studio_slider[0]?.description}
            </Paragraph>
          </>
        )}
      </div>
      <div className="container-fluid ">
        <div class="row border-of-section">
          <div class="col-lg-12">
            <div class="head-content-sec">
              <Paragraph className="head_feature">Upcoming Classes</Paragraph>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5 px-70">
        <div className="col-12 d-flex justify-content-between">
          <Paragraph className="card-title">OUR TRAINING</Paragraph>

          <Link className="btn_default btn_outline_black " to="/ourgymclasses">
            More Class
          </Link>
        </div>
        <CardsGym />
      </div>
    </>
  );
};

export default OurTrain;
