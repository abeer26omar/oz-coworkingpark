import React from "react";
// import "./Content.css";
import Button from "../UI/Button";
import Media from "../Media/Media";
import Paragraph from "../UI/Paragraph";
import Modaion from '../../assets/images/modation.jpg';
// import vector from "../../../assets/images/vectorRight.svg";
const Madaion = (props) => {
  return (
    <>
      <section className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="head-content-sec">
                <Paragraph className="head_feature">{"Our Trainers"}</Paragraph>
              </div>
            </div>
          </div>
          <div className="row border-of-section position-relative ">
            <div className="col-lg-8 col-md-7 col-sm-12 col-xs-6 border-right img_block">
              <Media
                type="img"
                className="image-box w-100"
                src={Modaion}
                alt="Our OZ Vision"
              />
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12 col-xs-6 m-auto">
              <div className="box-content p-lg-4 p-3">
                <Paragraph className="paragraph_black">Madison</Paragraph>
                <Paragraph className="description_black">
                  Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                  Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                  Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                  Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                </Paragraph>

                <Button tagType="link" className="btn_outline_black">
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default React.memo(Madaion);