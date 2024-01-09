import React from "react";
import Paragraph from "../UI/Paragraph";
import { Link } from "react-router-dom";
import CardsGym from "./CardsGym";

const OurTrain = () => {
  return (
    <>
      <div className="container-fluid px-70 py-5">
        <Paragraph className="card-title">Description Membership</Paragraph>
        <Paragraph className="description_black pt-3">
          Lorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet,
          consectetuerLorem ipsum dolor sit amet,consectetuerLorem ipsum dolor
          sit Lorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit
          amet, Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
          Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem
          ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum
          dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor
          sit amet, consectetur dipiscing eliteiusmod{" "}
        </Paragraph>
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
          <Link className="btn_default btn_outline_black " to="/More">
            Explore Studio
          </Link>
        </div>
        <CardsGym />
      </div>
    </>
  );
};

export default OurTrain;
